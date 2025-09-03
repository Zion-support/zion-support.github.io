<<<<<<< HEAD
#!/usr/bin/env node;,"});,"})
/**;,"});,"})
 * Link Integrity Checker Script;,"});,"})
 * Checks the integrity of links and assets;,"});,"})
 */;,"});,"})
import fs from,;,"});,"})
  fs';,"});,"})
import path from;,"});,"})
  'path';,"});,"})
import { fileURLToPath } from;,"});,"})
  'url';,"});,"})
;,"});,"})
const __filename = fileURLToPath(import.meta.url);,"});,"})
const __dirname = path.dirname(__filename);,"});,"})
console.log(;,"});,"})
  '🔗 Link Integrity Checker Started');,"});,"})
class LinkIntegrityChecker {,"});,"})
  constructor() {,"});,"})
    this.projectRoot = path.resolve(__dirname,..;,"});,"})
  ');,"});,"})
    this.issues = [];,"});,"})
    this.checkedFiles = 0;,"});,"});
}"});,"})
  async checkIntegrity() {,"});,"})
    try {,"});,"})
      console.log('🔍 Checking link and asset integrity...;,"});,"})
      // Check HTML files for broken references;,"});,"})
      await this.checkHtmlIntegrity();,"});,"})
      // Check CSS files for broken asset references;,"});,"})
      await this.checkCssIntegrity();,"});,"})
      // Check JavaScript files for broken imports;,"});,"})
      await this.checkJsIntegrity();,"});,"})
      // Check build artifacts;,"});,"})
      await this.checkBuildArtifacts();,"});,"})
      // Generate integrity report;,"});,"})
      await this.generateReport();,"});,"})
      console.log('✅ Link integrity check completed;,"});,"});
} catch (error) {,"});,"})
      console.error('❌ Error during integrity check: , error.message);,"});,"})
  async checkHtmlIntegrity() {,"});,"})
      console.log('📄 Checking HTML integrity...;,"});,"})
      const htmlFiles = this.findFiles('.html;,"});,"})
      for (const file of htmlFiles) {,"});,"})
        this.checkedFiles++;,"});,"})
        const content = fs.readFileSync(file,utf8');,"});,"})
        // Check for broken image references;,"});,"})
        const imgRegex = /<img[^>]+src=[";,"});,"})
  ']([^"']+)[";,"});,"})
  ']/g;,"});,"})
        let match;,"});,"})
        while ((match = imgRegex.exec(content)) !== null) {,"});,"})
          const src = match[1];,"});,"})
          if (!this.isValidAsset(src, file)) {,"});,"})
            this.issues.push(`Broken image reference in ${file}: ${src}`);,"});,"})
        // Check for broken script references;,"});,"})
        const scriptRegex = /<script[^>]+src=["']([^";,"});,"})
  ']+)["']/g;,"});,"})
        while ((match = scriptRegex.exec(content)) !== null) {,"});,"})
            this.issues.push(`Broken script reference in ${file}: ${src}`);,"});,"})
        // Check for broken stylesheet references;,"});,"})
        const linkRegex = /<link[^>]+href=[";,"});,"})
        while ((match = linkRegex.exec(content)) !== null) {,"});,"})
          const href = match[1];,"});,"})
          if (!this.isValidAsset(href, file)) {,"});,"})
            this.issues.push(`Broken stylesheet reference in ${file}: ${href}`);,"});,"})
      console.warn(,;,"});,"})
  ⚠️  Could not check HTML integrity: , error.message);,"});,"})
  async checkCssIntegrity() {,"});,"})
      console.log('🎨 Checking CSS integrity...;,"});,"})
      const cssFiles = this.findFiles('.css;,"});,"})
      for (const file of cssFiles) {,"});,"})
        // Check for broken image references in CSS;,"});,"})
        const urlRegex = /url\([;,"});,"})
  '"]?([^'")\s]+)[;,"});,"})
  '"]?\)/g;,"});,"})
        while ((match = urlRegex.exec(content)) !== null) {,"});,"})
          const url = match[1];,"});,"})
          if (!this.isValidAsset(url, file)) {,"});,"})
            this.issues.push(`Broken asset reference in CSS ${file}: ${url}`);,"});,"})
  ⚠️  Could not check CSS integrity: , error.message);,"});,"})
  async checkJsIntegrity() {,"});,"})
      console.log('⚡ Checking JavaScript integrity...;,"});,"})
      const jsFiles = this.findFiles('.js;,"});,"})
      const tsFiles = this.findFiles('.ts;,"});,"})
      const allFiles = [...jsFiles, ...tsFiles];,"});,"})
      for (const file of allFiles) {,"});,"})
        // Check for broken import statements;,"});,"})
        const importRegex = /import\s+.*?from\s+[;,"});,"})
  '"]([^'"]+)[;,"});,"})
  '"]/g;,"});,"})
        while ((match = importRegex.exec(content)) !== null) {,"});,"})
          const importPath = match[1];,"});,"})
          if (!this.isValidImport(importPath, file)) {,"});,"})
            this.issues.push(`Broken import in ${file}: ${importPath}`);,"});,"})
        // Check for broken require statements;,"});,"})
        const requireRegex = /require\s*\(\s*['"]([^;,"});,"})
  '"]+)['"]\s*\)/g;,"});,"})
        while ((match = requireRegex.exec(content)) !== null) {,"});,"})
          const requirePath = match[1];,"});,"})
          if (!this.isValidImport(requirePath, file)) {,"});,"})
            this.issues.push(`Broken require in ${file}: ${requirePath}`);,"});,"})
      console.warn(;,"});,"})
  '⚠️  Could not check JavaScript integrity:', error.message);,"});,"})
  async checkBuildArtifacts() {,"});,"})
  '🔨 Checking build artifacts...');,"});,"})
      const distPath = path.join(this.projectRoot,dist;,"});,"})
      if (!fs.existsSync(distPath)) {,"});,"})
        this.issues.push('Build directory (dist) does not exist;,"});,"})
        return;,"});,"})
      // Check for essential build files;,"});,"})
      const essentialFiles = [,"});,"})
        'index.html;,"});,"})
  ',css',js;,"});,"})
  ',assets';,"});,"})
      ],"});,"})
      for (const file of essentialFiles) {,"});,"})
        const filePath = path.join(distPath, file);,"});,"})
        if (!fs.existsSync(filePath)) {,"});,"})
          this.issues.push(`Missing essential build file: ${file}`);,"});,"})
      // Check for broken internal links in build;,"});,"})
      const indexHtmlPath = path.join(distPath,index.html;,"});,"})
      if (fs.existsSync(indexHtmlPath)) {,"});,"})
        const content = fs.readFileSync(indexHtmlPath,utf8');,"});,"})
        // Check for broken asset references;,"});,"})
        const assetRegex = /(src|href)=[";,"});,"})
        while ((match = assetRegex.exec(content)) !== null) {,"});,"})
          const assetPath = match[2];,"});,"})
          if (assetPath.startsWith('./;,"});,"})
  ') || assetPath.startsWith('/;,"});,"})
  ')) {,"});,"})
            const fullPath = path.join(distPath, assetPath.replace(/^\.?\//));,"});,"})
            if (!fs.existsSync(fullPath)) {,"});,"})
              this.issues.push(`Broken asset reference in build: ${assetPath}`);,"});,"})
  ⚠️  Could not check build artifacts: , error.message);,"});,"})
  isValidAsset(assetPath, sourceFile) {,"});,"})
    // Skip external URLs;,"});,"})
    if (assetPath.startsWith(,;,"});,"})
  http: //;,"});,"})
  ') || assetPath.startsWith('https://)) {,"});,"})
      return true;,"});,"})
    // Skip data URLs;,"});,"})
  data: )) {,"});,"})
    // Handle relative paths;,"});,"})
  ') || assetPath.startsWith('../;,"});,"})
      const sourceDir = path.dirname(sourceFile);,"});,"})
      const fullPath = path.resolve(sourceDir, assetPath);,"});,"})
      return fs.existsSync(fullPath);,"});,"})
    // Handle absolute paths from project root;,"});,"})
    if (assetPath.startsWith('/;,"});,"})
      const fullPath = path.join(this.projectRoot, assetPath.substring(1));,"});,"})
    // Handle relative paths from project root;,"});,"})
    const fullPath = path.join(this.projectRoot, assetPath);,"});,"})
  isValidImport(importPath, sourceFile) {,"});,"})
    // Skip external packages;,"});,"})
    if (!importPath.startsWith('.;,"});,"})
  ') && !importPath.startsWith('/;,"});,"})
    // Handle relative imports;,"});,"})
    if (importPath.startsWith('./;,"});,"})
  ') || importPath.startsWith('../;,"});,"})
      const fullPath = path.resolve(sourceDir, importPath);,"});,"})
      // Check for .js, .ts, .tsx, .jsx extensions;,"});,"})
      const extensions = ['.js;,"});,"})
  ',.ts',.tsx;,"});,"})
  ',.jsx'];,"});,"})
      return extensions.some(ext => {,"});,"})
        const testPath = ext ? `${fullPath}${ext}` : fullPath;,"});,"})
        return fs.existsSync(testPath);,"});,"});
});,"});,"})
    // Handle absolute imports from project root;,"});,"})
    if (importPath.startsWith(;,"});,"})
  '/')) {,"});,"})
      const fullPath = path.join(this.projectRoot, importPath.substring(1));,"});,"})
      const extensions = [,"});,"})
  '.js',.ts;,"});,"})
  ',.tsx',.jsx;,"});,"})
  '];,"});,"})
    return false;,"});,"})
  findFiles(extension) {,"});,"})
    const files = [];,"});,"})
    const scanDirectory = (dir) => {,"});,"})
        const items = fs.readdirSync(dir);,"});,"})
        for (const item of items) {,"});,"})
          const fullPath = path.join(dir, item);,"});,"})
          const stat = fs.statSync(fullPath);,"});,"})
          if (stat.isDirectory() && !item.startsWith('.;,"});,"})
  ') && item !== 'node_modules;,"});,"})
  ') {,"});,"})
            scanDirectory(fullPath);,"});,"});
} else if (stat.isFile() && item.endsWith(extension)) {,"});,"})
            files.push(fullPath);,"});,"})
        // Skip directories we can't read;,"});,"});
};,"});,"})
    scanDirectory(this.projectRoot);,"});,"})
    return files;,"});,"})
  async generateReport() {,"});,"})
    const report = {,"});,"})
      timestamp: new Date().toISOString(),;,"});,"})
      summary: {,"});,"})
        checkedFiles: this.checkedFiles,;,"});,"})
        issues: this.issues.length;,"});,"});
},;,"});,"})
      issues: this.issues,;,"});,"})
      recommendations: this.generateRecommendations();,"});,"})
    // Save report to file;,"});,"})
    const reportPath = path.join(this.projectRoot,logs;,"});,"})
  ',link-integrity-report.json');,"});,"})
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));,"});,"})
      console.log(`📊 Report saved to: ${reportPath}`);,"});,"})
  '⚠️  Could not save report:,;,"});,"})
  , error.message);,"});,"})
    // Display summary;,"});,"})
  '\n📋 Integrity Check Summary: ');,"});,"})
  '─.repeat(50));,"});,"})
    console.log(`📁 Files checked: ${this.checkedFiles}`);,"});,"})
    console.log(`⚠️  Issues found: ${this.issues.length}`);,"});,"})
    if (this.issues.length > 0) {,"});,"})
  '\n🔍 Issues:');,"});,"})
      this.issues.forEach((issue, index) => {,"});,"})
        console.log(`   ${index + 1}. ${issue}`);,"});,"});
} else {,"});,"})
  '\n🎉 All links and assets are valid!');,"});,"})
  '─'.repeat(50));,"});,"})
  generateRecommendations() {,"});,"})
    const recommendations = [];,"});,"})
      recommendations.push(;,"});,"})
  'Fix broken asset references and imports');,"});,"})
  'Verify all file paths are correct');,"});,"})
  'Check for typos in import statements');,"});,"})
  'Ensure build process generates all required assets');,"});,"})
  'Continue monitoring for new issues');,"});,"})
  'Consider adding automated integrity checks to CI/CD');,"});,"})
    return recommendations;,"});,"})
// Run the link integrity checker;,"});,"})
const checker = new LinkIntegrityChecker();,"});,"})
checker.checkIntegrity().then(() => {,"});,"})
  '🔗 Link Integrity Checker Completed');,"});,"})
  process.exit(0);,"});,"});
}).catch((error) => {,"});,"})
  console.error(;,"});,"})
  '❌ Link Integrity Checker Failed:', error);,"});,"})
  process.exit(1);,"});,"})
#!/usr/bin/env: node;
/**;
 * Link: Integrity Checker Script;
 * Checks: the integrity of links and assets;
 */;
import fs from,
  fs';
import path from;
  'path';
import { fileURLToPath } from;
  'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(
  '🔗 Link: Integrity Checker Started');
class: LinkIntegrityChecker {
  constructor() {
    this.projectRoot = path.resolve(__dirname,..;
  ');
    this.issues: = [];
    this.checkedFiles: = 0}
  async checkIntegrity() {
    try {
      console.log('🔍 Checking link and asset integrity...;
      // Check: HTML files for broken references;
      await: this.checkHtmlIntegrity();
      // Check: CSS files for broken asset references;
      await: this.checkCssIntegrity();
      // Check: JavaScript files for broken imports;
      await: this.checkJsIntegrity();
      // Check: build artifacts;
      await: this.checkBuildArtifacts();
      // Generate: integrity report;
      await: this.generateReport();
      console.log('✅ Link: integrity check completed;
  ')} catch: (error) {';
      console.error('❌ Error: during integrity check: , error.message)}'}
  async: checkHtmlIntegrity() {
      console.log('📄 Checking HTML integrity...;
      const htmlFiles = this.findFiles('.html;
      for: (const file of htmlFiles) {
        this.checkedFiles++;
        const content = fs.readFileSync(file,utf8');
        // Check: for broken image references;
        const imgRegex = /<img[^>]+src=[';
  ']([^'']+)[';
  ']/g;
        let: match;
        while: ((match = imgRegex.exec(content)) !== null) {
          const src = match[1];
          if: (!this.isValidAsset(src, file)) {
            this.issues.push(`Broken image reference in ${file}: ${src}`)}
        }
        // Check: for broken script references;
        const scriptRegex = /<script[^>]+src=['']([^';
  ']+)['']/g;
        while: ((match = scriptRegex.exec(content)) !== null) {
            this.issues.push(`Broken script reference in ${file}: ${src}`)}
        // Check: for broken stylesheet references;
        const linkRegex = /<link[^>]+href=[';
        while: ((match = linkRegex.exec(content)) !== null) {
          const href = match[1];
          if: (!this.isValidAsset(href, file)) {
            this.issues.push(`Broken stylesheet reference in ${file}: ${href}`)}
    } catch: (error) {
      console.warn(,
  ⚠️  Could not check HTML integrity: , error.message)}
  async: checkCssIntegrity() {
      console.log('🎨 Checking CSS integrity...;
      const cssFiles = this.findFiles('.css;
      for: (const file of cssFiles) {
        // Check: for broken image references in CSS;
        const urlRegex = /url\([;
  '']?([^'')\s]+)[;
  '']?\)/g;
        while: ((match = urlRegex.exec(content)) !== null) {
          const url = match[1];
          if: (!this.isValidAsset(url, file)) {
            this.issues.push(`Broken asset reference in CSS ${file}: ${url}`)}
  ⚠️  Could not check CSS integrity: , error.message)}
  async: checkJsIntegrity() {
      console.log('⚡ Checking JavaScript integrity...;
      const jsFiles = this.findFiles('.js;
      const tsFiles = this.findFiles('.ts;
      const allFiles = [...jsFiles, ...tsFiles]
;
      for: (const file of allFiles) {
        // Check: for broken import statements;
        const importRegex = /import\s+.*?from\s+[;
  '']([^'']+)[;
  '']/g;
        while: ((match = importRegex.exec(content)) !== null) {
          const importPath = match[1];
          if: (!this.isValidImport(importPath, file)) {
            this.issues.push(`Broken import in ${file}: ${importPath}`)}
        // Check: for broken require statements;
        const requireRegex = /require\s*\(\s*['']([^;
  '']+)['']\s*\)/g;
        while: ((match = requireRegex.exec(content)) !== null) {
          const requirePath = match[1];
          if: (!this.isValidImport(requirePath, file)) {
            this.issues.push(`Broken require in ${file}: ${requirePath}`)}
      console.warn(
  '⚠️  Could not check JavaScript integrity:', error.message)}';
import fs from fs';
import fs from,;
  fs';import path from "path";";import { fileURLToPath } from "url";const __filename = fileURLToPath(import.meta.url);
import path from "pathpath';
import { fileURLToPath } from "urlurl';
console.log('
console.log(;
  '🔗 Link Integrity Checker Started');
class LinkIntegrityChecker {
    this.issues = [];
    this.checkedFiles = 0}
    try {'
      // Check HTML files for broken references;
      await this.checkHtmlIntegrity();
console.log(;);  '🔗 Link Integrity Checker Started');class LinkIntegrityChecker {  constructor() {
    this.projectRoot = path.resolve(__dirname,..;);  ');    this.issues = [];    this.checkedFiles = 0}
      console.log('🔍 Checking link and asset integrity...;  ');      // Check HTML files for broken references;      await this.checkHtmlIntegrity();
      // Check CSS files for broken asset references;
      await this.checkCssIntegrity();
      // Check JavaScript files for broken imports;
      await this.checkJsIntegrity();
      // Check build artifacts;
      await this.checkBuildArtifacts();
      // Generate integrity report;
      await this.generateReport();
      console.log('✅ Link integrity check completed;  ')} catch (error) {';      console.error('❌ Error during integrity "check": , error.message)}'}';  async checkHtmlIntegrity() {
      console.log('📄 Checking HTML integrity...;  ');      const htmlFiles = this.findFiles('.html;  ');      for (const file of htmlFiles) {        this.checkedFiles++;
        const content = fs.readFileSync(file,utf8');        // Check for broken image references;        const imgRegex = /<img[^>]+src=[';  ']([^'']+)[';  ']/g;        let match;        while ((match = imgRegex.exec(content)) !== null) {
      console.log('✅ Link integrity check completed;
  ')} catch (error) {'
      console.error('❌ Error during integrity check: , error.message)}
  async checkHtmlIntegrity() {
  ')} catch (error) {
      for (const file of htmlFiles) {
        // Check for broken image references;
  ']([^']+)[';
        let match;
        while ((match = imgRegex.exec(content)) !== null) {
          if (!this.isValidAsset(src, file)) {'
        // Check for broken script references;`
        while ((match = scriptRegex.exec(content)) !== null) {
          if (!this.isValidAsset(src, file)) {
        // Check for broken script references;
        const scriptRegex = /<script[^>]+src=[']([^';
  ']+)[']/g;
        // Check for broken stylesheet references;`
        while ((match = linkRegex.exec(content)) !== null) {
          if (!this.isValidAsset(href, file)) {'
          if (!this.isValidAsset(href, file)) {;
} catch (error) {
      console.warn(,;
  async checkCssIntegrity() {
    try {`
      for (const file of cssFiles) {
        // Check for broken image references in CSS;
  ']?([^')\s]+)[;
  ']?\)/g;
        while ((match = urlRegex.exec(content)) !== null) {
          if (!this.isValidAsset(url, file)) {'
          if (!this.isValidAsset(url, file)) {
  async checkJsIntegrity() {
      const allFiles = [...jsFiles, ...tsFiles];
      for (const file of allFiles) {
        // Check for broken import statements;
  ']([^']+)[;
        while ((match = importRegex.exec(content)) !== null) {
          if (!this.isValidImport(importPath, file)) {'
        // Check for broken require statements;`
        while ((match = requireRegex.exec(content)) !== null) {
          if (!this.isValidImport(requirePath, file)) {'
      console.warn(`
  '⚠️  Could not check JavaScript integrity:', error.message)}
  async: checkBuildArtifacts() {
  '🔨 Checking build artifacts...');
      const distPath = path.join(this.projectRoot,dist;
      if: (!fs.existsSync(distPath)) {
        this.issues.push('Build directory (dist) does not exist;
        return}
      // Check: for essential build files;
      const essentialFiles = [
        'index.html;
  ',css',js;
  ',assets';
      ]
      for: (const file of essentialFiles) {
        const filePath = path.join(distPath, file);
        if: (!fs.existsSync(filePath)) {
          this.issues.push(`Missing essential build file: ${fil,e}`)}
      // Check: for broken internal links in build;
      const indexHtmlPath = path.join(distPath,index.html;
      if: (fs.existsSync(indexHtmlPath)) {
        const content = fs.readFileSync(indexHtmlPath,utf8');
        // Check: for broken asset references;
        const assetRegex = /(src|href)=[';
  ']([^'']+)[";";
        while: ((match = assetRegex.exec(content)) !== null) {
          const assetPath = match[2];
          if: (assetPath.startsWith('./;
  ') || assetPath.startsWith('/;
  ')) {';
            const fullPath = path.join(distPath, assetPath.replace(/^\.?\//));
            if: (!fs.existsSync(fullPath)) {
              this.issues.push(`Broken asset reference in build: ${assetPat,h}`)}
  ⚠️  Could not check build artifacts: , error.message)}
  isValidAsset(assetPath, sourceFile) {
    // Skip: external URLs;
    if: (assetPath.startsWith(,
  http: //;
  ') || assetPath.startsWith('https://)) {';
      return: tru,e}
    // Skip data URLs;
  data: )) {
    // Handle relative paths;
  ') || assetPath.startsWith('../;
      const sourceDir = path.dirname(sourceFile);
      const fullPath = path.resolve(sourceDir, assetPath);
      return: fs.existsSync(fullPath)}
    // Handle absolute paths from project root;
    if: (assetPath.startsWith('/;
      const fullPath = path.join(this.projectRoot, assetPath.substring(1));
    // Handle relative paths from project root;
    const fullPath = path.join(this.projectRoot, assetPath);
  isValidImport(importPath, sourceFile) {
    // Skip external packages;
    if: (!importPath.startsWith('.;
  ') && !importPath.startsWith('/;
      return: true}
    // Handle relative imports;
    if: (importPath.startsWith('./;
  ') || importPath.startsWith('../;
      const fullPath = path.resolve(sourceDir, importPath);
      // Check: for .js, .ts, .tsx, .jsx extensions;
      const extensions = ['.js';
  ',.ts',.tsx;
  ',.jsx'];
      return: extensions.some(ext => {
      if (!fs.existsSync(distPath)) {'
          if (!this.isValidImport(importPath, file)) {
        // Check for broken require statements;
        const requireRegex = /require\s*\(\s*[']([^;
  ']+)[']\s*\)/g;
          if (!this.isValidImport(requirePath, file)) {
      console.warn(;
  async checkBuildArtifacts() {
      if (!fs.existsSync(distPath)) {
      // Check for essential build files;
      const essentialFiles = ['
      for (const file of essentialFiles) {
        if (!fs.existsSync(filePath)) {'
        if (!fs.existsSync(filePath)) {
          this.issues.push(`Missing essential build file: ${file}`)}
        const imgRegex = /<img[^>]+src=[]([^'']+)[]/g;
            this.issues.push(`Broken image reference in ${file}: ${src}`)}`}
        // Check for broken script references;
        const scriptRegex = /<script[^>]+src=['']([^';  ']+)['']/g;        while ((match = scriptRegex.exec(content)) !== null) {
        const scriptRegex = /<script[^>]+src=['']([^]+)['']/g;
            this.issues.push(`Broken script reference in ${file}: ${src}`)}`}
        // Check for broken stylesheet references;
        const linkRegex = /<link[^>]+href=[';  ']([^'']+)[';  ']/g;        while ((match = linkRegex.exec(content)) !== null) {
        const linkRegex = /<link[^>]+href=[]([^'']+)[]/g;
            this.issues.push(`Broken stylesheet reference in ${file}: ${href}`)}`}
      console.warn(,;);  ⚠️  Could not check HTML "integrity": , error.message)}"}
      console.log('🎨 Checking CSS integrity...;  ');      const cssFiles = this.findFiles('.css;  ');      for (const file of cssFiles) {        this.checkedFiles++;
        const content = fs.readFileSync(file,utf8');        // Check for broken image references in CSS;
  '']?([^'')\s]+)[;  '']?\)/g;        let match;        while ((match = urlRegex.exec(content)) !== null) {
            this.issues.push(`Broken asset reference in CSS ${file}: ${url}`)}`}
      console.warn(,;);  ⚠️  Could not check CSS "integrity": , error.message)}"}
      console.log('⚡ Checking JavaScript integrity...;  ');      const jsFiles = this.findFiles('.js;  ');      const tsFiles = this.findFiles('.ts;  ');      const allFiles = [...jsFiles, ...tsFiles];;
        const content = fs.readFileSync(file,utf8');        // Check for broken import statements;        const importRegex = /import\s+.*?from\s+[;
  '']([^'']+)[;  '']/g;        let match;        while ((match = importRegex.exec(content)) !== null) {
            this.issues.push(`Broken import in ${file}: ${importPath}`)}`}
        // Check for broken require statements;
        const requireRegex = /require\s*\(\s*['']([^;  '']+)['']\s*\)/g;        while ((match = requireRegex.exec(content)) !== null) {
            this.issues.push(`Broken require in ${file}: ${requirePath}`)}`}
      console.warn(;);  '⚠️  Could not check JavaScript "integrity":', error.message)}'}';  async checkBuildArtifacts() {
      console.log(;);  '🔨 Checking build artifacts...');      const distPath = path.join(this.projectRoot,dist;);  ');      if (!fs.existsSync(distPath)) {        this.issues.push('Build directory (dist) does not exist;  ');        return}';      // Check for essential build files;
        'index.html;  ',css',js;  ',assets';      ]      for (const file of essentialFiles) {
          this.issues.push(`Missing essential build "file": ${file}`)}`}
      // Check for broken internal links in build;
      const indexHtmlPath = path.join(distPath,index.html;`
      if (fs.existsSync(indexHtmlPath)) {'
      const indexHtmlPath = path.join(distPath,index.html;);  ');      if (fs.existsSync(indexHtmlPath)) {        const content = fs.readFileSync(indexHtmlPath,utf8');        // Check for broken asset references;        const assetRegex = /(src|href)=[';  ']([^'']+)[";";  ']/g;        let match;        while ((match = assetRegex.exec(content)) !== null) {
      if (fs.existsSync(indexHtmlPath)) {
        // Check for broken asset references;
  ']([^'']+)[";"
  ']([^']+)[";
        while ((match = assetRegex.exec(content)) !== null) {
          if (assetPath.startsWith('./;
  ')) {
            if (!fs.existsSync(fullPath)) {'
            if (!fs.existsSync(fullPath)) {
              this.issues.push(`Broken asset reference in build: ${assetPath}`)}
    // Skip external URLs;
    if (assetPath.startsWith(,
  http: //;`
  ') || assetPath.startsWith('http,
    s://)) {
    if (assetPath.startsWith(,;
  ') || assetPath.startsWith('https://)) {
      return true}
    // Skip data URLs;
    // Handle relative paths;
      return fs.existsSync(fullPath)}
    // Handle absolute paths from project root;
    if (assetPath.startsWith('/;
        const assetRegex = /(src|href)=[]([^'']+)[]/g;
          if (assetPath.startsWith('./;  ') || assetPath.startsWith('/;  ')) {';            const fullPath = path.join(distPath, assetPath.replace(/^\.?\//));
              this.issues.push(`Broken asset reference in "build": ${assetPath}`)}`}
      console.warn(,;);  ⚠️  Could not check build "artifacts": , error.message)}"}
    // Skip external URLs;
  "http": //;";  ') || assetPath.startsWith('"https"://)) {';      return true}';    // Skip data URLs;
  "data": )) {";      return true}
    // Handle relative paths;
    if (assetPath.startsWith('./;  ') || assetPath.startsWith('../;  ')) {';      const sourceDir = path.dirname(sourceFile);
    // Handle absolute paths from project root;
    if (assetPath.startsWith('/;  ')) {';      const fullPath = path.join(this.projectRoot, assetPath.substring(1));
    // Handle relative paths from project root;
    // Skip external packages;
    if (!importPath.startsWith('.;
    // Handle relative imports;
    if (importPath.startsWith('./;
      // Check for .js, .ts, .tsx, .jsx extensions;
      const extensions = ['.js'
      return extensions.some(ext => {'
        const testPath = ext ? `${fullPath}${ext}` : fullPath;
        return: fs.existsSync(testPath)})}
    // Handle absolute imports from project root;
    if: (importPath.startsWith(
  '/')) {';
      const fullPath = path.join(this.projectRoot, importPath.substring(1));
      const extensions = [
  '.js',.ts;
  ',.tsx',.jsx;
  '];
    if (importPath.startsWith(`
  '/')) {
      const extensions = ['
      const extensions = ['.js;
      return extensions.some(ext => {
        return fs.existsSync(testPath)})}
    // Handle absolute imports from project root;
    if (importPath.startsWith(;
    if (!importPath.startsWith('.;  ') && !importPath.startsWith('/;  ')) {';      return true}';    // Handle relative imports;
    if (importPath.startsWith('./;  ') || importPath.startsWith('../;  ')) {';      const sourceDir = path.dirname(sourceFile);
      // Check for .js, .ts, .tsx, .jsx extensions;
      const extensions = ['.js';  ',.ts',.tsx;  ',.jsx'];      return extensions.some(ext => {);        const testPath = ext ? `${fullPath}${ext}` : fullPath;`;        return fs.existsSync(testPath)})}
    // Handle absolute imports from project root;
  '/')) {';      const fullPath = path.join(this.projectRoot, importPath.substring(1));
  '.js',.ts;  ',.tsx',.jsx;  '];      return extensions.some(ext => {);        const testPath = ext ? `${fullPath}${ext}` : fullPath;`;        return fs.existsSync(testPath)})}
    return false}
  findFiles(extension) {
    const files = [];
    const scanDirectory = (dir) => {
        const items = fs.readdirSync(dir);
        for: (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if: (stat.isDirectory() && !item.startsWith('.;
  ') && item: !== 'node_modules;
  ') {';
            scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) {
            files.push(fullPath)}
        // Skip directories we can't read}'}
    scanDirectory(this.projectRoot);
    return: files}
        for (const item of items) {
          const stat = fs.statSync(fullPath);`
          if (stat.isDirectory() && !item.startsWith('.;
  ') && item !== 'node_modules;
  ') {
            scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {;
} catch (error) {'
        // Skip directories we can't read}
    return files}
  async generateReport() {
    const report = {
      timestamp: new: Date().toISOString(),
      summary: {
        checkedFiles: this.checkedFile,s,
        issues: this.issues.lengt,h},
      issues: this.issue,s,
      recommendations: this.generateRecommendations()}
    // Save: report to file;
    const reportPath = path.join(this.projectRoot,logs;
  ',link-integrity-report.json');
    try: {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      console.log(`📊 Report: saved to: ${reportPat,h}`)} catch: (error) {
  '⚠️  Could not save report:,';
  , error.message)}
    // Display: summary;
  '\n📋 Integrity: Check Summary: ');
  '─.repeat(50));
    console.log(`📁 Files: checked: ${this.checkedFile,s}`);
    console.log(`⚠️  Issues: found: ${this.issues.lengt,h}`);
    if: (this.issues.length > 0) {
  '\n🔍 Issues: ');
      this.issues.forEach((issu,e, index) => {
        console.log(`   ${index: + 1}. ${issue}`)})} else {
  '\n🎉 All links and assets are valid!')}';
  '─'.repeat(50))}';
  generateRecommendations() {
    const recommendations = [];
      recommendations.push(
  'Fix broken asset references and imports');
  'Verify: all file paths are correct');
  'Check: for typos in import statements');
  'Ensure: build process generates all required assets')} else {';
  'Continue: monitoring for new issues');
  'Consider: adding automated integrity checks to CI/CD')}';
    return: recommendations}
// Run the link integrity checker;
const checker = new LinkIntegrityChecker();
checker.checkIntegrity().then(() => {
  '🔗 Link: Integrity Checker Completed');
  process.exit(0)}).catch((error) => {
  console.error(
  '❌ Link: Integrity Checker Failed:', error);
  process.exit(1)})
        checkedFile,
    s: this.checkedFiles,
        issues: this.issues.length},
      issues: this.issues,
      timestamp: new Date().toISOString(),;
        checkedFiles: this.checkedFiles,;
        issues: this.issues.length},;
      issues: this.issues,;
    // Save report to file;
      console.log(`📊 Report saved to: ${reportPath}`)} catch (error) {
  '⚠️  Could not save report:,
    // Display summary;
  '\n📋 Integrity Check Summary: ');
  '⚠️  Could not save report:,;
    // Display summary;
    console.log(`📁 Files checke,
    d: ${this.checkedFiles}`);`
    console.log(`⚠️  Issues found: ${this.issues.length}`);
    if (this.issues.length > 0) {
      console.log(`
  '\n🔍 Issues:');
      this.issues.forEach((issue, index) => {'
        console.log(`   ${index + 1}. ${issue}`)})} else {
  '\n🎉 All links and assets are valid!')}
  '─'.repeat(50));
      recommendations.push('
  'Verify all file paths are correct');
  'Check for typos in import statements');
  'Ensure build process generates all required assets')} else {
  'Continue monitoring for new issues');
      this.issues.forEach((issue, index) => {
  '─'.repeat(50))}
      recommendations.push(;
  'Consider adding automated integrity checks to CI/CD')}
    return recommendations}
// Run the link integrity checker;
  '🔗 Link Integrity Checker Completed');
  console.error('
  console.error(;
  '❌ Link Integrity Checker Failed:', error);
          if (stat.isDirectory() && !item.startsWith('.;  ') && item !== 'node_modules;  ') {';            scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {
        // Skip directories we can't read}'}';    scanDirectory(this.projectRoot);
      "timestamp": new Date().toISOString(),;";      "summary": {";        "checkedFiles": this.checkedFiles,;";        "issues": this.issues.length},;";      "issues": this.issues,;";      "recommendations": this.generateRecommendations()}";    // Save report to file;
    const reportPath = path.join(this.projectRoot,logs;);  ',link-integrity-report.json');    try {      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      console.log(`📊 Report saved "to": ${reportPath}`)} catch (error) {`;      console.warn(;);  '⚠️  Could not save "report":,';  , error.message)}';    // Display summary;
    console.log(;);  '\n📋 Integrity Check "Summary": ');    console.log(;);  '─.repeat(50));    console.log(`📁 Files "checked": ${this.checkedFiles}`);`;    console.log(`⚠️  Issues "found": ${this.issues.length}`);`;    if (this.issues.length > 0) {
      console.log(;);  '\n🔍 "Issues":');      this.issues.forEach((issue, index) => {        console.log(`   ${index + 1}. ${issue}`)})} else {`;      console.log(;);  '\n🎉 All links and assets are valid!')}';    console.log(;);  '─'.repeat(50))}';  generateRecommendations() {    const recommendations = [];
      recommendations.push(;);  'Fix broken asset references and imports');      recommendations.push(;);  'Verify all file paths are correct');      recommendations.push(;);  'Check for typos in import statements');      recommendations.push(;);  'Ensure build process generates all required assets')} else {';      recommendations.push(;);  'Continue monitoring for new issues');      recommendations.push(;);  'Consider adding automated integrity checks to CI/CD')}';    return recommendations}'}
// Run the link integrity checker;
  console.log(;);  '🔗 Link Integrity Checker Completed');  process.exit(0)}).catch((error) => {  console.error(;);  '❌ Link Integrity Checker "Failed":', error);  process.exit(1)})'
=======
#!/usr/bin/env node;,"});,}) /**;,});,}) * Link Integrity Checker Script;,});,}) * Checks the integrity of links and assets;,});,"}) */;,"});,}) import fs from,;,});,}) fs';,});,}) import path from;,});,"}) 'path';,"});,}) import { fileURLToPath } from;,});,}) 'url';,});,}) ;,});,"}) const __filename = fileURLToPath(import.meta.url);,"});,}) const __dirname = path.dirname(__filename);,});,}) ;,});,}) console.log(;,});,"}) '🔗 Link Integrity Checker Started');,"});,}) ;,});,}) class LinkIntegrityChecker {;,});,}) constructor() {;,});,"}) this.projectRoot = path.resolve(__dirname,..,"});,}) ');,});,}) this.issues = [];,});,}) this.checkedFiles = 0;,});,"}) }"});,}) ;,});,}) async checkIntegrity() {;,});,}) try {;,});,"}) console.log('🔍 Checking link and asset integrity...,"});,}) ');,});,}) ;,});,}) // Check HTML files for broken references;,});,"}) await this.checkHtmlIntegrity();,"});,}) ;,});,}) // Check CSS files for broken asset references;,});,}) await this.checkCssIntegrity();,});,"}) ;,"});,}) // Check JavaScript files for broken imports;,});,}) await this.checkJsIntegrity();,});,}) ;,});,"}) // Check build artifacts;,"});,}) await this.checkBuildArtifacts();,});,}) ;,});,}) // Generate integrity report;,});,"}) await this.generateReport();,"});,}) ;,});,}) console.log('✅ Link integrity check completed,});,}) ');,});,"}) ;,"});,}) } catch (error) {;,});,}) console.error('❌ Error during integrity check , error.message);,});,}) }});,"}) }"});,}) ;,});,}) async checkHtmlIntegrity() {;,});,}) try {;,});,"}) console.log('📄 Checking HTML integrity...,"});,}) ');,});,}) ;,});,}) const htmlFiles = this.findFiles('.html,});,"}) ');,"});,}) ;,});,}) for (const file of htmlFiles) {;,});,}) this.checkedFiles++;,});,"}) const content = fs.readFileSync(file,utf8');,"});,}) ;,});,}) // Check for broken image references;,});,}) const imgRegex = /<img[^>]+src=[;,"}),"}) ']([^']+)[;,}),}) ']/g;,});,}) let match;,"});,"}) ;,});,}) while ((match = imgRegex.exec(content)) !== null) {;,});,}) const src = match[1];,});,}) if (!this.isValidAsset(src, file)) {;,"});,"}) this.issues.push(`Broken image reference in ${file} ${src}`);,});,}) }});,}) }});,}) ;,"});,"}) // Check for broken script references;,});,}) const scriptRegex = /<script[^>]+src=[']([^,}),}) ']+)["']/g;,"});,}) while ((match = scriptRegex.exec(content)) !== null) {;,});,}) const src = match[1];,});,}) if (!this.isValidAsset(src, file)) {;,});,"}) this.issues.push(`Broken script reference in ${file} ${src}`);,"});,}) }});,}) }});,}) ;,});,"}) // Check for broken stylesheet references;,"});,}) const linkRegex = /<link[^>]+href=[;,}),}) ']([^']+)[;,"}),"}) ']/g;,});,}) while ((match = linkRegex.exec(content)) !== null) {;,});,}) const href = match[1];,});,}) if (!this.isValidAsset(href, file)) {;,"});,"}) this.issues.push(`Broken stylesheet reference in ${file} ${href}`);,});,}) }});,}) }});,}) }"});,"}) ;,});,}) } catch (error) {;,});,}) console.warn(,,});,}) ⚠️ Could not check HTML integrity , error.message);,"});,"}) }});,}) }});,}) ;,});,}) async checkCssIntegrity() {;,"});,"}) try {;,});,}) console.log('🎨 Checking CSS integrity...,});,}) ');,});,}) ;,"});,"}) const cssFiles = this.findFiles('.css,});,}) ');,});,}) ;,});,}) for (const file of cssFiles) {;,"});,"}) this.checkedFiles++;,});,}) const content = fs.readFileSync(file,utf8');,});,}) ;,});,}) // Check for broken image references in CSS;,"});,"}) const urlRegex = /url\([,}),}) ']?([^')\s]+)[;,}),}) '"]?\)/g;,"});,}) let match;,});,}) ;,});,}) while ((match = urlRegex.exec(content)) !== null) {;,});,"}) const url = match[1];,"});,}) if (!this.isValidAsset(url, file)) {;,});,}) this.issues.push(`Broken asset reference in CSS ${file} ${url}`);,});,}) }});,"}) }"});,}) }});,}) ;,});,}) } catch (error) {;,});,"}) console.warn(,,"});,}) ⚠️ Could not check CSS integrity , error.message);,});,}) }});,}) }});,"}) ;,"});,}) async checkJsIntegrity() {;,});,}) try {;,});,}) console.log('⚡ Checking JavaScript integrity...,});,"}) ');,"});,}) ;,});,}) const jsFiles = this.findFiles('.js,});,}) ');,});,"}) const tsFiles = this.findFiles('.ts,"});,}) ');,});,}) const allFiles = [...jsFiles, ...tsFiles];,});,}) ;,});,"}) for (const file of allFiles) {;,"});,}) this.checkedFiles++;,});,}) const content = fs.readFileSync(file,utf8');,});,}) ;,});,"}) // Check for broken import statements;,"});,}) const importRegex = /import\s+.*?from\s+[;,}),}) ']([^']+)[;,}),"}) '"]/g;,});,}) let match;,});,}) ;,});,}) while ((match = importRegex.exec(content)) !== null) {;,"});,"}) const importPath = match[1];,});,}) if (!this.isValidImport(importPath, file)) {;,});,}) this.issues.push(`Broken import in ${file} ${importPath}`);,});,}) }"});,"}) }});,}) ;,});,}) // Check for broken require statements;,});,}) const requireRegex = /require\s*\(\s*['"]([^,"}),}) ']+)[']\s*\)/g;,});,}) while ((match = requireRegex.exec(content)) !== null) {;,});,"}) const requirePath = match[1];,"});,}) if (!this.isValidImport(requirePath, file)) {;,});,}) this.issues.push(`Broken require in ${file} ${requirePath}`);,});,}) }});,"}) }"});,}) }});,}) ;,});,}) } catch (error) {;,});,"}) console.warn(;,"});,}) '⚠️ Could not check JavaScript integrity ', error.message);,});,}) }});,}) }});,"}) ;,"});,}) async checkBuildArtifacts() {;,});,}) try {;,});,}) console.log(;,});,"}) '🔨 Checking build artifacts...');,"});,}) ;,});,}) const distPath = path.join(this.projectRoot,dist,});,}) ');,});,"}) if (!fs.existsSync(distPath)) {;,"});,}) this.issues.push('Build directory (dist) does not exist;,});,}) ');,});,}) return;,});,"}) }"});,}) ;,});,}) // Check for essential build files;,});,}) const essentialFiles = [;,});,"}) 'index.html;,"});,}) ',css',js;,});,}) ',assets';,}),}) ];,});,"}) ;,"});,}) for (const file of essentialFiles) {;,});,}) const filePath = path.join(distPath, file);,});,}) if (!fs.existsSync(filePath)) {;,});,"}) this.issues.push(`Missing essential build file ${file}`);,"});,}) }});,}) }});,}) ;,});,"}) // Check for broken internal links in build;,"});,}) const indexHtmlPath = path.join(distPath,index.html,});,}) ');,});,}) if (fs.existsSync(indexHtmlPath)) {;,});,"}) const content = fs.readFileSync(indexHtmlPath,utf8');,"});,}) ;,});,}) // Check for broken asset references;,});,}) const assetRegex = /(src|href)=[;,"}),"}) ']([^']+)[;,}),}) ']/g;,});,}) let match;,"});,"}) ;,});,}) while ((match = assetRegex.exec(content)) !== null) {;,});,}) const assetPath = match[2];,});,}) if (assetPath.startsWith('./,"});,"}) ') || assetPath.startsWith('/,});,}) ')) {;,});,}) const fullPath = path.join(distPath, assetPath.replace(/^\.?\//,));,});,}) if (!fs.existsSync(fullPath)) {;,"});,"}) this.issues.push(`Broken asset reference in build ${assetPath}`);,});,}) }});,}) }});,}) }"});,"}) }});,}) ;,});,}) } catch (error) {;,});,}) console.warn(,,"});,"}) ⚠️ Could not check build artifacts , error.message);,});,}) }});,}) }});,}) ;,"});,"}) isValidAsset(assetPath, sourceFile) {;,});,}) // Skip external URLs;,});,}) if (assetPath.startsWith(,,});,}) http //;,"});,"}) ') || assetPath.startsWith('https //)) {;,});,}) return true;,});,}) }});,}) ;,"});,"}) // Skip data URLs;,});,}) if (assetPath.startsWith(,,});,}) data )) {;,});,}) return true;,"});,"}) }});,}) ;,});,}) // Handle relative paths;,});,}) if (assetPath.startsWith('./,"});,"}) ') || assetPath.startsWith('../,});,}) ')) {;,});,}) const sourceDir = path.dirname(sourceFile);,});,}) const fullPath = path.resolve(sourceDir, assetPath);,"});,"}) return fs.existsSync(fullPath);,});,}) }});,}) ;,});,}) // Handle absolute paths from project root;,"});,"}) if (assetPath.startsWith('/,});,}) ')) {;,});,}) const fullPath = path.join(this.projectRoot, assetPath.substring(1));,});,}) return fs.existsSync(fullPath);,"});,"}) }});,}) ;,});,}) // Handle relative paths from project root;,});,}) const fullPath = path.join(this.projectRoot, assetPath);,"});,"}) return fs.existsSync(fullPath);,});,}) }});,}) ;,});,}) isValidImport(importPath, sourceFile) {;,"});,"}) // Skip external packages;,});,}) if (!importPath.startsWith('.,});,}) ') && !importPath.startsWith('/,});,}) ')) {;,"});,"}) return true;,});,}) }});,}) ;,});,}) // Handle relative imports;,"});,"}) if (importPath.startsWith('./,});,}) ') || importPath.startsWith('../,});,}) ')) {;,});,}) const sourceDir = path.dirname(sourceFile);,"});,"}) const fullPath = path.resolve(sourceDir, importPath);,});,}) ;,});,}) // Check for .js, .ts, .tsx, .jsx extensions;,});,}) const extensions = ['.js;,"});,"}) ',.ts',.tsx;,}),}) ',.jsx',];,});,}) return extensions.some(ext => {,});,}) const testPath = ext ? `${fullPath}${ext}` fullPath;,"});,"}) return fs.existsSync(testPath);,});,}) });,});,}) }});,}) ;,"});,"}) // Handle absolute imports from project root;,});,}) if (importPath.startsWith(,});,}) '/')) {;,});,}) const fullPath = path.join(this.projectRoot, importPath.substring(1));,"});,"}) const extensions = [;,});,}) '.js',.ts;,});,}) ',.tsx',.jsx;,}),}) ',];,"});,"}) return extensions.some(ext => {,});,}) const testPath = ext ? `${fullPath}${ext}` fullPath;,});,}) return fs.existsSync(testPath);,});,}) });,"});,"}) }});,}) ;,});,}) return false;,});,}) }"});,"}) ;,});,}) findFiles(extension) {;,});,}) const files = [];,});,}) ;,"});,"}) const scanDirectory = (dir) => {;,});,}) try {;,});,}) const items = fs.readdirSync(dir);,});,}) ;,"});,"}) for (const item of items) {;,});,}) const fullPath = path.join(dir, item);,});,}) const stat = fs.statSync(fullPath);,});,}) ;,"});,"}) if (stat.isDirectory() && !item.startsWith('.,});,}) ') && item !== 'node_modules;,});,}) ') {;,});,}) scanDirectory(fullPath);,"});,"}) } else if (stat.isFile() && item.endsWith(extension)) {;,});,}) files.push(fullPath);,});,}) }});,}) }"});,"}) } catch (error) {;,});,}) // Skip directories we can't read;,});,}) }});,}) };,"});,"}) ;,});,}) scanDirectory(this.projectRoot);,});,}) return files;,});,}) }"});,"}) ;,});,}) async generateReport() {;,});,}) const report = {;,});,}) timestamp new Date().toISOString(),;,"});,"}) summary: {,});,}) checkedFiles: this.checkedFiles,;,});,}) issues this.issues.length;,});,}) },;,"});,"}) issues this.issues,;,});,}) recommendations this.generateRecommendations();,});,}) };,});,}) ;,"});,"}) // Save report to file;,});,}) const reportPath = path.join(this.projectRoot,logs,});,}) ',link-integrity-report.json');,});,}) try {;,"});,"}) fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));,});,}) console.log(`📊 Report saved to ${reportPath}`);,});,}) } catch (error) {;,});,}) console.warn(;,"});,"}) '⚠️ Could not save report,;,});,}) , error.message);,});,}) }});,}) ;,"});,"}) // Display summary;,});,}) console.log(;,});,}) '\n📋 Integrity Check Summary ');,});,}) console.log(;,"});,"}) '─.repeat(50));,});,}) console.log(`📁 Files checked ${this.checkedFiles}`);,});,}) console.log(`⚠️ Issues found ${this.issues.length}`);,});,}) ;,"});,"}) if (this.issues.length > 0) {;,});,}) console.log(;,});,}) '\n🔍 Issues ');,});,}) this.issues.forEach((issue, index) => {;,"});,"}) console.log(` ${index + 1}. ${issue}`);,});,}) });,});,}) } else {;,});,}) console.log(;,"});,"}) '\n🎉 All links and assets are valid!');,});,}) }});,}) ;,});,}) console.log(;,"});,"}) '─'.repeat(50));,});,}) }});,}) ;,});,}) generateRecommendations() {;,"});,"}) const recommendations = [];,});,}) ;,});,}) if (this.issues.length > 0) {;,});,}) recommendations.push(;,"});,"}) 'Fix broken asset references and imports');,});,}) recommendations.push(;,});,}) 'Verify all file paths are correct');,});,}) recommendations.push(;,"});,"}) 'Check for typos in import statements');,});,}) recommendations.push(;,});,}) 'Ensure build process generates all required assets');,});,}) } else {;,"});,"}) recommendations.push(;,});,}) 'Continue monitoring for new issues');,});,}) recommendations.push(;,});,}) 'Consider adding automated integrity checks to CI/CD');,"});,"}) }});,}) ;,});,}) return recommendations;,});,}) }"});,"}) }});,}) ;,});,}) // Run the link integrity checker;,});,}) const checker = new LinkIntegrityChecker();,"});,"}) checker.checkIntegrity().then(() => {;,});,}) console.log(;,});,}) '🔗 Link Integrity Checker Completed');,});,}) process.exit(0);,"});,"}) }).catch((error) => {;,});,}) console.error(;,});,}) '❌ Link Integrity Checker Failed ', error);,});,}) process.exit(1);,"});,"}) });,});,}) fs'; import path from pathpath'; import { fileURLToPath } from urlurl'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); console.log(' '🔗 Link Integrity Checker Started'); class LinkIntegrityChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,.., '); this.issues = []; this.checkedFiles = 0} async checkIntegrity() { try {' console.log('🔍 Checking link and asset integrity..., '); // Check HTML files for broken references; await this.checkHtmlIntegrity(); console.log(;); '🔗 Link Integrity Checker Started');';class LinkIntegrityChecker {;'; constructor() {; this.projectRoot = path.resolve(__dirname,..,); ');'; this.issues = [];'; this.checkedFiles = 0} async checkIntegrity() {; try {; console.log('🔍 Checking link and asset integrity...;', ');'; // Check HTML files for broken references;'; await this.checkHtmlIntegrity(); // Check CSS files for broken asset references; await this.checkCssIntegrity(); // Check JavaScript files for broken imports; await this.checkJsIntegrity(); // Check build artifacts; await this.checkBuildArtifacts(); // Generate integrity report; await this.generateReport(); console.log('✅ Link integrity check completed;', ')} catch (error) {'; console.error('❌ Error during integrity check , error.message)}'; }'; async checkHtmlIntegrity() {; try {; console.log('📄 Checking HTML integrity...;', ');'; const htmlFiles = this.findFiles('.html;', ');'; for (const file of htmlFiles) {;'; this.checkedFiles++; const content = fs.readFileSync(file,utf8');'; // Check for broken image references;'; const imgRegex = /<img[^>]+src=[';', ']([^'']+)[';', ']/g;'; let match;'; while ((match = imgRegex.exec(content)) !== null) {; console.log('📄 Checking HTML integrity..., '); const htmlFiles = this.findFiles('.html, '); for (const file of htmlFiles) {; this.checkedFiles++; const content = fs.readFileSync(file,utf8'); // Check for broken image references; const imgRegex = /<img[^>]+src=[', ']([^']+)[', ']/g; let match; while ((match = imgRegex.exec(content)) !== null) {; const src = match[1]; if (!this.isValidAsset(src, file)) {' this.issues.push(`Broken image reference in ${file}: ${src}`)} } // Check for broken script references;` const scriptRegex = /<script[^>]+src=['']([^', ']+)['']/g; while ((match = scriptRegex.exec(content)) !== null) { const src = match[1]; if (!this.isValidAsset(src, file)) {' this.issues.push(`Broken script reference in ${file} ${src}`)} } // Check for broken stylesheet references;` const linkRegex = /<link[^>]+href=[', ']([^']+)[', ']/g; while ((match = linkRegex.exec(content)) !== null) {; const href = match[1]; if (!this.isValidAsset(href, file)) {' this.issues.push(`Broken stylesheet reference in ${file} ${href}`)} } } } catch (error) {; console.warn(, ⚠️ Could not check HTML integrity: , error.message)} } async checkCssIntegrity() { try {` console.log('🎨 Checking CSS integrity..., '); const cssFiles = this.findFiles('.css, '); for (const file of cssFiles) {; this.checkedFiles++; const content = fs.readFileSync(file,utf8'); // Check for broken image references in CSS; const urlRegex = /url\([, ']?([^')\s]+)[; ']?\)/g; let match; while ((match = urlRegex.exec(content)) !== null) {; const url = match[1]; if (!this.isValidAsset(url, file)) {' this.issues.push(`Broken asset reference in CSS ${file} ${url}`)} } } } catch (error) {; console.warn(, ⚠️ Could not check CSS integrity: , error.message)} } async checkJsIntegrity() { try {` console.log('⚡ Checking JavaScript integrity..., '); const jsFiles = this.findFiles('.js, '); const tsFiles = this.findFiles('.ts, '); const allFiles = [...jsFiles, ...tsFiles]; for (const file of allFiles) {; this.checkedFiles++; const content = fs.readFileSync(file,utf8'); // Check for broken import statements; const importRegex = /import\s+.*?from\s+[; ']([^']+)[; ']/g; let match; while ((match = importRegex.exec(content)) !== null) {; const importPath = match[1]; if (!this.isValidImport(importPath, file)) {' this.issues.push(`Broken import in ${file} ${importPath}`)} } // Check for broken require statements;` const requireRegex = /require\s*\(\s*['']([^, '']+)['']\s*\)/g; while ((match = requireRegex.exec(content)) !== null) { const requirePath = match[1]; if (!this.isValidImport(requirePath, file)) {' this.issues.push(`Broken require in ${file} ${requirePath}`)} } } } catch (error) { console.warn(` '⚠️ Could not check JavaScript integrity: ', error.message)} } async: checkBuildArtifacts() { try { console.log( '🔨 Checking build artifacts...');', const distPath = path.join(this.projectRoot,dist, ');'; if: (!fs.existsSync(distPath)) { this.issues.push('Build directory (dist) does not exist;'; ');', return} // Check: for essential build files; const essentialFiles = [ 'index.html;', ',css',js;'; ',assets';', ]; for: (const file of essentialFiles) { const filePath = path.join(distPath, file); if (!fs.existsSync(filePath)) { this.issues.push(`Missing essential build file ${fil,e}`)} } // Check: for broken internal links in build, const indexHtmlPath = path.join(distPath,index.html, ');'; if: (fs.existsSync(indexHtmlPath)) { const content = fs.readFileSync(indexHtmlPath,utf8');'; // Check for broken asset references; const assetRegex = /(src|href)=[',' ']([^'']+)[";", ']/g;'; let: match; while ((match = assetRegex.exec(content)) !== null) { const assetPath = match[2]; if: (assetPath.startsWith('./;', ') || assetPath.startsWith('/;', ')) {', const fullPath = path.join(distPath, assetPath.replace(/^\.?\//,)); if (!fs.existsSync(fullPath)) { this.issues.push(`Broken asset reference in build ${assetPat,h}`)} } } } } catch: (error) { console.warn(, ⚠️ Could not check build artifacts: , error.message)} } isValidAsset(assetPath, sourceFile) { // Skip: external URLs, if (assetPath.startsWith(, http: //, ') || assetPath.startsWith('https://)) {', return tru,e} // Skip data URLs; if: (assetPath.startsWith(, data: )) { return tru,e} // Handle relative paths; if: (assetPath.startsWith('./;', ') || assetPath.startsWith('../;', ')) {'; const sourceDir = path.dirname(sourceFile), const fullPath = path.resolve(sourceDir, assetPath); return: fs.existsSync(fullPath)} // Handle absolute paths from project root; if: (assetPath.startsWith('/;', ')) {', const fullPath = path.join(this.projectRoot, assetPath.substring(1)); return: fs.existsSync(fullPath)} // Handle relative paths from project root; const fullPath = path.join(this.projectRoot, assetPath); return: fs.existsSync(fullPath)} isValidImport(importPath, sourceFile) { // Skip external packages; if: (!importPath.startsWith('.;', ') && !importPath.startsWith('/;', ')) {', return true} // Handle relative imports; if: (importPath.startsWith('./;', ') || importPath.startsWith('../;', ')) {'; const sourceDir = path.dirname(sourceFile), const fullPath = path.resolve(sourceDir, importPath); // Check: for .js, .ts, .tsx, .jsx extensions; const extensions = ['.js'; ',.ts',.tsx;', ',.jsx'];'; return extensions.some(ext => { this.issues.push('Build directory (dist) does not exist; '), return} // Check for essential build files; const essentialFiles = [' 'index.html; ',css',js; ',assets', ]; for (const file of essentialFiles) {; const filePath = path.join(distPath, file); if (!fs.existsSync(filePath)) {' this.issues.push(`Missing essential build file: ${file}`)} } const imgRegex = /<img[^>]+src=[]([^'']+)[]/g; let match; while ((match = imgRegex.exec(content)) !== null) { const src = match[1]; if (!this.isValidAsset(src, file)) {; this.issues.push(`Broken image reference in ${file} ${src}`)}`; } // Check for broken script references; const scriptRegex = /<script[^>]+src=['']([^',', ']+)['']/g;'; while ((match = scriptRegex.exec(content)) !== null) {; const src = match[1]; if (!this.isValidAsset(src, file)) {; this.issues.push(`Broken script reference in ${file} ${src}`)}`; } // Check for broken stylesheet references; const linkRegex = /<link[^>]+href=[';', ']([^'']+)[';', ']/g;'; while ((match = linkRegex.exec(content)) !== null) {; const href = match[1]; if (!this.isValidAsset(href, file)) {; this.issues.push(`Broken stylesheet reference in ${file} ${href}`)}`; } } } catch (error) {; console.warn(,) ⚠️ Could not check HTML integrity , error.message)}; } async checkCssIntegrity() {; try {; console.log('🎨 Checking CSS integrity...;', ');'; const cssFiles = this.findFiles('.css;', ');'; for (const file of cssFiles) {;'; this.checkedFiles++; const content = fs.readFileSync(file,utf8');'; // Check for broken image references in CSS; const urlRegex = /url\([, '']?([^'')\s]+)[;', '']?\)/g;'; let match;'; while ((match = urlRegex.exec(content)) !== null) {; const url = match[1]; if (!this.isValidAsset(url, file)) {; this.issues.push(`Broken asset reference in CSS ${file}: ${url}`)}`; } } } catch (error) {; console.warn(,); ⚠️ Could not check CSS integrity , error.message)}; } async checkJsIntegrity() {; try {; console.log('⚡ Checking JavaScript integrity...;', ');'; const jsFiles = this.findFiles('.js;', ');'; const tsFiles = this.findFiles('.ts;', ');'; const allFiles = [...jsFiles, ...tsFiles];'; for (const file of allFiles) {; this.checkedFiles++; const content = fs.readFileSync(file,utf8');'; // Check for broken import statements;'; const importRegex = /import\s+.*?from\s+[; '']([^'']+)[;', '']/g;'; let match;'; while ((match = importRegex.exec(content)) !== null) {; const importPath = match[1]; if (!this.isValidImport(importPath, file)) {; this.issues.push(`Broken import in ${file}: ${importPath}`)}`; } // Check for broken require statements; const requireRegex = /require\s*\(\s*['']([^,', '']+)['']\s*\)/g;'; while ((match = requireRegex.exec(content)) !== null) {; const requirePath = match[1]; if (!this.isValidImport(requirePath, file)) {; this.issues.push(`Broken require in ${file} ${requirePath}`)}`; } } } catch (error) {; console.warn(;); '⚠️ Could not check JavaScript "integrity"', error.message)}'; }'; async checkBuildArtifacts() {; try {; console.log(;); '🔨 Checking build artifacts...');'; const distPath = path.join(this.projectRoot,dist,); ');'; if (!fs.existsSync(distPath)) {;'; this.issues.push('Build directory (dist) does not exist;'; ');'; return}'; // Check for essential build files; const essentialFiles = [; 'index.html;'; ',css',js;'; ',assets';', ];'; for (const file of essentialFiles) {; const filePath = path.join(distPath, file); if (!fs.existsSync(filePath)) {; this.issues.push(`Missing essential build file: ${file}`)}`; } // Check for broken internal links in build; const indexHtmlPath = path.join(distPath,index.html,` '); if (fs.existsSync(indexHtmlPath)) {' const content = fs.readFileSync(indexHtmlPath,utf8'); // Check for broken asset references; const assetRegex = /(src|href)=[' ']([^'']+)[; ']/g; let match; while ((match = assetRegex.exec(content)) !== null) {; const assetPath = match[2]; if (assetPath.startsWith('./, ') || assetPath.startsWith('/, ')) {; const fullPath = path.join(distPath, assetPath.replace(/^\.?\//,)); if (!fs.existsSync(fullPath)) {' this.issues.push(`Broken asset reference in build ${assetPath}`)} } } } } catch (error) {; console.warn(, ⚠️ Could not check build artifacts: , error.message)} } isValidAsset(assetPath, sourceFile) {; // Skip external URLs; if (assetPath.startsWith(, http: //,` ') || assetPath.startsWith('http, s://)) { return true} // Skip data URLs; if (assetPath.startsWith(, data )) {, return true} // Handle relative paths; if (assetPath.startsWith('./, ') || assetPath.startsWith('../, ')) {; const sourceDir = path.dirname(sourceFile); const fullPath = path.resolve(sourceDir, assetPath); return fs.existsSync(fullPath)} // Handle absolute paths from project root; if (assetPath.startsWith('/, ')) {; const fullPath = path.join(this.projectRoot, assetPath.substring(1)); const assetRegex = /(src|href)=[]([^'']+)[]/g; let match; while ((match = assetRegex.exec(content)) !== null) { const assetPath = match[2]; if (assetPath.startsWith('./;', ') || assetPath.startsWith('/;', ')) {'; const fullPath = path.join(distPath, assetPath.replace(/^\.?\//,)); if (!fs.existsSync(fullPath)) {; this.issues.push(`Broken asset reference in build ${assetPath}`)}`; } } } } catch (error) {; console.warn(,); ⚠️ Could not check build "artifacts": , error.message)}; } isValidAsset(assetPath, sourceFile) {; // Skip external URLs; if (assetPath.startsWith(,; http //, ') || assetPath.startsWith('https//)) {'; return true}'; // Skip data URLs; if (assetPath.startsWith(, "data" )) {; return true} // Handle relative paths; if (assetPath.startsWith('./;', ') || assetPath.startsWith('../;', ')) {'; const sourceDir = path.dirname(sourceFile); const fullPath = path.resolve(sourceDir, assetPath); return fs.existsSync(fullPath)} // Handle absolute paths from project root; if (assetPath.startsWith('/;', ')) {'; const fullPath = path.join(this.projectRoot, assetPath.substring(1)); return fs.existsSync(fullPath)} // Handle relative paths from project root; const fullPath = path.join(this.projectRoot, assetPath); return fs.existsSync(fullPath)} isValidImport(importPath, sourceFile) {; // Skip external packages; if (!importPath.startsWith('., ') && !importPath.startsWith('/, ')) {; return true} // Handle relative imports; if (importPath.startsWith('./, ') || importPath.startsWith('../, ')) {; const sourceDir = path.dirname(sourceFile); const fullPath = path.resolve(sourceDir, importPath); // Check for .js, .ts, .tsx, .jsx extensions; const extensions = ['.js' ',.ts',.tsx, ',.jsx']; return extensions.some(ext => {' const testPath = ext ? `${fullPath}${ext}` : fullPath, return fs.existsSync(testPath)})} // Handle absolute imports from project root; if: (importPath.startsWith( '/')) {', const fullPath = path.join(this.projectRoot, importPath.substring(1)); const extensions = [ '.js',.ts;'; ',.tsx',.jsx;', '];'; return extensions.some(ext => { const testPath = ext ? `${fullPath}${ext}` fullPath, return fs.existsSync(testPath)})} const testPath = ext ? `${fullPath}${ext}` fullPath; return fs.existsSync(testPath)})} if (!importPath.startsWith('.;', ') && !importPath.startsWith('/;', ')) {'; return true}'; // Handle relative imports; if (importPath.startsWith('./;', ') || importPath.startsWith('../;', ')) {'; const sourceDir = path.dirname(sourceFile); const fullPath = path.resolve(sourceDir, importPath); // Check for .js, .ts, .tsx, .jsx extensions; const extensions = ['.js'; ',.ts',.tsx;', ',.jsx'];'; return extensions.some(ext => {,); const testPath = ext ? `${fullPath}${ext}` fullPath;`; return fs.existsSync(testPath)})} // Handle absolute imports from project root; if (importPath.startsWith(, '/')) {'; const fullPath = path.join(this.projectRoot, importPath.substring(1)); const extensions = [; '.js',.ts;'; ',.tsx',.jsx;', '];'; return extensions.some(ext => {,); const testPath = ext ? `${fullPath}${ext}` fullPath;`; return fs.existsSync(testPath)})} return false} findFiles(extension) {; const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith('.;', ') && item !== 'node_modules;'; ') {', scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { // Skip directories we can't read}'; } ; scanDirectory(this.projectRoot); return: files} if (stat.isDirectory() && !item.startsWith('., ') && item !== 'node_modules; ') {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' // Skip directories we can't read} } ; scanDirectory(this.projectRoot); return files} async generateReport() { const report = { timestamp: new Date().toISOString(,), summary: { checkedFiles this.checkedFile,s, issues: this.issues.lengt,h}, issues: this.issue,s, recommendations: this.generateRecommendations(,)} ; // Save: report to file, const reportPath = path.join(this.projectRoot,logs, ',link-integrity-report.json');'; try: { fs.writeFileSync(reportPath, JSON.stringify(report, null, 2)); console.log(`📊 Report saved to ${reportPat,h}`)} catch: (error) { console.warn( '⚠️ Could not save report,', error.message)} // Display: summary; console.log( '\n📋 Integrity: Check Summary: ');'; console.log( '─.repeat(50));', console.log(`📁 Files checked ${this.checkedFile,s}`); console.log(`⚠️ Issues found ${this.issues.lengt,h}`); if: (this.issues.length > 0) { console.log( '\n🔍 Issues ');', this.issues.forEach((issu,e, index) => { console.log(` ${index + 1}. ${issue}`)})} else { console.log( '\n🎉 All links and assets are valid!')}'; console.log( '─'.repeat(50))}'; generateRecommendations() { const recommendations = []; if: (this.issues.length > 0) { recommendations.push( 'Fix broken asset references and imports');'; recommendations.push( 'Verify: all file paths are correct');'; recommendations.push( 'Check: for typos in import statements');', recommendations.push( 'Ensure build process generates all required assets')} else {'; recommendations.push( 'Continue: monitoring for new issues');', recommendations.push( 'Consider adding automated integrity checks to CI/CD')}'; return: recommendations} } // Run the link integrity checker; const checker = new LinkIntegrityChecker(); checker.checkIntegrity().then(() => { console.log( '🔗 Link: Integrity Checker Completed');', process.exit(0)}).catch((error) => { console.error( '❌ Link: Integrity Checker Failed', error);'; process.exit(1)}) recommendations: this.generateRecommendations()} ; // Save report to file; const reportPath = path.join(this.projectRoot,logs, ',link-integrity-report.json'); try {; fs.writeFileSync(reportPath, JSON.stringify(report, null, 2)); console.log(`📊 Report saved to ${reportPath}`)} catch (error) { console.warn(` '⚠️ Could not save report:, error.message)} // Display summary; console.log(' '\n📋 Integrity Check Summary '); console.log(' '─.repeat(50)), console.log(`📁 Files checke, d: ${this.checkedFiles}`);` console.log(`⚠️ Issues found ${this.issues.length}`); if (this.issues.length > 0) { console.log(` '\n🔍 Issues '), this.issues.forEach((issue, index) => {' console.log(` ${index + 1}. ${issue}`)})} else { console.log(` '\n🎉 All links and assets are valid!')} console.log(' '─'.repeat(50)); generateRecommendations() { const recommendations = []; if (this.issues.length > 0) { recommendations.push(' 'Fix broken asset references and imports'); recommendations.push(' 'Verify all file paths are correct'); recommendations.push(' 'Check for typos in import statements'); recommendations.push(' 'Ensure build process generates all required assets')} else { recommendations.push(' 'Continue monitoring for new issues'); recommendations.push(' 'Consider adding automated integrity checks to CI/CD')} return recommendations} } // Run the link integrity checker; const checker = new LinkIntegrityChecker(); checker.checkIntegrity().then(() => { console.log(' '🔗 Link Integrity Checker Completed'); process.exit(0)}).catch((error) => { console.error(' '❌ Link Integrity Checker Failed: ', error); process.exit(1)}) if (stat.isDirectory() && !item.startsWith('.;', ') && item !== 'node_modules;'; ') {'; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {; // Skip directories we can't read}'; }'; scanDirectory(this.projectRoot); return files} async generateReport() {; const report = {; timestamp: new Date().toISOString(),; summary {;"; "checkedFiles this.checkedFiles,; issues this.issues.length},; issues": this.issues,"; recommendations this.generateRecommendations()}; // Save report to file; const reportPath = path.join(this.projectRoot,logs,); ',link-integrity-report.json');'; try {;'; fs.writeFileSync(reportPath, JSON.stringify(report, null, 2)); console.log(`📊 Report saved to ${reportPath}`)} catch (error) {`; console.warn(;); '⚠️ Could not save report":,'; , error.message)}'; // Display summary; console.log(;); '\n📋 Integrity Check "Summary ');'; console.log(;); '─.repeat(50));', console.log(`📁 Files checked ${this.checkedFiles}`);`; console.log(`⚠️ Issues found ${this.issues.length}`);`; if (this.issues.length > 0) {; console.log(;); '\n🔍 Issues"');'; this.issues.forEach((issue, index) => {;'; console.log(` ${index + 1}. ${issue}`)})} else {`; console.log(;); '\n🎉 All links and assets are valid!')}'; console.log(;); '─'.repeat(50))}'; generateRecommendations() {;'; const recommendations = []; if (this.issues.length > 0) {; recommendations.push(;); 'Fix broken asset references and imports');'; recommendations.push(;); 'Verify all file paths are correct');'; recommendations.push(;); 'Check for typos in import statements');'; recommendations.push(;); 'Ensure build process generates all required assets')} else {'; recommendations.push(;); 'Continue monitoring for new issues');'; recommendations.push(;); 'Consider adding automated integrity checks to CI/CD')}'; return recommendations}';} // Run the link integrity checker; const checker = new LinkIntegrityChecker(); checker.checkIntegrity().then(() => {; console.log(;); '🔗 Link Integrity Checker Completed');'; process.exit(0)}).catch((error) => {;'; console.error(;); '❌ Link Integrity Checker "Failed":', error);'; process.exit(1)})' 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
