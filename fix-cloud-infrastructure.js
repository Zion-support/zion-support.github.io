import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'app/cloud-infrastructure-management/page.tsx');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Fix common syntax errors
content = content
  // Replace semicolons with commas in object properties
  .replace(/popular: true;/g, 'popular: true')
  .replace(/popular: false;/g, 'popular: false')
  // Fix other syntax issues
  .replace(/;\s*}/g, '}')
  .replace(/;\s*]/g, ']')
  // Fix template literal issues
  .replace(/`[^`]*$/gm, '`')
  // Fix JSX issues
  .replace(/<>\s*<title>/g, '<>\n      <title>')
  .replace(/<\/title>\s*<h1/g, '</title>\n      <h1')
  .replace(/<\/h1>\s*<p/g, '</h1>\n      <p')
  .replace(/<\/p>\s*<a/g, '</p>\n      <a')
  .replace(/<\/a>\s*<\/>/g, '</a>\n    </>');

// Write the fixed content
fs.writeFileSync(filePath, content);
console.log('Fixed cloud-infrastructure-management page');