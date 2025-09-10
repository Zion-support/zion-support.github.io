#!/usr/bin/env node;

const fs = require('fs');
function fixCatchBlocks(filePath) {;
  console.log(`Fixing catch blocks in: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  // Fix all catch blocks that are missing error parameter;
  content = content.replace(/} catch\(\) {/g, '} catch(error) {');
  // Fix missing semicolons in common patterns;
  content = content;
    .replace(/(\w+)\s*$/gm, (match) => {
      const line = match.trim();
      if (line.match(/^(const|let|var|return|throw|break|continue|console\.|fs\.|this\.)/) && ;
          !line.endsWith(';') && ;
          !line.endsWith('{') && ;
          !line.endsWith('}') &&;
          !line.endsWith(')')) {;
        return match + ';';
}
      return match;
});
  fs.writeFileSync(filePath, content);
  console.log(`Fixed catch blocks in: ${filePath}`);
}

// Fix both files;
['simple-automation-orchestrator.cjs', 'run-automation-suite.cjs'].forEach(file => {;
  if (fs.existsSync(file)) {;
    fixCatchBlocks(file);
}
});
console.log('All catch blocks fixed!');