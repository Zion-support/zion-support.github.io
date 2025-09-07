const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const files = [
  'app/services/mobile-development/page.tsx',
  'app/services/it-services/page.tsx',
  'app/services/project-management/page.tsx',
  'app/services/ai-services/page.tsx',
  'app/services/blockchain/page.tsx',
  'app/services/automation-solutions/page.tsx',
  'app/services/crm-platform/page.tsx',
  'app/services/industry-solutions/finance/page.tsx',
  'app/services/mobile-app-development/page.tsx',
  'app/services/ai-hr-management/page.tsx',
  'app/services/crm-solution/page.tsx',
  'app/services/helpdesk-platform/page.tsx',
  'app/services/ecommerce-platform/page.tsx',
  'app/services/digital-transformation/page.tsx',
  'app/services/analytics-dashboard/page.tsx',
  'app/services/cloud-services/page.tsx',
  'app/services/ai-inventory-management/page.tsx',
  'app/services/project-management-suite/page.tsx',
  'app/services/social-media-management/page.tsx',
  'app/services/email-automation/page.tsx',
  'app/services/micro-saas/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Try to build after fixing conflicts
console.log('Attempting build after fixing conflicts...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error.message);
}
