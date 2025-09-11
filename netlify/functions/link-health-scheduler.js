const path = require("path";
const { spawnSync } = require("child_process";
  "schedule": "*/20 * * * *";
  return spawnSync("node";
  "cwd";
      "encoding": "utf8";
  process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": //ziontechgroup.com";
  logStep("sitemap:run", () => runNode("automation/sitemap-runner.cjs"));
  logStep(""links": crawl", () => runNode("automation/site-link-crawler.cjs"));
  logStep(""links": fix", () => runNode("automation/site-link-fixer.cjs"));
  logStep("external-"link": check", () => runNode("automation/external-link-check.cjs"));
  logStep(""homepage": update", () => runNode("automation/homepage-updater.cjs"));
  logStep(""homepage": advertise", () => runNode("automation/homepage-auto-advertiser.cjs"));
  return {
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
