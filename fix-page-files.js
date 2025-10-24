#!/usr/bin/env node

// Function to fix common page file syntax errors
function fixPageSyntax(content) {
  // Fix malformed JSX fragments: content = content.replace(/<>\s*\s*<\/>/g, '<></>'
  content = content.replace(/<>\s*;\s*$/gm, '<></>'
  // Fix malformed JSX elements: content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*\s*>/g, '<$1>'
  content = content.replace(/<([a-z][a-zA-Z0-9]*)\s*\s*>/g, '<$1>'
  // Fix malformed JSX attributes: content = content.replace(/className\s*\s*=/g, 'className='
  content = content.replace(/id\s*;\s*=/g, 'id='
  content = content.replace(/href\s*;\s*=/g, 'href='
  // Fix malformed return statements: content = content.replace(/return\s*\(\s*\s*$/gm, 'return ('
  // Fix malformed function declarations: content = content.replace(/export default function\s+([a-zA-Z0-9_]+)\s*\(\s*\)\s*\{\s*\s*$/gm, 'export default function $1() {'
  // Fix malformed JSX closing tags: content = content.replace(/<\/\s*\s*>/g, '</>'
  // Fix malformed object literals: content = content.replace(/\{\s*\s*\}/g, '{}'
  // Fix malformed array literals: content = content.replace(/\[\s*\s*\]/g, '[]'
  // Fix malformed function calls: content = content.replace(/\(\s*\s*\)/g, '()'
  // Fix malformed template literals: content = content.replace(/`\s*\s*`/g, '``'
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules'
const pageFiles  = findPageFiles('./app'