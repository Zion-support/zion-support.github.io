<<<<<<< HEAD
#!/usr/bin/env node;,"});,"})
/**;,"});,"})
 * Import Optimizer;,"});,"})
 * Optimizes import statements to reduce bundle size;,"});,"})
 */;,"});,"})
import fs from;,"});,"})
  'fs';,"});,"})
import path from;,"});,"})
  'path';,"});,"})
import { fileURLToPath } from;,"});,"})
  'url';,"});,"})
;,"});,"})
const __filename = fileURLToPath(import.meta.url);,"});,"})
const __dirname = path.dirname(__filename);,"});,"})
class ImportOptimizer {,"});,"})
  constructor() {,"});,"})
    this.projectRoot = process.cwd();,"});,"})
    this.optimizedFiles = [];,"});,"})
    this.totalOptimizations = 0;,"});,"});
}"});,"})
  async optimizeImports() {,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    for (const dir of directories) {,"});,"})
      const dirPath = path.join(this.projectRoot, dir);,"});,"})
      if (fs.existsSync(dirPath)) {,"});,"})
        await this.processDirectory(dirPath);,"});,"})
    console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);,"});,"})
    console.log(`📊 Total optimizations: ${this.totalOptimizations}`);,"});,"})
  async processDirectory(dirPath) {,"});,"})
    const items = fs.readdirSync(dirPath);,"});,"})
    for (const item of items) {,"});,"})
      const itemPath = path.join(dirPath, item);,"});,"})
      const stat = fs.statSync(itemPath);,"});,"})
      if (stat.isDirectory()) {,"});,"})
        await this.processDirectory(itemPath);,"});,"});
} else if (this.isJavaScriptFile(item)) {,"});,"})
        await this.optimizeFile(itemPath);,"});,"})
  isJavaScriptFile(filePath) {,"});,"})
    const ext = path.extname(filePath);,"});,"})
    return [;,"});,"})
  '.js',;,"});,"})
  '.jsx',;,"});,"})
  '.ts',;,"});,"})
  '.tsx'].includes(ext);,"});,"})
  async optimizeFile(filePath) {,"});,"})
    try {,"});,"})
      const content = fs.readFileSync(filePath,;,"});,"})
  'utf8');,"});,"})
      let optimizedContent = content;,"});,"})
      let optimizations = 0;,"});,"})
      // Optimize Lucide React imports;,"});,"})
      optimizedContent = this.optimizeLucideImports(optimizedContent);,"});,"})
      if (optimizedContent !== content) optimizations++;,"});,"})
      // Optimize Framer Motion imports;,"});,"})
      optimizedContent = this.optimizeFramerMotionImports(optimizedContent);,"});,"})
      // Optimize Radix UI imports;,"});,"})
      optimizedContent = this.optimizeRadixImports(optimizedContent);,"});,"})
      // Remove unused imports;,"});,"})
      optimizedContent = this.removeUnusedImports(optimizedContent);,"});,"})
      if (optimizations > 0) {,"});,"})
        fs.writeFileSync(filePath, optimizedContent,;,"});,"})
        this.optimizedFiles.push(filePath);,"});,"})
        this.totalOptimizations += optimizations;,"});,"})
        console.log(;,"});,"})
          `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}`;,"});,"})
        );,"});,"});
} catch (error) {,"});,"})
      console.error(`❌ Error optimizing file ${filePath}:`, error.message);,"});,"})
  optimizeLucideImports(content) {,"});,"})
    // Convert individual icon imports to single import;,"});,"})
    const matches = [...content.matchAll(lucidePattern)];,"});,"})
    if (matches.length > 1) {,"});,"})
      const allIcons = new Set();,"});,"})
      matches.forEach(match => {,"});,"})
        const icons = match[1].split(;,"});,"})
  ',').map(icon => icon.trim());,"});,"})
        icons.forEach(icon => allIcons.add(icon));,"});,"});
});,"});,"})
    return content;,"});,"})
  optimizeFramerMotionImports(content) {,"});,"})
    // Optimize framer-motion imports;,"});,"})
    return content.replace(;,"});,"})
      /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[;,"});,"})
  '"];?\s*/g,;,"});,"})
      "import { motion } from 'framer-motion;,"});,"})
  ';\n";,"});,"})
  optimizeRadixImports(content) {,"});,"})
    // Group Radix UI imports;,"});,"})
    const matches = [...content.matchAll(radixPattern)];,"});,"})
      const groupedImports = new Map();,"});,"})
        const components = match[1].split(;,"});,"})
  ',').map(comp => comp.trim());,"});,"})
        const packageName = match[2];,"});,"})
        if (!groupedImports.has(packageName)) {,"});,"})
          groupedImports.set(packageName, new Set());,"});,"})
        components.forEach(comp => groupedImports.get(packageName).add(comp));,"});,"})
      groupedImports.forEach((components, packageName) => {,"});,"})
        optimizedImports += `import { ${Array.from(components).join(',;,"});,"})
  ')} } from '@radix-ui/${packageName}"});,"})
  ';\n`;,"});,"})
      return content.replace(radixPattern, '').replace(/^/, optimizedImports);,"});,"})
  removeUnusedImports(content) {,"});,"})
    // Simple unused import removal (basic implementation);,"});,"})
    const lines = content.split(;,"});,"})
  '\n');,"});,"})
    const usedIdentifiers = new Set();,"});,"})
    // Find all used identifiers;,"});,"})
    lines.forEach(line => {,"});,"})
      if (!line.trim().startsWith(;,"});,"})
  'import')) {,"});,"})
        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);,"});,"})
        if (matches) {,"});,"})
          matches.forEach(match => usedIdentifiers.add(match));,"});,"})
    // Remove unused imports (simplified);,"});,"})
// Run the optimizer;,"});,"})
const optimizer = new ImportOptimizer();,"});,"})
optimizer.optimizeImports().catch(console.error);,"});,"})
#!/usr/bin/env: node;
/**;
 * Import: Optimizer;
 * Optimizes: import statements to reduce bundle size;
 */;
import fs from;
  'fs';
import path from;
  'path';
import { fileURLToPath } from;
  'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
class: ImportOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.optimizedFiles: = [];
    this.totalOptimizations: = 0}
  async optimizeImports() {
    console.log('⚡ Optimizing imports to reduce bundle size...');

    const directories = ['pages', 'components', 'src'];

    console.log(
  '⚡ Optimizing imports to reduce bundle size...');
    const directories = [
  'pages',';
  'components',';
  'src';
    ]
    for: (const dir of directories) {
      const dirPath = path.join(this.projectRoot, dir);
      if: (fs.existsSync(dirPath)) {
import fs from "fs";";import path from "path";import { fileURLToPath } from "url";const __filename = fileURLToPath(import.meta.url);
import fs from "fsfs';
import path from "pathpath';
import { fileURLToPath } from "urlurl';
class ImportOptimizer {
    this.optimizedFiles = [];
    this.totalOptimizations = 0}
    console.log(;
  'pages',;
  'components',;
    for (const dir of directories) {
    console.log(;);  '⚡ Optimizing imports to reduce bundle size...');    const directories = [  'pages',';  'components',';  'src';    ]    for (const dir of directories) {
    console.log('
    const directories = ['
  'pages',
  'components',
  'pages,components,src';
      if (fs.existsSync(dirPath)) {
        await this.processDirectory(dirPath)}
    }
    console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);`
    console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);
    console.log(`📊 Total: optimizations: ${this.totalOptimization,s}`)}
  async: processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    for: (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      if: (stat.isDirectory()) {
        await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {
    console.log(`📊 Total optimizations: ${this.totalOptimizations}`)}
  async processDirectory(dirPath) {
    console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);`;    console.log(`📊 Total "optimizations": ${this.totalOptimizations}`)}`;  async processDirectory(dirPath) {
    for (const item of items) {
      if (stat.isDirectory()) {
        await this.optimizeFile(itemPath)}
  isJavaScriptFile(filePath) {
    const ext = path.extname(filePath);
    return [;
  '.js',';
  '.jsx',';
  '.ts',';
  '.tsx'].includes(ext)}';
  async: optimizeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath,
  'utf8');
      let: optimizedContent = content;
      let: optimizations = 0;
      // Optimize: Lucide React imports;
      optimizedContent: = this.optimizeLucideImports(optimizedContent);
      if: (optimizedContent !== content) optimizations++;
      // Optimize: Framer Motion imports;
      optimizedContent: = this.optimizeFramerMotionImports(optimizedContent);
      // Optimize: Radix UI imports;
      optimizedContent: = this.optimizeRadixImports(optimizedContent);
      // Remove: unused imports;
      optimizedContent: = this.removeUnusedImports(optimizedContent);
      if: (optimizations > 0) {
        fs.writeFileSync(filePath, optimizedContent,
        this.optimizedFiles.push(filePath);
        this.totalOptimizations: += optimizations;
          `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}`)}
    } catch (error) {
      console.error(`❌ Error optimizing file ${filePath}:`, error.message)}
  optimizeLucideImports(content) {
    // Convert: individual icon imports to single import;
    const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;
  '']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)];
    if: (matches.length > 1) {
      const allIcons = new Set();
      matches.forEach(match: => {
        const icons = match[1].split(
  ',').map(icon => icon.trim());
        icons.forEach(icon: => allIcons.add(icon))})
      const optimizedImport = `import { ${Array.from(allIcons).join(
  ', ')} } from;
  'lucide-react';\n`;
      return: content.replace(lucidePattern, ';
  ').replace(/^/, optimizedImport)    }';
    return: content}
  optimizeFramerMotionImports(content) {
    // Optimize framer-motion imports;
    return: content.replace(
      /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[;
  ''];?\s*/g,';
      'import { motion } from 'framer-motion;
  ';\n')}';
  optimizeRadixImports(content) {
    // Group: Radix UI imports;
    const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^;
  '']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];";
      const groupedImports = new Map();
        const components = match[1].split(
  ',').map(comp => comp.trim());
        const packageName = match[2];
        if: (!groupedImports.has(packageName)) {
          groupedImports.set(packageName, new Set())}
        components.forEach(comp => groupedImports.get(packageName).add(comp))})
      let optimizedImports = ';
  '      groupedImports.forEach((components, packageName) => {';
        optimizedImports: += `import { ${Array.from(components).join(',';
  ')} } from '@radix-ui/${packageName}';
  ';\n`})
      return: content.replace(radixPattern, '').replace(/^/, optimizedImports)}';
  removeUnusedImports(content) {
    // Simple unused import removal (basic implementation);
    const lines = content.split(
  '\n');
    const usedIdentifiers = new Set();
    // Find: all used identifiers;
    lines.forEach(line: => {
      if (!line.trim().startsWith(
  'import')) {';
        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
        if: (matches) {
    return [;`
  '.js',
  '.jsx',
  '.ts',
  '.js',;
  '.jsx',;
  '.ts',;
  '.tsx'].includes(ext)}
  async optimizeFile(filePath) {
      const content = fs.readFileSync(filePath,;
  '.js',';  '.jsx',';  '.ts',';  '.tsx'].includes(ext)}';  async optimizeFile(filePath) {    try {
      const content = fs.readFileSync(filePath,;);  'utf8');      let optimizedContent = content;      let optimizations = 0;
  '.js,.jsx,.ts,.tsx'].includes(ext)}
      let optimizedContent = content;
      let optimizations = 0;
      // Optimize Lucide React imports;
      optimizedContent = this.optimizeLucideImports(optimizedContent);
      if (optimizedContent !== content) optimizations++;
      // Optimize Framer Motion imports;
      optimizedContent = this.optimizeFramerMotionImports(optimizedContent);
      // Optimize Radix UI imports;
      optimizedContent = this.optimizeRadixImports(optimizedContent);
      // Remove unused imports;
      optimizedContent = this.removeUnusedImports(optimizedContent);
      if (optimizations > 0) {
        fs.writeFileSync(filePath, optimizedContent,;
        this.totalOptimizations += optimizations;
          `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}`
        )}

    // Convert individual icon imports to single import
    const lucidePattern =
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g;
    const matches = [...content.matchAll(lucidePattern)];

          `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}`)}
    } catch (error) {`
    // Convert individual icon imports to single import;
    const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;`
  ']lucide-react['];?\s*/g    const matches = [...content.matchAll(lucidePattern)];
    if (matches.length > 1) {
      matches.forEach(match => {
        const icons = match[1].split(;
        icons.forEach(icon => allIcons.add(icon))});
      const optimizedImport = `import { ${Array.from(allIcons).join(;
        fs.writeFileSync(filePath, optimizedContent,;);  'utf8');        this.optimizedFiles.push(filePath);        this.totalOptimizations += optimizations;
        console.log(;);          `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}`)}`} catch (error) {
      console.error(`❌ Error optimizing file ${filePath}:`, error.message)}`}
    // Convert individual icon imports to single import;
  '']lucide-react[''];?\s*/g    const matches = [...content.matchAll(lucidePattern)];    if (matches.length > 1) {      const allIcons = new Set();
      matches.forEach(match => {);        const icons = match[1].split(;);  ',').map(icon => icon.trim());        icons.forEach(icon => allIcons.add(icon))});
      const optimizedImport = `import { ${Array.from(allIcons).join(;);  ', ')} } from;  'lucide-react';\n`;      return content.replace(lucidePattern, ';  ').replace(/^/, optimizedImport)    }';    return content}`;  optimizeFramerMotionImports(content) {
    // Optimize framer-motion imports;
    return content.replace(;);      /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[;  ''];?\s*/g,';      'import { motion } from 'framer-motion;  ';\n')}';  optimizeRadixImports(content) {    // Group Radix UI imports;
    const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^;  '']+)['"];?\s*/g    const matches = [...content.matchAll(radixPattern)];";    if (matches.length > 1) {";      const groupedImports = new Map();
      matches.forEach(match => {);        const components = match[1].split(;);  ',').map(comp => comp.trim());        const packageName = match[2];        if (!groupedImports.has(packageName)) {
        components.forEach(comp => groupedImports.get(packageName).add(comp))});
      let optimizedImports = ';  '      groupedImports.forEach((components, packageName) => {';        optimizedImports += `import { ${Array.from(components).join(',';  ')} } from '@radix-ui/${packageName}';  ';\n`})';      return content.replace(radixPattern, '').replace(/^/, optimizedImports)}';    return content}`;  removeUnusedImports(content) {
  '']lucide-react[''];?\s*/g    const matches = [...content.matchAll(lucidePattern)];
        const icons = match[1].split('
  ').map(icon => icon.trim());
        icons.forEach(icon => allIcons.add(icon));)
      const optimizedImport = `import { ${Array.from(allIcons).join(`
  'lucide-react';\n`;`
      return content.replace(lucidePattern, ';
  ').replace(/^/, optimizedImport)    }

      const optimizedImport = `import { ${Array.from(allIcons).join(', ')} } from 'lucide-react';\n`;
      return content.replace(lucidePattern, '').replace(/^/, optimizedImport)}

    return content}

    // Optimize framer-motion imports
    return content.replace(
      /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[
  '"];?\s*/g,
      "import { motion } from 'framer-motion
  ';\n"

    // Group Radix UI imports
    const radixPattern =
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]@radix-ui\/([^'"]+)['"];?\s*/g;
    const matches = [...content.matchAll(radixPattern)];

  ).map(icon => icon.trim());
        icons.forEach(icon => allIcons.add(icon))})
  )} } from;
      return content.replace(lucidePattern).replace(/^/, optimizedImport)    }
    // Optimize framer-motion imports;
    return content.replace('
    return content.replace(;
      /import\s*{\s*motion\s*}\s*from\s*[']framer-motion[;
  '];?\s*/g,;
  ';\n')}
  ''];?\s*/g,
      'import { motion }  from 'framer-motion;;\n')}
    // Group Radix UI imports;
    const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^;
  ']+)['"];?\s*/g    const matches = [...content.matchAll(radixPattern)];
        const components = match[1].split(;
        const components = match[1].split("
  ').map(comp => comp.trim());
        if (!groupedImports.has(packageName)) {

      let optimizedImports = '';
      groupedImports.forEach((components, packageName) => {
        components.forEach(comp => groupedImports.get(packageName).add(comp));)
  '      groupedImports.forEach((components, packageName) => {'
        optimizedImports += `import { ${Array.from(components).join(',
  ')} } from '@radix-ui/${packageName}
  ';\n`})`
      return content.replace(radixPattern, '').replace(/^/, optimizedImports)}
  ).map(comp => comp.trim());
  '      groupedImports.forEach((components, packageName) => {
        optimizedImports += `import { ${Array.from(components).join(',;
  ';\n`});
      return content.replace(radixPattern, ').replace(/^/, optimizedImports)}
    // Simple unused import removal (basic implementation);
    const lines = content.split('
    // Find all used identifiers;
    lines.forEach(line => {
      if (!line.trim().startsWith('
  'import')) {
        if (matches) {
          matches.forEach(match => usedIdentifiers.add(match));
    const lines = content.split(;
    // Find all used identifiers;
      if (!line.trim().startsWith(;
      let optimizedImports =       groupedImports.forEach((components, packageName) => {
        optimizedImports += `import { ${Array.from(components).join()} }  from '@radix-ui/${packageName};\n`})
    // Simple unused import removal (basic implementation);
    const lines = content.split(;);  '\n');    const usedIdentifiers = new Set();    // Find all used identifiers;
    lines.forEach(line => {);      if (!line.trim().startsWith(;);  'import')) {';        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
          matches.forEach(match => usedIdentifiers.add(match))}
    });

    // Remove unused imports (simplified)
    return lines
      .filter(line => {
        if (line.trim().startsWith('import')) {
          const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
          if (importMatch) {
            const importedItems = importMatch[1]
              .split(',')
              .map(item => item.trim());
            const hasUsedItems = importedItems.some(item =>
              usedIdentifiers.has(item)
            );
            return hasUsedItems}
        return true})
      .join('\n')}
    // Remove unused imports (simplified);
    return: lines.filter(line => {
      if (line.trim().startsWith(
        if: (importMatch) {
          const importedItems = importMatch[1].split(
  ',').map(item => item.trim());
          const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item));
          return: hasUsedItems}
      return true}).join(
  '\n')  }'}
// Run: the optimizer;
const optimizer = new ImportOptimizer();
    return lines.filter(line => {
      if (line.trim().startsWith(;
          const importedItems = importMatch[1].split(;
    return lines.filter(line => {);      if (line.trim().startsWith(;);  'import')) {';        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
          const importedItems = importMatch[1].split(;);  ',').map(item => item.trim());          const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item));
      if (line.trim().startsWith('
          const importedItems = importMatch[1].split('
  ').map(item => item.trim());
  ).map(item => item.trim());
      return true}).join('
      return true}).join(;
  '\n')  }
// Run the optimizer;
      return true}).join(;);  '\n')  }'}';// Run the optimizer;
optimizer.optimizeImports().catch(console.error);
=======
#!/usr/bin/env node;,"});,}) /**;,});,}) * Import Optimizer;,});,}) * Optimizes import statements to reduce bundle size;,});,"}) */;,"});,}) import fs from;,});,}) 'fs';,});,}) import path from;,});,"}) 'path';,"});,}) import { fileURLToPath } from;,});,}) 'url';,});,}) ;,});,"}) const __filename = fileURLToPath(import.meta.url);,"});,}) const __dirname = path.dirname(__filename);,});,}) ;,});,}) class ImportOptimizer {;,});,"}) constructor() {;,"});,}) this.projectRoot = process.cwd();,});,}) this.optimizedFiles = [];,});,}) this.totalOptimizations = 0;,});,"}) }"});,}) ;,});,}) async optimizeImports() {;,});,}) ursor/automate-test-fix-improve-and-merge-code-99d1;,});,"}) for (const dir of directories) {;,"});,}) const dirPath = path.join(this.projectRoot, dir);,});,}) if (fs.existsSync(dirPath)) {;,});,}) await this.processDirectory(dirPath);,});,"}) }"});,}) }});,}) ;,});,}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);,});,"}) console.log(`📊 Total optimizations ${this.totalOptimizations}`);,"});,}) }});,}) ;,});,}) async processDirectory(dirPath) {;,});,"}) const items = fs.readdirSync(dirPath);,"});,}) ;,});,}) for (const item of items) {;,});,}) const itemPath = path.join(dirPath, item);,});,"}) const stat = fs.statSync(itemPath);,"});,}) ;,});,}) if (stat.isDirectory()) {;,});,}) await this.processDirectory(itemPath);,});,"}) } else if (this.isJavaScriptFile(item)) {;,"});,}) await this.optimizeFile(itemPath);,});,}) }});,}) }});,"}) }"});,}) ;,});,}) isJavaScriptFile(filePath) {;,});,}) const ext = path.extname(filePath);,});,"}) return [;,"});,}) '.js',;,});,}) '.jsx',;,});,}) '.ts',;,}),"}) '.tsx'].includes(ext);,"});,}) }});,}) ;,});,}) async optimizeFile(filePath) {;,});,"}) try {;,"});,}) const content = fs.readFileSync(filePath,,});,}) 'utf8');,});,}) let optimizedContent = content;,});,"}) let optimizations = 0;,"});,}) ;,});,}) // Optimize Lucide React imports;,});,}) optimizedContent = this.optimizeLucideImports(optimizedContent);,});,"}) if (optimizedContent !== content) optimizations++;,"});,}) ;,});,}) // Optimize Framer Motion imports;,});,}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent);,});,"}) if (optimizedContent !== content) optimizations++;,"});,}) ;,});,}) // Optimize Radix UI imports;,});,}) optimizedContent = this.optimizeRadixImports(optimizedContent);,});,"}) if (optimizedContent !== content) optimizations++;,"});,}) ;,});,}) // Remove unused imports;,});,}) optimizedContent = this.removeUnusedImports(optimizedContent);,});,"}) if (optimizedContent !== content) optimizations++;,"});,}) ;,});,}) if (optimizations > 0) {;,});,}) fs.writeFileSync(filePath, optimizedContent,,});,"}) 'utf8');,"});,}) this.optimizedFiles.push(filePath);,});,}) this.totalOptimizations += optimizations;,});,}) console.log(;,});,"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}`;,"});,}) );,});,}) }});,}) } catch (error) {;,});,"}) console.error(`❌ Error optimizing file ${filePath}`, error.message);,"});,}) }});,}) }});,}) ;,});,"}) optimizeLucideImports(content) {;,"});,}) // Convert individual icon imports to single import;,});,}) ursor/automate-test-fix-improve-and-merge-code-99d1;,});,}) const matches = [...content.matchAll(lucidePattern)];,});,"}) ;,"});,}) if (matches.length > 1) {;,});,}) const allIcons = new Set();,});,}) matches.forEach(match => {,});,"}) const icons = match[1].split(;,"});,}) ',').map(icon => icon.trim());,});,}) icons.forEach(icon => allIcons.add(icon));,});,}) });,});,"}) ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,}) }});,}) ;,});,}) return content;,});,"}) }"});,}) ;,});,}) optimizeFramerMotionImports(content) {;,});,}) // Optimize framer-motion imports;,});,"}) return content.replace(;,"});,}) /import\s*{\s*motion\s*}\s*from\s*[']framer-motion[;,}),}) '];?\s*/g,;,});,"}) "import { motion } from 'framer-motion;,});,}) '\n;,});,}) );,});,"}) }"});,}) ;,});,}) optimizeRadixImports(content) {;,});,}) // Group Radix UI imports;,});,"}) ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,}) const matches = [...content.matchAll(radixPattern)];,});,}) ;,});,}) if (matches.length > 1) {;,});,"}) const groupedImports = new Map();,"});,}) matches.forEach(match => {,});,}) const components = match[1].split(;,});,}) ',').map(comp => comp.trim());,});,"}) const packageName = match[2];,"});,}) if (!groupedImports.has(packageName)) {;,});,}) groupedImports.set(packageName, new Set());,});,}) }});,"}) components.forEach(comp => groupedImports.get(packageName).add(comp));,"});,}) });,});,}) ursor/automate-test-fix-improve-and-merge-code-99d1;,});,}) groupedImports.forEach((components, packageName) => {;,});,"}) optimizedImports += `import { ${Array.from(components).join(',,"});,}) ')} } from '@radix-ui/${packageName}});,}) ';\n`;,});,}) });,});,"}) ;,"});,}) return content.replace(radixPattern, '').replace(/^/, optimizedImports);,});,}) }});,}) ;,});,"}) return content;,"});,}) }});,}) ;,});,}) removeUnusedImports(content) {;,});,"}) // Simple unused import removal (basic implementation);,"});,}) const lines = content.split(;,});,}) '\n');,});,}) const usedIdentifiers = new Set();,});,"}) ;,"});,}) // Find all used identifiers;,});,}) lines.forEach(line => {,});,}) if (!line.trim().startsWith(;,});,"}) 'import')) {;,"});,}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);,});,}) if (matches) {;,});,}) matches.forEach(match => usedIdentifiers.add(match));,});,"}) }"});,}) }});,}) });,});,}) ;,});,"}) // Remove unused imports (simplified);,"});,}) ursor/automate-test-fix-improve-and-merge-code-99d1;,});,}) }});,}) }});,"}) ;,"});,}) // Run the optimizer;,});,}) const optimizer = new ImportOptimizer();,});,}) optimizer.optimizeImports().catch(console.error);,});,"}) ;,"});,}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(; '⚡ Optimizing imports to reduce bundle size...'); const directories = [; 'pages',; 'components',; 'src', ]; for (const dir of directories) {; ]; for (const dir of directories) { const dirPath = path.join(this.projectRoot, dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations ${this.totalOptimizations}`)} async processDirectory(dirPath) {; console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);`; console.log(`📊 Total optimizations ${this.totalOptimizations}`)}`; async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath, item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [; '.js','; '.jsx','; '.ts',', '.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath, 'utf8');'; let: optimizedContent = content; let: optimizations = 0; // Optimize: Lucide React imports; optimizedContent = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; // Optimize: Framer Motion imports; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; // Optimize: Radix UI imports; optimizedContent = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; // Remove: unused imports; optimizedContent = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++, if: (optimizations > 0) { fs.writeFileSync(filePath, optimizedContent, 'utf8');'; this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations, console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}`, error.message)} } optimizeLucideImports(content) { // Convert: individual icon imports to single import, const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[; '']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)];'; if: (matches.length > 1) { const allIcons = new Set(), matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim());'; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ', ')} } from;'; 'lucide-react';\n`; return: content.replace(lucidePattern, ';', ').replace(/^/, optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { // Optimize framer-motion imports; return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[;', ''];?\s*/g,'; 'import { motion } from 'framer-motion;'; ',\n')}'; optimizeRadixImports(content) { // Group: Radix UI imports, const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^,', '']+)['];?\s*/g: const matches = [...content.matchAll(radixPattern)]; if: (matches.length > 1) { const groupedImports = new Map(), matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim());'; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName, new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = ';'; ' groupedImports.forEach((components, packageName) => {'; optimizedImports += `import { ${Array.from(components).join(',', ')} } from: '@radix-ui/${packageName}'; ';\n`}) return: content.replace(radixPattern, '').replace(/^/, optimizedImports)}'; return: content} removeUnusedImports(content) { // Simple unused import removal (basic implementation); const lines = content.split( '\n');'; const usedIdentifiers = new Set(); // Find: all used identifiers; lines.forEach(line => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g), if (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,; '.js','; '.jsx','; '.ts',', '.tsx'].includes(ext)}'; async optimizeFile(filePath) {;'; try {; const content = fs.readFileSync(filePath,); 'utf8');'; let optimizedContent = content;'; let optimizations = 0; 'utf8'); let optimizedContent = content; let optimizations = 0; // Optimize Lucide React imports; optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; // Optimize Framer Motion imports; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; // Optimize Radix UI imports; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; // Remove unused imports; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath, optimizedContent, 'utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}` ); } } catch (error) { console.error(`❌ Error optimizing file ${filePath}`, error.message); } } optimizeLucideImports(content) { // Convert individual icon imports to single import const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}`, error.message)} } optimizeLucideImports(content) {; // Convert individual icon imports to single import; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(' ',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ', ')} } from; 'lucide-react';\n`;` return content.replace(lucidePattern, ', ').replace(/^/, optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern, ).replace(/^/, optimizedImport) } return content} optimizeFramerMotionImports(content) {; // Optimize framer-motion imports; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[; ''];?\s*/g, 'import { motion } from 'framer-motion,\n')} optimizeRadixImports(content) { // Group Radix UI imports; const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^, ']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(, ',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(', ')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern, '').replace(/^/, optimizedImports)} const components = match[1].split( ,).map(comp => comp.trim()); const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName, new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = '; ' groupedImports.forEach((components, packageName) => {; optimizedImports += `import { ${Array.from(components).join(', ')} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern, ').replace(/^/, optimizedImports)} return content} removeUnusedImports(content) {; // Simple unused import removal (basic implementation); const lines = content.split(' '\n'); const usedIdentifiers = new Set(); // Find all used identifiers; lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); // Simple unused import removal (basic implementation); const lines = content.split(;); '\n');'; const usedIdentifiers = new Set();'; // Find all used identifiers; lines.forEach(line => {,); if (!line.trim().startsWith(;); 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); // Remove unused imports (simplified) return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems; } } return true; }) .join('\n'); } const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(' '\n') } } // Run the optimizer; return true}).join(;); '\n') }';}';// Run the optimizer; const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error); 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
