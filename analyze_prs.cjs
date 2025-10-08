#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("Analyzing Open PRs...\n");

try {
  const data = fs.readFileSync(path.join(__dirname, "open_prs.json"), "utf8");
  const prs = JSON.parse(data);

  console.log(`Total Open PRs: ${prs.length}\n`);

  console.log("PR Details:");
  console.log("─".repeat(80));

  prs.slice(0, 20).forEach((pr, index) => {
    console.log(`${index + 1}. PR #${pr.number}: ${pr.title}`);
    console.log(`   Branch: ${pr.head.ref} -> ${pr.base.ref}`);
    console.log(
      `   Status: ${pr.state} | Mergeable: ${pr.mergeable || "unknown"}`,
    );
    console.log(`   URL: ${pr.html_url}`);
    console.log("");
  });

  if (prs.length > 20) {
    console.log(`... and ${prs.length - 20} more PRs\n`);
  }

  // Count mergeable status
  const mergeable = prs.filter((pr) => pr.mergeable === true).length;
  const notMergeable = prs.filter((pr) => pr.mergeable === false).length;
  const unknown = prs.filter(
    (pr) => pr.mergeable === null || pr.mergeable === undefined,
  ).length;

  console.log("Summary:");
  console.log("─".repeat(80));
  console.log(`Mergeable: ${mergeable}`);
  console.log(`Not Mergeable (conflicts): ${notMergeable}`);
  console.log(`Unknown: ${unknown}`);
} catch (error) {
  console.error("Error reading open_prs.json:", error.message);
}
