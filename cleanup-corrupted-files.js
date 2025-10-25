const fs = require('fs');
const path = require('path');

// List of known corrupted file patterns to remove
const corruptedPatterns = [
  'page-backup.tsx',
  'page-fixed.tsx',
  'page-broken',
  '.tsx.bak',
  '.ts.bak',
  '.js.bak'
];

// List of directories to clean up
const directoriesToClean = [
  'app/components',
  'app/hooks',
  'app/utils',
  'app/types',
  'app/pages',
  'app/config',
  'src',
  'components'
];

// Function to remove corrupted files
function removeCorruptedFiles(dir) {
  let removedCount = 0;
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursively clean subdirectories
        removedCount += removeCorruptedFiles(filePath);
      } else {
        // Check if file matches corrupted patterns
        const shouldRemove = corruptedPatterns.some(pattern => 
          file.includes(pattern) || file.endsWith(pattern)
        );
        
        if (shouldRemove) {
          fs.unlinkSync(filePath);
          console.log(`Removed corrupted file: ${filePath}`);
          removedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
  
  return removedCount;
}

// Function to clean up specific problematic files
function cleanSpecificFiles() {
  const filesToClean = [
    'app/404.tsx',
    'app/force-dynamic.ts',
    'app/main.tsx',
    'app/root-layout.tsx',
    'app/service-template.tsx',
    'app/data/servicesData.ts',
    'app/micro-saas-services/microSaasServices.tsx',
    'app/micro-saas-services/services.tsx'
  ];
  
  let cleanedCount = 0;
  
  filesToClean.forEach(filePath => {
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Removed problematic file: ${filePath}`);
        cleanedCount++;
      }
    } catch (error) {
      console.error(`Error removing ${filePath}:`, error.message);
    }
  });
  
  return cleanedCount;
}

// Function to create a simple 404 page
function createSimple404() {
  const content = `export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">Page Not Found</p>
        <a href="/" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Go Home
        </a>
      </div>
    </div>
  );
}`;
  
  try {
    fs.writeFileSync('app/not-found.tsx', content);
    console.log('Created simple 404 page');
  } catch (error) {
    console.error('Error creating 404 page:', error.message);
  }
}

// Main cleanup function
function cleanup() {
  console.log('Starting cleanup of corrupted files...');
  
  let totalRemoved = 0;
  
  // Remove corrupted files from all directories
  directoriesToClean.forEach(dir => {
    if (fs.existsSync(dir)) {
      console.log(`Cleaning directory: ${dir}`);
      totalRemoved += removeCorruptedFiles(dir);
    }
  });
  
  // Clean specific problematic files
  console.log('Cleaning specific problematic files...');
  totalRemoved += cleanSpecificFiles();
  
  // Create simple 404 page
  createSimple404();
  
  console.log(`Cleanup complete. Removed ${totalRemoved} files.`);
}

// Run cleanup
cleanup();