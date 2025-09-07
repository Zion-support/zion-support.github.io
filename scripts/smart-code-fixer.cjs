

<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('🔧 Smart Code Fixer');
<<<<<<< HEAD
console.log('=====');
=======
console.log('====);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
// Function to fix unescaped entities only in JSX content;
function fixUnescapedEntities(content) {
  // Only replace single quotes that are not in import statements or string literals;
  // This regex looks for single quotes that are not preceded by import, from, or within quotes;
<<<<<<< HEAD
  return content.replace(/(?<!import\s+.*?from\s+['"])(?<!['"])(?<![a-zA-Z_$])'([^'"]*?)'(?!['"])(?![a-zA-Z_$])/g, (match, content) => {""
=======
  return content.replace(/(?<!import\s+.*?from\s+["])(?<!["])(?<![a-zA-Z_$])([^'"]*?)(?!["])(?![a-zA-Z_$])/g, (match, content) => {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    // Only replace if it's likely JSX content (contains spaces or common JSX patterns)
    if (content.includes('&') || content.includes('<') || content.includes('>')) {
      return `&apos;${content}&apos;`;
    }
    return match;
  });

// Function to fix specific linting issues;
function fixSpecificIssues(content, filePath) {
  let modified = false;

  // Fix unused imports;
  if (content.includes("import Image from 'next/image'") && !content.includes('<Image')) {
<<<<<<< HEAD
    content = content.replace(/import Image from 'next\/image'/, '// import Image from \'next/image\';');
    modified = true;

  if (content.includes("import { Mail, Phone, MapPin } from 'lucide-react'") && !content.includes('<Mail')) {
    content = content.replace(/import { Mail, Phone, MapPin } from 'lucide-react'/, 'import { Phone, MapPin } from \'lucide-react\';');

  if (content.includes("import { Layers, Zap, Shield, Globe } from 'lucide-react'") && !content.includes('<Layers')) {
    content = content.replace(/import { Layers, Zap, Shield, Globe } from 'lucide-react'/, 'import { Zap, Shield, Globe } from \'lucide-react\';');

  if (content.includes("import Link from 'next/link'") && !content.includes('<Link')) {
    content = content.replace(/import Link from 'next\/link'/, '// import Link from \'next/link\';');

  // Fix console.log statements in production files;
  if (filePath.includes('pages/') || filePath.includes('components/')) {
    content = content.replace(/console\.log\([^)]*\);?/g, );
    if (content !== content.replace(/console\.log\([^)]*\);?/g, )) {

  // Fix missing semicolons;
  content = content.replace(/([^;}])\n\s*}/g, '$1;\n}');
  if (content !== content.replace(/([^;}])\n\s*}/g, '$1;\n}')) {

  // Fix missing commas in objects;
  content = content.replace(/([^,}])\n\s*}/g, '$1,\n}');
  if (content !== content.replace(/([^,}])\n\s*}/g, '$1,\n}')) {
=======
    content = content.replace(/import Image from 'next\/image'/,// import Image from \'next/image\';);
    modified = true;
  }
'
  if (content.includes("import { Mail, Phone, MapPin } from 'lucide-react'") && !content.includes('<Mail')) {
    content = content.replace(/import { Mail, Phone, MapPin } from 'lucide-react'/,import { Phone, MapPin } from \'lucide-react\';);
    modified = true;
  }
'
  if (content.includes("import { Layers, Zap, Shield, Globe } from 'lucide-react'") && !content.includes('<Layers')) {
    content = content.replace(/import { Layers, Zap, Shield, Globe } from 'lucide-react'/,import { Zap, Shield, Globe } from \'lucide-react\';);
    modified = true;
  }
'
  if (content.includes("import Link from 'next/link'") && !content.includes('<Link')) {
    content = content.replace(/import Link from 'next\/link'/,// import Link from \'next/link\';);
    modified = true;
  }

  // Fix console.log statements in production files;
  if (filePath.includes('pages/) || filePath.includes('components/)) {
    content = content.replace(/console\.log\([^)]*\);?/g, );
    if (content !== content.replace(/console\.log\([^)]*\);?/g, )) {
      modified = true;
    }
  }

  // Fix missing semicolons;
  content = content.replace(/([^;}])\n\s*}/g,$1;\n});
  if (content !== content.replace(/([^;}])\n\s*}/g,$1;\n})) {
    modified = true;
  }

  // Fix missing commas in objects;
  content = content.replace(/([^}])\n\s*}/g,$1,\n});
  if (content !== content.replace(/([^}])\n\s*}/g,$1,\n})) {
    modified = true;
  }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

  return { content, modified };

// Function to process a single file;
function processFile(filePath) {
  try {
  // TODO: Implement
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, 'utf8');
=======
}
    const content = fs.readFileSync(filePath,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    let modifiedContent = content;
    let hasChanges = false;

    // Apply fixes;
    const result = fixSpecificIssues(modifiedContent, filePath);
    modifiedContent = result.content;
    hasChanges = result.modified;

    // Fix unescaped entities;
    const originalContent = modifiedContent;
    modifiedContent = fixUnescapedEntities(modifiedContent);
    if (modifiedContent !== originalContent) {
      hasChanges = true;

    // Write back if modified;
    if (hasChanges) {
<<<<<<< HEAD
      fs.writeFileSync(filePath, modifiedContent, 'utf8');`;
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
  // TODO: Implement
}`;
      console.log(`ℹ️  No changes needed: ${filePath}`);
=======
      fs.writeFileSync(filePath, modifiedContent,utf8);
      console.log(`✅ Fixed: ${filePath});
      return true;
    } else {
  // TODO: Implement
}
      console.log(`ℹ️  No changes needed: ${filePath});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return false;
  } catch (error) {`;
    console.error(`❌ Error processing ${filePath}:`, error.message);

// Function to find all relevant files;
<<<<<<< HEAD
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
=======
function findFiles(dir, extensions = [.js,.jsx,.ts,.tsx]) {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  const files = [];
  
  function traverse(currentDir) {
  // TODO: Implement
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
  // TODO: Implement
          const stat = fs.statSync(fullPath);
<<<<<<< HEAD
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
=======
          '
          if (stat.isDirectory() && !item.startsWith('.) && item !==node_modules') {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
            traverse(fullPath);
          } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
`;