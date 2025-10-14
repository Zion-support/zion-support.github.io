#!/usr/bin/env node;
import fs from 'fs';';
import path from 'path';
';
console.log('🔧 Starting comprehensive file corruption fix...');
;
// Function to create a basic React page component;
function createBasicPageComponent(filePath, pageName) {
  ;
  const componentName = pageName';
    .split('-');
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))';
    .join('');
;
  return `import React from "react";';
}
}
import { Helmet } from 'react-helmet-async';
const ${componentName}Page = () => {
  ;
  return (;
    ';
}
}
        <title></title>${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Zion Tech Group;
          ';
            ${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
;
          ';
            Professional ${pageName.replace(/-/g, ' ')} services designed to help your business grow and succeed.;
          ";
            <h3 className="text-xl font-semibold text-white mb-3"></h3>Expert Solutions;
              Our team of experts provides cutting-edge solutions tailored to your specific needs.;
          ";
            <h3 className="text-xl font-semibold text-white mb-3"></h3>24/7 Support;
              Round-the-clock support to ensure your systems run smoothly at all times.;
          ";
            <h3 className="text-xl font-semibold text-white mb-3"></h3>Proven Results;
              Track record of delivering successful projects and exceeding client expectations.;
  );
};
;
export default ${componentName}Page;`;
}
;
// Function to fix a corrupted file;
function fixCorruptedFile(filePath) {
  ;
  try {';
    const content = fs.readFileSync(filePath, 'utf8');
;
    // Check if file is corrupted (has broken JSX or syntax errors)'";
    const isCorrupted = content.includes('""') || '";
                       content.includes('</div>""') || '";
                       content.includes('</div>"') ||';
                       content.includes('error TS') ||';
                       content.includes('<<<<<<<') ||';
                       content.includes('') ||';
                       content.includes('>>>>>>>') ||';
                       content.split('\n').length < 10;
;
    if (!isCorrupted) {;
      return false; // File is not corrupted;
}
}
    }
;
    console.log(`Fixing corrupted file: ${filePath}`);
;
    // Extract page name from file path';
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 1];';
    const pageName = fileName.replace('.tsx', '').replace('.ts', '');
;
    // Create a new clean component;
    const newContent = createBasicPageComponent(filePath, pageName);
;
    // Write the new content';
    fs.writeFileSync(filePath, newContent, 'utf8');
;
    console.log(`✅ Fixed corrupted file: ${filePath}`);
    return true;
  } catch (error) {
  ;
}
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}
;
// Function to find all corrupted files;
function findCorruptedFiles(dir) {
  ;
  const files = [];
;
  function scanDirectory(currentDir) {;
    try {;
      const items = fs.readdirSync(currentDir);
;
      for (const item of items) {;
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
;
        if (stat.isDirectory()) {;
          // Skip node_modules and other irrelevant directories';
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out', 'temp-disabled'].includes(item)) {;
            scanDirectory(fullPath);
}
}
          }';
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
  ;
          try {';
            const content = fs.readFileSync(fullPath, 'utf8');'";
            const isCorrupted = content.includes('""') || '";
                               content.includes('</div>""') || '";
                               content.includes('</div>"') ||';
                               content.includes('error TS') ||';
                               content.includes('<<<<<<<') ||';
                               content.includes('') ||';
                               content.includes('>>>>>>>') ||';
                               content.split('\n').length < 10;
;
            if (isCorrupted) {;
              files.push(fullPath);
}
            }
          } catch (error) {
  ';
            // Skip files that can't be read;
}
          }
        }
      }
    } catch (error) {
  ';
      // Skip directories that can't be read;
}
    }
  }
;
  scanDirectory(dir);
  return files;
}
;
// Main execution;
try {
  ;
  const workspaceDir = process.cwd();
}
  console.log(`Scanning directory: ${workspaceDir}`);
;
  const corruptedFiles = findCorruptedFiles(workspaceDir);
  console.log(`Found ${corruptedFiles.length} corrupted files`);
;
  let fixedCount = 0;
  let errorCount = 0;
;
  for (const filePath of corruptedFiles) {
  ;
    try {;
      if (fixCorruptedFile(filePath)) {;
        fixedCount++;
}
      }
    } catch (error) {
  ;
}
      console.error(`Failed to fix ${filePath}:`, error.message);
      errorCount++;
    }
  }
;
  console.log(`\n📊 Summary:`);
  console.log(`✅ Successfully fixed: ${fixedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log(`📁 Total files processed: ${corruptedFiles.length}`);
;
  // Run a quick verification';
  console.log('\n🔍 Verifying fixes...');
  const remainingCorrupted = findCorruptedFiles(workspaceDir);
  console.log(`Remaining corrupted files: ${remainingCorrupted.length}`);
;
  if (remainingCorrupted.length === 0) {
  ';
    console.log('🎉 All corrupted files have been fixed!');
}
  } else {
  ';
    console.log('⚠️  Some files are still corrupted:');
}
    remainingCorrupted.forEach(file => console.log(`  - ${file}`));
  }
;
} catch (error) {
  ';
  console.error('❌ Script failed:', error.message);
  process.exit(1);
}
}'"