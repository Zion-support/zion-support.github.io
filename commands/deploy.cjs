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
  try {
    pausedDevServer = maybePauseLocalDevServer();
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

