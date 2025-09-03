const fs = require('fs');

function resolveConflicts(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove all conflict markers and keep the HEAD version
  content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1');
  
  // Clean up any remaining conflict markers
  content = content.replace(/<<<<<<< HEAD\n/g, '');
  content = content.replace(/=======\n/g, '');
  content = content.replace(/>>>>>>> [^\n]+\n/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Resolved conflicts in ${filePath}`);
}

// Resolve conflicts in the service pages
resolveConflicts('pages/ai-services.tsx');
resolveConflicts('pages/it-services.tsx');
resolveConflicts('pages/micro-saas.tsx');
resolveConflicts('pages/index.tsx');

console.log('All conflicts resolved!');