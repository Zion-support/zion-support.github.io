#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

<<<<<<< HEAD
class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = []}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  getAllFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    }
    
    return files}

  fixImportStatements(content) {
    // Fix malformed import statements
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 
      'import { $1 } from \'$2\'\nimport { $3 } from \'$4\'');
    
    // Fix missing semicolons after imports
    content = content.replace(/import\s*{[^}]+}\s*from\s*['"][^'"]+['"](?!\s*;)/g, '$&;');
    
    return content}

  fixStringConcatenation(content) {
    // Fix malformed string concatenation with semicolons
    content = content.replace(/['"]\s*;\s*['"]/g, '');
    content = content.replace(/['"]\s*;\s*([^'"]*)\s*['"]/g, '$1');
    
    // Fix array syntax issues
    content = content.replace(/\[\s*['"]\s*;\s*([^'"]*)\s*['"]\s*\]/g, '[\'$1\']');
    content = content.replace(/\[\s*['"]\s*([^'"]*)\s*;\s*['"]\s*\]/g, '[\'$1\']');
    
    return content}

  fixObjectSyntax(content) {
    // Fix object property syntax
    content = content.replace(/{\s*['"]\s*;\s*([^'"]*)\s*['"]\s*:/g, '{ \'$1\':');
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*,/g, ': \'$1\',');
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*}/g, ': \'$1\' }');
    
    return content}

  fixJSXSyntax(content) {
    // Fix JSX attribute syntax
    content = content.replace(/className\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g, 'className=\'$1\'');
    content = content.replace(/href\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g, 'href=\'$1\'');
    content = content.replace(/title\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g, 'title=\'$1\'');
    
    return content}
=======
console.log('🔧 Starting comprehensive syntax error fixing...');

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
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b

    // Fix malformed CSS in JSX
    content = content.replace(/@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, '');
    
<<<<<<< HEAD
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Check for unterminated strings
      const singleQuotes = (line.match(/'/g) || []).length;
      const doubleQuotes = (line.match(/"/g) || []).length;
      
      if (singleQuotes % 2 !== 0 && !line.includes('//')) {
        // Try to fix unterminated single quotes
        if (line.includes("'") && !line.endsWith("'")) {
          line = line + "'"}
      }
      
      if (doubleQuotes % 2 !== 0 && !line.includes('//')) {
        // Try to fix unterminated double quotes
        if (line.includes('"') && !line.endsWith('"')) {
          line = line + '"'}
      }
      
      fixedLines.push(line)}
    
    return fixedLines.join('\n')}

  fixFile(filePath) {
    try {
      this.log(`Fixing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Apply all fixes
      content = this.fixImportStatements(content);
      content = this.fixStringConcatenation(content);
      content = this.fixObjectSyntax(content);
      content = this.fixJSXSyntax(content);
      content = this.fixUnterminatedStrings(content);
      
      // Additional cleanup
      content = content.replace(/\s*;\s*;\s*/g, ';');
      content = content.replace(/,\s*,\s*/g, ',');
      content = content.replace(/\s*;\s*$/gm, ';');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true}
      
      return false} catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}
  }
=======
    // Fix malformed function declarations
    content = content.replace(/export\s+const\s+SEO:\s*Reac\s+t\.FC<[^>]+>\s*=\s*\(/g, 'export const SEO: React.FC<SEOProps> = (');
    
    // Fix malformed return statements in functions
    content = content.replace(/return\s*\(\)\s*\/\*[^*]*\*\/\s*@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, 'return null;');

    // Fix missing semicolons
    content = content.replace(/([^;}])\s*$/gm, '$1;');
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b

    // Fix malformed object destructuring
    content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*useAuth\(\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(\[\]\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(true\);\s*const\s+navigate\s*=\s*useNavigate\(\);\s*useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[user\]\);\s*const\s+handleRequestHire\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*return\s*\(<div[^>]*>([^<]*)<\/div>\);\s*}/g, (match, user, savedTalents, isLoading, content) => {
        fixes++;
        return `const { ${user} } = useAuth();
    const [${savedTalents}] = useState([]);
    const [${isLoading}] = useState(true);
    const navigate = useNavigate();
    
<<<<<<< HEAD
    const srcDir = path.join(this.projectRoot, 'src');
    if (!fs.existsSync(srcDir)) {
      this.log('❌ src directory not found');
      return}
    
    const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
    this.log(`Found ${files.length} files to check`);
    
    let fixedCount = 0;
    for (const file of files) {
      if (this.fixFile(file)) {
        fixedCount++}
    }
    
    this.log(`🎉 Fixed ${fixedCount} files`);
    this.log(`❌ ${this.errors.length} errors encountered`);
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: files.length,
      fixedFiles: fixedCount,
      errors: this.errors,
      fixedFileList: this.fixedFiles
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'syntax-fix-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log('📊 Report saved to syntax-fix-report.json')}
=======
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
}

// Function to process a single file
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { content: fixedContent, fixes } = fixSyntaxErrors(content, filePath);
        
        if (fixes > 0) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            console.log(`✅ Fixed ${fixes} issues in ${filePath}`);
            return fixes;
        }
        return 0;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return 0;
    }
}

// Main execution
async function main() {
    const patterns = [
        'src/**/*.tsx',
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
        const files = glob.sync(pattern, { ignore: ['node_modules/**', '.next/**', 'dist/**'] });
        
        for (const file of files) {
            if (fs.existsSync(file)) {
                const fixes = processFile(file);
                totalFixes += fixes;
                filesProcessed++;
            }
        }
    }

    console.log(`\n📊 Summary:`);
    console.log(`   Files processed: ${filesProcessed}`);
    console.log(`   Total fixes applied: ${totalFixes}`);
    
    if (totalFixes > 0) {
        console.log(`\n✨ Syntax error fixing completed!`);
    } else {
        console.log(`\n✨ No syntax errors found to fix.`);
    }
}

main().catch(console.error);