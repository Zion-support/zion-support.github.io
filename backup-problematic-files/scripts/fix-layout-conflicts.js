#!/usr/bin/env node
import fs from 'fs';
import {glob} from 'glob';
let totalFixes = 0;
let filesProcessed = 0;
// Fix Layout import conflicts
  let fixedContent = content;
  let changes = 0;
  // Check if both Layout component and Layout icon are imported
  const hasLayoutComponent =
    fixedContent.includes("import Layout from '../components/Layout';");
  const hasLayoutIcon =
    fixedContent.includes('Layout,') || fixedContent.includes('Layout }');
  if (hasLayoutComponent && hasLayoutIcon) {
    // Remove Layout from lucide-react import
    fixedContent = fixedContent.replace(/Layout,\s*/g, '');
    fixedContent = fixedContent.replace(/,\s*Layout/g, '');
    fixedContent = fixedContent.replace(/{\s*Layout\s*}/g, '{}');
    changes++;
    console.log(` Fixed Layout conflict in ${filePath}`)}
  return { "content": fixedContent, changes }}
// Process individual file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixLayoutConflicts(content, filePath);
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content, 'utf8');
      totalFixes += result.changes}
    filesProcessed++} catch (error) {
}
// Main function
async function main() {
  console.log(' Starting Layout conflicts fix...\n');
  const patterns = ['pages/**/*.{tsx,jsx}',
    'src/**/*.{tsx,jsx}',
    'components/**/*.{tsx,jsx}',
  ];
  const excludeDirs = ['node_modules',
    '.next',
      'build'
    'dist',
      'scripts'
    'automation',
      'automation_backup'
    'src.disabled',
    'pages.disabled',
    'components.disabled',
  ];
