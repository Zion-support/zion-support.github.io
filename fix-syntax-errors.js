#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix malformed imports - replace 'import lucide-react from' with proper destructured imports
  const lucideImports = [
    'ArrowRight', 'CheckCircle', 'Star', 'Users', 'Clock', 'DollarSign', 'Shield', 'Code', 'Database', 'Mail', 'Settings', 'Target', 'TrendingUp', 'PieChart', 'MessageSquare', 'Heart', 'Globe', 'Smartphone', 'Network', 'Lock', 'Cpu', 'Wifi', 'Building2', 'Briefcase', 'Lightbulb', 'Brain', 'BarChart3', 'Cpu', 'Database', 'Shield', 'Zap', 'Target', 'Users', 'Globe', 'Lock', 'TrendingUp', 'PieChart', 'MessageSquare', 'Heart', 'Smartphone', 'Network', 'Building2', 'Briefcase', 'Lightbulb'
  ];

  // Remove malformed lucide-react imports
  fixed = fixed.replace(/import lucide-react from 'lucide-react';\n/g, '');
  
  // Fix malformed react-router-dom import
  fixed = fixed.replace(/import react-router-dom from 'react-router-dom';\n/g, '');
  
  // Fix malformed EnhancedSEO import
  fixed = fixed.replace(/import EnhancedSEO from '\.\.\/components\/EnhancedSEO';\n/g, '');

  // Fix unterminated string literals with trailing quotes
  fixed = fixed.replace(/';\n/g, ';\n');
  fixed = fixed.replace(/',\n/g, ',\n');
  fixed = fixed.replace(/'';\n/g, ';\n');
  fixed = fixed.replace(/''\n/g, '\n');
  fixed = fixed.replace(/''/g, '');

  // Fix malformed object properties
  fixed = fixed.replace(/icon: <(\w+) className="w-6 h-6" \/>,\n/g, 'icon: <$1 className="w-6 h-6" />,\n');
  
  // Fix missing closing brackets in JSX
  fixed = fixed.replace(/<EnhancedSEO ;\n/g, '<EnhancedSEO\n');
  fixed = fixed.replace(/<EnhancedSEO\n\s+title="([^"]*)"\n\s+description="([^"]*)"\n\s+\/>/g, '<EnhancedSEO\n        title="$1"\n        description="$2"\n      />');

  // Fix missing closing tags
  fixed = fixed.replace(/<(\w+)>\s*$/gm, '<$1></$1>');
  
  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/export default pagePage;/g, 'export default Page;');
  fixed = fixed.replace(/export default PagePage;/g, 'export default Page;');
  fixed = fixed.replace(/export default (\w+)Page;/g, 'export default Page;');

  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/^\s*<\/>\s*$/gm, '</>');

  // Fix missing closing div tags
  const openDivs = (fixed.match(/<div/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  if (openDivs > closeDivs) {
    const missingDivs = openDivs - closeDivs;
    for (let i = 0; i < missingDivs; i++) {
      fixed += '\n      </div>';
    }
  }

  // Fix missing closing section tags
  const openSections = (fixed.match(/<section/g) || []).length;
  const closeSections = (fixed.match(/<\/section>/g) || []).length;
  if (openSections > closeSections) {
    const missingSections = openSections - closeSections;
    for (let i = 0; i < missingSections; i++) {
      fixed += '\n        </section>';
    }
  }

  // Fix missing closing parentheses in return statements
  if (fixed.includes('return (') && !fixed.includes(');')) {
    fixed = fixed.replace(/return \(/g, 'return (\n    <>\n      ');
    fixed += '\n    </>\n  );';
  }

  // Fix malformed array syntax
  fixed = fixed.replace(/const (\w+) = \[\{\n/g, 'const $1 = [\n    {\n');
  fixed = fixed.replace(/^\s*\}\s*\]\s*;\s*$/gm, '  }\n  ];');

  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*$/gm, '$1;');

  // Clean up extra whitespace
  fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
  fixed = fixed.replace(/^\s*\n/gm, '');

  // Count changes
  if (fixed !== content) {
    changes = 1;
  }

  return { content: fixed, changes };
}

// Function to process all TSX files
async function processFiles() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern, { cwd: process.cwd() });
  
  let totalFiles = 0;
  let totalChanges = 0;

  console.log(`Found ${files.length} TSX files to process...`);

  files.forEach(file => {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      const { content: fixed, changes } = fixSyntaxErrors(content, file);
      
      if (changes > 0) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
        totalChanges++;
      }
      
      totalFiles++;
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  console.log(`\nProcessed ${totalFiles} files, fixed ${totalChanges} files.`);
}

// Run the fix
processFiles().catch(console.error);