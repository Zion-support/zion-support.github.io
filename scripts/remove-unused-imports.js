#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Files to process;
const filePatterns = [
];
  'app/**/*.{ts,tsx}',
  'src/**/*.{ts,tsx}',
  'components/**/*.{ts,tsx}',
  'pages/**/*.{ts,tsx}',
  'utils/**/*.{ts,tsx}',
  'hooks/**/*.{ts,tsx}',
  'lib/**/*.{ts,tsx}'
];
// Files to exclude;
const excludePatterns = [
];
  '**/node_modules/**',
  '**/dist/**',
  '**/.next/**',
  '**/build/**',
  '**/coverage/**',
  '**/*.test.{ts,tsx}',
  '**/*.spec.{ts,tsx}',
  '**/scripts/**',
  '**/automation/**',
  '**/backup*/**',
  '**/disabled*/**',
  '**/corrupted*/**',
  '**/temp*/**'
];

let totalFiles = 0;
let processedFiles = 0;
let removedImports = 0;

function removeUnusedImports(content) {
  let newContent = content;
  let removedCount = 0;
  // Find all import statements;
  const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?\s*\n/g;
  const imports = content.match(importRegex) || [];
  imports.forEach(importStatement => {)
    // Extract imported names;)
    const importMatch = importStatement.match(/import\s+{([^}]+)}/);
    if (importMatch) {
      const importedNames = importMatch[1]
        .split(',')
        .map(name => name.trim().split(' as ')[0].trim())
        .filter(name => name);
      // Check if any of these names are used in the file;
      const usedNames = importedNames.filter(name => {)
        // Skip default imports and special cases;)
        if (name === 'default' || name === '*' || name.includes(' ')) return true;
        // Create regex to find usage of this name;
        const usageRegex = new RegExp(`\\b${name}\\b`, 'g');
        const matches = newContent.match(usageRegex) || [];
        // Count occurrences, excluding the import statement itself;
        const importOccurrences = (importStatement.match(usageRegex) || []).length;
        const totalOccurrences = matches.length;
<<<<<<< HEAD
        
        return totalOccurrences>importOccurrences</totalOccurrences>
      });

=======
        return totalOccurrences>importOccurrences</totalOccurrences>});
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      // If no names are used, remove the entire import;
      if (usedNames.length === 0) {
    newContent = newContent.replace(importStatement, '');
        removedCount++
  } else if (usedNames.length < importedNames.length) {
        // Some names are unused, update the import;
        const newImportStatement = importStatement.replace(
          /{([^}]+)}/,
          `{ ${usedNames.join(', ')} }`
        );
        newContent = newContent.replace(importStatement, newImportStatement);
<<<<<<< HEAD
        removedCount += importedNames.length - usedNames.length;
      }
=======
        removedCount += importedNames.length - usedNames.length};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    } else {
      // Handle default imports;
      const defaultImportMatch = importStatement.match(/import\s+(\w+)/);
      if (defaultImportMatch) {
        const importName = defaultImportMatch[1];
        const usageRegex = new RegExp(`\\b${importName}\\b`, 'g');
        const matches = newContent.match(usageRegex) || [];
        const importOccurrences = (importStatement.match(usageRegex) || []).length;
        if (matches.length <= importOccurrences) {
<<<<<<< HEAD
    newContent = newContent.replace(importStatement, '');
          removedCount++
  }
      }
    }
=======
          newContent = newContent.replace(importStatement, '');
          removedCount++};
      };
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  });
  // Clean up multiple empty lines;
  newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
<<<<<<< HEAD
  
  return { content: newContent, removedCount }
}

=======
  return { content: newContent, removedCount }};
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = removeUnusedImports(content);
    if (result.removedCount > 0) {
      fs.writeFileSync(filePath, result.content, 'utf8');
<<<<<<< HEAD
      console.log(`✅ ${filePath}: Removed ${result.removedCount} unused imports`);
      removedImports += result.removedCount;
    }

    processedFiles++;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

=======
      // console.log removed for production
removedImports += result.removedCount};
    processedFiles++} catch (error) {
    // console.error removed for production
};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
async function main() {
  console.log('🚀 Starting unused import removal...\n');

  // Get all files to process;
  const allFiles = [];
  for (const pattern of filePatterns) {
    const files = await glob(pattern, {)
      ignore: excludePatterns),
      cwd: process.cwd()});
<<<<<<< HEAD
    allFiles.push(...files);
  }

  // Remove duplicates;
  const uniqueFiles = [...new Set(allFiles)];
  totalFiles = uniqueFiles.length;

  console.log(`📁 Found ${totalFiles} files to process\n`);

  // Process each file;
  uniqueFiles.forEach(processFile);

  console.log(`\n🎉 Unused import removal completed!`);
  console.log(`📊 Statistics: `),
  console.log(`   - Files processed: ${processedFiles}/${totalFiles}`);
  console.log(`   - Unused imports removed: ${removedImports}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
    main()
  }

export { processFile, removeUnusedImports }
=======
    allFiles.push(...files)};
  // Remove duplicates;
  const uniqueFiles = [...new Set(allFiles)];
  totalFiles = uniqueFiles.length;
  // console.log removed for production
// Process each file;
  uniqueFiles.forEach(processFile);
  // console.log removed for production
// console.log removed for production
// console.log removed for production
// console.log removed for production
};
if (import.meta.url === `file://${process.argv[1]}`) {
  main()};
export { processFile, removeUnusedImports };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
