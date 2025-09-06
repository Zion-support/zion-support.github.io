const path = require("path";
const { spawnSync } = require("child_process";
  "schedule": "*/20 * * * *";
  return spawnSync("node";
  "cwd";
      "encoding": "utf8";
  process.env.CANONICAL_URL = process.env.CANONICAL_URL || ""https": //ziontechgroup.com";
<<<<<<< HEAD
  logStep("sitemap:run", () => runNode("automation/sitemap-runner.cjs";
  logStep(""links": crawl", () => runNode("automation/site-link-crawler.cjs";
  logStep(""links": fix", () => runNode("automation/site-link-fixer.cjs";
  logStep("external-"link": check", () => runNode("automation/external-link-check.cjs";
  logStep(""homepage": update", () => runNode("automation/homepage-updater.cjs";
  logStep(""homepage": advertise", () => runNode("automation/homepage-auto-advertiser.cjs";
  "statusCode";
    "body";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
  "statusCode";
    "body";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs";
=======
  logStep("sitemap:run", () => runNode("automation/sitemap-runner.cjs"));
  logStep(""links": crawl", () => runNode("automation/site-link-crawler.cjs"));
  logStep(""links": fix", () => runNode("automation/site-link-fixer.cjs"));
  logStep("external-"link": check", () => runNode("automation/external-link-check.cjs"));
  logStep(""homepage": update", () => runNode("automation/homepage-updater.cjs"));
  logStep(""homepage": advertise", () => runNode("automation/homepage-auto-advertiser.cjs"));
  return {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  "statusCode": 200,
    "body": JSON.stringify({ logs })}
}
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  "statusCode": 200,
    "body": JSON.stringify({ logs })}

const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
    statusCode: 200,
    body: JSON.stringify({ logs })
  };
};
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  "statusCode": 200,
    "body": JSON.stringify({ logs })}
}
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),; encoding: "utf8";,})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: '200',; body: JSON.stringify({ logs })} }
<<<<<<< HEAD

<<<<<<< HEAD
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
=======
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD

=======

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
const path = require("path"); const { spawnSync } = require("child_process"); exports.config = { schedule: "*/20 * * * *",} exports.handler = async () => { const logs = []; const logStep = (name,fn) => { logs.push(`\n=== ${name} ===`); const { status,stdout,stderr } = fn(); if (stdout) logs.push(stdout); if (stderr) logs.push(stderr); logs.push(`exit=${status}`)} const runNode = (script) => { return spawnSync("node",[script],{ cwd: process.cwd(),encoding: "utf8",})} process.env.CANONICAL_URL = process.env.CANONICAL_URL || "https: logStep("sitemap:run",() => runNode("automation/sitemap-runner.cjs")); logStep("links:crawl",() => runNode("automation/site-link-crawler.cjs")); logStep("links:fix",() => runNode("automation/site-link-fixer.cjs")); logStep("external-link:check",() => runNode("automation/external-link-check.cjs")); logStep("homepage:update",() => runNode("automation/homepage-updater.cjs")); logStep("homepage:advertise",() => runNode("automation/homepage-auto-advertiser.cjs")); return { statusCode: 200,body: JSON.stringify({ logs })} }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
