#!/usr/bin/env node

 

const { execSync } = require('child_process');
const https = require('https');

function run(label, command) {
  console.log(`\n=== ${label} ===`);
  console.log(`$ ${command}`);
  execSync(command, { stdio: 'inherit', env: process.env });
}

function runBuildWithLockRetry() {
  run('Build lock self-heal (pre-build)', 'npm run build:lock:heal');
  try {
    run('Build', 'npm run build');
  } catch (error) {
    const message = String(error && error.message ? error.message : '');
    if (!message.includes('.next/lock')) throw error;
    console.warn('\nBuild lock contention detected during build. Retrying once after lock heal...');
    run('Build lock self-heal (retry)', 'npm run build:lock:heal');
    run('Build (retry)', 'npm run build');
  }
}

function tryRun(command) {
  try {
    return execSync(command, { stdio: ['pipe', 'pipe', 'pipe'], env: process.env, encoding: 'utf8' });
  } catch {
    return '';
  }
}

function maybePauseLocalDevServer() {
  const status = tryRun('pm2 jlist');
  if (!status) return false;
  try {
    const list = JSON.parse(status);
    const hasDevServer = Array.isArray(list) && list.some((proc) => proc?.name === 'zion-website');
    if (!hasDevServer) return false;
    run('Pause PM2 zion-website for build', 'pm2 stop zion-website');
    return true;
  } catch {
    return false;
  }
}

function maybeResumeLocalDevServer(paused) {
  if (!paused) return;
  try {
    run('Resume PM2 zion-website', 'pm2 start zion-website');
  } catch {
    // Keep deploy pipeline successful even if PM2 app cannot be restarted here.
  }
}

const DEFAULT_QUIET_APPS = [
  'ai-build-fixer',
  'ai-continuous-improvement',
  'build-monitor',
  'continuous-automation',
  'error-monitor',
  'health-checker',
  'intelligent-orchestrator',
];

function parseQuietAppList() {
  const raw = process.env.DEPLOY_QUIET_PM2_APPS || DEFAULT_QUIET_APPS.join(',');
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function maybeDeployQuietPause() {
  const enabled =
    process.env.DEPLOY_QUIET_MODE === '1' ||
    process.env.DEPLOY_QUIET_MODE === 'true';
  if (!enabled) return { paused: false, apps: [] };

  const apps = parseQuietAppList();
  if (apps.length === 0) return { paused: false, apps: [] };

  const status = tryRun('pm2 jlist');
  if (!status) return { paused: false, apps: [] };

  let list;
  try {
    list = JSON.parse(status);
  } catch {
    return { paused: false, apps: [] };
  }

  const names = new Set(
    Array.isArray(list) ? list.map((p) => p?.name).filter(Boolean) : [],
  );
  const toPause = apps.filter((a) => names.has(a));
  if (toPause.length === 0) return { paused: false, apps: [] };

  const only = toPause.join(' ');
  try {
    run('Deploy quiet: pause high-churn PM2 apps', `pm2 stop ${only}`);
  } catch {
    // Non-fatal PM2 differences between hosts.
  }
  return { paused: true, apps: toPause };
}

function maybeDeployQuietResume(state) {
  if (!state || !state.paused || !state.apps.length) return;
  const only = state.apps.join(',');
  try {
    run('Deploy quiet: resume paused PM2 apps', `pm2 start ecosystem.config.cjs --only ${only} --update-env`);
  } catch {
    try {
      const spaced = state.apps.join(' ');
      run('Deploy quiet: resume (fallback)', `pm2 restart ${spaced} --update-env`);
    } catch {
      // ignore
    }
  }
}

function runContentionGuard() {
  try {
    run('PM2 deploy contention guard', 'node automation/pm2-deploy-contention-guard.cjs');
  } catch (error) {
    if (process.env.DEPLOY_BLOCK_ON_LOCK_RISK === '1') {
      throw error;
    }
    console.warn('Contention guard reported elevated risk (not blocking deploy). Set DEPLOY_BLOCK_ON_LOCK_RISK=1 to fail.');
  }
}

function triggerNetlify() {
  const hook = process.env.NETLIFY_BUILD_HOOK;

  if (!hook) {
    console.warn(
      'NETLIFY_BUILD_HOOK is not set. Skipping remote deploy trigger. Set this env var to trigger the same deploy hook used in CI.',
    );
    return;
  }

  console.log('\n=== Trigger Netlify deploy (NETLIFY_BUILD_HOOK) ===');

  const url = new URL(hook);
  const body = Buffer.from('{}');

  const req = https.request(
    {
      method: 'POST',
      hostname: url.hostname,
      path: url.pathname + url.search,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': body.length,
      },
    },
    (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk.toString();
      });
      res.on('end', () => {
        console.log(`Netlify response: ${res.statusCode} ${res.statusMessage}`);
        if (data) {
          console.log(data.slice(0, 500));
        }
      });
    },
  );

  req.on('error', (error) => {
    console.error('Failed to trigger Netlify deploy:', error.message);
  });

  req.write(body);
  req.end();
}

function main() {
  let pausedDevServer = false;
  let quietState = { paused: false, apps: [] };
  try {
    pausedDevServer = maybePauseLocalDevServer();
    quietState = maybeDeployQuietPause();
    runContentionGuard();
    run('Build lock self-heal', 'npm run build:lock:heal');
    run('Lint', 'npm run lint:check');
    run('Type check', 'npm run type-check');
    run('Tests (CI)', 'npm run test:ci');
    runBuildWithLockRetry();

    if (process.env.SKIP_REMOTE_DEPLOY === '1') {
      console.log(
        '\nBuild and checks completed. SKIP_REMOTE_DEPLOY=1 is set, so no remote deploy was triggered.',
      );
      return;
    }

    triggerNetlify();
  } catch (error) {
    console.error('\nDeployment preflight failed.');
    if (error && error.message) {
      console.error(error.message);
    }
    process.exitCode = 1;
  } finally {
    maybeResumeLocalDevServer(pausedDevServer);
  }
}

main();

