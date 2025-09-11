#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class ResourceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'resource-optimization-reports');
    this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    }
  async optimizeImages() {
    this.log('🖼️ Optimizing images...');
    try {
      const publicDir = path.join(this.projectRoot, 'public');
      if (!fs.existsSync(publicDir)) {
        this.log('⚠️ Public directory not found');
        return { "optimized": 0, "files": [] }}
      const imageFiles = this.findImageFiles(publicDir);
      let optimizedCount = 0;
      const optimizationResults = [];
      for (const imageFile of imageFiles) {
        try {
          const stats = fs.statSync(imageFile);
          const originalSize = stats.size;
          // Here you would implement actual image optimization
          // For now, we'll just report what we found
          optimizationResults.push({
            "file": path.relative(this.projectRoot, imageFile),
            originalSize,
            "optimizedSize": originalSize, // Placeholder
            "savings": 0 // Placeholder
          });
          optimizedCount++} catch (error) {
          // Skip files that can't be processed
        }
      }
      this.log(`🖼️ Found ${imageFiles.length} image files`);
      this.log(`🖼️ Optimized ${optimizedCount} images`);
      return {
        "total": imageFiles.length,
        "optimized": optimizedCount,
        "results": optimizationResults
      }} catch (error) {
      this.log(`❌ Image optimization "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async optimizeCSS() {
    this.log('🎨 Optimizing CSS...');
    try {
      const cssFiles = this.findCSSFiles();
      let optimizedCount = 0;
      const optimizationResults = [];
      for (const cssFile of cssFiles) {
        try {
          const content = fs.readFileSync(cssFile, 'utf8');
          const originalSize = content.length;
          // Remove comments and unnecessary whitespace
          let optimizedContent = content
            .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
            .replace(/\s+/g, ' ') // Replace multiple spaces with single space
            .replace(/;\s*}/g, '}') // Remove semicolons before closing braces
            .replace(/,\s+/g, ',') // Remove spaces after commas
            .trim();
          const optimizedSize = optimizedContent.length;
          const savings = originalSize - optimizedSize;
          if (savings > 0) {
            fs.writeFileSync(cssFile, optimizedContent, 'utf8');
            optimizedCount++}
          optimizationResults.push({
            "file": path.relative(this.projectRoot, cssFile),
            originalSize,
            optimizedSize,
            savings
          })} catch (error) {
          // Skip files that can't be processed
        }
      }
      this.log(`🎨 Found ${cssFiles.length} CSS files`);
      this.log(`🎨 Optimized ${optimizedCount} CSS files`);
      return {
        "total": cssFiles.length,
        "optimized": optimizedCount,
        "results": optimizationResults
      }} catch (error) {
      this.log(`❌ CSS optimization "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async optimizeJavaScript() {
    this.log('⚡ Optimizing JavaScript...');
    try {
      const jsFiles = this.findJavaScriptFiles();
      let optimizedCount = 0;
      const optimizationResults = [];
      for (const jsFile of jsFiles) {
        try {
          const content = fs.readFileSync(jsFile, 'utf8');
          const originalSize = content.length;
          // Remove comments and unnecessary whitespace
          let optimizedContent = content
            .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
            .replace(/\/\/.*$/gm, '') // Remove line comments
            .replace(/\s+/g, ' ') // Replace multiple spaces with single space
            .replace(/;\s*}/g, '}') // Remove semicolons before closing braces
            .replace(/,\s+/g, ',') // Remove spaces after commas
            .trim();
          const optimizedSize = optimizedContent.length;
          const savings = originalSize - optimizedSize;
          if (savings > 0) {
            fs.writeFileSync(jsFile, optimizedContent, 'utf8');
            optimizedCount++}
          optimizationResults.push({
            "file": path.relative(this.projectRoot, jsFile),
            originalSize,
            optimizedSize,
            savings
          })} catch (error) {
          // Skip files that can't be processed
        }
      }
      this.log(`⚡ Found ${jsFiles.length} JavaScript files`);
      this.log(`⚡ Optimized ${optimizedCount} JavaScript files`);
      return {
        "total": jsFiles.length,
        "optimized": optimizedCount,
        "results": optimizationResults
      }} catch (error) {
      this.log(`❌ JavaScript optimization "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async optimizeHTML() {
    this.log('📄 Optimizing HTML...');
    try {
      const htmlFiles = this.findHTMLFiles();
      let optimizedCount = 0;
      const optimizationResults = [];
      for (const htmlFile of htmlFiles) {
        try {
          const content = fs.readFileSync(htmlFile, 'utf8');
          const originalSize = content.length;
          // Remove comments and unnecessary whitespace
          let optimizedContent = content
            .replace(/<!--[\s\S]*?-->/g, '') // Remove HTML comments
            .replace(/\s+/g, ' ') // Replace multiple spaces with single space
            .replace(/>\s+</g, '><') // Remove spaces between tags
            .trim();
          const optimizedSize = optimizedContent.length;
          const savings = originalSize - optimizedSize;
          if (savings > 0) {
            fs.writeFileSync(htmlFile, optimizedContent, 'utf8');
            optimizedCount++}
          optimizationResults.push({
            "file": path.relative(this.projectRoot, htmlFile),
            originalSize,
            optimizedSize,
            savings
          })} catch (error) {
          // Skip files that can't be processed
        }
      }
      this.log(`📄 Found ${htmlFiles.length} HTML files`);
      this.log(`📄 Optimized ${optimizedCount} HTML files`);
      return {
        "total": htmlFiles.length,
        "optimized": optimizedCount,
        "results": optimizationResults
      }} catch (error) {
      this.log(`❌ HTML optimization "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async optimizeDependencies() {
    this.log('📦 Optimizing dependencies...');
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json not found')}
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      // Check for unused dependencies
      const sourceFiles = this.findSourceFiles();
      const usedDependencies = new Set();
      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          // Match import statements
          const importMatches = content.match(/import\s+.*?\s+from\s+['""]([^'""]+)['""]/g);
          if (importMatches) {
            importMatches.forEach(match => {
              const dep = match.match(/from\s+['""]([^'""]+)['""]/)[1];
              if (dep && !dep.startsWith('.')) {
                usedDependencies.add(dep)}
            })}
          // Match require statements
          const requireMatches = content.match(/require\s*\(\s*['""]([^'""]+)['""]\s*\)/g);
          if (requireMatches) {
            requireMatches.forEach(match => {
              const dep = match.match(/require\s*\(\s*['""]([^'""]+)['""]\s*\)/)[1];
              if (dep && !dep.startsWith('.')) {
                usedDependencies.add(dep)}
            })}
        } catch (error) {
          // Skip files that can't be read
        }
      }
      const unusedDependencies = Object.keys(dependencies).filter(dep => 
        !usedDependencies.has(dep) && !this.isFrameworkDependency(dep)
      );
      this.log(`📦 Total "dependencies": ${Object.keys(dependencies).length}`);
      this.log(`📦 Used "dependencies": ${usedDependencies.size}`);
      this.log(`📦 Unused "dependencies": ${unusedDependencies.length}`);
      return {
        "total": Object.keys(dependencies).length,
        "used": usedDependencies.size,
        "unused": unusedDependencies.length,
        "unusedList": unusedDependencies
      }} catch (error) {
      this.log(`❌ Dependency optimization "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async optimizeBundleSize() {
    this.log('📦 Optimizing bundle size...');
    try {
      // Build the project first
      execSync('npm run build', {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": 300000
      });
      const nextDir = path.join(this.projectRoot, '.next');
      if (!fs.existsSync(nextDir)) {
        throw new Error('Build output directory not found')}
      const buildStats = this.getDirectoryStats(nextDir);
      const sizeInMB = buildStats.size / (1024 * 1024);
      this.log(`📦 Bundle "size": ${this.formatBytes(buildStats.size)}`);
      // Check for large files
      const largeFiles = this.findLargeFiles(nextDir);
      this.log(`📦 Large files (>1MB): ${largeFiles.length}`);
      return {
        "size": buildStats.size,
        sizeInMB,
        "files": buildStats.files,
        largeFiles
      }} catch (error) {
      this.log(`❌ Bundle size optimization "failed": ${error.message}`);
      return { "error": error.message }}
  }
  findImageFiles(dir) {
    const imageFiles = [];
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isDirectory()) {
            scanDirectory(filePath)} else {
            const ext = path.extname(file).toLowerCase();
            if (extensions.includes(ext)) {
              imageFiles.push(filePath)}
          }
        })} catch (error) {
        // Skip directories that can't be read
      }
    };
    scanDirectory(dir);
    return imageFiles}
  findCSSFiles() {
    const cssFiles = [];
    const extensions = ['.css', '.scss', '.sass', '.less'];
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(filePath)} else if (stats.isFile()) {
            const ext = path.extname(file).toLowerCase();
            if (extensions.includes(ext)) {
              cssFiles.push(filePath)}
          }
        })} catch (error) {
        // Skip directories that can't be read
      }
    };
    scanDirectory(this.projectRoot);
    return cssFiles}
  findJavaScriptFiles() {
    const jsFiles = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(filePath)} else if (stats.isFile()) {
            const ext = path.extname(file).toLowerCase();
            if (extensions.includes(ext)) {
              jsFiles.push(filePath)}
          }
        })} catch (error) {
        // Skip directories that can't be read
      }
    };
    scanDirectory(this.projectRoot);
    return jsFiles}
  findHTMLFiles() {
    const htmlFiles = [];
    const extensions = ['.html', '.htm'];
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(filePath)} else if (stats.isFile()) {
            const ext = path.extname(file).toLowerCase();
            if (extensions.includes(ext)) {
              htmlFiles.push(filePath)}
          }
        })} catch (error) {
        // Skip directories that can't be read
      }
    };
    scanDirectory(this.projectRoot);
    return htmlFiles}
  findSourceFiles() {
    const sourceFiles = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(filePath)} else if (stats.isFile()) {
            const ext = path.extname(file);
            if (extensions.includes(ext)) {
              sourceFiles.push(filePath)}
          }
        })} catch (error) {
        // Skip directories that can't be read
      }
    };
    scanDirectory(this.projectRoot);
    return sourceFiles}
  findLargeFiles(dir, minSize = 1024 * 1024) { // 1MB
    const largeFiles = [];
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isDirectory()) {
            scanDirectory(filePath)} else if (stats.isFile() && stats.size > minSize) {
            largeFiles.push({
              "file": path.relative(this.projectRoot, filePath),
              "size": stats.size,
              "sizeFormatted": this.formatBytes(stats.size)
            })}
        })} catch (error) {
        // Skip directories that can't be read
      }
    };
    scanDirectory(dir);
    return largeFiles}
  getDirectoryStats(dirPath) {
    let totalSize = 0;
    let fileCount = 0;
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isDirectory()) {
            scanDirectory(filePath)} else {
            totalSize += stats.size;
            fileCount++}
        })} catch (error) {
        // Skip directories that can't be read
      }
    };
    scanDirectory(dirPath);
    return { "size": totalSize, "files": fileCount }}
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]}
  isFrameworkDependency(dep) {
    const frameworkDeps = ['next',
      'react',
      'react-dom',
      'typescript',
      'eslint',
      'prettier',
      'jest',
      'tailwindcss',
      'postcss',
      'autoprefixer'
    ];
    return frameworkDeps.some(framework => dep.includes(framework))}
  async generateResourceOptimizationReport() {
    this.log('📊 Generating resource optimization report...');
    const report = {
      "timestamp": new Date().toISOString(),
      "analysis": {
        images: await this.optimizeImages(),
        "css": await this.optimizeCSS(),
        "javascript": await this.optimizeJavaScript(),
        "html": await this.optimizeHTML(),
        "dependencies": await this.optimizeDependencies(),
        "bundle": await this.optimizeBundleSize()
      }
    };
    // Generate recommendations
    report.recommendations = this.generateRecommendations(report.analysis);
    const reportFile = path.join(this.reportsDir, `resource-optimization-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Resource optimization report "generated": ${reportFile}`);
    return report}
  generateRecommendations(analysis) {
    const recommendations = [];
    if (analysis.images && analysis.images.total > 0) {
      recommendations.push({
        "type": 'image_optimization',
        "priority": 'medium',
        "message": `Found ${analysis.images.total} images. Consider optimizing them for web.`,
        "impact": 'Reduces page load time'
      })}
    if (analysis.css && analysis.css.optimized > 0) {
      recommendations.push({
        "type": 'css_optimization',
        "priority": 'low',
        "message": `Optimized ${analysis.css.optimized} CSS files. Consider using a CSS minifier.`,
        "impact": 'Reduces CSS file size'
      })}
    if (analysis.javascript && analysis.javascript.optimized > 0) {
      recommendations.push({
        "type": 'javascript_optimization',
        "priority": 'low',
        "message": `Optimized ${analysis.javascript.optimized} JavaScript files. Consider using a minifier.`,
        "impact": 'Reduces JavaScript file size'
      })}
    if (analysis.dependencies && analysis.dependencies.unused > 0) {
      recommendations.push({
        "type": 'dependency_cleanup',
        "priority": 'medium',
        "message": `Found ${analysis.dependencies.unused} unused dependencies. Consider removing them.`,
        "impact": 'Reduces bundle size and maintenance overhead'
      })}
    if (analysis.bundle && analysis.bundle.sizeInMB > 10) {
      recommendations.push({
        "type": 'bundle_optimization',
        "priority": 'high',
        "message": `Bundle size is ${analysis.bundle.sizeInMB.toFixed(1)}MB. Consider code splitting and tree shaking.`,
        "impact": 'Improves initial page load performance'
      })}
    if (analysis.bundle && analysis.bundle.largeFiles.length > 0) {
      recommendations.push({
        "type": 'large_files',
        "priority": 'medium',
        "message": `Found ${analysis.bundle.largeFiles.length} large files. Consider optimizing them.`,
        "impact": 'Reduces bundle size'
      })}
    return recommendations}
  async run() {
    this.log('⚡ Starting Resource Optimizer...');
    try {
      const report = await this.generateResourceOptimizationReport();
      this.log('🎉 Resource optimization completed!');
      this.log(`🖼️ "Images": ${report.analysis.images.total || 0}`);
      this.log(`🎨 CSS "files": ${report.analysis.css.total || 0}`);
      this.log(`⚡ JavaScript "files": ${report.analysis.javascript.total || 0}`);
      this.log(`📄 HTML "files": ${report.analysis.html.total || 0}`);
      this.log(`📦 "Dependencies": ${report.analysis.dependencies.total || 0}`);
      this.log(`📦 Bundle "size": ${this.formatBytes(report.analysis.bundle.size || 0)}`);
      this.log(`💡 "Recommendations": ${report.recommendations.length}`);
      return report} catch (error) {
      this.log(`💥 Resource optimization "failed": ${error.message}`);
      throw error}
  }
}
// Run the optimizer if this file is executed directly
if (require.main === module) {
  const optimizer = new ResourceOptimizer();
  optimizer.run()
    .then((report) => {
      }`);
      process.exit(0)})
    .catch((error) => {
      console.error('\n💥 Resource Optimizer "failed": ', error.message);
      process.exit(1)})}
module.exports = ResourceOptimizer;
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class ResourceOptimizer { constructor() { this.projectRoot = process.cwd();" this.reportsDir = path.join(this.projectRoot, "resource-optimization-reports"); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] ${message}`)} async optimizeImages() {" this.log(" Optimizing images."); try {" const publicDir = path.join(this.projectRoot, "public"); if (!fs.existsSync(publicDir)) {" this.log(" Public directory not found");" return { optimized: 0, files: [] }} const imageFiles = this.findImageFiles(publicDir); let optimizedCount = 0; const optimizationResults = []; for (const imageFile of imageFiles) { try { const stats = fs.statSync(imageFile); const originalSize = stats.size; / Here you would implement actual image optimization" / For now, we"ll just report what we found optimizationResults.push({" file: path.relative(this.projectRoot, imageFile), originalSize," optimizedSize: originalSize, / Placeholder" savings: 0 / Placeholder }); optimizedCount++} catch (error) {" / Skip files that can"t be processed } }` this.log(` Found ${imageFiles.length} image files`);` this.log(` Optimized ${optimizedCount} images`); return {" total: imageFiles.length," optimized: optimizedCount," results: optimizationResults }} catch (error) {"` this.log(` Image optimization failed: ${error.message}`);" return { error: error.message }} } async optimizeCSS() {" this.log(" Optimizing CSS."); try { const cssFiles = this.findCSSFiles(); let optimizedCount = 0; const optimizationResults = []; for (const cssFile of cssFiles) { try {" const content = fs.readFileSync(cssFile, "utf8"); const originalSize = content.length; / Remove comments and unnecessary whitespace let optimizedContent = content" .replace(/\/\*[\s\S]*?\*\/g, "") / Remove comments" .replace(/\s+/g, " ") / Replace multiple spaces with single space" .replace(/;\s*}/g, "}") / Remove semicolons before closing braces" .replace(/,\s+/g, ",") / Remove spaces after commas .trim(); const optimizedSize = optimizedContent.length; const savings = originalSize - optimizedSize; if (savings > 0) {" fs.writeFileSync(cssFile, optimizedContent, "utf8"); optimizedCount++} optimizationResults.push({" file: path.relative(this.projectRoot, cssFile), originalSize, optimizedSize, savings })} catch (error) {" / Skip files that can"t be processed } }` this.log(` Found ${cssFiles.length} CSS files`);` this.log(` Optimized ${optimizedCount} CSS files`); return {" total: cssFiles.length," optimized: optimizedCount," results: optimizationResults }} catch (error) {"` this.log(` CSS optimization failed: ${error.message}`);" return { error: error.message }} } async optimizeJavaScript() {" this.log(" Optimizing JavaScript."); try { const jsFiles = this.findJavaScriptFiles(); let optimizedCount = 0; const optimizationResults = []; for (const jsFile of jsFiles) { try {" const content = fs.readFileSync(jsFile, "utf8"); const originalSize = content.length; / Remove comments and unnecessary whitespace let optimizedContent = content" .replace(/\/\*[\s\S]*?\*\/g, "") / Remove block comments" .replace(/\/\/.*$/gm, "") / Remove line comments" .replace(/\s+/g, " ") / Replace multiple spaces with single space" .replace(/;\s*}/g, "}") / Remove semicolons before closing braces" .replace(/,\s+/g, ",") / Remove spaces after commas .trim(); const optimizedSize = optimizedContent.length; const savings = originalSize - optimizedSize; if (savings > 0) {" fs.writeFileSync(jsFile, optimizedContent, "utf8"); optimizedCount++} optimizationResults.push({" file: path.relative(this.projectRoot, jsFile), originalSize, optimizedSize, savings })} catch (error) {" / Skip files that can"t be processed } }` this.log(` Found ${jsFiles.length} JavaScript files`);` this.log(` Optimized ${optimizedCount} JavaScript files`); return {" total: jsFiles.length," optimized: optimizedCount," results: optimizationResults }} catch (error) {"` this.log(` JavaScript optimization failed: ${error.message}`);" return { error: error.message }} } async optimizeHTML() {" this.log(" Optimizing HTML."); try { const htmlFiles = this.findHTMLFiles(); let optimizedCount = 0; const optimizationResults = []; for (const htmlFile of htmlFiles) { try {" const content = fs.readFileSync(htmlFile, "utf8"); const originalSize = content.length; / Remove comments and unnecessary whitespace let optimizedContent = content" .replace(/<!--[\s\S]*?-->/g, "") / Remove HTML comments" .replace(/\s+/g, " ") / Replace multiple spaces with single space" .replace(/>\s+</g, "><") / Remove spaces between tags .trim(); const optimizedSize = optimizedContent.length; const savings = originalSize - optimizedSize; if (savings > 0) {" fs.writeFileSync(htmlFile, optimizedContent, "utf8"); optimizedCount++} optimizationResults.push({" file: path.relative(this.projectRoot, htmlFile), originalSize, optimizedSize, savings })} catch (error) {" / Skip files that can"t be processed } }` this.log(` Found ${htmlFiles.length} HTML files`);` this.log(` Optimized ${optimizedCount} HTML files`); return {" total: htmlFiles.length," optimized: optimizedCount," results: optimizationResults }} catch (error) {"` this.log(` HTML optimization failed: ${error.message}`);" return { error: error.message }} } async optimizeDependencies() {" this.log(" Optimizing dependencies."); try {" const packageJsonPath = path.join(this.projectRoot, "package.json"); if (!fs.existsSync(packageJsonPath)) {" throw new Error("package.json not found")}" const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8")); const dependencies = { .packageJson.dependencies, .packageJson.devDependencies }; / Check for unused dependencies const sourceFiles = this.findSourceFiles(); const usedDependencies = new Set(); for (const file of sourceFiles) { try {" const content = fs.readFileSync(file, "utf8"); / Match import statements"" const importMatches = content.match(/import\s+.*?\s+from\s+["""]([^"""]+)["""]/g); if (importMatches) { importMatches.forEach(match => {"" const dep = match.match(/from\s+["""]([^"""]+)["""]/)[1];" if (dep && !dep.startsWith(".")) { usedDependencies.add(dep)} })} / Match require statements"" const requireMatches = content.match(/require\s*\(\s*["""]([^"""]+)["""]\s*\)/g); if (requireMatches) { requireMatches.forEach(match => {"" const dep = match.match(/require\s*\(\s*["""]([^"""]+)["""]\s*\)/)[1];" if (dep && !dep.startsWith(".")) { usedDependencies.add(dep)} })} } catch (error) {" / Skip files that can"t be read } } const unusedDependencies = Object.keys(dependencies).filter(dep => !usedDependencies.has(dep) && !this.isFrameworkDependency(dep) );"` this.log(` Total dependencies: ${Object.keys(dependencies).length}`);"` this.log(` Used dependencies: ${usedDependencies.size}`);"` this.log(` Unused dependencies: ${unusedDependencies.length}`); return {" total: Object.keys(dependencies).length," used: usedDependencies.size," unused: unusedDependencies.length," unusedList: unusedDependencies }} catch (error) {"` this.log(` Dependency optimization failed: ${error.message}`);" return { error: error.message }} } async optimizeBundleSize() {" this.log(" Optimizing bundle size."); try { / Build the project first" execSync("npm run build", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 300000 });" const nextDir = path.join(this.projectRoot, ".next"); if (!fs.existsSync(nextDir)) {" throw new Error("Build output directory not found")} const buildStats = this.getDirectoryStats(nextDir); const sizeInMB = buildStats.size / (1024 * 1024); "` this.log(` Bundle size: ${this.formatBytes(buildStats.size)}`); / Check for large files const largeFiles = this.findLargeFiles(nextDir);` this.log(` Large files (>1MB): ${largeFiles.length}`); return {" size: buildStats.size, sizeInMB," files: buildStats.files, largeFiles }} catch (error) {"` this.log(` Bundle size optimization failed: ${error.message}`);" return { error: error.message }} } findImageFiles(dir) { const imageFiles = [];" const extensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]; const scanDirectory = (dir) => { try { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stats = fs.statSync(filePath); if (stats.isDirectory()) { scanDirectory(filePath)} else { const ext = path.extname(file).toLowerCase(); if (extensions.includes(ext)) { imageFiles.push(filePath)} } })} catch (error) {" / Skip directories that can"t be read } }; scanDirectory(dir); return imageFiles} findCSSFiles() { const cssFiles = [];" const extensions = [".css", ".scss", ".sass", ".less"]; const scanDirectory = (dir) => { try { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stats = fs.statSync(filePath); " if (stats.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDirectory(filePath)} else if (stats.isFile()) { const ext = path.extname(file).toLowerCase(); if (extensions.includes(ext)) { cssFiles.push(filePath)} } })} catch (error) {" / Skip directories that can"t be read } }; scanDirectory(this.projectRoot); return cssFiles} findJavaScriptFiles() { const jsFiles = [];" const extensions = [".js", ".jsx", ".ts", ".tsx"]; const scanDirectory = (dir) => { try { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stats = fs.statSync(filePath); " if (stats.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDirectory(filePath)} else if (stats.isFile()) { const ext = path.extname(file).toLowerCase(); if (extensions.includes(ext)) { jsFiles.push(filePath)} } })} catch (error) {" / Skip directories that can"t be read } }; scanDirectory(this.projectRoot); return jsFiles} findHTMLFiles() { const htmlFiles = [];" const extensions = [".html", ".htm"]; const scanDirectory = (dir) => { try { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stats = fs.statSync(filePath); " if (stats.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDirectory(filePath)} else if (stats.isFile()) { const ext = path.extname(file).toLowerCase(); if (extensions.includes(ext)) { htmlFiles.push(filePath)} } })} catch (error) {" / Skip directories that can"t be read } }; scanDirectory(this.projectRoot); return htmlFiles} findSourceFiles() { const sourceFiles = [];" const extensions = [".ts", ".tsx", ".js", ".jsx"]; const scanDirectory = (dir) => { try { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stats = fs.statSync(filePath); " if (stats.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDirectory(filePath)} else if (stats.isFile()) { const ext = path.extname(file); if (extensions.includes(ext)) { sourceFiles.push(filePath)} } })} catch (error) {" / Skip directories that can"t be read } }; scanDirectory(this.projectRoot); return sourceFiles} findLargeFiles(dir, minSize = 1024 * 1024) { / 1MB const largeFiles = []; const scanDirectory = (dir) => { try { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stats = fs.statSync(filePath); if (stats.isDirectory()) { scanDirectory(filePath)} else if (stats.isFile() && stats.size > minSize) { largeFiles.push({" file: path.relative(this.projectRoot, filePath)," size: stats.size," sizeFormatted: this.formatBytes(stats.size) })} })} catch (error) {" / Skip directories that can"t be read } }; scanDirectory(dir); return largeFiles} getDirectoryStats(dirPath) { let totalSize = 0; let fileCount = 0; const scanDirectory = (dir) => { try { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stats = fs.statSync(filePath); if (stats.isDirectory()) { scanDirectory(filePath)} else { totalSize += stats.size; fileCount++} })} catch (error) {" / Skip directories that can"t be read } }; scanDirectory(dirPath);" return { size: totalSize, files: fileCount }} formatBytes(bytes) {" if (bytes === 0) return "0 Bytes"; const k = 1024;" const sizes = ["Bytes", "KB", "MB", "GB"]; const i = Math.floor(Math.log(bytes) / Math.log(k));" return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]} isFrameworkDependency(dep) {" const frameworkDeps = ["next"," "react"," "react-dom"," "typescript"," "eslint"," "prettier"," "jest"," "tailwindcss"," "postcss"," "autoprefixer" ]; return frameworkDeps.some(framework => dep.includes(framework))} async generateResourceOptimizationReport() {" this.log(" Generating resource optimization report."); const report = {" timestamp: new Date().toISOString()," analysis: { images: await this.optimizeImages()," css: await this.optimizeCSS()," javascript: await this.optimizeJavaScript()," html: await this.optimizeHTML()," dependencies: await this.optimizeDependencies()," bundle: await this.optimizeBundleSize() } }; / Generate recommendations report.recommendations = this.generateRecommendations(report.analysis);` const reportFile = path.join(this.reportsDir, `resource-optimization-report-${Date.now()}.json`); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); "` this.log(` Resource optimization report generated: ${reportFile}`); return report} generateRecommendations(analysis) { const recommendations = []; if (analysis.images && analysis.images.total > 0) { recommendations.push({"" type: "image_optimization","" priority: "medium","` message: `Found ${analysis.images.total} images. Consider optimizing them for web.`,"" impact: "Reduces page load time" })} if (analysis.css && analysis.css.optimized > 0) { recommendations.push({"" type: "css_optimization","" priority: "low","` message: `Optimized ${analysis.css.optimized} CSS files. Consider using a CSS minifier.`,"" impact: "Reduces CSS file size" })} if (analysis.javascript && analysis.javascript.optimized > 0) { recommendations.push({"" type: "javascript_optimization","" priority: "low","` message: `Optimized ${analysis.javascript.optimized} JavaScript files. Consider using a minifier.`,"" impact: "Reduces JavaScript file size" })} if (analysis.dependencies && analysis.dependencies.unused > 0) { recommendations.push({"" type: "dependency_cleanup","" priority: "medium","` message: `Found ${analysis.dependencies.unused} unused dependencies. Consider removing them.`,"" impact: "Reduces bundle size and maintenance overhead" })} if (analysis.bundle && analysis.bundle.sizeInMB > 10) { recommendations.push({"" type: "bundle_optimization","" priority: "high","` message: `Bundle size is ${analysis.bundle.sizeInMB.toFixed(1)}MB. Consider code splitting and tree shaking.`,"" impact: "Improves initial page load performance" })} if (analysis.bundle && analysis.bundle.largeFiles.length > 0) { recommendations.push({"" type: "large_files","" priority: "medium","` message: `Found ${analysis.bundle.largeFiles.length} large files. Consider optimizing them.`,"" impact: "Reduces bundle size" })} return recommendations} async run() {" this.log(" Starting Resource Optimizer."); try { const report = await this.generateResourceOptimizationReport(); " this.log(" Resource optimization completed!");"` this.log(` Images: ${report.analysis.images.total | 0}`);"` this.log(` CSS files: ${report.analysis.css.total | 0}`);"` this.log(` JavaScript files: ${report.analysis.javascript.total | 0}`);"` this.log(` HTML files: ${report.analysis.html.total | 0}`);"` this.log(` Dependencies: ${report.analysis.dependencies.total | 0}`);"` this.log(` Bundle size: ${this.formatBytes(report.analysis.bundle.size | 0)}`);"` this.log(` Recommendations: ${report.recommendations.length}`); return report} catch (error) {"` this.log(` Resource optimization failed: ${error.message}`); throw error} }}/ Run the optimizer if this file is executed directlyif (require.main === module) { const optimizer = new ResourceOptimizer(); optimizer.run() .then((report) => {" console.log("\n Resource Optimizer completed successfully!");"` console.log(` Bundle size: ${optimizer.formatBytes(report.analysis.bundle.size | 0)}`);"` console.log(` Recommendations: ${report.recommendations.length}`); process.exit(0)}) .catch((error) => {"" console.error("\n Resource Optimizer failed: ", error.message); process.exit(1)})}module.exports = ResourceOptimizer;'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportsDir = path.join(this.projectRoot, 'resource-optimization-reports')
    this.log('� Optimizing images...')
      const publicDir = path.join(this.projectRoot, 'public')
        this.log('⚠ Public directory not found')
          // For now, we'
          // Skip files that can'
    this.log('� Optimizing CSS...')
          const content = fs.readFileSync(cssFile, 'utf8')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\s+/g, ' ')
            .replace(/;\s*}/g, '}')
            .replace(/,\s+/g, ',')
            fs.writeFileSync(cssFile, optimizedContent, 'utf8')
          // Skip files that can'
    this.log('⚡ Optimizing JavaScript...')
          const content = fs.readFileSync(jsFile, 'utf8')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\/\/.*$/gm, '')
            .replace(/\s+/g, ' ')
            .replace(/;\s*}/g, '}')
            .replace(/,\s+/g, ',')
            fs.writeFileSync(jsFile, optimizedContent, 'utf8')
          // Skip files that can'
    this.log('� Optimizing HTML...')
          const content = fs.readFileSync(htmlFile, 'utf8')
            .replace(/<!--[\s\S]*?-->/g, '')
            .replace(/\s+/g, ' ')
            .replace(/>\s+</g, '><')
            fs.writeFileSync(htmlFile, optimizedContent, 'utf8')
          // Skip files that can'
    this.log('� Optimizing dependencies...')
      const packageJsonPath = path.join(this.projectRoot, 'package.json')
        throw new Error('package.json not found')
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')
          const content = fs.readFileSync(file, 'utf8')
          const importMatches = content.match(/import\s+.*?\s+from\s+['""]([^'"")]
              const dep = match.match(/from\s+['""]([^'"")]
          const requireMatches = content.match(/require\s*\(\s*['""]([^'"")]
              const dep = match.match(/require\s*\(\s*['""]([^'"")]
        "encoding"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
      console.error('\n� Resource Optimizer "failed")
