<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs from "fs";"const { execSync } from "node:child_process";function run(cmd) { try {" const out = execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] }).toString(); return { ok: true, out }} catch (e) {" return { ok: false, out: e.stdout?.toString() | "", err: e.stderr?.toString() | e.message }}}const results = {};"console.log("[Aggregate] Running health check");"results.health = run("npm run -s automation:health");"console.log("[Aggregate] Running security scan");"results.security = run("npm run -s automation:security");"console.log("[Aggregate] Running performance optimizer (dry)");"results.performance = run("npm run -s automation:performance");const summary = { timestamp: new Date().toISOString(), ok: Object.values(results).every(r => r.ok), details: Object.fromEntries( Object.entries(results).map(([k, v]) => [k, { ok: v.ok, out: v.out?.slice(0, 5000) }]) )};"fs.mkdirSync("reports", { recursive: true });"fs.writeFileSync("reports/aggregate-health-security.json", JSON.stringify(summary, null, 2));"console.log("[Aggregate] Wrote reports/aggregate-health-security.json");process.exit(summary.ok ? 0 : 1);''"
=======
#!/usr/bin/env node;
import fs from 'fs';
import { execSync } from 'node:child_process';

function run(cmd) {}
  try {}
    const out = execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'] }).toString();
    return { ok: true, out }} catch (e) {}
    return { ok: false, out: e.stdout?.toString() || '', err: e.stderr?.toString() || e.message }};
};
const results = {};


results.health = run('npm run -s automation:health');


results.security = run('npm run -s automation:security');

');
results.performance = run('npm run -s automation:performance');

const summary = {}
  timestamp: new Date().toISOString(),
  ok: Object.values(results).every(r => r.ok),
  details: Object.fromEntries()
    Object.entries(results).map(([k, v]) => [k, { ok: v.ok, out: v.out?.slice(0, 5000) }]);
  );
};

fs.mkdirSync('reports', { recursive: true });
fs.writeFileSync('reports/aggregate-health-security.json', JSON.stringify(summary, null, 2));


process.exit(summary.ok ? 0 : 1);

>>>>>>> main
