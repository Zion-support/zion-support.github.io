#!/usr/bin/env node

/**
 * AI Services & Content Automation
 *
 * Orchestrates content creation for ziontechgroup.com:
 * 1. Content ideation (audit + ideas)
 * 2. Front page expansion (industries, case studies, bundles)
 * 3. Blog generation
 *
 * Runs with OpenRouter when OPENROUTER_API_KEY is set.
 * Falls back to predefined content when key is missing (e.g. CI).
 *
 * Options:
 *   AUTO_COMMIT=1     - Commit and push after generation
 *   SKIP_BLOG=1      - Skip blog generation
 *   SKIP_FRONT_PAGE=1 - Skip front page expansion
 *   SKIP_IDEATION=1  - Skip ideation
 *
 * Run: OPENROUTER_API_KEY=sk-or-v1-... npm run content:services-and-content
 */

try {
  require('dotenv').config({ path: require('path').join(process.cwd(), '.env') });
} catch (_) {}

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const AUTO_COMMIT = process.env.AUTO_COMMIT === '1';
const SKIP_BLOG = process.env.SKIP_BLOG === '1';
const SKIP_FRONT_PAGE = process.env.SKIP_FRONT_PAGE === '1';
const SKIP_IDEATION = process.env.SKIP_IDEATION === '1';

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[ServicesContent] ${ts} | ${msg}`);
}

function runAsync(scriptPath, label, env = {}) {
  return new Promise((resolve, reject) => {
    const fullEnv = { ...process.env, ...env };
    const child = spawn('node', [scriptPath], {
      cwd: ROOT,
      env: fullEnv,
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let stdout = '';
    let stderr = '';
    child.stdout?.on('data', (d) => {
      stdout += d.toString();
      process.stdout.write(d);
    });
    child.stderr?.on('data', (d) => {
      stderr += d.toString();
      process.stderr.write(d);
    });

    child.on('close', (code) => {
      resolve({ ok: code === 0, code, stdout, stderr });
    });
    child.on('error', reject);
  });
}

async function runIdeation() {
  if (SKIP_IDEATION) {
    log('Skipping ideation (SKIP_IDEATION=1)');
    return { ok: true, skipped: true };
  }
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    log('Skipping ideation (no OPENROUTER_API_KEY)');
    return { ok: true, skipped: true };
  }
  log('Running content ideation...');
  return runAsync('automation/ai-content-ideation-agent.cjs', 'Ideation');
}

async function runFrontPageExpansion() {
  if (SKIP_FRONT_PAGE) {
    log('Skipping front page (SKIP_FRONT_PAGE=1)');
    return { ok: true, skipped: true };
  }
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    log('Skipping front page expansion (no OPENROUTER_API_KEY)');
    return { ok: true, skipped: true };
  }
  log('Expanding front page (OpenRouter)...');
  return runAsync('automation/ai-front-page-content-expansion-agent.cjs', 'Front Page', {
    OPENROUTER_MODEL: 'openrouter/free',
  });
}

async function runBlogGenerator() {
  if (SKIP_BLOG) {
    log('Skipping blog (SKIP_BLOG=1)');
    return { ok: true, skipped: true };
  }
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    log('Skipping blog (no OPENROUTER_API_KEY)');
    return { ok: true, skipped: true };
  }
  log('Generating blog posts (OpenRouter)...');
  return runAsync('automation/openrouter-content-generator.cjs', 'Blog', {
    OPENROUTER_MODEL: 'openrouter/free',
    MAX_POSTS: '2',
    MAX_CONCURRENCY: '2',
  });
}

async function main() {
  log('=== AI Services & Content Automation ===');

  const start = Date.now();

  const [ideationResult, frontResult, blogResult] = await Promise.all([
    runIdeation(),
    runFrontPageExpansion(),
    runBlogGenerator(),
  ]);

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  log(`Pipeline completed in ${elapsed}s`);

  const anyOk = ideationResult.ok || frontResult.ok || blogResult.ok;
  const anySkipped = ideationResult.skipped || frontResult.skipped || blogResult.skipped;

  if (!anyOk && !anySkipped) {
    log('All steps failed or were skipped.');
    process.exit(1);
  }

  if (AUTO_COMMIT && (blogResult.ok || frontResult.ok)) {
    log('Committing changes...');
    try {
      const status = execSync('git status --porcelain', { cwd: ROOT, encoding: 'utf8' });
      if (status.trim()) {
        execSync('git add -A', { cwd: ROOT, stdio: 'inherit' });
        execSync(
          `git commit -m "chore(content): AI services and content automation - industries, case studies, blog"`,
          { cwd: ROOT, stdio: 'inherit' }
        );
        execSync('git push', { cwd: ROOT, stdio: 'inherit' });
        log('Commit and push complete.');
      } else {
        log('No changes to commit.');
      }
    } catch (e) {
      log(`Commit failed: ${e.message}`);
    }
  }

  log('=== Services & Content Automation Complete ===');
}

main().catch((err) => {
  log(`Fatal: ${err.message}`);
  process.exit(1);
});
