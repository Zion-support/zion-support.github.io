import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate closing brackets and semicolons
    const duplicatePattern = /(\]\s*);\s*(\]\s*);/g;
    if (duplicatePattern.test(content)) {
      content = content.replace(duplicatePattern, '$1;\n$2');
      modified = true;
    }

    // Fix missing commas in object properties
    const missingCommaPattern = /(\s*benefits:\s*\[[^\]]*\])\s*}\s*$/gm;
    if (missingCommaPattern.test(content)) {
      content = content.replace(missingCommaPattern, '$1\n    }');
      modified = true;
    }

    // Fix missing semicolons after array declarations
    const missingSemicolonPattern = /(\]\s*)(const|let|var|function|return|export|import)/g;
    if (missingSemicolonPattern.test(content)) {
      content = content.replace(missingSemicolonPattern, '];\n$2');
      modified = true;
    }

    // Fix missing semicolons after object declarations
    const missingObjectSemicolonPattern = /(\}\s*)(const|let|var|function|return|export|import)/g;
    if (missingObjectSemicolonPattern.test(content)) {
      content = content.replace(missingObjectSemicolonPattern, '};\n$2');
      modified = true;
    }

    // Fix missing closing tags in JSX fragments
    const jsxFragmentPattern = /<>\s*$/gm;
    if (jsxFragmentPattern.test(content)) {
      content = content.replace(jsxFragmentPattern, '<>');
      modified = true;
    }

    // Fix missing closing tags for meta elements
    const metaTagPattern = /<meta>\s*$/gm;
    if (metaTagPattern.test(content)) {
      content = content.replace(metaTagPattern, '<meta name="description" content="AI-powered solutions" />');
      modified = true;
    }

    // Fix missing function declarations
    const functionPattern = /^(\s*const\s+\w+\s*=\s*useState)/gm;
    if (functionPattern.test(content)) {
      content = content.replace(functionPattern, 'const Component: React.FC = () => {\n  $1');
      modified = true;
    }

    // Fix missing imports for Eye icon
    const eyeImportPattern = /import.*from 'lucide-react';/;
    if (eyeImportPattern.test(content) && !content.includes('Eye')) {
      content = content.replace(eyeImportPattern, (match) => {
        return match.replace('}', ', Eye }');
      });
      modified = true;
    }

    // Fix missing closing parentheses in function calls
    const functionCallPattern = /(\w+)\s*$/gm;
    if (functionCallPattern.test(content)) {
      content = content.replace(functionCallPattern, '$1');
      modified = true;
    }

    // Fix missing semicolons in variable declarations
    const variablePattern = /(\w+)\s*=\s*(\w+)\s*$/gm;
    if (variablePattern.test(content)) {
      content = content.replace(variablePattern, '$1 = $2;');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = await glob('app/**/*.{ts,tsx,js,jsx}', {
  ignore: [
    '**/node_modules/**',
    '**/dist/**',
    '**/.next/**',
    '**/backup*/**',
    '**/disabled*/**',
    '**/disabled/**'
  ]
});

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);