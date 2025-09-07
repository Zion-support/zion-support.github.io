const fs = require('fs');
const path = require('path');
console.log('🧹 Starting Final Cleanup...');
// Function to clean merge conflict markers
function cleanMergeConflicts(content) {
  return content
    .replace(/
  // Clean up any remaining artifacts
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  // Remove any remaining conflict markers
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip node_modules and other problematic directories
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'coverage'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Process specific file types
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json'].includes(ext)) {
          if (processFile(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.log(`Error processing directory ${dirPath}: ${error.message}`);
  }
  return processedCount;
}
// Main execution
const startTime = Date.now();
const processedFiles = processDirectory('/workspace');
const endTime = Date.now();
console.log(`✅ Final cleanup completed!`);
console.log(`📁 Processed ${processedFiles} files`);
console.log(`⏱️  Took ${endTime - startTime}ms`);
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6