#!/usr/bin/env node
const { execSync } = require("child_process");

function getRepoInfo() {
	try {
		const remoteUrl = execSync("git remote get-url origin", { encoding: "utf8" }).trim();
		const match = remoteUrl.match(/github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/);
		if (match) return { owner: match[1], repo: match[2] };
	} catch {}
	return null;
}

function haveGhCli() {
	try {
		execSync("gh --version", { stdio: "ignore" });
		return true;
	} catch {
		return false;
	}
}

function listOpenPRsGh() {
	const json = execSync(
		"gh pr list --state open --json number,title,headRefName,baseRefName,mergeable",
		{ encoding: "utf8" }
	);
	return JSON.parse(json);
}

function mergeGh(prNumber) {
	execSync(`gh pr merge ${prNumber} --merge --delete-branch --admin --auto`, { stdio: "inherit" });
}

async function main() {
	execSync("git rev-parse --git-dir", { stdio: "ignore" });
	const repo = getRepoInfo();
	if (repo) {
		console.log(`📍 Repository: ${repo.owner}/${repo.repo}`);
	}

	if (!haveGhCli()) {
		console.log("❌ GitHub CLI not available. Skipping PR actions.");
		process.exit(0);
	}

	try {
		execSync("gh auth status", { stdio: "inherit" });
	} catch {
		console.log("❌ gh not authenticated. Run: gh auth login");
		process.exit(1);
	}

	console.log("📥 Fetching latest changes...");
	execSync("git fetch --all --prune", { stdio: "inherit" });

	const open = listOpenPRsGh();
	if (!open.length) {
		console.log("✅ No open PRs found");
		return;
	}
	console.log(`📋 Found ${open.length} open PRs`);
	let merged = 0;
	for (const pr of open) {
		try {
			console.log(`\n🔄 Merging #${pr.number}: ${pr.title}`);
			if (pr.mergeable === false) {
				console.log(`⚠️  PR #${pr.number} not mergeable (conflicts)`);
				continue;
			}
			mergeGh(pr.number);
			merged++;
		} catch (e) {
			console.log(`❌ Failed to merge #${pr.number}: ${e.message}`);
		}
	}
	console.log(`\n🎉 Done. Merged ${merged}/${open.length} PRs.`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});