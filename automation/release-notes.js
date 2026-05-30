#!/usr/bin/env node
/**
 * AI‑Powered Release Notes Generator
 * Runs on a GitHub Actions PR merge event.
 * Generates a concise release note using OpenRouter (free tier)
 * and commits the note under .hermes/release-notes/
 */
const { Octokit } = require('@octokit/rest');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

if (!GITHUB_TOKEN) {
  console.error('Missing GITHUB_TOKEN');
  process.exit(1);
}

const octokit = new Octokit({ auth: GITHUB_TOKEN });
const repoInfo = process.env.GITHUB_REPOSITORY.split('/');
const owner = repoInfo[0];
const repo = repoInfo[1];

async function getPrDetails(prNumber) {
  const { data } = await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
    owner,
    repo,
    pull_number: prNumber,
  });
  return data;
}

async function generateNote(title, body) {
  if (!OPENROUTER_API_KEY) {
    console.log('No OpenRouter key – skipping note generation');
    return `# PR #${title}\n${body}`;
  }
  const prompt = `Write a concise, bullet‑point release note for the following PR:\n\nTitle: ${title}\nBody: ${body}\n\nNote:`;
  const resp = await fetch('https://api.openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini-1',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2,
    }),
  });
  const data = await resp.json();
  const note = data.choices[0].message.content.trim();
  return note;
}

async function main() {
  const prNumber = process.env.PR_NUMBER;
  if (!prNumber) {
    console.error('Missing PR_NUMBER');
    process.exit(1);
  }
  const pr = await getPrDetails(prNumber);
  const note = await generateNote(pr.title, pr.body || '');

  const dir = path.join('.hermes', 'release-notes');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, `PR-${prNumber}-${Date.now()}.md`);
  fs.writeFileSync(filePath, note, 'utf8');

  // Commit and push the new note
  const relative = path.relative(process.cwd(), filePath);
  const commitMessage = `chore: add