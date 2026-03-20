#!/usr/bin/env node

 

const { execSync } = require('child_process');
const https = require('https');

function run(label, command) {
  console.log(`\n=== ${label} ===`);
  console.log(`$ ${command}`);
  execSync(command, { stdio: 'inherit', env: process.env });
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
  try {
    run('Build lock self-heal', 'npm run build:lock:heal');
    run('Lint', 'npm run lint:check');
    run('Type check', 'npm run type-check');
    run('Tests (CI)', 'npm run test:ci');
    run('Build', 'npm run build');

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
  }
}

main();

