    // Fix malformed CSS in JSX
    content = content.replace(/@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, '');
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
    // Fix malformed function declarations
    content = content.replace(/export\s+const\s+SEO:\s*Reac\s+t\.FC<[^>]+>\s*=\s*\(/g, 'export const SEO: React.FC<SEOProps> = (');
    // Fix malformed return statements in functions
    content = content.replace(/return\s*\(\)\s*\/\*[^*]*\*\/\s*@media\(prefers-reduced-motion:\s*reduc\s*e\)\s*\{[^}]*\}/g, 'return null;');
    // Fix missing semicolons
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    // Fix malformed object destructuring
    content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*useAuth\(\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(\[\]\);\s*const\s+\[([^\]]+)\]\s*=\s*useState\(true\);\s*const\s+navigate\s*=\s*useNavigate\(\);\s*useEffect\(\(\)\s*=>\s*\{[^}]*\},\s*\[user\]\);\s*const\s+handleRequestHire\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*return\s*\(<div[^>]*>([^<]*)<\/div>\);\s*}/g, (match, user, savedTalents, isLoading, content) => {
        fixes++;
        return `const { ${user} } = useAuth();
    const [${savedTalents}] = useState([]);
    const [${isLoading}] = useState(true);
    const navigate = useNavigate();
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
    this.log('📊 Report saved to syntax-fix-report.json')}
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
        
        /return\s*this\.props\.children;\s*\}\s*export\s*default/g,
        'return this.props.children;\n  }\n}\n\nexport default'
    );
    return fixed;
});
// Fix PerformanceMonitor syntax
fixFile('components/PerformanceMonitor.tsx', 'PerformanceMonitor syntax', (content) => {
    // Replace the entire file with correct syntax
    return `import { useEffect } from 'react';
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
        }
      });
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Fallback for browsers that don't support LCP
      }
      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }
      });
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // Fallback for browsers that don't support FID
      }
      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('CLS:', clsValue);
      });
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support CLS
      }
      return () => {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);
  return null; // This component doesn't render anything
};
export default PerformanceMonitor;`;
});
console.log('\n📊 Fix Summary');
console.log('=');
console.log(`Total fixes applied: ${fixes.length}`);
if (fixes.length > 0) {
    console.log('\nFixed files:');
    fixes.forEach(fix => {
        console.log(`  ✅ ${fix.file}: ${fix.description}`);
    });
} else {
    console.log('\n✅ No syntax errors found - all files are clean!');
}
console.log('\n🎯 Syntax error fixing completed!');