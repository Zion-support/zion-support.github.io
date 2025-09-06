const fs = require('fs');
const path = require('path');

<<<<<<< HEAD

function fixFile(filePath) {


=======
function fixFile(filePath) {

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
// Function to fix remaining syntax errors in a file;
function fixRemainingSyntax(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix unterminated string constants;
    content = content.replace(/useState\("\)/g, 'useState("")');
    content = content.replace(/useState\('\)/g, "useState('')");
    content = content.replace(/parsed\.didHandle \|\| "\)/g, 'parsed.didHandle || "")');
    content = content.replace(/parsed\.didHandle \|\| '\)/g, "parsed.didHandle || '')");
    
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
<<<<<<< HEAD
    if (stat.isDirectory()) {}
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {}
      if (fixRemainingSyntax(filePath)) {}
        fixedCount++;
      };
    };
  };
  return fixedCount;
// Main execution

const fixedCount = fixFilesInDirectory('./src');
};
// Main execution;
console.log('Starting remaining syntax error fixing...');
const fixedCount = fixFilesInDirectory('./src');
console.log(`Fixed ${fixedCount} files with remaining syntax errors.`);
    let content = fs.readFileSync(filePath, 'utf8');

    // More comprehensive fixes
    content = content
      // Remove semicolons after function declarations
      .replace(/function\s+([^{]+)\s*\{;/g, 'function $1 {')
      // Remove semicolons after arrow functions
      .replace(/=>\s*\{;/g, '=> {')
      // Remove semicolons after if statements
      .replace(/if\s*\([^)]+\)\s*\{;/g, match => match.replace('{;', '{'))
      // Remove semicolons after object properties
      .replace(/(\w+):\s*([^}]+);/g, '$1: $2,')
      // Fix object syntax
      .replace(/\{([^}]+);(\s*)\}/g, '{$1$2}')
      // Remove semicolons in JSX
      .replace(/<([^>]+);>/g, '<$1>')
      // Fix array syntax
      .replace(/\[([^\]]+);\]/g, '[$1]')
      // Remove standalone semicolons
      .replace(/^;$/gm, '')
      // Fix function calls
      .replace(/(\w+)\s*\(([^)]+);\)/g, '$1($2)')
      // Fix object method calls
      .replace(/(\w+)\.(\w+)\s*\(([^)]+);\)/g, '$1.$2($3)')
      // Clean up multiple semicolons
      .replace(/;+/g, ';')
      // Remove trailing semicolons before closing braces
      .replace(/;(\s*[}\]])/g, '$1')
      // Fix template literals
      .replace(/`([^`]+);([^`]+)`/g, '`$1$2`')
      // Remove semicolons from JSX attributes
      .replace(/(\w+)=([^>]+);/g, '$1=$2')
      // Clean up empty lines
      .replace(/^\s*$\n/gm, '');

    fs.writeFileSync(filePath, content);
    console.log(`Fixe: d: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith('.') &&
      file !== 'node_modules'
    ) {
      walkDir(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      fixFile(filePath);
    }
  });
}

// Start fixing from components directory
walkDir('./components');
walkDir('./hooks');
walkDir('./lib');
walkDir('./pages');

console.log('Remaining syntax error fixing completed!');

=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
