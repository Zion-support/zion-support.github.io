import { spawn } from "child_process";

const pyScript = "/Users/klebergarciaalcatrao/zion-support.github.io/scripts/outreach/outreach_worker_automation.py";
const child = spawn("python3", [pyScript], { stdio: "pipe" });

let stdout = "", stderr = "";
child.stdout.on("data", d => stdout += d.toString());
child.stderr.on("data", d => stderr += d.toString());
child.on("exit", (code) => {
  const summary = {
    job: "composio-zion-outbound-cycle",
    script: pyScript,
    exit_code: code,
    stdout_tail: stdout.slice(-500),
    stderr_tail: stderr.slice(-500),
    timestamp: new Date().toISOString()
  };
  console.log(JSON.stringify(summary, null, 2));
  process.exit(code ?? 0);
});
