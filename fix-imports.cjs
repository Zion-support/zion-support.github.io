#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Fix lucide-react import paths
function fixLucideImports(content) {
  // Fix malformed lucide-react imports
  const lucideFixPatterns = [
    // Fix missing characters in import paths
    { from: /from 'lucide-react\/dist\/esm\/icons\/rrowleft'/, to: "from 'lucide-react/dist/esm/icons/arrowleft'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/alendar'/, to: "from 'lucide-react/dist/esm/icons/calendar'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/ser'/, to: "from 'lucide-react/dist/esm/icons/user'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/ag'/, to: "from 'lucide-react/dist/esm/icons/tag'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/rendingup'/, to: "from 'lucide-react/dist/esm/icons/trendingup'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/ollarsign'/, to: "from 'lucide-react/dist/esm/icons/dollarsign'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/sers'/, to: "from 'lucide-react/dist/esm/icons/users'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/arget'/, to: "from 'lucide-react/dist/esm/icons/target'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/rain'/, to: "from 'lucide-react/dist/esm/icons/brain'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/ap'/, to: "from 'lucide-react/dist/esm/icons/map'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/hield'/, to: "from 'lucide-react/dist/esm/icons/shield'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/rrowright'/, to: "from 'lucide-react/dist/esm/icons/arrowright'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/lobe'/, to: "from 'lucide-react/dist/esm/icons/globe'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/ocket'/, to: "from 'lucide-react/dist/esm/icons/rocket'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/pu'/, to: "from 'lucide-react/dist/esm/icons/cpu'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/ot'/, to: "from 'lucide-react/dist/esm/icons/bot'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/hare2'/, to: "from 'lucide-react/dist/esm/icons/share2'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/ookmark'/, to: "from 'lucide-react/dist/esm/icons/bookmark'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/heckcircle'/, to: "from 'lucide-react/dist/esm/icons/checkcircle'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/ookopen'/, to: "from 'lucide-react/dist/esm/icons/bookopen'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/archart3'/, to: "from 'lucide-react/dist/esm/icons/barchart3'" },
    { from: /from 'lucide-react\/dist\/esm\/icons\/og'/, to: "from 'lucide-react/dist/esm/icons/tag'" },
  ];

  let fixedContent = content;
  lucideFixPatterns.forEach(pattern => {
    fixedContent = fixedContent.replace(pattern.from, pattern.to);
  });

  return fixedContent;
}

// Add missing Link import
function addLinkImport(content) {
  // Check if Link is used but not imported
  if (content.includes('<Link') && !content.includes("import Link")) {
    // Add Link import from next/link
    const importMatch = content.match(/import.*from ['"]react['"];?/);
    if (importMatch) {
      content = content.replace(importMatch[0], importMatch[0] + "\nimport Link from 'next/link';");
    } else {
      // Add at the top if no React import found
      content = "import Link from 'next/link';\n" + content;
    }
  }
  return content;
}

// Process all TypeScript/JSX files
async function processFiles() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  
  files.forEach(file => {
    try {
      const filePath = path.join(process.cwd(), file);
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix lucide imports
      content = fixLucideImports(content);
      
      // Add Link import if needed
      content = addLinkImport(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  
  console.log(`\nFixed ${fixedCount} files`);
}

processFiles().catch(console.error);