import fs from 'fs';
import path from 'path';

// List of files with conflicts
const conflictedFiles = [
  'app/pages/CloudInfrastructurePage.tsx',
  'app/pages/DigitalTransformationPage.tsx',
  'app/pages/ITServicesPage.tsx'
];

// Resolve conflicts by keeping the HEAD version (our fixes)
const resolveConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+\n/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Resolved conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error resolving ${filePath}:`, error.message);
  }
};

// Resolve all conflicts
conflictedFiles.forEach(file => {
  resolveConflicts(file);
});

console.log('All conflicts resolved!');