<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");/ Function to fix remaining syntax errors in a filefunction fixRemainingSyntax(filePath) { try {" let content = fs.readFileSync(filePath, "utf8"); let originalContent = content; / Fix unterminated string constants" content = content.replace(/useState\("\)/g, "useState("")");"" content = content.replace(/useState\("\)/g, "useState("")");"" content = content.replace(/parsed\.didHandle \|\| "\)/g, "parsed.didHandle | "")");"" content = content.replace(/parsed\.didHandle \|\| "\)/g, "parsed.didHandle | "")"); / Fix extra semicolons in object properties" content = content.replace(/,\s*";";/g, ",");" content = content.replace(/,\s*";/g, ","); / Fix function parameters with TypeScript types"" content = content.replace(/\(props: any\) => \{/g, "(props) => {");" content = content.replace(/\([^)]*: any\)/g, "($1)"); / Fix supabase method calls" content = content.replace(/await supabase";/g, "await supabase");" content = content.replace(/\.from\("[^"]*"\)";";/g, (match) => match.replace(/";";$/, ""));" content = content.replace(/\.from\("[^"]*"\)";/g, (match) => match.replace(/";$/, ""));" content = content.replace(/\.delete\(\)";";/g, ".delete()");" content = content.replace(/\.delete\(\)";/g, ".delete()");" content = content.replace(/\.eq\("[^"]*",[^)]*\)";";/g, (match) => match.replace(/";";$/, ""));" content = content.replace(/\.eq\("[^"]*",[^)]*\)";/g, (match) => match.replace(/";$/, ""));" content = content.replace(/\.insert\([^)]*\)";";/g, (match) => match.replace(/";";$/, ""));" content = content.replace(/\.insert\([^)]*\)";/g, (match) => match.replace(/";$/, ""));" content = content.replace(/\.select\("[^"]*"\)";";/g, (match) => match.replace(/";";$/, ""));" content = content.replace(/\.select\("[^"]*"\)";/g, (match) => match.replace(/";$/, ""));" content = content.replace(/\.single\(\)";";/g, ".single()");" content = content.replace(/\.single\(\)";/g, ".single()"); / Fix comments with extra semicolons" content = content.replace(/\/\/ [^;]*";";/g, (match) => match.replace(/";";$/, ""));" content = content.replace(/\/\/ [^;]*";/g, (match) => match.replace(/";$/, "")); / Fix standalone semicolons and quotes" content = content.replace(/^";";?\s*$/gm, "");" content = content.replace(/^";\s*$/gm, ""); / Fix multiple consecutive semicolons" content = content.replace(/;+;+/g, ";"); / Fix multiple consecutive quotes"" content = content.replace(/[""]+[""]+/g, """); / Fix missing semicolons after statements" content = content.replace(/}\s*catch\s*\(/g, "} catch (");" content = content.replace(/}\s*finally\s*\{/g, "} finally {"); / Fix missing semicolons after variable declarations content = content.replace(/const\s+[^=]+=[^;]+(?!;)\s*}/g, (match) => {" if (!match.endsWith(";")) {" return match + ";"; } return match; }); / Fix missing semicolons after function calls content = content.replace(/setDisplayWeb3\([^)]+\)(?!;)\s*}/g, (match) => {" if (!match.endsWith(";")) {" return match + ";"; } return match; }); / Write the fixed content back if (content !== originalContent) {" fs.writeFileSync(filePath, content, "utf8");" console.log(`Fixed remaining syntax errors in: ${filePath}`); return true; } return false; } catch (error) {` console.error(`Error fixing ${filePath}:`, error.message); return false; }}/ Function to recursively find and fix filesfunction fixFilesInDirectory(dirPath) { const files = fs.readdirSync(dirPath); let fixedCount = 0; for (const file of files) { const filePath = path.join(dirPath, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += fixFilesInDirectory(filePath);" } else if (file.endsWith(".js") | file.endsWith(".jsx") | file.endsWith(".ts") | file.endsWith(".tsx")) { if (fixRemainingSyntax(filePath)) { fixedCount++; } } } return fixedCount;}/ Main execution"console.log("Starting remaining syntax error fixing.");"const fixedCount = fixFilesInDirectory("./src");`console.log(`Fixed ${fixedCount} files with remaining syntax errors.`);'"`'"`
=======
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
<<<<<<< HEAD
// Final targeted fixes for remaining syntax errors
const fixes = [
  // Fix missing semicolons in import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*$/gm,
    replacement: 'import { $1 } from \'$2\';'
  },
  
  // Fix malformed import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*export\s*default\s*function/g,
    replacement: 'import { $1 } from \'$2\';\n\nexport default function'
  },
  
  // Fix missing semicolons after import statements
  {
    pattern: /import\s+([^]+)\s*$/gm,
    replacement: 'import $1;'
  },
  
  // Fix unterminated string literals
  {
    pattern: /'([^']*)\s*$/gm,
    replacement: '\'$1\';'
  },
  
  // Fix malformed function declarations
  {
    pattern: /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,
    replacement: 'export default function $1() {\n  return ('
  },
  
  // Fix missing closing brackets and parentheses
  {
    pattern: /return\s*\(\s*<div[^>]*>\s*$/gm,
    replacement: 'return (\n    <div className="min-h-screen bg-white">'
  },
  
  // Fix malformed JSX attributes
  {
    pattern: /className="([^"]*);\s*"/g,
    replacement: 'className="$1"'
  },
  
  // Fix missing semicolons in object properties
  {
    pattern: /(\w+):\s*'([^']*)',\s*;/g,
    replacement: '$1: \'$2\','
  },
  
  // Fix malformed return statements
  {
    pattern: /return\s*\(\s*<div";"/g,
    replacement: 'return (\n    <div className="min-h-screen bg-white">'
  },
  
  // Fix duplicated content (remove duplicate lines)
  {
    pattern: /^(.*)\n\1$/gm,
    replacement: '$1'
  },
  
  // Fix missing closing brackets in arrays
  {
    pattern: /(\[.*?);\s*\]\s*},/g,
    replacement: '$1\n  ]\n},'
  },
  
  // Fix malformed JSX closing tags
  {
    pattern: /<\/div>\s*\)\s*}\s*$/gm,
    replacement: '    </div>\n  );\n}'
  }
=======
console.log('🔧 Fixing remaining syntax errors...');

// Fix specific files with known issues
const filesToFix = [
    'src/components/SEO.tsx',
    'src/components/ui/button.tsx',
    'src/components/ui/card.tsx',
    'src/components/ui/input.tsx',
    'src/components/talent/TalentCard.jsx'
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
];

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return;
    }

=======
// Function to fix remaining syntax errors in a file;
function fixRemainingSyntax(filePath) {}
  try {}
>>>>>>> main
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
<<<<<<< HEAD
<<<<<<< HEAD
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true}
    });
=======
    // Fix unterminated string constants;
    content = content.replace(/useState\("\)/g, 'useState("")');
    content = content.replace(/useState\('\)/g, "useState('')");
    content = content.replace(/parsed\.didHandle \|\| "\)/g, 'parsed.didHandle || "")');
    content = content.replace(/parsed\.didHandle \|\| '\)/g, "parsed.didHandle || '')");
>>>>>>> main
    
    // Fix extra semicolons in object properties;
    content = content.replace(/,\s*';';/g, ',');
    content = content.replace(/,\s*';/g, ',');
    
    // Fix function parameters with TypeScript types;
    content = content.replace(/\("props": any\) => \{/g, '(props) => {');}
    content = content.replace(/\([^)]*: any\)/g, '($1)');
    
    // Fix supabase method calls;
    content = content.replace(/await supabase';/g, 'await supabase');
    content = content.replace(/\.from\('[^']*'\)';';/g, (match) => match.replace(/';';$/, ''));
    content = content.replace(/\.from\('[^']*'\)';/g, (match) => match.replace(/';$/, ''));
    content = content.replace(/\.delete\(\)';';/g, '.delete()');
    content = content.replace(/\.delete\(\)';/g, '.delete()');
    content = content.replace(/\.eq\('[^']*',[^)]*\)';';/g, (match) => match.replace(/';';$/, ''));
    content = content.replace(/\.eq\('[^']*',[^)]*\)';/g, (match) => match.replace(/';$/, ''));
    content = content.replace(/\.insert\([^)]*\)';';/g, (match) => match.replace(/';';$/, ''));
    content = content.replace(/\.insert\([^)]*\)';/g, (match) => match.replace(/';$/, ''));
    content = content.replace(/\.select\('[^']*'\)';';/g, (match) => match.replace(/';';$/, ''));
    content = content.replace(/\.select\('[^']*'\)';/g, (match) => match.replace(/';$/, ''));
    content = content.replace(/\.single\(\)';';/g, '.single()');
    content = content.replace(/\.single\(\)';/g, '.single()');
    
    // Fix comments with extra semicolons;
    content = content.replace(/\/\/ [^;]*';';/g, (match) => match.replace(/';';$/, ''));
    content = content.replace(/\/\/ [^;]*';/g, (match) => match.replace(/';$/, ''));
    
    // Fix standalone semicolons and quotes;
    content = content.replace(/^';';?\s*$/gm, '');
    content = content.replace(/^';\s*$/gm, '');
    
    // Fix multiple consecutive semicolons;
    content = content.replace(/;+;+/g, ';');
    
    // Fix multiple consecutive quotes;
    content = content.replace(/['"]+['"]+/g, '"');
    
    // Fix missing semicolons after statements;
    content = content.replace(/}\s*catch\s*\(/g, '} catch (');
    content = content.replace(/}\s*finally\s*\{/g, '} finally {');}
    
    // Fix missing semicolons after variable declarations;
    content = content.replace(/const\s+[^=]+=[^;]+(?!;)\s*}/g, (match) => {}
      if (!match.endsWith(';')) {}
        return match + ';';
      };
      return match;
    }
});
    
    // Fix missing semicolons after function calls;
    content = content.replace(/setDisplayWeb3\([^)]+\)(?!;)\s*}/g, (match) => {}
      if (!match.endsWith(';')) {}
        return match + ';';
      };
      return match;
    }
});
    
    // Write the fixed content back;
    if (content !== originalContent) {}
      fs.writeFileSync(filePath, content, 'utf8');
      
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  };
};
// Function to recursively find and fix files;
function fixFilesInDirectory(dirPath) {}
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {}
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
<<<<<<< HEAD
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        fixedCount += walkDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        if (fixFile(filePath)) {
          fixedCount++}
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)}
  
  return fixedCount}
=======
    // Fix malformed interface declarations
    content = content.replace(/interface\s+(\w+)\s*\{;/g, 'interface $1 {');
    
    // Fix malformed function declarations
    content = content.replace(/export\s+function\s+(\w+)\(props:\s*any\)\s*\{;/g, 'export function $1(props) {');
    content = content.replace(/export\s+default\s+function\s+(\w+)\(props:\s*any\)\s*\{\}/g, 'export default function $1(props) {');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(;/g, 'return (');
    content = content.replace(/return\s*\(\s*<div[^>]*>\s*;\s*$/gm, 'return (\n    <div>');
    
    // Fix malformed JSX
    content = content.replace(/<\/HTMLDivElement>/g, '');
    content = content.replace(/<\/HTMLInputElement>/g, '');
    content = content.replace(/<\/HTMLParagraphElement>/g, '');
    content = content.replace(/<\/h3>/g, '');
    
    // Fix malformed object destructuring
    content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*useAuth\(\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(\[\]\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(true\);\s*const\s+navigate\s*=\s*useNavigate\(\);\s*useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[user\]\);\s*const\s+handleRequestHire\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*return\s*\(<div[^>]*>([^<]*)<\/div>\);\s*}/g, (match, user, savedTalents, isLoading, content) => {
        return `const { ${user} } = useAuth();
    const [${savedTalents}] = useState([]);
    const [${isLoading}] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchSavedTalents = async () => {
            if (!user) return;
            try {
                setIsLoading(true);
                // Fetch saved talents logic here
            } catch (error) {
                console.error('Error fetching saved talents:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSavedTalents();
    }, [user]);
    
    const handleRequestHire = (talentId) => {
        // Handle hire request logic here
=======
    if (stat.isDirectory()) {}
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {}
      if (fixRemainingSyntax(filePath)) {}
        fixedCount++;
      };
>>>>>>> main
    };
  };
  return fixedCount;
<<<<<<< HEAD
}

<<<<<<< HEAD
// Process all files
let totalFixes = 0;
filesToFix.forEach(file => {
    totalFixes += fixFile(file);
});
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
// Main execution
>>>>>>> main

const fixedCount = fixFilesInDirectory('./src');
=======
};
// Main execution;
console.log('Starting remaining syntax error fixing...');
const fixedCount = fixFilesInDirectory('./src');
console.log(`Fixed ${fixedCount} files with remaining syntax errors.`);
>>>>>>> main
>>>>>>> main
