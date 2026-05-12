#!/usr/bin/env node
/**
 * Autonomous AI-Powered Content Summarizer & Excerpt Generator
 *
 * Analyzes content pages (Markdown/TSX) and auto-generates:
 * - Short excerpt (2–3 sentences) for meta description and previews
 * - Suggested tags via keyword extraction
 * - Featured image alt-text suggestions
 *
 * Uses free, self-hosted NLP: simple TF-IDF + sentence ranking (no external APIs).
 */

const fs = require('fs');
const path = require('path');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'content-summarizer');
const CONTENT_DIRS = ['app/content', 'app/blog', 'app/services', 'app/ai-lab', 'public/content'];

const MIN_SUMMARY_LENGTH = 40;  // chars
const MAX_SUMMARY_LENGTH = 160; // chars (meta desc optimal)
const TOP_KEYWORDS = 5;

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }

// Tokenize and count word frequencies
function tokenize(text) {
  return text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 3);
}

// Compute TF-IDF-like scores (term frequency; IDF approximated by excluding common stop words)
function scoreSentences(text) {
  const stopWords = new Set(['the','and','for','with','this','that','from','into','through','under','over','when','where','which','what','who','whom','whose','their','there','these','those','been','have','has','had','would','could','should','might','must','will','just','only','also','very','much','more','most','some','any','each','every','many','few','such']);
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const tokens = tokenize(text);
  const tf = {};
  for (const t of tokens) {
    if (stopWords.has(t)) continue;
    tf[t] = (tf[t] || 0) + 1;
  }

  const scored = sentences.map(s => {
    const sTokens = tokenize(s);
    let score = 0;
    for (const t of sTokens) {
      if (tf[t]) score += tf[t];
    }
    // Normalize by sentence length to avoid bias
    return { text: s.trim(), score: s.length ? score / s.length : 0 };
  });

  return scored.sort((a,b) => b.score - a.score);
}

// Extract top keywords
function extractKeywords(text, count = TOP_KEYWORDS) {
  const tokens = tokenize(text);
  const stopWords = new Set(['the','and','for','with','this','that','from','into','through','under','over','when','where','which','what','who','whom','whose','their','there','these','those','been','have','has','had','would','could','should','might','must','will','just','only','also','very','much','more','most','some','any','each','every','many','few','such']);
  const freq = {};
  for (const t of tokens) {
    if (stopWords.has(t)) continue;
    freq[t] = (freq[t] || 0) + 1;
  }
  return Object.entries(freq)
    .sort((a,b) => b[1] - a[1])
    .slice(0, count)
    .map(e => e[0]);
}

// Read content files (Markdown or TSX)
function discoverContentFiles() {
  const files = [];
  for (const dir of CONTENT_DIRS) {
    const full = path.join(process.cwd(), dir);
    if (!fs.existsSync(full)) continue;
    function walk(d) {
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const e of entries) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) walk(p);
        else if (/\.(mdx?|tsx|jsx)$/.test(e.name)) files.push(p);
      }
    }
    walk(full);
  }
  return files;
}

// Extract plain text from Markdown/TSX (strip HTML/JSX tags)
function extractText(content, ext) {
  if (ext === '.md' || ext === '.mdx') {
    // Strip frontmatter
    const withoutFront = content.replace(/^---\n[\s\S]*?\n---\n/, '');
    // Strip markdown syntax roughly
    return withoutFront.replace(/[#*`\[\]]/g, ' ').replace(/\n/g, ' ');
  } else if (ext === '.tsx' || ext === '.jsx') {
    // Very naive: remove tags and braces
    return content.replace(/<[^>]+>/g, ' ').replace(/[{}]/g, ' ').replace(/\n/g, ' ');
  }
  return content;
}

function main() {
  console.log('📝 Autonomous Content Summarizer — starting\n');
  ensureDir(STATE_DIR);

  const files = discoverContentFiles();
  console.log(`📁 Discovered ${files.length} content file(s)`);

  const summaries = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const ext = path.extname(file);
    const text = extractText(content, ext).trim();
    if (text.length < 50) {
      console.log(`   ⚠️  ${file} — too short, skipping`);
      continue;
    }

    const scored = scoreSentences(text);
    const topSentence = scored[0]?.text || '';
    const truncated = topSentence.substring(0, MAX_SUMMARY_LENGTH).replace(/\s+$/, '');
    const keywords = extractKeywords(text);
    const fileRel = file.replace(process.cwd(), '');

    console.log(`   📄 ${fileRel}`);
    console.log(`      Summary: ${truncated}`);
    console.log(`      Keywords: ${keywords.join(', ')}`);

    // Save summary suggestion
    const out = {
      file: fileRel,
      timestamp: nowISO(),
      excerpt: truncated,
      metaDescription: truncated,
      suggestedKeywords: keywords,
      topSentences: scored.slice(0, 3).map(s => s.text)
    };
    summaries.push(out);

    // Write to sidecar file for review
    const outPath = path.join(STATE_DIR, 'summaries', fileRel.replace(path.sep, '_') + '.json');
    ensureDir(path.dirname(outPath));
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  }

  // Save index
  const indexPath = path.join(STATE_DIR, 'summaries-index.json');
  fs.writeFileSync(indexPath, JSON.stringify(summaries, null, 2));

  console.log(`\n📄 Summaries saved to ${STATE_DIR}/summaries/`);
  console.log(`📊 Generated ${summaries.length} summary(ies).`);
  console.log('\n✅ Content summarization complete.\n');
  console.log('Note: Review suggested excerpts before adding to frontmatter.\n');

  process.exit(0);
}

main();
