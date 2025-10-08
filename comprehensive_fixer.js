import fs from 'fs';
import { glob } from 'glob';

//Comprehensive TypeScript/JSX fixes
const fixes = [
  //Fix object literal syntax issues
  {
    pattern: /(\w+)\s*=\s*{([^}]+)}\s*(\w+)/g,
    replacement: '$1 = { $2 }, $3',
  },
  //Fix JSX syntax issues
  {
    pattern: /<br\s*\/?>/g,
    replacement: '<br />',
  },
  //Fix unescaped > in JSX
  {
    pattern: /{'>'}/g,
    replacement: '{">"}',
  },
  //Fix JSX expressions with operators
  {
    pattern: /{([^}]*)\s*>\s*([^}]*)}/g,
    replacement: '{ $1 > $2 }',
  },
  //Fix object property syntax
  {
    pattern: /(\w+)\s*:\s*([^,}]+)\s*(\w+)/g,
    replacement: '$1: $2, $3',
  },
  //Fix function parameter syntax
  {
    pattern: /(\w+)\s*=\s*([^,)]+)\s*(\w+)/g,
    replacement: '$1 = $2, $3',
  },
  //Fix JSX closing tags
  {
    pattern: /<(\w+)\s*([^>]*)\s*>\s*<\/\1>/g,
    replacement: '<$1 $2 />',
  },
  //Fix missing commas in arrays
  {
    pattern: /(\w+)\s*(\w+)\s*(\w+)/g,
    replacement: '$1, $2, $3',
  },
  //Fix JSX attribute syntax
  {
    pattern: /(\w+)\s*=\s*{([^}]+)}\s*(\w+)/g,
    replacement: '$1={ $2 } $3',
  },
  //Fix template literal syntax
  {
    pattern: /`([^`]+)\s*>\s*([^`]+)`/g,
    replacement: '`$1 > $2`',
  },
  //Fix destructuring syntax
  {
    pattern: /{\s*(\w+)\s*:\s*(\w+)\s*}\s*=\s*(\w+)/g,
    replacement: '{ $1: $2 } = $3',
  },
  //Fix arrow function syntax
  {
    pattern: /(\w+)\s*=>\s*{([^}]+)}\s*(\w+)/g,
    replacement: '$1 => { $2 }, $3',
  },
  //Fix conditional rendering
  {
    pattern: /{([^}]*)\s*&&\s*([^}]*)}/g,
    replacement: '{ $1 && $2 }',
  },
  //Fix ternary operators
  {
    pattern: /{([^}]*)\s*\?\s*([^}]*)\s*:\s*([^}]*)}/g,
    replacement: '{ $1 ? $2 : $3 }',
  },
  //Fix object method syntax
  {
    pattern: /(\w+)\s*\([^)]*\)\s*{\s*([^}]+)}\s*(\w+)/g,
    replacement: '$1() { $2 }, $3',
  },
  //Fix class property syntax
  {
    pattern: /(\w+)\s*=\s*([^;]+);\s*(\w+)/g,
    replacement: '$1 = $2; $3',
  },
  //Fix import statements
  {
    pattern: /import\s+{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*(\w+)/g,
    replacement: 'import { $1 } from "$2"; $3',
  },
  //Fix export statements
  {
    pattern: /export\s+(\w+)\s*(\w+)/g,
    replacement: 'export $1; $2',
  },
  //Fix interface syntax
  {
    pattern: /interface\s+(\w+)\s*{\s*([^}]+)}\s*(\w+)/g,
    replacement: 'interface $1 { $2 } $3',
  },
  //Fix type definitions
  {
    pattern: /type\s+(\w+)\s*=\s*([^;]+);\s*(\w+)/g,
    replacement: 'type $1 = $2; $3',
  },
  //Fix React component syntax
  {
    pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*([^}]+)}\s*(\w+)/g,
    replacement: 'const $1 = () => { $2 }; $3',
  },
  //Fix JSX return statements
  {
    pattern: /return\s*\(\s*<([^>]+)>\s*([^<]+)\s*<\/\1>\s*\)\s*(\w+)/g,
    replacement: 'return (<$1> $2 </$1>); $3',
  },
  //Fix event handlers
  {
    pattern: /onClick\s*=\s*{([^}]+)}\s*(\w+)/g,
    replacement: 'onClick={ $1 } $2',
  },
  //Fix className attributes
  {
    pattern: /className\s*=\s*{([^}]+)}\s*(\w+)/g,
    replacement: 'className={ $1 } $2',
  },
  //Fix style attributes
  {
    pattern: /style\s*=\s*{([^}]+)}\s*(\w+)/g,
    replacement: 'style={ $1 } $2',
  },
  //Fix key attributes
  {
    pattern: /key\s*=\s*{([^}]+)}\s*(\w+)/g,
    replacement: 'key={ $1 } $2',
  },
  //Fix conditional attributes
  {
    pattern: /{([^}]*)\s*&&\s*<([^>]+)>\s*([^<]+)\s*<\/\2>\s*}/g,
    replacement: '{ $1 && <$2> $3 </$2> }',
  },
  //Fix map functions
  {
    pattern: /\.map\s*\(\s*\(([^)]+)\)\s*=>\s*<([^>]+)>\s*([^<]+)\s*<\/\2>\s*\)\s*(\w+)/g,
    replacement: '.map(($1) => <$2> $3 </$2>) $4',
  },
  //Fix filter functions
  {
    pattern: /\.filter\s*\(\s*\(([^)]+)\)\s*=>\s*([^)]+)\s*\)\s*(\w+)/g,
    replacement: '.filter(($1) => $2) $3',
  },
  //Fix reduce functions
  {
    pattern: /\.reduce\s*\(\s*\(([^)]+)\)\s*=>\s*([^,]+),\s*([^)]+)\s*\)\s*(\w+)/g,
    replacement: '.reduce(($1) => $2, $3) $4',
  },
  //Fix useState hooks
  {
    pattern: /const\s*\[\s*(\w+),\s*(\w+)\s*\]\s*=\s*useState\s*\(\s*([^)]+)\s*\)\s*(\w+)/g,
    replacement: 'const [$1, $2] = useState($3); $4',
  },
  //Fix useEffect hooks
  {
    pattern: /useEffect\s*\(\s*\(\s*\)\s*=>\s*{\s*([^}]+)}\s*,\s*\[([^\]]+)\]\s*\)\s*(\w+)/g,
    replacement: 'useEffect(() => { $1 }, [$2]); $3',
  },
  //Fix useCallback hooks
  {
    pattern:
      /const\s+(\w+)\s*=\s*useCallback\s*\(\s*\([^)]*\)\s*=>\s*{\s*([^}]+)}\s*,\s*\[([^\]]+)\]\s*\)\s*(\w+)/g,
    replacement: 'const $1 = useCallback(() => { $2 }, [$3]); $4',
  },
  //Fix useMemo hooks
  {
    pattern:
      /const\s+(\w+)\s*=\s*useMemo\s*\(\s*\(\s*\)\s*=>\s*{\s*([^}]+)}\s*,\s*\[([^\]]+)\]\s*\)\s*(\w+)/g,
    replacement: 'const $1 = useMemo(() => { $2 }, [$3]); $4',
  },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    fixes.forEach(fix => {
      //       const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      //       console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    //     console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

//Main function
async function main() {
  //Find all TypeScript/TSX files
  const files = await glob('src/**/*.{ts,tsx}');

  //   console.log(`Found ${files.length} TypeScript files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  //   console.log(`Fixed ${fixedCount} files`);
}

// main().catch(console.error);
