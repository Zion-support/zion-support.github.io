#!/usr/bin/env node

/**
 * PR Merge Automation Script
 * Fetches open PRs, resolves conflicts, and merges into main
 */

const https = require("https");
const { execSync } = require("child_process");
const fs = require("fs");

const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function exec(command, options = {}) {
  try {
    log(`Executing: ${command}`, "cyan");
    return execSync(command, {
      stdio: "pipe",
      encoding: "utf8",
      timeout: 60000,
      ...options,
    }).trim();
  } catch (error) {
    if (options.ignoreError) {
      return null;
    }
    log(`Command failed: ${error.message}`, "red");
    return null;
  }
}

async function fetchOpenPRs() {
  return new Promise((resolve) => {
    log("🔍 Fetching open pull requests from GitHub...", "blue");

    const options = {
      hostname: "api.github.com",
      path: "/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100",
      headers: {
        "User-Agent": "Node.js",
        Accept: "application/vnd.github.v3+json",
      },
    };

    // Add token if available
    if (process.env.GITHUB_TOKEN) {
      options.headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const req = https.get(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const prs = JSON.parse(data);

          if (!Array.isArray(prs)) {
            log("⚠️  Could not fetch PRs from GitHub API", "yellow");
            log("Falling back to local branch analysis...", "yellow");
            resolve([]);
            return;
          }

          log(`✅ Found ${prs.length} open pull requests`, "green");

          // Save PR data
          fs.writeFileSync(
            "/workspace/open_prs_data.json",
            JSON.stringify(prs, null, 2),
          );

          // Display PRs
          prs.forEach((pr, index) => {
            log(`${index + 1}. PR #${pr.number}: ${pr.title}`, "cyan");
            log(`   Branch: ${pr.head.ref} -> ${pr.base.ref}`, "cyan");
            log(`   URL: ${pr.html_url}`, "cyan");
          });

          resolve(prs);
        } catch (error) {
          log(`⚠️  Error parsing PR data: ${error.message}`, "yellow");
          log("Falling back to local branch analysis...", "yellow");
          resolve([]);
        }
      });
    });

    req.on("error", (error) => {
      log(`⚠️  Error fetching PRs: ${error.message}`, "yellow");
      log("Falling back to local branch analysis...", "yellow");
      resolve([]);
    });

    req.end();
  });
}

function getBranchesToMerge() {
  log("🔍 Analyzing local branches...", "blue");

  // Get all remote branches
  const branchesOutput = exec("git branch -r");
  if (!branchesOutput) return [];

  const branches = branchesOutput
    .split("\n")
    .map((b) => b.trim())
    .filter((b) => b && !b.includes("HEAD") && !b.includes("origin/main"))
    .map((b) => b.replace("origin/", ""));

  log(`Found ${branches.length} remote branches`, "yellow");

  // Find branches that are not merged into main
  const unmergedBranches = branches.filter((branch) => {
    const result = exec(`git log origin/main..origin/${branch} --oneline`, {
      ignoreError: true,
    });
    return result && result.length > 0;
  });

  log(`Found ${unmergedBranches.length} unmerged branches`, "yellow");

  return unmergedBranches;
}

function resolveMergeConflicts() {
  log("🔧 Checking for merge conflicts...", "blue");

  const conflictFiles = exec("git diff --name-only --diff-filter=U", {
    ignoreError: true,
  });

  if (!conflictFiles) {
    log("✅ No merge conflicts found", "green");
    return true;
  }

  const files = conflictFiles.split("\n").filter((f) => f.trim());
  log(`Found conflicts in ${files.length} files`, "yellow");

  for (const file of files) {
    log(`Resolving conflicts in: ${file}`, "cyan");

    // Strategy: accept incoming changes for most files
    if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      // For code files, try to accept theirs (incoming)
      exec(`git checkout --theirs "${file}"`, { ignoreError: true });
    } else {
      // For other files, accept theirs
      exec(`git checkout --theirs "${file}"`, { ignoreError: true });
    }

    exec(`git add "${file}"`);
  }

  // Commit the merge
  const commitResult = exec("git commit --no-edit --no-verify", {
    ignoreError: true,
  });

  if (commitResult !== null) {
    log("✅ Successfully resolved and committed merge conflicts", "green");
    return true;
  } else {
    log("❌ Failed to commit merge resolution", "red");
    return false;
  }
}

function mergeBranch(branchName) {
  log(`\n${"=".repeat(60)}`, "magenta");
  log(`🔄 Merging branch: ${branchName}`, "blue");

  try {
    // Fetch the latest
    exec(`git fetch origin ${branchName}`, { ignoreError: true });

    // Attempt merge
    const mergeResult = exec(
      `git merge origin/${branchName} --no-ff -m "Merge branch '${branchName}' into main"`,
      { ignoreError: true },
    );

    if (mergeResult !== null) {
      log(`✅ Successfully merged ${branchName}`, "green");
      return true;
    } else {
      log(`⚠️  Merge conflict detected for ${branchName}`, "yellow");

      // Try to resolve conflicts
      if (resolveMergeConflicts()) {
        log(
          `✅ Successfully resolved conflicts and merged ${branchName}`,
          "green",
        );
        return true;
      } else {
        log(`❌ Failed to resolve conflicts for ${branchName}`, "red");
        exec("git merge --abort", { ignoreError: true });
        return false;
      }
    }
  } catch (error) {
    log(`❌ Error merging ${branchName}: ${error.message}`, "red");
    exec("git merge --abort", { ignoreError: true });
    return false;
  }
}

function runImprovements() {
  log("\n⚡ Running code improvements...", "magenta");

  // Check linting
  log("🔍 Checking linting...", "cyan");
  const lintResult = exec("npm run lint", { ignoreError: true });
  if (lintResult !== null) {
    log("✅ Linting passed", "green");
  } else {
    log("⚠️  Linting issues found", "yellow");
  }

  return {
    linting: lintResult !== null,
  };
}

async function main() {
  log("\n🚀 Starting PR Merge Automation", "magenta");
  log("=".repeat(60), "magenta");

  try {
    // Ensure we're on main
    log("📍 Checking current branch...", "blue");
    const currentBranch = exec("git branch --show-current");
    log(`Current branch: ${currentBranch}`, "yellow");

    if (currentBranch !== "main") {
      log("🔄 Switching to main branch...", "blue");
      exec("git checkout main");
    }

    // Pull latest changes
    log("📥 Pulling latest changes...", "blue");
    exec("git pull origin main", { ignoreError: true });

    // Fetch all branches
    log("📥 Fetching all remote branches...", "blue");
    exec("git fetch --all --prune");

    // Get open PRs from GitHub
    const openPRs = await fetchOpenPRs();

    // Determine branches to merge
    let branchesToMerge = [];

    if (openPRs.length > 0) {
      branchesToMerge = openPRs
        .map((pr) => pr.head.ref)
        .filter((ref) => ref && ref !== "main");
    } else {
      // Fallback to analyzing local branches
      branchesToMerge = getBranchesToMerge();
    }

    log(`\n📋 Total branches to merge: ${branchesToMerge.length}`, "yellow");

    if (branchesToMerge.length === 0) {
      log("✅ No branches to merge. Everything is up to date!", "green");
      return;
    }

    // Merge each branch
    let mergedCount = 0;
    let failedCount = 0;
    const failedBranches = [];

    for (const branch of branchesToMerge) {
      if (mergeBranch(branch)) {
        mergedCount++;
      } else {
        failedCount++;
        failedBranches.push(branch);
      }
    }

    // Push changes if any merges succeeded
    if (mergedCount > 0) {
      log("\n🚀 Pushing changes to main...", "blue");
      const pushResult = exec("git push origin main", { ignoreError: true });

      if (pushResult !== null) {
        log("✅ Successfully pushed to main", "green");
      } else {
        log("❌ Failed to push to main", "red");
      }
    }

    // Run improvements
    const improvements = runImprovements();

    // Final summary
    log("\n" + "=".repeat(60), "magenta");
    log("📊 MERGE SUMMARY", "magenta");
    log("=".repeat(60), "magenta");
    log(`✅ Successfully merged: ${mergedCount} branches`, "green");
    log(
      `❌ Failed to merge: ${failedCount} branches`,
      failedCount > 0 ? "red" : "green",
    );

    if (failedBranches.length > 0) {
      log("\nFailed branches:", "red");
      failedBranches.forEach((b) => log(`  - ${b}`, "red"));
    }

    log(
      `\n🔍 Linting: ${improvements.linting ? "✅ Passed" : "❌ Issues found"}`,
      improvements.linting ? "green" : "yellow",
    );

    // Show recent commits
    log("\n📝 Recent commits on main:", "blue");
    const recentCommits = exec("git log --oneline -10");
    if (recentCommits) {
      recentCommits.split("\n").forEach((commit) => {
        log(`  ${commit}`, "cyan");
      });
    }

    log("\n🎉 PR Merge Automation Complete!", "green");
  } catch (error) {
    log(`\n❌ Fatal error: ${error.message}`, "red");
    log(error.stack, "red");
    process.exit(1);
  }
}

// Run the script
main().catch((error) => {
  log(`❌ Unhandled error: ${error.message}`, "red");
  process.exit(1);
});
