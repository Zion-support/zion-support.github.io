const fs = require("fs");
const path = require("path");

const token = process.env.GITHUB_TOKEN;
const repository = process.env.GITHUB_REPOSITORY;
const branch = process.env.QUEUE_GUARD_BRANCH || "main";
const currentRunId = Number(process.env.GITHUB_RUN_ID || 0);
const outputDir = path.join("automation", "reports");
const jsonPath = path.join(outputDir, "autonomous-writer-queue-guard-latest.json");
const mdPath = path.join(outputDir, "autonomous-writer-queue-guard-latest.md");

fs.mkdirSync(outputDir, { recursive: true });

const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "zion-autonomous-writer-queue-guard",
};
if (token) headers.Authorization = `Bearer ${token}`;

async function github(pathname) {
  const response = await fetch(`https://api.github.com${pathname}`, { headers });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API ${response.status} for ${pathname}: ${body.slice(0, 500)}`);
  }
  return response.json();
}

function encodeRepoPath(value) {
  return value.split("/").map(encodeURIComponent).join("/");
}

function fallbackWriterName(name = "") {
  return /(writer|content generation|content organization|publish|deploy|release|apply|autofix|auto-fix|sitemap writer|homepage writer)/i.test(name);
}

async function main() {
  const generatedAt = new Date().toISOString();
  const errors = [];

  if (!repository) {
    errors.push("GITHUB_REPOSITORY is not set; writer queue cannot be assessed.");
  }

  let activeRuns = [];
  if (repository) {
    for (const status of ["queued", "in_progress"]) {
      try {
        const payload = await github(
          `/repos/${repository}/actions/runs?branch=${encodeURIComponent(branch)}&status=${status}&per_page=100`
        );
        activeRuns.push(...(payload.workflow_runs || []));
      } catch (error) {
        errors.push(error.message);
      }
    }
  }

  const uniqueRuns = [...new Map(activeRuns.map((run) => [run.id, run])).values()]
    .filter((run) => Number(run.id) !== currentRunId);

  const workflowCache = new Map();

  async function workflowIsWriter(run) {
    const workflowPath = run.path || "";
    if (!workflowPath.startsWith(".github/workflows/")) {
      return {
        isWriter: fallbackWriterName(run.name),
        reason: fallbackWriterName(run.name) ? "name-fallback" : "no-workflow-path",
      };
    }

    if (!workflowCache.has(workflowPath)) {
      workflowCache.set(
        workflowPath,
        (async () => {
          try {
            const file = await github(
              `/repos/${repository}/contents/${encodeRepoPath(workflowPath)}?ref=${encodeURIComponent(branch)}`
            );
            const text = file && file.content
              ? Buffer.from(file.content, "base64").toString("utf8")
              : "";
            const writesContents =
              /(^|\n)\s*contents\s*:\s*write\s*(#.*)?($|\n)/i.test(text) ||
              /(^|\n)\s*permissions\s*:\s*write-all\s*(#.*)?($|\n)/i.test(text);
            return {
              isWriter: writesContents,
              reason: writesContents ? "workflow-permissions" : "read-only-permissions",
            };
          } catch (error) {
            errors.push(`${workflowPath}: ${error.message}`);
            const guessed = fallbackWriterName(run.name);
            return {
              isWriter: guessed,
              reason: guessed ? "name-fallback-after-read-error" : "unclassified-after-read-error",
            };
          }
        })()
      );
    }
    return workflowCache.get(workflowPath);
  }

  const activeWriterRuns = [];
  for (const run of uniqueRuns) {
    const classification = await workflowIsWriter(run);
    if (!classification.isWriter) continue;
    activeWriterRuns.push({
      id: run.id,
      name: run.name,
      run_number: run.run_number,
      status: run.status,
      event: run.event,
      path: run.path,
      head_sha: run.head_sha,
      created_at: run.created_at,
      html_url: run.html_url,
      reason: classification.reason,
    });
  }

  activeWriterRuns.sort((a, b) => String(a.created_at).localeCompare(String(b.created_at)));

  // One active writer is normal. Two or more simultaneous writers represent contention.
  // An API/classification error is also surfaced as warning rather than silently reporting healthy.
  const severity = errors.length > 0 || activeWriterRuns.length > 1 ? "warning" : "ok";

  const report = {
    generatedAt,
    repository,
    branch,
    severity,
    activeWriterRuns,
    activeRunsConsidered: uniqueRuns.length,
    writerCount: activeWriterRuns.length,
    errors,
    policy: {
      definition: "queued/in-progress workflow on the guarded branch whose current workflow YAML grants contents: write (or permissions: write-all)",
      contentionThreshold: 2,
      selfRunExcluded: true,
    },
  };

  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2) + "\n");

  const md = [
    "# Autonomous Writer Queue Guard",
    "",
    `- Generated: ${generatedAt}`,
    `- Repository: \`${repository || "unknown"}\``,
    `- Branch: \`${branch}\``,
    `- Severity: **${severity}**`,
    `- Active runs considered: **${uniqueRuns.length}**`,
    `- Active writer runs: **${activeWriterRuns.length}**`,
    "",
    "## Active writer runs",
    "",
    activeWriterRuns.length
      ? "| Run | Workflow | Status | Reason |\n|---:|---|---|---|\n" +
        activeWriterRuns
          .map((run) => `| [${run.id}](${run.html_url}) | ${String(run.name).replace(/\|/g, "\\|")} | ${run.status} | ${run.reason} |`)
          .join("\n")
      : "_No active writer runs detected._",
    "",
    "## Classification errors",
    "",
    errors.length ? errors.map((error) => `- ${error}`).join("\n") : "_None._",
    "",
    "## Policy",
    "",
    "A writer is an active workflow whose current YAML grants `contents: write` or `permissions: write-all`. One active writer is normal; two or more are flagged as contention. The guard excludes its own run.",
    "",
  ].join("\n");

  fs.writeFileSync(mdPath, md + "\n");

  console.log(
    `writer queue guard: ${severity}; ${activeWriterRuns.length} writer run(s) among ${uniqueRuns.length} active run(s)`
  );
  if (errors.length) {
    console.warn(`writer queue guard completed with ${errors.length} classification/API warning(s)`);
  }
}

main().catch((error) => {
  const generatedAt = new Date().toISOString();
  const report = {
    generatedAt,
    repository,
    branch,
    severity: "warning",
    activeWriterRuns: [],
    activeRunsConsidered: 0,
    writerCount: 0,
    errors: [error.stack || error.message || String(error)],
    policy: {
      definition: "guard execution failed before a complete assessment",
      contentionThreshold: 2,
      selfRunExcluded: true,
    },
  };
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2) + "\n");
  fs.writeFileSync(
    mdPath,
    `# Autonomous Writer Queue Guard\n\n- Generated: ${generatedAt}\n- Severity: **warning**\n\nGuard execution failed; see JSON artifact for details.\n`
  );
  console.error(error);
  // Keep artifact/escalation steps reachable. The report itself carries warning severity.
  process.exit(0);
});
