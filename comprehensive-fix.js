import fs from 'fs';
import path from 'path';

function comprehensiveFix(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing brace in features array
    content = content.replace(/(\w+):\s*\[([^\]]*)\]\s*\n\s*]/g, (match, key, value) => {
      if (!value.includes('}')) {
        return `${key}: [${value}\n  }];`;
      }
      return match;
    });

    // Fix extra closing braces
    content = content.replace(/(\w+)\s*\n\s*}\s*\n\s*}\s*\n\s*]/g, '$1\n  }];');

    // Fix semicolons in arrays
    content = content.replace(/(\w+),;\s*\n/g, '$1,\n');
    content = content.replace(/(\w+);\s*\n\s*]/g, '$1\n  ]');

    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');

    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<\/>/g, '<></>');

    // Fix missing closing braces before const declarations
    content = content.replace(/(\w+)\s*\n\s*const\s+(\w+)\s*=/g, '$1\n  };\n\n  const $2 =');

    // Fix missing closing braces before return statements
    content = content.replace(/(\w+)\s*\n\s*return\s*\(/g, '$1\n  };\n\n  return (');

    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed comprehensive errors in: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all AI page files
const aiPagesDir = '/workspace/app';
const files = fs.readdirSync(aiPagesDir)
  .filter(file => file.startsWith('ai-') && fs.statSync(path.join(aiPagesDir, file)).isDirectory())
  .map(file => path.join(aiPagesDir, file, 'page.tsx'))
  .filter(file => fs.existsSync(file));

console.log(`Fixing ${files.length} AI page files`);

files.forEach(comprehensiveFix);

console.log('Comprehensive fixing completed!');