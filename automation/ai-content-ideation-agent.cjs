#!/usr/bin/env node

/**
 * AI Content Ideation Agent
 *
 * Uses OpenRouter LLM to suggest new content ideas based on site audit.
 * Outputs structured JSON (blog topics, industries, case study ideas) for
 * content generators or manual review.
 *
 * Requires: OPENROUTER_API_KEY
 * Run: OPENROUTER_API_KEY=sk-or-v1-... npm run content:ideate
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { createLLMClient } = require('./lib/openrouter-client.cjs');

const DATA_DIR = path.join(__dirname, 'data');
const REPORT_PATH = path.join(__dirname, 'reports', 'content-ideation-latest.json');

function ensureDirs() {
  [DATA_DIR, path.dirname(REPORT_PATH)].forEach((d) => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });
}

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

async function run() {
  ensureDirs();

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error('OPENROUTER_API_KEY is required.');
    process.exit(1);
  }

  console.log('Fetching live site content...');
  const [home, services, blog] = await Promise.all([
    fetchPage('https://ziontechgroup.com').catch(() => ''),
    fetchPage('https://ziontechgroup.com/solutions').catch(() => ''),
    fetchPage('https://ziontechgroup.com/blog').catch(() => ''),
  ]);

  const client = createLLMClient({
    apiKey,
    model: process.env.OPENROUTER_MODEL || 'openrouter/free',
  });

  const prompt = `You are a content strategist for Zion Tech Group (ziontechgroup.com), an AI solutions and engineering services company.

Based on this site content, suggest NEW content ideas. Focus on gaps, trending topics, and high-value SEO opportunities.

Homepage snippet (first 3000 chars): ${home.slice(0, 3000)}
Solutions snippet: ${services.slice(0, 2000)}
Blog snippet: ${blog.slice(0, 2000)}

Return ONLY valid JSON (no markdown, no explanation) with this structure:

{
  "blogTopics": [
    {
      "title": "Full article title",
      "category": "Industry Guide | Technical Guide | AI Trends | Business Strategy",
      "icon": "emoji",
      "rationale": "Why this topic now"
    }
  ],
  "industryIdeas": [
    {
      "industry": "Industry Name",
      "rationale": "Why add this vertical"
    }
  ],
  "caseStudyIdeas": [
    {
      "title": "Company/Industry Achieves X% Improvement",
      "industry": "Industry",
      "rationale": "Why this case study"
    }
  ],
  "priority": "high|medium|low"
}

Suggest 5 blog topics, 3 industries, 2 case study ideas. Be specific and actionable.`;

  const response = await client.chat(prompt, {
    systemPrompt: 'You are a content strategist. Return ONLY valid JSON. No markdown code blocks.',
    temperature: 0.8,
    maxTokens: 2048,
  });

  let jsonStr = response.trim();
  const codeBlock = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (codeBlock) jsonStr = codeBlock[1].trim();

  const ideas = JSON.parse(jsonStr);
  ideas.generatedAt = new Date().toISOString();
  ideas.model = 'openrouter/free';

  fs.writeFileSync(REPORT_PATH, JSON.stringify(ideas, null, 2));
  console.log('Ideas saved to', REPORT_PATH);
  console.log('Blog topics:', ideas.blogTopics?.length || 0);
  console.log('Industries:', ideas.industryIdeas?.length || 0);
  console.log('Case studies:', ideas.caseStudyIdeas?.length || 0);
}

run().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
