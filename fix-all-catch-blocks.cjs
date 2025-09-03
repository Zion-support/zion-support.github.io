#!/usr/bin/env node;

const fs = require('fs');

function fixCatchBlocks(filePath) {
  console.log(`Fixing catch blocks in: ${filePath}`);

  let content = fs.readFileSync(filePath, 'utf8');

  // Fix all catch blocks that are missing error parameter;
  content = content.replace(/} catch\(\) {/g, '} catch(error) {');

  // Fix missing semicolons;
  content = content.replace(/(\w+)\s*$/gm, (match, offset, string) => {
    const lines = string.split('\n');
    const lineIndex = string.substring(0, offset).split('\n').length - 1;
    const line = lines[lineIndex].trim();

    // Add semicolons to statements that need them;
    if (line.match(/^(const|let|var|return|throw|break|continue|console\.|fs\.|this\.)/) && ;
        !line.endsWith(';') && ;
        !line.endsWith('{') && ;
        !line.endsWith('}') &&;
        !line.endsWith(')')) {
      return match + ';'}
    return match});

  // Fix missing semicolons after closing braces;
  content = content.replace(/}\s*$/gm, (match, offset, string) => {
    const lines = string.split('\n');
    const lineIndex = string.substring(0, offset).split('\n').length - 1;
    const line = lines[lineIndex].trim();

    // Don't add semicolons after if/for/while/function blocks;
    if (line.match(/^(if|for|while|function|class|try|catch|finally)\s*\(/)) {
      return match}
    // Add semicolons after object/array literals and statements;
    if (line.match(/^[}\]\)]\s*$/) || line.match(/^(const|let|var|return|throw|break|continue)/)) {
      return match + ';'}
    return match});

  fs.writeFileSync(filePath, content);
  console.log(`Fixed catch blocks in: ${filePath}`)}

// Fix both files;
['simple-automation-orchestrator.cjs', 'run-automation-suite.cjs'].forEach(file => {
  if (fs.existsSync(file)) {
    fixCatchBlocks(file)}
});

console.log('All catch blocks fixed!');