#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to find all TypeScript/JSX files with errors
function findFilesWithErrors() {
  try {
    const result = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    const lines = result.split('\n');
    const files = new Set();
    
    for (const line of lines) {
      const match = line.match(/^([^(]+)\(/);
      if (match) {
        files.add(match[1]);
      }
    }
    
    return Array.from(files);
  } catch (error) {
    // Extract files from error output
    const lines = error.stdout.split('\n');
    const files = new Set();
    
    for (const line of lines) {
      const match = line.match(/^([^(]+)\(/);
      if (match) {
        files.add(match[1]);
      }
    }
    
    return Array.from(files);
  }
}

// Function to fix common JSX syntax errors
function fixJSXErrors(filePath) {
  console.log(`Fixing JSX errors in: ${filePath}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unclosed JSX tags by adding proper closing tags
    const openTags = ['div', 'section', 'main', 'article', 'header', 'footer', 'nav', 'aside', 'span', 'p'];
    
    for (const tag of openTags) {
      const openRegex = new RegExp(`<${tag}([^>]*)>`, 'g');
      const closeRegex = new RegExp(`</${tag}>`, 'g');
      
      const openMatches = (content.match(openRegex) || []).length;
      const closeMatches = (content.match(closeRegex) || []).length;
      
      if (openMatches > closeMatches) {
        // Find the last opening tag and add closing tag
        const lastOpenIndex = content.lastIndexOf(`<${tag}`);
        if (lastOpenIndex !== -1) {
          const beforeLastOpen = content.substring(0, lastOpenIndex);
          const afterLastOpen = content.substring(lastOpenIndex);
          const openTagMatch = afterLastOpen.match(new RegExp(`<${tag}([^>]*)>`));
          
          if (openTagMatch && !openTagMatch[0].includes('/>')) {
            // Add closing tag at the end of the component
            const missingTags = openMatches - closeMatches;
            for (let i = 0; i < missingTags; i++) {
              content += `\n        </${tag}>`;
            }
            modified = true;
          }
        }
      }
    }
    
    // Fix React Fragment issues
    if (content.includes('<>') && !content.includes('</>')) {
      content = content.replace(/<>/g, '<React.Fragment>');
      content = content.replace(/<\/>/g, '</React.Fragment>');
      modified = true;
    }
    
    // Fix missing return statement in React components
    if (content.includes('React.FC') && !content.includes('return (')) {
      const lines = content.split('\n');
      const newLines = [];
      let foundComponent = false;
      let foundReturn = false;
      let braceCount = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('React.FC') && !foundComponent) {
          foundComponent = true;
          newLines.push(line);
          continue;
        }
        
        if (foundComponent && !foundReturn) {
          if (line.includes('{')) {
            braceCount++;
          }
          if (line.includes('}')) {
            braceCount--;
          }
          
          if (braceCount === 1 && line.trim() === '{') {
            newLines.push(line);
            newLines.push('  return (');
            foundReturn = true;
            continue;
          }
        }
        
        newLines.push(line);
      }
      
      if (foundComponent && !foundReturn) {
        content = newLines.join('\n');
        modified = true;
      }
    }
    
    // Fix missing export default
    if (content.includes('const') && content.includes('React.FC') && !content.includes('export default')) {
      const componentMatch = content.match(/const\s+(\w+):\s*React\.FC/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        content += `\n\nexport default ${componentName};`;
        modified = true;
      }
    }
    
    // Fix incomplete JSX expressions
    content = content.replace(/\{\s*$/gm, '');
    content = content.replace(/^\s*\}\s*$/gm, '');
    
    // Fix missing closing parentheses in JSX
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      for (let i = 0; i < missingParens; i++) {
        content += ')';
      }
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Fixed JSX errors in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    'app/ai-automation/page.tsx',
    'app/ai-autonomous-systems/page.tsx',
    'app/ai-blockchain-analytics/page.tsx',
    'app/ai-blockchain-solutions/page.tsx',
    'app/ai-climate-solutions-pro/page.tsx',
    'app/ai-cloud-infrastructure/page.tsx',
    'app/ai-code-assistant/page.tsx'
  ];
  
  for (const filePath of problematicFiles) {
    if (fs.existsSync(filePath)) {
      console.log(`Fixing specific file: ${filePath}`);
      
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove any remaining merge conflict markers
        content = content.replace(/<<<<<<<.*?=======.*?>>>>>>>/gs, '');
        content = content.replace(/<<<<<<<.*?>>>>>>>/gs, '');
        content = content.replace(/=======.*?>>>>>>>/gs, '');
        
        // Fix incomplete JSX structure
        if (content.includes('React.FC') && !content.includes('return (')) {
          const lines = content.split('\n');
          const newLines = [];
          let foundComponent = false;
          let foundReturn = false;
          
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            if (line.includes('React.FC') && !foundComponent) {
              foundComponent = true;
              newLines.push(line);
              newLines.push('  return (');
              newLines.push('    <>');
              foundReturn = true;
              continue;
            }
            
            if (foundComponent && !foundReturn && line.trim().startsWith('<>')) {
              foundReturn = true;
            }
            
            newLines.push(line);
          }
          
          if (foundComponent && !foundReturn) {
            content = newLines.join('\n');
          }
        }
        
        // Ensure proper closing
        if (!content.includes('</>') && content.includes('<>')) {
          content += '\n    </>\n  );\n};';
        }
        
        // Add export default if missing
        if (content.includes('React.FC') && !content.includes('export default')) {
          const componentMatch = content.match(/const\s+(\w+):\s*React\.FC/);
          if (componentMatch) {
            const componentName = componentMatch[1];
            content += `\n\nexport default ${componentName};`;
          }
        }
        
        fs.writeFileSync(filePath, content);
        console.log(`✓ Fixed specific file: ${filePath}`);
        
      } catch (error) {
        console.error(`Error fixing ${filePath}:`, error.message);
      }
    }
  }
}

// Main execution
console.log('🔍 Finding files with TypeScript errors...');
const filesWithErrors = findFilesWithErrors();

console.log(`Found ${filesWithErrors.length} files with errors:`);
filesWithErrors.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Fixing specific problematic files...');
fixSpecificFiles();

console.log('\n🔧 Fixing JSX errors in all files...');
filesWithErrors.forEach(fixJSXErrors);

console.log('\n✅ Error fixing completed!');