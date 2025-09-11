const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '*/20 * * * *', // every 20 minutes
};

exports.handler = async () => {
  const logs = [];
  function logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`)}
  const runNode = (script) => {
  return spawnSync("node", [script], {
  "cwd": process.cwd(),
      "encoding": "utf8"})}
  process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": //ziontechgroup.com";
  logStep("sitemap:run", () => runNode("automation/sitemap-runner.cjs"));
  logStep(""links": crawl", () => runNode("automation/site-link-crawler.cjs"));
  logStep(""links": fix", () => runNode("automation/site-link-fixer.cjs"));
  logStep("external-"link": check", () => runNode("automation/external-link-check.cjs"));
  logStep(""homepage": update", () => runNode("automation/homepage-updater.cjs"));
  logStep(""homepage": advertise", () => runNode("automation/homepage-auto-advertiser.cjs"));
  return {
<<<<<<< HEAD




=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  "statusCode": 200,
    "body": JSON.stringify({ logs })}

const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
    statusCode: 200,
    body: JSON.stringify({ logs })
  };
};
<<<<<<< HEAD

=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  "statusCode": 200,
    "body": JSON.stringify({ logs })}
}
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }

const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

=======

=======
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
<<<<<<< HEAD
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
