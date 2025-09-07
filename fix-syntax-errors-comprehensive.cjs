<<<<<<< HEAD

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
    
=======
const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let hasChanges = false;

        // Fix common syntax errors
        const fixes = [
            // Fix trailing commas in imports
            { pattern: /import\s+.*?from\s+['"][^'"]+['"],\s*;/, replacement: (match) => match.replace(/,\s*;/, ';') },
            
            // Fix missing function declarations
            { pattern: /^\s*return\s+JSON\.parse\(raw\)\s*$/, replacement: 'function parseData(raw) {\n  try {\n    return JSON.parse(raw)\n  } catch {\n    return {};\n  }\n}' },
            
            // Fix missing function declarations for return statements
            { pattern: /^\s*return\s+res\.status\(405\)\.end\('Method Not Allowed'\);\s*$/, replacement: 'export default function handler(req, res) {\n  return res.status(405).end(\'Method Not Allowed\');\n}' },
            
            // Fix missing closing braces
            { pattern: /}\s*;\s*$/, replacement: '}\n}' },
            
            // Fix missing function declarations for type definitions
            { pattern: /^\s*name:\s*string\s*$/, replacement: 'interface AnalyticsEvent {\n  name: string' },
            { pattern: /^\s*page\?\:\s*string\s*$/, replacement: '  page?: string' },
            { pattern: /^\s*userType\?\:\s*string\s*$/, replacement: '  userType?: string' },
            { pattern: /^\s*properties\?\:\s*Record<string,\s*any>\s*$/, replacement: '  properties?: Record<string, any>' },
            { pattern: /^\s*at:\s*string\s*$/, replacement: '  at: string\n}' },
            
            // Fix missing imports
            { pattern: /^import\s+.*?from\s+['"][^'"]+['"],\s*;/, replacement: (match) => match.replace(/,\s*;/, ';') },
        ];

        for (const fix of fixes) {
            if (fix.pattern.test(content)) {
                content = content.replace(fix.pattern, fix.replacement);
                hasChanges = true;
            }
        }

        if (hasChanges) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Fixed syntax errors in ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.log(`❌ Error fixing ${filePath}: ${error.message}`);
        return false;
    }
}

<<<<<<< HEAD
// Fix _app.tsx button syntax
fixFile('pages/_app.tsx', 'Button style syntax', (content) => {
    return content.replace(
        /style=\{\{\s*background:\s*'none',\s*border:\s*'none',\s*color:\s*'white',\s*fontSize:\s*'1\.2rem',\s*cursor:\s*'pointer',\s*padding:\s*'6px',\s*borderRadius:\s*4\s*\}\s*onClick/g,
        'style={{\n              background: \'none\', border: \'none\', color: \'white\', fontSize: \'1.2rem\',\n              cursor: \'pointer\', padding: \'6px\', borderRadius: 4\n            }}\n            onClick'
    );
});

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

=======
function fixSyntaxErrorsInDirectory(directory) {
    let fixedCount = 0;
    
    try {
        const files = fs.readdirSync(directory);

        for (const file of files) {
            const filePath = path.join(directory, file);
            
            try {
                const stat = fs.statSync(filePath);

                if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
                    fixedCount += fixSyntaxErrorsInDirectory(filePath);
                } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(file)) {
                    if (fixSyntaxErrors(filePath)) {
                        fixedCount++;
                    }
                }
            } catch (error) {
                console.log(`⚠️  Skipping ${filePath}: ${error.message}`);
                continue;
            }
        }
    } catch (error) {
        console.log(`⚠️  Skipping directory ${directory}: ${error.message}`);
    }
    
    return fixedCount;
}

console.log('🔧 Starting comprehensive syntax error fixing...');
const fixedCount = fixSyntaxErrorsInDirectory('/workspace');
console.log(`✅ Finished fixing syntax errors. Fixed ${fixedCount} files.`);
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
