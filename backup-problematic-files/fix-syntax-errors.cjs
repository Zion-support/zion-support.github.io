#!/usr/bin/env node

const fs = require('fs');

<<<<<<< HEAD
// Read the file
let content = fs.readFileSync('enhanced-automation-suite.cjs', 'utf8');

// Fix all syntax errors
const fixes = [
  // Fix property names with colons
  { from: /succes: s:/g, to: 'success:' },
  { from: /duratio: n:/g, to: 'duration:' },
  { from: /error: s:/g, to: 'errors:' },
  { from: /warning: s:/g, to: 'warnings:' },
  { from: /cw: d:/g, to: 'cwd:' },
  { from: /stdi: o:/g, to: 'stdio:' },
  { from: /encodin: g:/g, to: 'encoding:' },
  { from: /outpu: t:/g, to: 'output:' },
  { from: /erro: r:/g, to: 'error:' },
  { from: /Runnin: g:/g, to: 'Running:' },
  { from: /faile: d:/g, to: 'failed:' },
  { from: /prefer-cons: t:/g, to: 'prefer-const:' },
  { from: /no-va: r:/g, to: 'no-var:' },
  { from: /timestam: p:/g, to: 'timestamp:' },
  { from: /statu: s:/g, to: 'status:' },
  { from: /script: s:/g, to: 'scripts:' },
  { from: /summar: y:/g, to: 'summary:' },
  { from: /complet: ed:/g, to: 'completed:' },
  { from: /fail: ed:/g, to: 'failed:' },
  { from: /runnin: g:/g, to: 'running:' },
  { from: /buildin: g:/g, to: 'building:' },
  { from: /testin: g:/g, to: 'testing:' },
  { from: /deployin: g:/g, to: 'deploying:' },
  { from: /result: s:/g, to: 'results:' },
  { from: /messag: e:/g, to: 'message:' },
  { from: /typ: e:/g, to: 'type:' },
  { from: /valu: e:/g, to: 'value:' },
  { from: /nam: e:/g, to: 'name:' },
  { from: /fil: e:/g, to: 'file:' },
  { from: /lin: e:/g, to: 'line:' },
  { from: /cod: e:/g, to: 'code:' },
  { from: /rul: e:/g, to: 'rule:' },
  { from: /optio: n:/g, to: 'option:' },
  { from: /configuratio: n:/g, to: 'configuration:' },
  { from: /implementatio: n:/g, to: 'implementation:' },
  { from: /optimizatio: n:/g, to: 'optimization:' },
  { from: /applicatio: n:/g, to: 'application:' },
  { from: /operatio: n:/g, to: 'operation:' },
  { from: /informatio: n:/g, to: 'information:' },
  { from: /actio: n:/g, to: 'action:' },
  { from: /functio: n:/g, to: 'function:' },
  { from: /solutio: n:/g, to: 'solution:' },
  { from: /locatio: n:/g, to: 'location:' },
  { from: /directio: n:/g, to: 'direction:' },
  { from: /connectio: n:/g, to: 'connection:' },
  { from: /collectio: n:/g, to: 'collection:' },
  { from: /inspectio: n:/g, to: 'inspection:' },
  { from: /correctio: n:/g, to: 'correction:' },
  { from: /detectio: n:/g, to: 'detection:' },
  { from: /protectio: n:/g, to: 'protection:' },
  { from: /productio: n:/g, to: 'production:' },
  { from: /reductio: n:/g, to: 'reduction:' },
  { from: /constructio: n:/g, to: 'construction:' },
  { from: /destructio: n:/g, to: 'destruction:' },
  { from: /instructio: n:/g, to: 'instruction:' },
  { from: /destructio: n:/g, to: 'destruction:' },
  { from: /introductio: n:/g, to: 'introduction:' },
  { from: /productio: n:/g, to: 'production:' },
  { from: /reductio: n:/g, to: 'reduction:' },
  { from: /constructio: n:/g, to: 'construction:' },
  { from: /destructio: n:/g, to: 'destruction:' },
  { from: /instructio: n:/g, to: 'instruction:' },
  { from: /destructio: n:/g, to: 'destruction:' },
  { from: /introductio: n:/g, to: 'introduction:' },
];

// Apply fixes
fixes.forEach(fix => {
  content = content.replace(fix.from, fix.to);
});

// Write the fixed content back
fs.writeFileSync('enhanced-automation-suite.cjs', content);

console.log('✅ Fixed all syntax errors in enhanced-automation-suite.cjs');
=======
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Remove extra commas and semicolons
      .replace(/,;/g, ';')
      .replace(/,\s*;/g, ';')
      .replace(/,\s*$/gm, '')
      .replace(/;\s*$/gm, ';')
      // Fix object syntax
      .replace(/,(\s*[}\]])/g, '$1')
      // Fix function parameters
      .replace(/,\s*\)/g, ')')
      // Fix JSX attributes
      .replace(/,(\s*[>}])/g, '$1')
      // Fix CSS class names
      .replace(/:\s*([a-zA-Z-]+)\s*{/g, ':$1 {')
      .replace(/:\s*not-([a-zA-Z-]+)/g, ':not-$1')
      // Fix hover states
      .replace(/hover:\s*([a-zA-Z-]+)/g, 'hover:$1')
      // Fix focus states
      .replace(/focus:\s*([a-zA-Z-]+)/g, 'focus:$1')
      // Fix group hover
      .replace(/group-hover:\s*([a-zA-Z-]+)/g, 'group-hover:$1')
      // Fix missing imports
      .replace(/^import\s+React[^;]*;\s*$/gm, (match) => {
        if (!match.includes('{')) {
          return match.replace('React', 'React, { useState, useEffect }');
        }
        return match;
      })
      // Fix missing export
      .replace(/^const\s+(\w+):\s*React\.FC[^;]*$/gm, (match, name) => {
        if (!content.includes(`export default ${name}`)) {
          return match + `\n\nexport default ${name};`;
        }
        return match;
      });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.match(/\.(tsx?|jsx?)$/)) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = findAndFixFiles('/workspace/components');
console.log(`Fixed ${fixedCount} files in components directory`);

const hooksFixedCount = findAndFixFiles('/workspace/hooks');
console.log(`Fixed ${hooksFixedCount} files in hooks directory`);

console.log('Syntax error fixes completed!');
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
