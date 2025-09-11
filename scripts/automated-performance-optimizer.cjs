#!/usr/bin/env node/usr/bin/env nodeconst fs = require("child_process");"const path = require("child_process");"const { execSync } = require("child_process")class PerformanceOptimizer { constructor() { this.projectRoot = process.cwd()" this.reportsDir = path.join(this.projectRoot, "automation-reports") this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) {" fs.mkdirSync(this.reportsDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString() console.log(`[${timestamp}] ${message}`)} analyzeBundleSize() {" this.log(" Analyzing bundle size.")" const buildDir = path.join(this.projectRoot, ".next")" const analysis = {buildExists: fs.existsSync(buildDir),totalSize: 0,staticSize: 0; serverSize: 0; chunks: []} if (analysis.buildExists) { try { / Get total build size"` const totalSizeOutput = execSync(`du -sh ${buildDir}`, { encoding: "utf8" })" analysis.totalSize = totalSizeOutput.split("\t")[0] / Get static assets size" const staticDir = path.join(buildDir, "static") if (fs.existsSync(staticDir)) {"` const staticSizeOutput = execSync(`du -sh ${staticDir}`, { encoding: "utf8" })" analysis.staticSize = staticSizeOutput.split("\t")[0]} / Get server files size" const serverDir = path.join(buildDir, "server") if (fs.existsSync(serverDir)) {"` const serverSizeOutput = execSync(`du -sh ${serverDir}`, { encoding: "utf8" })" analysis.serverSize = serverSizeOutput.split("\t")[0]} / Analyze chunks analysis.chunks = this.analyzeChunks(buildDir)} catch (error) { analysis.error = error.message} } return analysis} analyzeChunks(buildDir) { const chunks = []" const staticDir = path.join(buildDir, "static", "chunks") if (fs.existsSync(staticDir)) { const files = fs.readdirSync(staticDir) files.forEach(file => {" if (file.endsWith(".js")) { const filePath = path.join(staticDir, file) const stats = fs.statSync(filePath)" chunks.push({name: file,size: this.formatBytes(stats.size); sizeBytes: stats.size})} }) / Sort by size chunks.sort((a, b) => b.sizeBytes - a.sizeBytes)} return chunks} formatBytes(bytes) {" if (bytes === 0) return "0 Bytes" const k = 1024" const sizes = ["Bytes", "KB", "MB", "GB"] const i = Math.floor(Math.log(bytes) / Math.log(k))" return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]} analyzeImageOptimization() {" this.log(" Analyzing image optimization.")" const publicDir = path.join(this.projectRoot, "public") const analysis = {" totalImages: 0; unoptimizedImages: []; largeImages: []; imageFormats: {} } if (fs.existsSync(publicDir)) { this.analyzeDirectoryForImages(publicDir, analysis)} return analysis} analyzeDirectoryForImages(dir, analysis) {" const files = fs.readdirSync(dir, { withFileTypes: true }) files.forEach(file => { const filePath = path.join(dir, file.name) if (file.isDirectory()) { this.analyzeDirectoryForImages(filePath, analysis)} else if (this.isImageFile(file.name)) { this.analyzeImageFile(filePath, analysis)} })} isImageFile(filename) {" const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp", ".ico"] return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext))} analyzeImageFile(filePath, analysis) { try { const stats = fs.statSync(filePath) const size = stats.size const ext = path.extname(filePath).toLowerCase() analysis.totalImages+ / Track image formats analysis.imageFormats[ext] = (analysis.imageFormats[ext] | 0) + 1 / Check for large images (>500KB) if (size > 500 * 1024) {" analysis.largeImages.push({file: path.relative(this.projectRoot, filePath),size: this.formatBytes(size)})} / Check for unoptimized formats" if ([".jpg", ".jpeg", ".png"].includes(ext)) {" analysis.unoptimizedImages.push({file: path.relative(this.projectRoot, filePath),format: ext; size: this.formatBytes(size)})} } catch (error) {` this.log(` Error analyzing image ${filePath}: ${error.message}`)} } analyzeCodeSplitting() {" this.log(" Analyzing code splitting.")" const srcDir = path.join(this.projectRoot, "src")" const pagesDir = path.join(this.projectRoot, "pages")" const analysis = {dynamicImports: 0,lazyComponents: 0,largeComponents: []; potentialSplits: []} const directories = [srcDir, pagesDir].filter(dir => fs.existsSync(dir)) directories.forEach(dir => { this.analyzeDirectoryForSplitting(dir, analysis)}) return analysis} analyzeDirectoryForSplitting(dir, analysis) {" const files = fs.readdirSync(dir, { withFileTypes: true }) files.forEach(file => { const filePath = path.join(dir, file.name) if (file.isDirectory()) { this.analyzeDirectoryForSplitting(filePath, analysis)} else if (this.isCodeFile(file.name)) { this.analyzeFileForSplitting(filePath, analysis)} })} isCodeFile(filename) {" const codeExtensions = [".js", ".jsx", ".ts", ".tsx"] return codeExtensions.some(ext => filename.endsWith(ext))} analyzeFileForSplitting(filePath, analysis) { try {" const content = fs.readFileSync(filePath, "utf8")" const lines = content.split("\n").length / Count dynamic imports const dynamicImportMatches = content.match(/import\s*\(/g) if (dynamicImportMatches) { analysis.dynamicImports += dynamicImportMatches.length} / Count lazy components const lazyMatches = content.match(/React\.lazy|dynamic\(/g) if (lazyMatches) { analysis.lazyComponents += lazyMatches.length} / Identify large components that could be split" if (lines > 150 && content.includes("export default") && content.includes("function") | content.includes("const") && content.includes("=")) {" analysis.largeComponents.push({file: path.relative(this.projectRoot, filePath),lines: lines})} / Identify potential split opportunities" if (content.includes("import") && content.includes("from") && !content.includes("import(")) {" const importMatches = content.match(/import\s+.*\s+from\s+[""][^""]+[""]/g) if (importMatches && importMatches.length > 5) {" analysis.potentialSplits.push({file: path.relative(this.projectRoot, filePath),imports: importMatches.length})} } } catch (error) {` this.log(` Error analyzing file ${filePath}: ${error.message}`)} } generateOptimizationRecommendations(bundleAnalysis, imageAnalysis, splittingAnalysis) {" this.log(" Generating optimization recommendations.") const recommendations = [] / Bundle size recommendations if (bundleAnalysis.chunks.length > 0) { const largestChunks = bundleAnalysis.chunks.slice(0, 3) if (largestChunks.some(chunk => chunk.sizeBytes > 500 * 1024)) {" recommendations.push({type: "bundle-size",priority: "high",message: "Large JavaScript chunks detected. Consider code splitting and lazy loading."; details: largestChunks})} } / Image optimization recommendations if (imageAnalysis.largeImages.length > 0) { recommendations.push({" type: "image-optimization";" priority: "high";` message: `Found ${imageAnalysis.largeImages.length} large images. Consider compressing or converting to WebP format.`;" details: imageAnalysis.largeImages.slice(0, 5)})} if (imageAnalysis.unoptimizedImages.length > 0) { recommendations.push({" type: "image-optimization";" priority: "medium";` message: `Found ${imageAnalysis.unoptimizedImages.length} images in unoptimized formats. Consider using WebP or AVIF.`;" details: imageAnalysis.unoptimizedImages.slice(0, 5)})} / Code splitting recommendations if (splittingAnalysis.largeComponents.length > 0) { recommendations.push({" type: "code-splitting";" priority: "medium";` message: `Found ${splittingAnalysis.largeComponents.length} large components. Consider splitting them into smaller components.`;" details: splittingAnalysis.largeComponents.slice(0, 5)})} if (splittingAnalysis.potentialSplits.length > 0) { recommendations.push({" type: "code-splitting";" priority: "low";` message: `Found ${splittingAnalysis.potentialSplits.length} files with many imports. Consider dynamic imports for better code splitting.`;" details: splittingAnalysis.potentialSplits.slice(0, 5)})} return recommendations} async run() {" this.log(" Starting Performance Optimizer") const bundleAnalysis = this.analyzeBundleSize() const imageAnalysis = this.analyzeImageOptimization() const splittingAnalysis = this.analyzeCodeSplitting() const recommendations = this.generateOptimizationRecommendations(bundleAnalysis, imageAnalysis, splittingAnalysis)" const results = {timestamp: new Date().toISOString(),bundleAnalysis,imageAnalysis; splittingAnalysis; recommendations} / Generate report" const reportFile = path.join(this.reportsDir, "performance-optimization-report.json") fs.writeFileSync(reportFile, JSON.stringify(results, null, 2))"` this.log(` Performance optimization report generated: ${reportFile}`) / Print summary" console.log("\n Performance Analysis Summary: ")` console.log(` Total build size: ${bundleAnalysis.totalSize}`)"` console.log(` Total images: ${imageAnalysis.totalImages}`)"` console.log(` Dynamic imports: ${splittingAnalysis.dynamicImports}`)"` console.log(` Lazy components: ${splittingAnalysis.lazyComponents}`)"` console.log(` Optimization recommendations: ${recommendations.length}`) / Print high priority recommendations" const highPriority = recommendations.filter(r => r.priority === "high") if (highPriority.length > 0) {" console.log("\n High Priority Optimizations: ") highPriority.forEach(rec => {` console.log(` ${rec.message}`)})} return results}}/ Run the performance optimizerconst optimizer = new PerformanceOptimizer()optimizer.run().catch(console.error)""`"`
#!/usr/bin/env node;
const fs = require("child_process")
const path = require("child_process")
const { execSync } = require("child_process")
    this.reportsDir = path.join(this.projectRoot, "automation-reports")
    this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message) {
    const timestamp = new Date().toISOString()
    }
  analyzeBundleSize() {
    this.log("🔍 Analyzing bundle size...")
      fs.mkdirSync(this.reportsDir, { "recursive"})
    this.log(" Analyzing bundle size...")
    const buildDir = path.join(this.projectRoot, ".next")
    const analysis = {"buildExists": fs.existsSync(buildDir),"totalSize": 0,"staticSize"}
        const totalSizeOutput = execSync(`du -sh ${buildDir}`, { "encoding": "utf8"`})
        analysis.totalSize = totalSizeOutput.split("\t")
        const staticDir = path.join(buildDir, "static")
          const staticSizeOutput = execSync(`du -sh ${staticDir}`, { "encoding": "utf8"`})
          analysis.staticSize = staticSizeOutput.split("\t")
        const serverDir = path.join(buildDir, "server")
          const serverSizeOutput = execSync(`du -sh ${serverDir}`, { "encoding": "utf8"`})
          analysis.serverSize = serverSizeOutput.split("\t")
    const staticDir = path.join(buildDir, "static", "chunks")
        if (file.endsWith(".js")
          chunks.push({"name": file,"size"})
    if (bytes === 0) return "0 Bytes"
    const sizes = ["Bytes", "KB", "MB", "GB"]
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " "
    this.log(" Analyzing image optimization...")
    const publicDir = path.join(this.projectRoot, "public")
      "totalImages"
    const files = fs.readdirSync(dir, { "withFileTypes"})
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp", ".ico"]
        analysis.largeImages.push({"file": path.relative(this.projectRoot, filePath),"size"}
      if ([".jpg", ".jpeg", ".png")]
        analysis.unoptimizedImages.push({"file": path.relative(this.projectRoot, filePath),"format"}
    this.log(" Analyzing code splitting...")
    const srcDir = path.join(this.projectRoot, "src")
    const pagesDir = path.join(this.projectRoot, "pages")
    const analysis = {"dynamicImports": 0,"lazyComponents": 0,"largeComponents"}
    const files = fs.readdirSync(dir, { "withFileTypes"})
    const codeExtensions = [".js", ".jsx", ".ts", ".tsx"]
      const content = fs.readFileSync(filePath, "utf8")
      const lines = content.split("\n")
      if (lines > 150 && content.includes("export default") && content.includes("function") || content.includes("const") && content.includes("=")
        analysis.largeComponents.push({"file": path.relative(this.projectRoot, filePath),"lines"}
      if (content.includes("import") && content.includes("from") && !content.includes("import(")
        const importMatches = content.match(/import\s+.*\s+from\s+[""][^""]+["")]
          analysis.potentialSplits.push({"file": path.relative(this.projectRoot, filePath),"imports"}
    this.log(" Generating optimization recommendations...")
        recommendations.push({"type": "bundle-size","priority": "high","message": "Large JavaScript chunks detected. Consider code splitting and lazy loading."})
        "type": "image-optimization"
        priority: "high"
        "details"
        "type": "image-optimization"
        priority: "medium"
        "details"
        "type": "code-splitting"
        priority: "medium"
        "details"
        "type": "code-splitting"
        priority: "low"
        "details"
    this.log(" Starting Performance Optimizer")
    const results = {"timestamp"}
    const reportFile = path.join(this.reportsDir, "performance-optimization-report.json")
    fs.writeFileSync(reportFile, JSON.stringify(results, null, 2))
    this.log(`📊 Performance optimization report "generated": ${reportFile}`)
    // Print summary
    // Print high priority recommendations
    const highPriority = recommendations.filter(r => r.priority === "high")
    if (highPriority.length > 0) {
      highPriority.forEach(rec => {
        })}
    return results}
}
// Run the performance optimizer
const optimizer = new PerformanceOptimizer()
optimizer.run().catch(console.error)
    this.log(` Performance optimization report "generated"`)
// console.log("\n� Performance Analysis "Summary": ")
    console.log(`�  Total "images"`)
// console.log(`� Dynamic "imports"`)
    console.log(`⚡ Lazy "components"`)
    console.log(` Optimization "recommendations"`)
    const highPriority = recommendations.filter(r => r.priority === "high")
      console.log("\n� High Priority "Optimizations")
