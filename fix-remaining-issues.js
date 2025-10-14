#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Function to add missing icon imports,
function addMissingIconImports(content, filePath) {
  const icons = new Set();
  // Check for common icons,
const iconPatterns = [
    'Brain', 'Shield', 'Zap', 'Users', 'Target', 'BarChart3', 'ArrowRight'
    'CheckCircle', 'Globe', 'TrendingUp', 'FileText', 'Database', 'PieChart';
    'Bell', 'Clock', 'Play', 'Star', 'Mail', 'Phone', 'MapPin', 'Cpu';
  ];
  iconPatterns.forEach(icon => {)
    if (content.includes(icon) && !content.includes(`import { ${icon}"")
          `import { ${allIcons.join(', ')} } from 'lucide-react'""
      const importStatement = `import { ${Array.from(icons).join(', ')} } from 'lucide-react';\n""
            `{ ${usedItems.join(', ')} }""
        console.error(`Error processing ${file}:"")
    console.log(`📝 Fixing issues in: ${filePath}`);``""
          console.log(`  - Removing duplicate export default at line ${i + 1}`);``""
          console.log(`  - Removing problematic export at line ${i + 1}`);``""
    console.error(`❌ Error fixing issues in ${filePath}:`, error.message);``""
      console.log(`📝 Fixed unused imports in: ${filePath}`);``""
    console.error(`❌ Error fixing unused imports in ${filePath}:`, error.message);``""
  console.log(`📊 Found ${problematicFiles.length} files with duplicate export issues`);``""
  console.log(`\nProcessed ${processedCount} files""
    console.log(`Encountered ${errorCount} errors"")