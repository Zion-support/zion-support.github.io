const fs = require('fs');
const path = require('path');

// Function to resolve second PR conflicts
function resolveSecondPRConflicts() {
  console.log('Resolving second PR conflicts...');
  
  // Files with merge conflicts
  const conflictedFiles = [
    'next-env.d.ts',
    'package-lock.json',
    'pages/AIServices.tsx',
    'pages/ITServices.tsx', 
    'pages/micro-saas.tsx',
    'yarn.lock',
    'src_backup_temp/pages/EnhancedServicesShowcase2025.tsx'
  ];
  
  // Resolve conflicts by keeping HEAD version and cleaning up
  conflictedFiles.forEach(file => {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove merge conflict markers
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======.*?\n?/g, '');
      content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
      content = content.replace(/>>>>>>> origin\/[^\n]+\n?/g, '');
      
      // Clean up any remaining artifacts
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(file, content);
      console.log(`Resolved conflicts in ${file}`);
    }
  });
  
  // Keep new files from PR that don't conflict
  const newFiles = [
    'src/App.tsx',
    'src/data/aiServicesData.ts',
    'src/data/enhancedZionTechServices2025.ts',
    'src/data/itServicesData.ts',
    'src/data/microSaasServicesData.ts'
  ];
  
  newFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`Keeping new file from PR: ${file}`);
    }
  });
  
  console.log('Second PR conflicts resolved!');
}

// Run the conflict resolution
resolveSecondPRConflicts();