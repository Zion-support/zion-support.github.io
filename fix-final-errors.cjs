const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Fix remaining duplicate closing tags
const fixes = [
  // Fix duplicate closing tags with specific patterns
  {
    pattern: /<\/span>span>/g,
    replacement: '</span>'
  },
  {
    pattern: /<\/p>p>/g,
    replacement: '</p>'
  },
  {
    pattern: /<\/button>button>/g,
    replacement: '</button>'
  },
  {
    pattern: /<\/div>div>/g,
    replacement: '</div>'
  },
  {
    pattern: /<\/h1>h1>/g,
    replacement: '</h1>'
  },
  {
    pattern: /<\/h2>h2>/g,
    replacement: '</h2>'
  },
  {
    pattern: /<\/h3>h3>/g,
    replacement: '</h3>'
  },
  {
    pattern: /<\/section>section>/g,
    replacement: '</section>'
  },
  {
    pattern: /<\/main>main>/g,
    replacement: '</main>'
  },
  {
    pattern: /<\/article>article>/g,
    replacement: '</article>'
  },
  {
    pattern: /<\/header>header>/g,
    replacement: '</header>'
  },
  {
    pattern: /<\/footer>footer>/g,
    replacement: '</footer>'
  },
  {
    pattern: /<\/ul>ul>/g,
    replacement: '</ul>'
  },
  {
    pattern: /<\/li>li>/g,
    replacement: '</li>'
  },
  {
    pattern: /<\/a>a>/g,
    replacement: '</a>'
  },
  {
    pattern: /<\/img>img>/g,
    replacement: '</img>'
  },
  // Fix object syntax errors
  {
    pattern: /}\s*}\s*];/g,
    replacement: '}\n  }];'
  },
  // Fix missing commas in arrays
  {
    pattern: /]\s*]/g,
    replacement: ']\n  ]'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
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

async function main() {
  console.log('Starting final syntax error fixes...');
  
  // Find all TSX files in the app directory
  const files = await glob('app/**/*.tsx');
  
  let fixedCount = 0;
  
  files.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);