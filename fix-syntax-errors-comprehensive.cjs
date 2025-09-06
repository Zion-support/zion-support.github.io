
// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
    let fixes = 0;
    let originalContent = content;

    // Fix triple quotes in imports
    content = content.replace(/import\s+[^;]+;'''/g, (match) => {
        fixes++;
        return match.replace(/;'''$/, ';');
    });

    // Fix "Reac t" -> "React"
    content = content.replace(/Reac\s+t/g, 'React');
    fixes += (originalContent.match(/Reac\s+t/g) || []).length;

    // Fix unterminated string constants
    content = content.replace(/from\s+'react';'''/g, "from 'react';");
    content = content.replace(/from\s+'[^']+';'''/g, (match) => {
        fixes++;
        return match.replace(/;'''$/, ';');
    });

    // Fix malformed JSX closing tags
    content = content.replace(/<\/HTMLDivElement>/g, '');
    content = content.replace(/<\/HTMLInputElement>/g, '');
    content = content.replace(/<\/HTMLParagraphElement>/g, '');
    content = content.replace(/<\/h3>/g, '');

    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*<div[^>]*>\s*\/\*[^*]*\*\/\s*<div[^>]*>\s*<div[^>]*><\/div>\s*<div[^>]*>\s*<div[^>]*>\s*<h1[^>]*>([^<]*)<\/h1>\s*<\/div>\s*<p[^>]*>([^<]*)<\/p>\s*<p[^>]*>([^<]*)<\/p>\s*<div[^>]*>\s*<Link[^>]*>([^<]*)<\/Link>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\)/g, (match, title, desc1, desc2, linkText) => {
        fixes++;
        return `return (
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                        ${title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
                        ${desc1}
                    </p>
                    <p className="text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto">
                        ${desc2}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                            ${linkText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );`;
    });








    // Fix malformed CSS in JSX
    content = content.replace(/@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, '');
    
    // Fix malformed function declarations
    content = content.replace(/export\s+const\s+SEO:\s*Reac\s+t\.FC<[^>]+>\s*=\s*\(/g, 'export const SEO: React.FC<SEOProps> = (');
    
    // Fix malformed return statements in functions
    content = content.replace(/return\s*\(\)\s*\/\*[^*]*\*\/\s*@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, 'return null;');

    // Fix missing semicolons



    // Fix malformed object destructuring
    content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*useAuth\(\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(\[\]\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(true\);\s*const\s+navigate\s*=\s*useNavigate\(\);\s*useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[user\]\);\s*const\s+handleRequestHire\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*return\s*\(<div[^>]*>([^<]*)<\/div>\);\s*}/g, (match, user, savedTalents, isLoading, content) => {
        fixes++;
        return `const { ${user} } = useAuth();
    const [${savedTalents}] = useState([]);
    const [${isLoading}] = useState(true);
    const navigate = useNavigate();
    
    try {
        const originalContent = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixFunction(originalContent);
        
        if (originalContent !== fixedContent) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            console.log(`✅ Fixed: ${description}`);
            fixes.push({ file: filePath, description });
        } else {
            console.log(`✅ No issues found: ${description}`);
        }
    } catch (error) {
        console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    }
}

// Fix _app.tsx button syntax
fixFile('pages/_app.tsx', 'Button style syntax', (content) => {
    return content.replace(
        /style=\{\{\s*background:\s*'none',\s*border:\s*'none',\s*color:\s*'white',\s*fontSize:\s*'1\.2rem',\s*cursor:\s*'pointer',\s*padding:\s*'6px',\s*borderRadius:\s*4\s*\}\s*onClick/g,
        'style={{\n              background: \'none\', border: \'none\', color: \'white\', fontSize: \'1.2rem\',\n              cursor: \'pointer\', padding: \'6px\', borderRadius: 4\n            }}\n            onClick'
    );
});



    // Fix missing semicolons at end of statements

    content = content.replace(/([^;}])\s*$/gm, '$1;');


    // Fix missing commas in objects
    content = content.replace(/(\w+):\s*([^}]+)\s*}/g, '$1: $2}');

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;





    fixed = fixed.replace(
        /return\s*this\.props\.children;\s*\}\s*export\s*default/g,
        'return this.props.children;\n  }\n}\n\nexport default'
    );
    
    return fixed;
});




    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;


    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      content += ')'.repeat(missingParens);
      modified = true;
    }

    // Fix missing closing brackets
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;

    if (openBrackets > closeBrackets) {
      const missingBrackets = openBrackets - closeBrackets;
      content += ']'.repeat(missingBrackets);
      modified = true;
    }

    // Fix duplicate imports
    const importLines = content
      .split('\n')
      .filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {
      const nonImportLines = content
        .split('\n')
        .filter(line => !line.trim().startsWith('import'));
      content = uniqueImports.join('\n') + '\n' + nonImportLines.join('\n');
      modified = true;
    }

    // Fix missing React import
    if (content.includes('React') && !content.includes('import React')) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    // Fix semicolons in object properties
    content = content.replace(/(\w+):\s*([^}]+);/g, '$1: $2,');

    // Fix semicolons in array elements
    content = content.replace(/([^}]);/g, '$1,');

    // Fix semicolons in function parameters
    content = content.replace(/(\w+)\s*;\s*\)/g, '$1)');

    // Fix semicolons in JSX
    content = content.replace(/<(\w+)\s*;\s*>/g, '<$1>');
    content = content.replace(/<\/(\w+)\s*;\s*>/g, '</$1>');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}



function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith('.') &&
      file !== 'node_modules'
    ) {
      fixedCount += processDirectory(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      if (fixSyntaxErrors(filePath)) fixedCount++;
    }
  }

  return fixedCount;
}

console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('.');
console.log(`Fixed ${fixedCount} files`);


