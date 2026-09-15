#!/usr/bin/env node
/**
 * Workers Builds sets WORKERS_CI=1. Production site is public/ static HTML.
 * Local / other CI still run Next when that env is unset.
 */
const { spawnSync } = require("child_process");
const isWorkersCi =
  process.env.WORKERS_CI === "1" ||
  process.env.CF_PAGES === "1" ||
  process.env.CLOUDFLARE_BUILD === "1";

const cmd = isWorkersCi
  ? ["bash", "scripts/cf-static-build.sh"]
  : ["npx", "next", "build", "--webpack"];

const result = spawnSync(cmd[0], cmd.slice(1), { stdio: "inherit", env: process.env });
process.exit(result.status === null ? 1 : result.status);
