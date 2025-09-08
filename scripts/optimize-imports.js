
const __dirname = path.dirname(__filename);
class ImportOptimizer {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.optimizedFiles = [];
    this.totalOptimizations = 0}

    ];

    for (const dir of directories) {


      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {;

        await this.processDirectory(dirPath)}
    }

    console.log(`📊 Total optimizations: ${this.totalOptimizations}`)}
  async processDirectory(dirPath) {;

    const items = fs.readdirSync(dirPath);

<<<<<<< HEAD
     else if (this.isJavaScriptFile(item)) {;      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g;
=======
     else if (this.isJavaScriptFile(item)) {;


    for (const item of items) {;
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      if (stat.isDirectory()) {;
        await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {;

        await this.optimizeFile(itemPath)}
    }
  }
  isJavaScriptFile(filePath) {;
    const ext = path.extname(filePath);

  '.tsx'].includes(ext)}
  async optimizeFile(filePath) {;
    try {;
      const content = fs.readFileSync(filePath,;

      // Optimize Lucide React imports;
      optimizedContent = this.optimizeLucideImports(optimizedContent);
      if (optimizedContent !== content) optimizations++;
      // Optimize Framer Motion imports;
      optimizedContent = this.optimizeFramerMotionImports(optimizedContent);
      if (optimizedContent !== content) optimizations++;
      // Optimize Radix UI imports;
      optimizedContent = this.optimizeRadixImports(optimizedContent);
      if (optimizedContent !== content) optimizations++;
      // Remove unused imports;
      optimizedContent = this.removeUnusedImports(optimizedContent);
      if (optimizedContent !== content) optimizations++;
      if (optimizations > 0) {;

      console.error(`❌ Error optimizing file ${filePath}:`, error.message)}
  }
  optimizeLucideImports(content) {;
    // Convert individual icon imports to single import;

  '']lucide-react[''];?\s*/g    const matches = [...content.matchAll(lucidePattern)];

    if (matches.length > 1) {
      const allIcons = new Set();
      matches.forEach(match => {

  'lucide-react';\n`;
      return content.replace(lucidePattern, ).replace(/^/, optimizedImport)    }

    return content}
  optimizeFramerMotionImports(content) {;
    // Optimize framer-motion imports;

      /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[
  ''];?\s*/g,
      'import { motion }  from 'framer-motion;;\n')}
  optimizeRadixImports(content) {

    // Group Radix UI imports;
    const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^;
  ']+)['"];?\s*/g    const matches = [...content.matchAll(radixPattern)];
    if (matches.length > 1) {;

      const groupedImports = new Map();

        optimizedImports += `import { ${Array.from(components).join(',
  ')} } from '@radix-ui/${packageName}
  ';\n`})`
      return content.replace(radixPattern, '').replace(/^/, optimizedImports)}

        const packageName = match[2];
        if (!groupedImports.has(packageName)) {;
          groupedImports.set(packageName, new Set())}

    // Simple unused import removal (basic implementation);
    const lines = content.split(;);  '\n');
;    const usedIdentifiers = new Set();;    // Find all used identifiers;
    lines.forEach(line => {;);      if (!line.trim().startsWith(;);  'import')) {';        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);

        if (matches) {;

          matches.forEach(match => usedIdentifiers.add(match))}

      }
    });


          const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item));

          return hasUsedItems}
      }

  '\n')  }

}
// Run the optimizer;

const optimizer = new ImportOptimizer();

optimizer.optimizeImports().catch(console.error);

