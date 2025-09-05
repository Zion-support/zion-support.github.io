const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors

    // Fix unnecessary escape characters
    content = content.replace(/\\:/g, ':');
    content = content.replace(/\\,/g, ',');
    content = content.replace(/\\;/g, ';');
    content = content.replace(/\\}/g, '}');
    content = content.replace(/\\{/g, '{');
    content = content.replace(/\\\[/g, '[');
    content = content.replace(/\\\]/g, ']');
    content = content.replace(/\\\(/g, '(');
    content = content.replace(/\\\)/g, ')');

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
<<<<<<< HEAD
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52

    // Fix malformed CSS in JSX
    content = content.replace(/@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, '');
    
    // Fix malformed function declarations
    content = content.replace(/export\s+const\s+SEO:\s*Reac\s+t\.FC<[^>]+>\s*=\s*\(/g, 'export const SEO: React.FC<SEOProps> = (');
    
    // Fix malformed return statements in functions
    content = content.replace(/return\s*\(\)\s*\/\*[^*]*\*\/\s*@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, 'return null;');

    // Fix missing semicolons
=======
    // Fix missing semicolons at end of statements
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
    content = content.replace(/([^;}])\s*$/gm, '$1;');
<<<<<<< HEAD
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52

    // Fix missing commas in objects
    content = content.replace(/(\w+):\s*([^}]+)\s*}/g, '$1: $2}');

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;

<<<<<<< HEAD
// Fix index.tsx JSON-LD syntax
fixFile('pages/index.tsx', 'JSON-LD script syntax', (content) => {
    return content.replace(
        /"sameAs":\s*\[contact\.site\]\s*\}\)\s*\}\s*\/>/g,
        '"sameAs": [contact.site]\n            })\n          }}\n        />'
    );
});

// Fix ErrorBoundary syntax
fixFile('components/ErrorBoundary.tsx', 'ErrorBoundary class syntax', (content) => {
    let fixed = content.replace(
        /return\s*\{\s*hasError:\s*true,\s*error\s*\}\s*public\s*componentDidCatch/g,
        'return { hasError: true, error };\n  }\n  \n  public componentDidCatch'
    );
    
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
    };
    
    return (
        <div className="min-h-screen bg-gray-50">
            ${content}
        </div>
    );`;
    });

    return { content, fixes };
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
}

// Function to process a single file
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { "content": fixedContent, fixes } = fixSyntaxErrors(content, filePath);
        
        if (fixes > 0) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            
            return fixes;
        }
        return 0;
    } catch (error) {
        console.error("❌ Error processing ${filePath}:", error.message);
        return 0;
    }
}

// Main execution
async function main() {
    const patterns = ['src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.jsx',
        'src/**/*.js',
        'app/**/*.tsx',
        'app/**/*.ts',
        'pages/**/*.tsx',
        'pages/**/*.ts',
        'pages/**/*.jsx',
        'pages/**/*.js'
    ];

    let totalFixes = 0;
    let filesProcessed = 0;

    for (const pattern of patterns) {
        const files = glob.sync(pattern, { "ignore": ['node_modules/**', '.next/**', 'dist/**'] });
        
        for (const file of files) {
            if (fs.existsSync(file)) {
                const fixes = processFile(file);
                totalFixes += fixes;
                filesProcessed++;
            }
        }
    }

    
    
    
    
    if (totalFixes > 0) {
        
    } else {
        
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
    fixed = fixed.replace(
        /return\s*this\.props\.children;\s*\}\s*export\s*default/g,
        'return this.props.children;\n  }\n}\n\nexport default'
    );
    
    return fixed;
});
=======
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5

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

<<<<<<< HEAD
console.log('\n🎯 Syntax error fixing completed!');
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-f0bd
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
