#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

// Simple README maintenance: append an automation run footer with timestamp
function main() {
  const repoRoot = process.cwd();
  const readmePath = path.join(repoRoot, 'README.md');
  const now = new Date().toISOString();

  let content = '';
  try {
    content = fs.readFileSync(readmePath, 'utf8');
  } catch (err) {
    // If README doesn't exist, create a basic one
    content = '# Project\n\n';
  }

  const footer = `\n\n---\nAutomation summary: README refreshed ${now}\n`;
  if (!content.includes('Automation summary:')) {
    content += footer;
  } else {
    // replace existing footer
    content = content.replace(/\n---\nAutomation summary:[\s\S]*$/m, footer);
  }

  fs.writeFileSync(readmePath, content, 'utf8');
  console.log('✅ README updated');
}

main();
