const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to clean
    }
    
    console.log(`Cleaning merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers and take the last version (usually the most recent)
    const parts = content.split(/<<<<<<< HEAD|=======|>>>>>>> [^\n]*/);
    
    // If we have 3 parts, take the middle one (between ======= and >>>>>>>)
    // If we have 5 parts, take the 4th one (after the second =======)
    let cleanedContent = content;
    
    // Remove all merge conflict markers and keep the last version
    cleanedContent = cleanedContent.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    
    // If there are still markers, try a different approach
    if (cleanedContent.includes('<<<<<<<') || cleanedContent.includes('=======') || cleanedContent.includes('>>>>>>>')) {
      // Take everything after the last >>>>>>> marker
      const lastMarkerIndex = cleanedContent.lastIndexOf('>>>>>>>');
      if (lastMarkerIndex !== -1) {
        cleanedContent = cleanedContent.substring(lastMarkerIndex);
        // Remove the marker line itself
        cleanedContent = cleanedContent.replace(/>>>>>>> [^\n]*\n?/, '');
      }
    }
    
    // Clean up any remaining artifacts
    cleanedContent = cleanedContent.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    cleanedContent = cleanedContent.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    cleanedContent = cleanedContent.replace(/=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    
    // Remove any remaining conflict markers
    cleanedContent = cleanedContent.replace(/<<<<<<< [^\n]*\n?/g, '');
    cleanedContent = cleanedContent.replace(/=======\n?/g, '');
    cleanedContent = cleanedContent.replace(/>>>>>>> [^\n]*\n?/g, '');
    
    // Clean up extra whitespace
    cleanedContent = cleanedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, cleanedContent);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and clean files
function cleanDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let cleanedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
        cleanedCount += cleanDirectory(fullPath);
      }
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
      if (cleanMergeConflicts(fullPath)) {
        cleanedCount++;
      }
    }
  }
  
  return cleanedCount;
}

// Main execution
console.log('Starting merge conflict cleanup...');
const cleanedCount = cleanDirectory('/workspace');
console.log(`Cleaned ${cleanedCount} files with merge conflicts.`);

// Also try to run git status to see if there are any remaining conflicts
try {
  const gitStatus = execSync('git status --porcelain', { cwd: '/workspace', encoding: 'utf8' });
  const conflictedFiles = gitStatus.split('\n').filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'));
  if (conflictedFiles.length > 0) {
    console.log('Files still in conflict state:', conflictedFiles);
  }
} catch (error) {
  console.log('Could not check git status:', error.message);
}