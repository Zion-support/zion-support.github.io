#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,,"}),"}) fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🚀 Front Maximizer Started'),"}),"}) ,"}),"}) class FrontMaximizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.optimizations = [],"}),"}) this.issues = [],"}),"}) }"}),"}) ,"}),"}) async maximize() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.analyzeBuildConfig(),"}),"}) ,"}),"}) await this.analyzeBundleSize(),"}),"}) ,"}),"}) await this.analyzeCodeSplitting(),"}),"}) ,"}),"}) await this.analyzeAssetOptimization(),"}),"}) ,"}),"}) await this.generateReport(),"}),"}) ,"}),"}) ,"}) '),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during front maximization: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeBuildConfig() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) const viteConfigPath = path.join(this.projectRoot,vite.config.ts'),"}),"}) if (fs.existsSync(viteConfigPath)) {,"}),"}) const viteConfig = fs.readFileSync(viteConfigPath,utf8,"}),"}) '),"}),"}) ,"}),"}) if (!viteConfig.includes('build.rollupOptions,"}),"}) ')) {,"}),"}) this.optimizations.push('Add rollup options for better build optimization,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('build.chunkSizeWarningLimit,"}),"}) ')) {,"}),"}) this.optimizations.push('Set chunk size warning limits for better monitoring,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('build.rollupOptions.output.manualChunks,"}),"}) ')) {,"}),"}) this.optimizations.push('Implement manual chunk splitting for better caching,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('build.rollupOptions.output.assetFileNames,"}),"}) ')) {,"}),"}) this.optimizations.push('Configure asset file naming for better caching,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('server.hmr,"}),"}) ')) {,"}),"}) this.optimizations.push('Enable HMR for better development experience,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('preview.port,"}),"}) ')) {,"}),"}) this.optimizations.push('Configure preview port for testing,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } else {,"}),"}) this.issues.push('Vite configuration file not found,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze build config: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeBundleSize() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) const distPath = path.join(this.projectRoot,dist'),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const jsFiles = this.findFiles(distPath,.js,"}),"}) '),"}),"}) const cssFiles = this.findFiles(distPath,.css'),"}),"}) ,"}),"}) let totalJsSize = 0,"}),"}) let totalCssSize = 0,"}),"}) ,"}),"}) jsFiles.forEach(file => {,"}),"}) const stats = fs.statSync(file),"}),"}) totalJsSize += stats.size,"}),"}) ,"}),"}) const sizeMB = Math.round(stats.size / 1024 / 1024 * 100) / 100,"}),"}) if (sizeMB > 1) {,"}),"}) this.optimizations.push(`Large JS bundle detected: ${path.basename(file)} (${sizeMB}MB) - consider code splitting`),"}),"}) }"}),"}) }),"}),"}) ,"}),"}) cssFiles.forEach(file => {,"}),"}) const stats = fs.statSync(file),"}),"}) totalCssSize += stats.size,"}),"}) ,"}),"}) const sizeKB = Math.round(stats.size / 1024 * 100) / 100,"}),"}) if (sizeKB > 100) {,"}),"}) this.optimizations.push(`Large CSS bundle detected: ${path.basename(file)} (${sizeKB}KB) - consider purging unused styles`),"}),"}) }"}),"}) }),"}),"}) ,"}),"}) const totalSizeMB = Math.round((totalJsSize + totalCssSize) / 1024 / 1024 * 100) / 100,"}),"}) if (totalSizeMB > 5) {,"}),"}) this.optimizations.push(`Total bundle size is ${totalSizeMB}MB - consider aggressive optimization`),"}),"}) }"}),"}) ,"}),"}) }KB,CSS ${Math.round(totalCssSize / 1024)}KB`),"}),"}) ,"}),"}) } else {,"}),"}) this.optimizations.push(,"}),"}) 'Build directory not found - run build first to analyze bundle size'),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze bundle size: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeCodeSplitting() {,"}),"}) try {,"}),"}) ,"}) '🔀 Analyzing code splitting...'),"}),"}) ,"}),"}) const distPath = path.join(this.projectRoot,dist,"}),"}) '),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const jsFiles = this.findFiles(distPath,.js'),"}),"}) ,"}),"}) if (jsFiles.length <= 2) {,"}),"}) this.optimizations.push(,"}),"}) 'Consider implementing code splitting to reduce initial bundle size'),"}),"}) } else {,"}),"}) ,"}),"}) }"}),"}) ,"}),"}) const vendorChunks = jsFiles.filter(file =>,"}),"}) path.basename(file).includes(,"}),"}) 'vendor') ||,"}),"}) path.basename(file).includes(,"}),"}) 'chunk'),"}),"}) ),"}),"}) ,"}),"}) if (vendorChunks.length === 0) {,"}),"}) this.optimizations.push(,"}),"}) 'Consider separating vendor dependencies into separate chunks'),"}),"}) }"}),"}) ,"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze code splitting: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeAssetOptimization() {,"}),"}) try {,"}),"}) ,"}) 🖼️ Analyzing asset optimization...'),"}),"}) ,"}),"}) const distPath = path.join(this.projectRoot,dist,"}),"}) '),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const assetFiles = this.findFiles(distPath,['.png,"}),"}) ',.jpg',.jpeg,"}),"}) ',.gif',.svg,"}),"}) ',.webp']),"}),"}) ,"}),"}) let totalAssetSize = 0,"}),"}) const largeAssets = [],"}),"}) ,"}),"}) assetFiles.forEach(file => {,"}),"}) const stats = fs.statSync(file),"}),"}) totalAssetSize += stats.size,"}),"}) ,"}),"}) const sizeKB = Math.round(stats.size / 1024 * 100) / 100,"}),"}) if (sizeKB > 500) {,"}),"}) largeAssets.push(`${path.basename(file)} (${sizeKB}KB)`),"}),"}) }"}),"}) }),"}),"}) ,"}),"}) if (largeAssets.length > 0) {,"}),"}) this.optimizations.push(`Large assets detected: ${largeAssets.join(,)} - consider compression or format conversion`),"}),"}) }"}),"}) ,"}),"}) const imageFiles = assetFiles.filter(file =>,"}),"}) ['.png,"}),"}) ',.jpg',.jpeg,"}),"}) ',.gif'].some(ext => file.endsWith(ext)),"}),"}) ),"}),"}) ,"}),"}) if (imageFiles.length > 0) {,"}),"}) this.optimizations.push(,"}),"}) 'Consider converting images to WebP format for better compression'),"}),"}) this.optimizations.push(,"}),"}) 'Implement lazy loading for images below the fold'),"}),"}) }"}),"}) ,"}),"}) const fontFiles = this.findFiles(distPath,[,"}),"}) '.woff',.woff2,"}),"}) ',.ttf',.otf,"}),"}) ']),"}),"}) if (fontFiles.length > 0) {,"}),"}) this.optimizations.push('Consider using WOFF2 format for better font compression,"}),"}) '),"}),"}) this.optimizations.push('Implement font display swap for better performance,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze asset optimization: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(dir,extensions) {,"}),"}) const files = [],"}),"}) const extArray = Array.isArray(extensions) ? extensions : [extensions],"}),"}) ,"}),"}) const scanDirectory = (scanDir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(scanDir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(scanDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && extArray.some(ext => item.endsWith(ext))) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(dir),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) async generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) optimizations: this.optimizations.length,,"}),"}) issues: this.issues.length,"}),"}) },,"}),"}) optimizations: this.optimizations,,"}),"}) issues: this.issues,,"}),"}) recommendations: this.generateRecommendations(),"}),"}) },"}),"}) ,"}),"}) const reportPath = path.join(this.projectRoot,logs,"}),"}) ',front-maximizer-report.json'),"}),"}) try {,"}),"}) fs.writeFileSync(reportPath,JSON.stringify(report,null,2)),"}),"}) ,"}),"}) } catch (error) {,"}),"}) ,"}) '⚠️ Could not save report: ,"}),"}) ,error.message),"}),"}) }"}),"}) ,"}),"}) ,"}) '\n📋 Front Maximizer Summary: '),"}),"}) ,"}) '─.repeat(50)),"}),"}) ,"}),"}) if (this.optimizations.length > 0) {,"}),"}) ,"}),"}) this.optimizations.forEach((optimization,index) => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) '🎉 No optimization opportunities found!'),"}),"}) }"}),"}) ,"}),"}) if (this.issues.length > 0) {,"}),"}) ,"}),"}) this.issues.forEach((issue,index) => {,"}),"}) ,"}),"}) }),"}),"}) }"}),"}) ,"}),"}) ,"}) '─'.repeat(50)),"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.optimizations.length > 0) {,"}),"}) recommendations.push(,"}),"}) 'Implement code splitting for better performance'),"}),"}) recommendations.push(,"}),"}) 'Optimize images and convert to modern formats'),"}),"}) recommendations.push(,"}),"}) 'Configure build optimizations in Vite'),"}),"}) recommendations.push(,"}),"}) 'Implement lazy loading for non-critical resources'),"}),"}) recommendations.push(,"}),"}) 'Consider using a CDN for static assets'),"}),"}) } else {,"}),"}) recommendations.push(,"}),"}) 'Continue monitoring for optimization opportunities'),"}),"}) recommendations.push(,"}),"}) 'Regularly review bundle sizes and performance'),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const maximizer = new FrontMaximizer(),"}),"}) maximizer.maximize().then(() => {,"}),"}) ,"}) '🚀 Front Maximizer Completed'),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error(,"}),"}) '❌ Front Maximizer Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) fs'; import path from "pathpath'; import { fileURLToPath } from "urlurl'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename);  class FrontMaximizer {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.optimizations = []; this.issues = []} async maximize() { try {'  await this.analyzeBuildConfig(); await this.analyzeBundleSize(); await this.analyzeCodeSplitting(); await this.analyzeAssetOptimization(); await this.generateReport(); } catch (error) {' console.error('❌ Error during front maximization: error.message)} } async analyzeBuildConfig() { try {'  const viteConfigPath = path.join(this.projectRoot,vite.config.ts'); if (fs.existsSync(viteConfigPath)) {; const viteConfig = fs.readFileSync(viteConfigPath,utf8';); if (!viteConfig.includes('build.rollupOptions';)) {' this.optimizations.push('Add rollup options for better build optimization';)} if (!viteConfig.includes('build.chunkSizeWarningLimit';)) {' this.optimizations.push('Set chunk size warning limits for better monitoring';)} if (!viteConfig.includes('build.rollupOptions.output.manualChunks';)) {' this.optimizations.push('Implement manual chunk splitting for better caching';)} if (!viteConfig.includes('build.rollupOptions.output.assetFileNames';)) {' this.optimizations.push('Configure asset file naming for better caching';)} if (!viteConfig.includes('server.hmr';)) {' this.optimizations.push('Enable HMR for better development experience';)} if (!viteConfig.includes('preview.port';)) {' this.optimizations.push('Configure preview port for testing';)} } else {' this.issues.push('Vite configuration file not found';)} } catch (error) {' this.issues.push(`Could not analyze build config: ${error.message}`)} } async analyzeBundleSize() { try {`  const distPath = path.join(this.projectRoot,dist'); if (fs.existsSync(distPath)) {; const jsFiles = this.findFiles(distPath,.js';); const cssFiles = this.findFiles(distPath,.css'); let totalJsSize = 0; let totalCssSize = 0; jsFiles.forEach(file => {; const stats = fs.statSync(file); totalJsSize += stats.size; const sizeMB = Math.round(stats.size / 1024 / 1024 * 100) / 100; if (sizeMB > 1) {' this.optimizations.push(`Large JS bundle detected: ${path.basename(file)} (${sizeMB}MB) - consider code splitting`)} }); cssFiles.forEach(file => {; const stats = fs.statSync(file); totalCssSize += stats.size; const sizeKB = Math.round(stats.size / 1024 * 100) / 100; if (sizeKB > 100) {` this.optimizations.push(`Large CSS bundle detected: ${path.basename(file)} (${sizeKB}KB) - consider purging unused styles`)} }); const totalSizeMB = Math.round((totalJsSize + totalCssSize) / 1024 / 1024 * 100) / 100; if (totalSizeMB > 5) {` this.optimizations.push(`Total bundle size is ${totalSizeMB}MB - consider aggressive optimization`)}` }KB,CSS ${Math.round(totalCssSize / 1024)}KB`)} else { this.optimizations.push(` 'Build directory not found - run build first to analyze bundle size')} } catch (error) {' this.issues.push(`Could not analyze bundle size: ${error.message}`)} } async: analyzeCodeSplitting() { try {
#!/usr/bin/env node,"}),"})
/**,"}),"})
 * Front Maximizer Script,"}),"})
 * Optimizes frontend performance and assets,"}),"})
 */,"}),"})
import fs from,,"}),"})
  fs',"}),"})
import path from,"}),"})
  'path',"}),"})
import { fileURLToPath } from,"}),"})
  'url',"}),"})
,"}),"})
const __filename = fileURLToPath(import && import.meta.url),"}),"})
const __dirname = path && path.dirname(__filename),"}),"})
,"}),"})
console && console.log(,"}),"})
  '🚀 Front Maximizer Started'),"}),"})
,"}),"})
class FrontMaximizer {,"}),"})
  constructor() {,"}),"})
    this && this.projectRoot = path && path.resolve(__dirname,..,"}),"})
  '),"}),"})
    this && this.optimizations = [],"}),"})
    this && this.issues = [],"}),"})
  }"}),"})
,"}),"})
  async maximize() {,"}),"})
    try {,"}),"})
      console && console.log('🔍 Analyzing frontend for optimization opportunities...,"}),"})
  '),"}),"})
,"}),"})
      // Analyze build configuration,"}),"})
      await this && this.analyzeBuildConfig(),"}),"})
,"}),"})
      // Analyze bundle size,"}),"})
      await this && this.analyzeBundleSize(),"}),"})
,"}),"})
      // Analyze code splitting,"}),"})
      await this && this.analyzeCodeSplitting(),"}),"})
,"}),"})
      // Analyze asset optimization,"}),"})
      await this && this.analyzeAssetOptimization(),"}),"})
,"}),"})
      // Generate optimization report,"}),"})
      await this && this.generateReport(),"}),"})
,"}),"})
      console && console.log('✅ Front maximizer analysis completed,"}),"})
  '),"}),"})
,"}),"})
    } catch (error) {,"}),"})
      console && console.error('❌ Error during front "maximization": error && error.message),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async analyzeBuildConfig() {,"}),"})
    try {,"}),"})
      console && console.log('⚙️  Analyzing build configuration...,"}),"})
  '),"}),"})
,"}),"})
      const viteConfigPath = path && path.join(this && this.projectRoot,vite && vite.config.ts'),"}),"})
      if (fs && fs.existsSync(viteConfigPath)) {,"}),"})
        const viteConfig = fs && fs.readFileSync(viteConfigPath,utf8,"}),"})
  '),"}),"})
,"}),"})
        // Check for build optimizations,"}),"})
        if (!viteConfig && viteConfig.includes('build && build.rollupOptions,"}),"})
  ')) {,"}),"})
          this && this.optimizations.push('Add rollup options for better build optimization,"}),"})
  '),"}),"})
        }"}),"})
,"}),"})
        if (!viteConfig && viteConfig.includes('build && build.chunkSizeWarningLimit,"}),"})
  ')) {,"}),"})
          this && this.optimizations.push('Set chunk size warning limits for better monitoring,"}),"})
  '),"}),"})
        }"}),"})
,"}),"})
        if (!viteConfig && viteConfig.includes('build && build.rollupOptions.output && output.manualChunks,"}),"})
  ')) {,"}),"})
          this && this.optimizations.push('Implement manual chunk splitting for better caching,"}),"})
  '),"}),"})
        }"}),"})
,"}),"})
        if (!viteConfig && viteConfig.includes('build && build.rollupOptions.output && output.assetFileNames,"}),"})
  ')) {,"}),"})
          this && this.optimizations.push('Configure asset file naming for better caching,"}),"})
  '),"}),"})
        }"}),"})
,"}),"})
        // Check for development optimizations,"}),"})
        if (!viteConfig && viteConfig.includes('server && server.hmr,"}),"})
  ')) {,"}),"})
          this && this.optimizations.push('Enable HMR for better development experience,"}),"})
  '),"}),"})
        }"}),"})
,"}),"})
        if (!viteConfig && viteConfig.includes('preview && preview.port,"}),"})
  ')) {,"}),"})
          this && this.optimizations.push('Configure preview port for testing,"}),"})
  '),"}),"})
        }"}),"})
,"}),"})
      } else {,"}),"})
        this && this.issues.push('Vite configuration file not found,"}),"})
  '),"}),"})
      }"}),"})
,"}),"})
    } catch (error) {,"}),"})
      this && this.issues.push(`Could not analyze build "config": ${error && error.message}`),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async analyzeBundleSize() {,"}),"})
    try {,"}),"})
      console && console.log('📦 Analyzing bundle size...,"}),"})
  '),"}),"})
,"}),"})
      const distPath = path && path.join(this && this.projectRoot,dist'),"}),"})
      if (fs && fs.existsSync(distPath)) {,"}),"})
        const jsFiles = this && this.findFiles(distPath,.js,"}),"})
  '),"}),"})
        const cssFiles = this && this.findFiles(distPath,.css'),"}),"})
,"}),"})
        let totalJsSize = 0,"}),"})
        let totalCssSize = 0,"}),"})
,"}),"})
        // Calculate JavaScript bundle sizes,"}),"})
        jsFiles && jsFiles.forEach(file => {,"}),"})
          const stats = fs && fs.statSync(file),"}),"})
          totalJsSize += stats && stats.size,"}),"})
,"}),"})
          const sizeMB = Math && Math.round(stats && stats.size / 1024 / 1024 * 100) / 100,"}),"})
          if (sizeMB > 1) {,"}),"})
            this && this.optimizations.push(`Large JS bundle "detected": ${path && path.basename(file)} (${sizeMB}MB) - consider code splitting`),"}),"})
          }"}),"})
        }),"}),"})
,"}),"})
        // Calculate CSS bundle sizes,"}),"})
        cssFiles && cssFiles.forEach(file => {,"}),"})
          const stats = fs && fs.statSync(file),"}),"})
          totalCssSize += stats && stats.size,"}),"})
,"}),"})
          const sizeKB = Math && Math.round(stats && stats.size / 1024 * 100) / 100,"}),"})
          if (sizeKB > 100) {,"}),"})
            this && this.optimizations.push(`Large CSS bundle "detected": ${path && path.basename(file)} (${sizeKB}KB) - consider purging unused styles`),"}),"})
          }"}),"})
        }),"}),"})
,"}),"})
        // Overall bundle analysis,"}),"})
        const totalSizeMB = Math && Math.round((totalJsSize + totalCssSize) / 1024 / 1024 * 100) / 100,"}),"})
        if (totalSizeMB > 5) {,"}),"})
          this && this.optimizations.push(`Total bundle size is ${totalSizeMB}MB - consider aggressive optimization`),"}),"})
        }"}),"})
,"}),"})
        console && console.log(`📊 Bundle "sizes": JS ${Math && Math.round(totalJsSize / 1024)}KB, CSS ${Math && Math.round(totalCssSize / 1024)}KB`),"}),"})
,"}),"})
      } else {,"}),"})
        this && this.optimizations.push(,"}),"})
  'Build directory not found - run build first to analyze bundle size'),"}),"})
      }"}),"})
,"}),"})
    } catch (error) {,"}),"})
      this && this.issues.push(`Could not analyze bundle "size": ${error && error.message}`),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async analyzeCodeSplitting() {,"}),"})
    try {,"}),"})
      console && console.log(,"}),"})
  '🔀 Analyzing code splitting...'),"}),"})
,"}),"})
      const distPath = path && path.join(this && this.projectRoot,dist,"}),"})
  '),"}),"})
      if (fs && fs.existsSync(distPath)) {,"}),"})
        const jsFiles = this && this.findFiles(distPath,.js'),"}),"})
,"}),"})
        if (jsFiles && jsFiles.length <= 2) {,"}),"})
          this && this.optimizations.push(,"}),"})
  'Consider implementing code splitting to reduce initial bundle size'),"}),"})
        } else {,"}),"})
          console && console.log(`✅ Code splitting "detected": ${jsFiles && jsFiles.length} JavaScript chunks`),"}),"})
        }"}),"})
,"}),"})
        // Check for vendor chunks,"}),"})
        const vendorChunks = jsFiles && jsFiles.filter(file =>,"}),"})
          path && path.basename(file).includes(,"}),"})
  'vendor') ||,"}),"})
          path && path.basename(file).includes(,"}),"})
  'chunk'),"}),"})
        ),"}),"})
,"}),"})
        if (vendorChunks && vendorChunks.length === 0) {,"}),"})
          this && this.optimizations.push(,"}),"})
  'Consider separating vendor dependencies into separate chunks'),"}),"})
        }"}),"})
,"}),"})
      }"}),"})
,"}),"})
    } catch (error) {,"}),"})
      this && this.issues.push(`Could not analyze code "splitting": ${error && error.message}`),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async analyzeAssetOptimization() {,"}),"})
    try {,"}),"})
      console && console.log(,,"}),"})
  🖼️  Analyzing asset optimization...'),"}),"})
,"}),"})
      const distPath = path && path.join(this && this.projectRoot,dist,"}),"})
  '),"}),"})
      if (fs && fs.existsSync(distPath)) {,"}),"})
        const assetFiles = this && this.findFiles(distPath, ['.png,"}),"})
  ',.jpg',.jpeg,"}),"})
  ',.gif',.svg,"}),"})
  ',.webp']),"}),"})
,"}),"})
        let totalAssetSize = 0,"}),"})
        const largeAssets = [],"}),"})
,"}),"})
        assetFiles && assetFiles.forEach(file => {,"}),"})
          const stats = fs && fs.statSync(file),"}),"})
          totalAssetSize += stats && stats.size,"}),"})
,"}),"})
          const sizeKB = Math && Math.round(stats && stats.size / 1024 * 100) / 100,"}),"})
          if (sizeKB > 500) {,"}),"})
            largeAssets && largeAssets.push(`${path && path.basename(file)} (${sizeKB}KB)`),"}),"})
          }"}),"})
        }),"}),"})
,"}),"})
        if (largeAssets && largeAssets.length > 0) {,"}),"})
          this && this.optimizations.push(`Large assets "detected": ${largeAssets && largeAssets.join()} - consider compression or format conversion`),"}),"})
        }"}),"})
,"}),"})
        // Check for image optimization,"}),"})
        const imageFiles = assetFiles && assetFiles.filter(file =>,"}),"})
          ['.png,"}),"})
  ',.jpg',.jpeg,"}),"})
  ',.gif'].some(ext => file && file.endsWith(ext)),"}),"})
        ),"}),"})
,"}),"})
        if (imageFiles && imageFiles.length > 0) {,"}),"})
          this && this.optimizations.push(,"}),"})
  'Consider converting images to WebP format for better compression'),"}),"})
          this && this.optimizations.push(,"}),"})
  'Implement lazy loading for images below the fold'),"}),"})
        }"}),"})
,"}),"})
        // Check for font optimization,"}),"})
        const fontFiles = this && this.findFiles(distPath, [,"}),"})
  '.woff',.woff2,"}),"})
  ',.ttf',.otf,"}),"})
  ']),"}),"})
        if (fontFiles && fontFiles.length > 0) {,"}),"})
          this && this.optimizations.push('Consider using WOFF2 format for better font compression,"}),"})
  '),"}),"})
          this && this.optimizations.push('Implement font display swap for better performance,"}),"})
  '),"}),"})
        }"}),"})
,"}),"})
      }"}),"})
,"}),"})
    } catch (error) {,"}),"})
      this && this.issues.push(`Could not analyze asset "optimization": ${error && error.message}`),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  findFiles(dir, extensions) {,"}),"})
    const files = [],"}),"})
    const extArray = Array && Array.isArray(extensions) ? extensions : [extensions],"}),"})
,"}),"})
    const scanDirectory = (scanDir) => {,"}),"})
      try {,"}),"})
        const items = fs && fs.readdirSync(scanDir),"}),"})
,"}),"})
        for (const item of items) {,"}),"})
          const fullPath = path.join(scanDir, item),"}),"})
          const stat = fs.statSync(fullPath),"}),"})
          const fullPath = path && path.join(scanDir, item),"}),"})
          const stat = fs && fs.statSync(fullPath),"}),"})
,"}),"})
          if (stat && stat.isDirectory()) {,"}),"})
            scanDirectory(fullPath),"}),"})
          } else if (stat && stat.isFile() && extArray && extArray.some(ext => item && item.endsWith(ext))) {,"}),"})
            files && files.push(fullPath),"}),"})
          }"}),"})
        }"}),"})
      } catch (error) {,"}),"})
        // Skip directories we can't read,"}),"})
      }"}),"})
    },"}),"})
,"}),"})
    scanDirectory(dir),"}),"})
    return files,"}),"})
  }"}),"})
,"}),"})
  async generateReport() {,"}),"})
    const report = {,"}),"})
      "timestamp": new Date().toISOString(),,"}),"})
      "summary": {,"}),"})
        "optimizations": this && this.optimizations.length,,"}),"})
        "issues": this && this.issues.length,"}),"})
      },,"}),"})
      "optimizations": this && this.optimizations,,"}),"})
      "issues": this && this.issues,,"}),"})
      "recommendations": this && this.generateRecommendations(),"}),"})
    },"}),"})
,"}),"})
    // Save report to file,"}),"})
    const reportPath = path && path.join(this && this.projectRoot,logs,"}),"})
  ',front-maximizer-report && report.json'),"}),"})
    try {,"}),"})
      fs && fs.writeFileSync(reportPath, JSON && JSON.stringify(report, null, 2)),"}),"})
      console && console.log(`📊 Report saved "to": ${reportPath}`),"}),"})
    } catch (error) {,"}),"})
      console && console.warn(,"}),"})
  '⚠️  Could not save "report":  ,"}),"})
  , error && error.message),"}),"})
    }"}),"})
,"}),"})
    // Display summary,"}),"})
    console && console.log(,"}),"})
  '\n📋 Front Maximizer "Summary": '),"}),"})
    console && console.log(,"}),"})
  '─.repeat(50)),"}),"})
,"}),"})
    if (this && this.optimizations.length > 0) {,"}),"})
      console && console.log(`💡 ${this && this.optimizations.length} optimization "opportunities": `),"}),"})
      this && this.optimizations.forEach((optimization, index) => {,"}),"})
        console && console.log(`   ${index + 1}. ${optimization}`),"}),"})
      }),"}),"})
    } else {,"}),"})
      console && console.log(,"}),"})
  '🎉 No optimization opportunities found!'),"}),"})
    }"}),"})
,"}),"})
    if (this && this.issues.length > 0) {,"}),"})
      console && console.log(`\n⚠️  ${this && this.issues.length} issues "encountered": `),"}),"})
      this && this.issues.forEach((issue, index) => {,"}),"})
        console && console.log(`   ${index + 1}. ${issue}`),"}),"})
      }),"}),"})
    }"}),"})
,"}),"})
    console && console.log(,"}),"})
  '─'.repeat(50)),"}),"})
  }"}),"})
,"}),"})
  generateRecommendations() {,"}),"})
    const recommendations = [],"}),"})
,"}),"})
    if (this && this.optimizations.length > 0) {,"}),"})
      recommendations && recommendations.push(,"}),"})
  'Implement code splitting for better performance'),"}),"})
      recommendations && recommendations.push(,"}),"})
  'Optimize images and convert to modern formats'),"}),"})
      recommendations && recommendations.push(,"}),"})
  'Configure build optimizations in Vite'),"}),"})
      recommendations && recommendations.push(,"}),"})
  'Implement lazy loading for non-critical resources'),"}),"})
      recommendations && recommendations.push(,"}),"})
  'Consider using a CDN for static assets'),"}),"})
    } else {,"}),"})
      recommendations && recommendations.push(,"}),"})
  'Continue monitoring for optimization opportunities'),"}),"})
      recommendations && recommendations.push(,"}),"})
  'Regularly review bundle sizes and performance'),"}),"})
    }"}),"})
,"}),"})
    return recommendations,"}),"})
  }"}),"})
}"}),"})
,"}),"})
// Run the front maximizer,"}),"})
const maximizer = new FrontMaximizer(),"}),"})
maximizer && maximizer.maximize().then(() => {,"}),"})
  console && console.log(,"}),"})
  '🚀 Front Maximizer Completed'),"}),"})
  process && process.exit(0),"}),"})
}).catch((error) => {,"}),"})
  console && console.error(,"}),"})
  '❌ Front Maximizer "Failed": ', error),"}),"})
  process.exit(1),"}),"})
}),"}),"})
  fs';
import path from "pathpath';
import {fileURLToPath} from "urlurl';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(',
  process ;
import path from "pathpath';
import {fileURLToPath} from "urlurl';
const __filename = fileURLToPath(import && import.meta.url);
const __dirname = path && path.dirname(__filename);
console && console.log(',
      '🚀 Front Maximizer Started');
class FrontMaximizer {;
  constructor() {;
    this && this.projectRoot = path && path.resolve(__dirname,..';);
    this && this.optimizations = [];
    this && this.issues = []}
  async maximize() {
    try {'
      console && console.log('🔍 Analyzing frontend for optimization opportunities...';);
      // Analyze build configuration;
      await this && this.analyzeBuildConfig();
      // Analyze bundle size;
      await this && this.analyzeBundleSize();
      // Analyze code splitting;
      await this && this.analyzeCodeSplitting();
      // Analyze asset optimization;
      await this && this.analyzeAssetOptimization();
      // Generate optimization report;
      await this && this.generateReport();
      console && console.log('✅ Front maximizer analysis completed';)} catch (error) {'
      console && console.error('❌ Error during front "maximization": error && error.message)}
  }
  async analyzeBuildConfig() {
    try {'
      console && console.log('⚙️  Analyzing build configuration...';);
      const viteConfigPath = path && path.join(this && this.projectRoot,vite && vite.config.ts');
      if (fs && fs.existsSync(viteConfigPath)) {;
        const viteConfig = fs && fs.readFileSync(viteConfigPath,utf8';);
        // Check for build optimizations;
        if (!viteConfig && viteConfig.includes('build && build.rollupOptions';)) {'
          this && this.optimizations.push('Add rollup options for better build optimization';)}
        if (!viteConfig && viteConfig.includes('build && build.chunkSizeWarningLimit';)) {'
          this && this.optimizations.push('Set chunk size warning limits for better monitoring';)}
        if (!viteConfig && viteConfig.includes('build && build.rollupOptions.output && output.manualChunks';)) {'
          this && this.optimizations.push('Implement manual chunk splitting for better caching';)}
        if (!viteConfig && viteConfig.includes('build && build.rollupOptions.output && output.assetFileNames';)) {'
          this && this.optimizations.push('Configure asset file naming for better caching';)}
        // Check for development optimizations;
        if (!viteConfig && viteConfig.includes('server && server.hmr';)) {'
          this && this.optimizations.push('Enable HMR for better development experience';)}
        if (!viteConfig && viteConfig.includes('preview && preview.port';)) {'
          this && this.optimizations.push('Configure preview port for testing';)}
      } else {'
        this && this.issues.push('Vite configuration file not found';)}
    } catch (error) {'
      this && this.issues.push(`Could not analyze build "config": ${error && error.message}`)}
  }
  async analyzeBundleSize() {
    try {"
      console && console.log('📦 Analyzing bundle size...';);
      const distPath = path && path.join(this && this.projectRoot,dist');
      if (fs && fs.existsSync(distPath)) {;
        const jsFiles = this && this.findFiles(distPath,.js';);
        const cssFiles = this && this.findFiles(distPath,.css');
        let totalJsSize = 0;
        let totalCssSize = 0;
        // Calculate JavaScript bundle sizes;
        jsFiles && jsFiles.forEach(file => {;
          const stats = fs && fs.statSync(file);
          totalJsSize += stats && stats.size;
          const sizeMB = Math && Math.round(stats && stats.size / 1024 / 1024 * 100) / 100;
          if (sizeMB > 1) {'
            this && this.optimizations.push("Large JS bundle "detected": ${path && path.basename(file)} (${sizeMB}MB) - consider code splitting")}
        });
        // Calculate CSS bundle sizes;
        cssFiles && cssFiles.forEach(file => {;
          const stats = fs && fs.statSync(file);
          totalCssSize += stats && stats.size;
          const sizeKB = Math && Math.round(stats && stats.size / 1024 * 100) / 100;
          if (sizeKB > 100) {"
            this && this.optimizations.push(`Large CSS bundle "detected": ${path && path.basename(file)} (${sizeKB}KB) - consider purging unused styles`)}
        });
        // Overall bundle analysis;
        const totalSizeMB = Math && Math.round((totalJsSize + totalCssSize) / 1024 / 1024 * 100) / 100;
        if (totalSizeMB > 5) {"
          this && this.optimizations.push("Total bundle size is ${totalSizeMB}MB - consider aggressive optimization")}"
        console && console.log(`📊 Bundle "sizes": JS ${Math && Math.round(totalJsSize / 1024)}KB, CSS ${Math && Math.round(totalCssSize / 1024)}KB`)} else {
        this && this.optimizations.push("
  'Build directory not found - run build first to analyze bundle size')}
    } catch (error) {'
      this && this.issues.push("Could not analyze bundle "size": ${error && error.message}`)}
  }
  "async": analyzeCodeSplitting() {
    try {
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,,"}),"}) fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Front Maximizer Started'),"}),"}) ,"}),"}) class FrontMaximizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.optimizations = [],"}),"}) this.issues = [],"}),"}) }"}),"}) ,"}),"}) async maximize() {,"}),"}) try {,"}),"}) console.log('🔍 Analyzing frontend for optimization opportunities...,"}),"}) '),"}),"}) ,"}),"}) await this.analyzeBuildConfig(),"}),"}) ,"}),"}) await this.analyzeBundleSize(),"}),"}) ,"}),"}) await this.analyzeCodeSplitting(),"}),"}) ,"}),"}) await this.analyzeAssetOptimization(),"}),"}) ,"}),"}) await this.generateReport(),"}),"}) ,"}),"}) console.log('✅ Front maximizer analysis completed,"}),"}) '),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during front maximization: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeBuildConfig() {,"}),"}) try {,"}),"}) console.log('⚙️ Analyzing build configuration...,"}),"}) '),"}),"}) ,"}),"}) const viteConfigPath = path.join(this.projectRoot,vite.config.ts'),"}),"}) if (fs.existsSync(viteConfigPath)) {,"}),"}) const viteConfig = fs.readFileSync(viteConfigPath,utf8,"}),"}) '),"}),"}) ,"}),"}) if (!viteConfig.includes('build.rollupOptions,"}),"}) ')) {,"}),"}) this.optimizations.push('Add rollup options for better build optimization,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('build.chunkSizeWarningLimit,"}),"}) ')) {,"}),"}) this.optimizations.push('Set chunk size warning limits for better monitoring,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('build.rollupOptions.output.manualChunks,"}),"}) ')) {,"}),"}) this.optimizations.push('Implement manual chunk splitting for better caching,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('build.rollupOptions.output.assetFileNames,"}),"}) ')) {,"}),"}) this.optimizations.push('Configure asset file naming for better caching,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('server.hmr,"}),"}) ')) {,"}),"}) this.optimizations.push('Enable HMR for better development experience,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('preview.port,"}),"}) ')) {,"}),"}) this.optimizations.push('Configure preview port for testing,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } else {,"}),"}) this.issues.push('Vite configuration file not found,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze build config: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeBundleSize() {,"}),"}) try {,"}),"}) console.log('📦 Analyzing bundle size...,"}),"}) '),"}),"}) ,"}),"}) const distPath = path.join(this.projectRoot,dist'),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const jsFiles = this.findFiles(distPath,.js,"}),"}) '),"}),"}) const cssFiles = this.findFiles(distPath,.css'),"}),"}) ,"}),"}) let totalJsSize = 0,"}),"}) let totalCssSize = 0,"}),"}) ,"}),"}) jsFiles.forEach(file => {,"}),"}) const stats = fs.statSync(file),"}),"}) totalJsSize += stats.size,"}),"}) ,"}),"}) const sizeMB = Math.round(stats.size / 1024 / 1024 * 100) / 100,"}),"}) if (sizeMB > 1) {,"}),"}) this.optimizations.push(`Large JS bundle detected: ${path.basename(file)} (${sizeMB}MB) - consider code splitting`),"}),"}) }"}),"}) }),"}),"}) ,"}),"}) cssFiles.forEach(file => {,"}),"}) const stats = fs.statSync(file),"}),"}) totalCssSize += stats.size,"}),"}) ,"}),"}) const sizeKB = Math.round(stats.size / 1024 * 100) / 100,"}),"}) if (sizeKB > 100) {,"}),"}) this.optimizations.push(`Large CSS bundle detected: ${path.basename(file)} (${sizeKB}KB) - consider purging unused styles`),"}),"}) }"}),"}) }),"}),"}) ,"}),"}) const totalSizeMB = Math.round((totalJsSize + totalCssSize) / 1024 / 1024 * 100) / 100,"}),"}) if (totalSizeMB > 5) {,"}),"}) this.optimizations.push(`Total bundle size is ${totalSizeMB}MB - consider aggressive optimization`),"}),"}) }"}),"}) ,"}),"}) console.log(`📊 Bundle sizes: JS ${Math.round(totalJsSize / 1024)}KB,CSS ${Math.round(totalCssSize / 1024)}KB`),"}),"}) ,"}),"}) } else {,"}),"}) this.optimizations.push(,"}),"}) 'Build directory not found - run build first to analyze bundle size'),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze bundle size: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeCodeSplitting() {,"}),"}) try {,"}),"}) console.log(,"}),"}) '🔀 Analyzing code splitting...'),"}),"}) ,"}),"}) const distPath = path.join(this.projectRoot,dist,"}),"}) '),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const jsFiles = this.findFiles(distPath,.js'),"}),"}) ,"}),"}) if (jsFiles.length <= 2) {,"}),"}) this.optimizations.push(,"}),"}) 'Consider implementing code splitting to reduce initial bundle size'),"}),"}) } else {,"}),"}) console.log(`✅ Code splitting detected: ${jsFiles.length} JavaScript chunks`),"}),"}) }"}),"}) ,"}),"}) const vendorChunks = jsFiles.filter(file =>,"}),"}) path.basename(file).includes(,"}),"}) 'vendor') ||,"}),"}) path.basename(file).includes(,"}),"}) 'chunk'),"}),"}) ),"}),"}) ,"}),"}) if (vendorChunks.length === 0) {,"}),"}) this.optimizations.push(,"}),"}) 'Consider separating vendor dependencies into separate chunks'),"}),"}) }"}),"}) ,"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze code splitting: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeAssetOptimization() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 🖼️ Analyzing asset optimization...'),"}),"}) ,"}),"}) const distPath = path.join(this.projectRoot,dist,"}),"}) '),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const assetFiles = this.findFiles(distPath,['.png,"}),"}) ',.jpg',.jpeg,"}),"}) ',.gif',.svg,"}),"}) ',.webp']),"}),"}) ,"}),"}) let totalAssetSize = 0,"}),"}) const largeAssets = [],"}),"}) ,"}),"}) assetFiles.forEach(file => {,"}),"}) const stats = fs.statSync(file),"}),"}) totalAssetSize += stats.size,"}),"}) ,"}),"}) const sizeKB = Math.round(stats.size / 1024 * 100) / 100,"}),"}) if (sizeKB > 500) {,"}),"}) largeAssets.push(`${path.basename(file)} (${sizeKB}KB)`),"}),"}) }"}),"}) }),"}),"}) ,"}),"}) if (largeAssets.length > 0) {,"}),"}) this.optimizations.push(`Large assets detected: ${largeAssets.join(,)} - consider compression or format conversion`),"}),"}) }"}),"}) ,"}),"}) const imageFiles = assetFiles.filter(file =>,"}),"}) ['.png,"}),"}) ',.jpg',.jpeg,"}),"}) ',.gif'].some(ext => file.endsWith(ext)),"}),"}) ),"}),"}) ,"}),"}) if (imageFiles.length > 0) {,"}),"}) this.optimizations.push(,"}),"}) 'Consider converting images to WebP format for better compression'),"}),"}) this.optimizations.push(,"}),"}) 'Implement lazy loading for images below the fold'),"}),"}) }"}),"}) ,"}),"}) const fontFiles = this.findFiles(distPath,[,"}),"}) '.woff',.woff2,"}),"}) ',.ttf',.otf,"}),"}) ']),"}),"}) if (fontFiles.length > 0) {,"}),"}) this.optimizations.push('Consider using WOFF2 format for better font compression,"}),"}) '),"}),"}) this.optimizations.push('Implement font display swap for better performance,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze asset optimization: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(dir,extensions) {,"}),"}) const files = [],"}),"}) const extArray = Array.isArray(extensions) ? extensions : [extensions],"}),"}) ,"}),"}) const scanDirectory = (scanDir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(scanDir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(scanDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && extArray.some(ext => item.endsWith(ext))) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(dir),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) async generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) optimizations: this.optimizations.length,,"}),"}) issues: this.issues.length,"}),"}) },,"}),"}) optimizations: this.optimizations,,"}),"}) issues: this.issues,,"}),"}) recommendations: this.generateRecommendations(),"}),"}) },"}),"}) ,"}),"}) const reportPath = path.join(this.projectRoot,logs,"}),"}) ',front-maximizer-report.json'),"}),"}) try {,"}),"}) fs.writeFileSync(reportPath,JSON.stringify(report,null,2)),"}),"}) console.log(`📊 Report saved to: ${reportPath}`),"}),"}) } catch (error) {,"}),"}) console.warn(,"}),"}) '⚠️ Could not save report: ,"}),"}) ,error.message),"}),"}) }"}),"}) ,"}),"}) console.log(,"}),"}) '\n📋 Front Maximizer Summary: '),"}),"}) console.log(,"}),"}) '─.repeat(50)),"}),"}) ,"}),"}) if (this.optimizations.length > 0) {,"}),"}) console.log(`💡 ${this.optimizations.length} optimization opportunities:`),"}),"}) this.optimizations.forEach((optimization,index) => {,"}),"}) console.log(` ${index + 1}. ${optimization}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,"}),"}) '🎉 No optimization opportunities found!'),"}),"}) }"}),"}) ,"}),"}) if (this.issues.length > 0) {,"}),"}) console.log(`\n⚠️ ${this.issues.length} issues encountered:`),"}),"}) this.issues.forEach((issue,index) => {,"}),"}) console.log(` ${index + 1}. ${issue}`),"}),"}) }),"}),"}) }"}),"}) ,"}),"}) console.log(,"}),"}) '─'.repeat(50)),"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.optimizations.length > 0) {,"}),"}) recommendations.push(,"}),"}) 'Implement code splitting for better performance'),"}),"}) recommendations.push(,"}),"}) 'Optimize images and convert to modern formats'),"}),"}) recommendations.push(,"}),"}) 'Configure build optimizations in Vite'),"}),"}) recommendations.push(,"}),"}) 'Implement lazy loading for non-critical resources'),"}),"}) recommendations.push(,"}),"}) 'Consider using a CDN for static assets'),"}),"}) } else {,"}),"}) recommendations.push(,"}),"}) 'Continue monitoring for optimization opportunities'),"}),"}) recommendations.push(,"}),"}) 'Regularly review bundle sizes and performance'),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const maximizer = new FrontMaximizer(),"}),"}) maximizer.maximize().then(() => {,"}),"}) console.log(,"}),"}) '🚀 Front Maximizer Completed'),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error(,"}),"}) '❌ Front Maximizer Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) fs'; import path from "pathpath'; import { fileURLToPath } from "urlurl'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); console.log(','🚀 Front Maximizer Started'); class FrontMaximizer {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.optimizations = []; this.issues = []} async maximize() { try {' console.log('🔍 Analyzing frontend for optimization opportunities...';); await this.analyzeBuildConfig(); await this.analyzeBundleSize(); await this.analyzeCodeSplitting(); await this.analyzeAssetOptimization(); await this.generateReport(); console.log('✅ Front maximizer analysis completed';)} catch (error) {' console.error('❌ Error during front maximization: error.message)} } async analyzeBuildConfig() { try {' console.log('⚙️ Analyzing build configuration...';); const viteConfigPath = path.join(this.projectRoot,vite.config.ts'); if (fs.existsSync(viteConfigPath)) {; const viteConfig = fs.readFileSync(viteConfigPath,utf8';); if (!viteConfig.includes('build.rollupOptions';)) {' this.optimizations.push('Add rollup options for better build optimization';)} if (!viteConfig.includes('build.chunkSizeWarningLimit';)) {' this.optimizations.push('Set chunk size warning limits for better monitoring';)} if (!viteConfig.includes('build.rollupOptions.output.manualChunks';)) {' this.optimizations.push('Implement manual chunk splitting for better caching';)} if (!viteConfig.includes('build.rollupOptions.output.assetFileNames';)) {' this.optimizations.push('Configure asset file naming for better caching';)} if (!viteConfig.includes('server.hmr';)) {' this.optimizations.push('Enable HMR for better development experience';)} if (!viteConfig.includes('preview.port';)) {' this.optimizations.push('Configure preview port for testing';)} } else {' this.issues.push('Vite configuration file not found';)} } catch (error) {' this.issues.push(`Could not analyze build config: ${error.message}`)} } async analyzeBundleSize() { try {` console.log('📦 Analyzing bundle size...';); const distPath = path.join(this.projectRoot,dist'); if (fs.existsSync(distPath)) {; const jsFiles = this.findFiles(distPath,.js';); const cssFiles = this.findFiles(distPath,.css'); let totalJsSize = 0; let totalCssSize = 0; jsFiles.forEach(file => {; const stats = fs.statSync(file); totalJsSize += stats.size; const sizeMB = Math.round(stats.size / 1024 / 1024 * 100) / 100; if (sizeMB > 1) {' this.optimizations.push(`Large JS bundle detected: ${path.basename(file)} (${sizeMB}MB) - consider code splitting`)} }); cssFiles.forEach(file => {; const stats = fs.statSync(file); totalCssSize += stats.size; const sizeKB = Math.round(stats.size / 1024 * 100) / 100; if (sizeKB > 100) {` this.optimizations.push(`Large CSS bundle detected: ${path.basename(file)} (${sizeKB}KB) - consider purging unused styles`)} }); const totalSizeMB = Math.round((totalJsSize + totalCssSize) / 1024 / 1024 * 100) / 100; if (totalSizeMB > 5) {` this.optimizations.push(`Total bundle size is ${totalSizeMB}MB - consider aggressive optimization`)}` console.log(`📊 Bundle sizes: JS ${Math.round(totalJsSize / 1024)}KB,CSS ${Math.round(totalCssSize / 1024)}KB`)} else { this.optimizations.push(` 'Build directory not found - run build first to analyze bundle size')} } catch (error) {' this.issues.push(`Could not analyze bundle size: ${error.message}`)} } async: analyzeCodeSplitting() { try {
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,,"}),"}) fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Front Maximizer Started'),"}),"}) ,"}),"}) class FrontMaximizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.optimizations = [],"}),"}) this.issues = [],"}),"}) }"}),"}) ,"}),"}) async maximize() {,"}),"}) try {,"}),"}) console.log('🔍 Analyzing frontend for optimization opportunities...,"}),"}) '),"}),"}) ,"}),"}) await this.analyzeBuildConfig(),"}),"}) ,"}),"}) await this.analyzeBundleSize(),"}),"}) ,"}),"}) await this.analyzeCodeSplitting(),"}),"}) ,"}),"}) await this.analyzeAssetOptimization(),"}),"}) ,"}),"}) await this.generateReport(),"}),"}) ,"}),"}) console.log('✅ Front maximizer analysis completed,"}),"}) '),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during front maximization: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeBuildConfig() {,"}),"}) try {,"}),"}) console.log('⚙️ Analyzing build configuration...,"}),"}) '),"}),"}) ,"}),"}) const viteConfigPath = path.join(this.projectRoot,vite.config.ts'),"}),"}) if (fs.existsSync(viteConfigPath)) {,"}),"}) const viteConfig = fs.readFileSync(viteConfigPath,utf8,"}),"}) '),"}),"}) ,"}),"}) if (!viteConfig.includes('build.rollupOptions,"}),"}) ')) {,"}),"}) this.optimizations.push('Add rollup options for better build optimization,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('build.chunkSizeWarningLimit,"}),"}) ')) {,"}),"}) this.optimizations.push('Set chunk size warning limits for better monitoring,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('build.rollupOptions.output.manualChunks,"}),"}) ')) {,"}),"}) this.optimizations.push('Implement manual chunk splitting for better caching,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('build.rollupOptions.output.assetFileNames,"}),"}) ')) {,"}),"}) this.optimizations.push('Configure asset file naming for better caching,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('server.hmr,"}),"}) ')) {,"}),"}) this.optimizations.push('Enable HMR for better development experience,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) if (!viteConfig.includes('preview.port,"}),"}) ')) {,"}),"}) this.optimizations.push('Configure preview port for testing,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } else {,"}),"}) this.issues.push('Vite configuration file not found,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze build config: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeBundleSize() {,"}),"}) try {,"}),"}) console.log('📦 Analyzing bundle size...,"}),"}) '),"}),"}) ,"}),"}) const distPath = path.join(this.projectRoot,dist'),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const jsFiles = this.findFiles(distPath,.js,"}),"}) '),"}),"}) const cssFiles = this.findFiles(distPath,.css'),"}),"}) ,"}),"}) let totalJsSize = 0,"}),"}) let totalCssSize = 0,"}),"}) ,"}),"}) jsFiles.forEach(file => {,"}),"}) const stats = fs.statSync(file),"}),"}) totalJsSize += stats.size,"}),"}) ,"}),"}) const sizeMB = Math.round(stats.size / 1024 / 1024 * 100) / 100,"}),"}) if (sizeMB > 1) {,"}),"}) this.optimizations.push(`Large JS bundle detected: ${path.basename(file)} (${sizeMB}MB) - consider code splitting`),"}),"}) }"}),"}) }),"}),"}) ,"}),"}) cssFiles.forEach(file => {,"}),"}) const stats = fs.statSync(file),"}),"}) totalCssSize += stats.size,"}),"}) ,"}),"}) const sizeKB = Math.round(stats.size / 1024 * 100) / 100,"}),"}) if (sizeKB > 100) {,"}),"}) this.optimizations.push(`Large CSS bundle detected: ${path.basename(file)} (${sizeKB}KB) - consider purging unused styles`),"}),"}) }"}),"}) }),"}),"}) ,"}),"}) const totalSizeMB = Math.round((totalJsSize + totalCssSize) / 1024 / 1024 * 100) / 100,"}),"}) if (totalSizeMB > 5) {,"}),"}) this.optimizations.push(`Total bundle size is ${totalSizeMB}MB - consider aggressive optimization`),"}),"}) }"}),"}) ,"}),"}) console.log(`📊 Bundle sizes: JS ${Math.round(totalJsSize / 1024)}KB,CSS ${Math.round(totalCssSize / 1024)}KB`),"}),"}) ,"}),"}) } else {,"}),"}) this.optimizations.push(,"}),"}) 'Build directory not found - run build first to analyze bundle size'),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze bundle size: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeCodeSplitting() {,"}),"}) try {,"}),"}) console.log(,"}),"}) '🔀 Analyzing code splitting...'),"}),"}) ,"}),"}) const distPath = path.join(this.projectRoot,dist,"}),"}) '),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const jsFiles = this.findFiles(distPath,.js'),"}),"}) ,"}),"}) if (jsFiles.length <= 2) {,"}),"}) this.optimizations.push(,"}),"}) 'Consider implementing code splitting to reduce initial bundle size'),"}),"}) } else {,"}),"}) console.log(`✅ Code splitting detected: ${jsFiles.length} JavaScript chunks`),"}),"}) }"}),"}) ,"}),"}) const vendorChunks = jsFiles.filter(file =>,"}),"}) path.basename(file).includes(,"}),"}) 'vendor') ||,"}),"}) path.basename(file).includes(,"}),"}) 'chunk'),"}),"}) ),"}),"}) ,"}),"}) if (vendorChunks.length === 0) {,"}),"}) this.optimizations.push(,"}),"}) 'Consider separating vendor dependencies into separate chunks'),"}),"}) }"}),"}) ,"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze code splitting: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async analyzeAssetOptimization() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 🖼️ Analyzing asset optimization...'),"}),"}) ,"}),"}) const distPath = path.join(this.projectRoot,dist,"}),"}) '),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const assetFiles = this.findFiles(distPath,['.png,"}),"}) ',.jpg',.jpeg,"}),"}) ',.gif',.svg,"}),"}) ',.webp']),"}),"}) ,"}),"}) let totalAssetSize = 0,"}),"}) const largeAssets = [],"}),"}) ,"}),"}) assetFiles.forEach(file => {,"}),"}) const stats = fs.statSync(file),"}),"}) totalAssetSize += stats.size,"}),"}) ,"}),"}) const sizeKB = Math.round(stats.size / 1024 * 100) / 100,"}),"}) if (sizeKB > 500) {,"}),"}) largeAssets.push(`${path.basename(file)} (${sizeKB}KB)`),"}),"}) }"}),"}) }),"}),"}) ,"}),"}) if (largeAssets.length > 0) {,"}),"}) this.optimizations.push(`Large assets detected: ${largeAssets.join(,)} - consider compression or format conversion`),"}),"}) }"}),"}) ,"}),"}) const imageFiles = assetFiles.filter(file =>,"}),"}) ['.png,"}),"}) ',.jpg',.jpeg,"}),"}) ',.gif'].some(ext => file.endsWith(ext)),"}),"}) ),"}),"}) ,"}),"}) if (imageFiles.length > 0) {,"}),"}) this.optimizations.push(,"}),"}) 'Consider converting images to WebP format for better compression'),"}),"}) this.optimizations.push(,"}),"}) 'Implement lazy loading for images below the fold'),"}),"}) }"}),"}) ,"}),"}) const fontFiles = this.findFiles(distPath,[,"}),"}) '.woff',.woff2,"}),"}) ',.ttf',.otf,"}),"}) ']),"}),"}) if (fontFiles.length > 0) {,"}),"}) this.optimizations.push('Consider using WOFF2 format for better font compression,"}),"}) '),"}),"}) this.optimizations.push('Implement font display swap for better performance,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) this.issues.push(`Could not analyze asset optimization: ${error.message}`),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(dir,extensions) {,"}),"}) const files = [],"}),"}) const extArray = Array.isArray(extensions) ? extensions : [extensions],"}),"}) ,"}),"}) const scanDirectory = (scanDir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(scanDir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(scanDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && extArray.some(ext => item.endsWith(ext))) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(dir),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) async generateReport() {,"}),"}) const report = {,"}),"}) timestamp: new Date().toISOString(),,"}),"}) summary: {,"}),"}) optimizations: this.optimizations.length,,"}),"}) issues: this.issues.length,"}),"}) },,"}),"}) optimizations: this.optimizations,,"}),"}) issues: this.issues,,"}),"}) recommendations: this.generateRecommendations(),"}),"}) },"}),"}) ,"}),"}) const reportPath = path.join(this.projectRoot,logs,"}),"}) ',front-maximizer-report.json'),"}),"}) try {,"}),"}) fs.writeFileSync(reportPath,JSON.stringify(report,null,2)),"}),"}) console.log(`📊 Report saved to: ${reportPath}`),"}),"}) } catch (error) {,"}),"}) console.warn(,"}),"}) '⚠️ Could not save report: ,"}),"}) ,error.message),"}),"}) }"}),"}) ,"}),"}) console.log(,"}),"}) '\n📋 Front Maximizer Summary: '),"}),"}) console.log(,"}),"}) '─.repeat(50)),"}),"}) ,"}),"}) if (this.optimizations.length > 0) {,"}),"}) console.log(`💡 ${this.optimizations.length} optimization opportunities:`),"}),"}) this.optimizations.forEach((optimization,index) => {,"}),"}) console.log(` ${index + 1}. ${optimization}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,"}),"}) '🎉 No optimization opportunities found!'),"}),"}) }"}),"}) ,"}),"}) if (this.issues.length > 0) {,"}),"}) console.log(`\n⚠️ ${this.issues.length} issues encountered:`),"}),"}) this.issues.forEach((issue,index) => {,"}),"}) console.log(` ${index + 1}. ${issue}`),"}),"}) }),"}),"}) }"}),"}) ,"}),"}) console.log(,"}),"}) '─'.repeat(50)),"}),"}) }"}),"}) ,"}),"}) generateRecommendations() {,"}),"}) const recommendations = [],"}),"}) ,"}),"}) if (this.optimizations.length > 0) {,"}),"}) recommendations.push(,"}),"}) 'Implement code splitting for better performance'),"}),"}) recommendations.push(,"}),"}) 'Optimize images and convert to modern formats'),"}),"}) recommendations.push(,"}),"}) 'Configure build optimizations in Vite'),"}),"}) recommendations.push(,"}),"}) 'Implement lazy loading for non-critical resources'),"}),"}) recommendations.push(,"}),"}) 'Consider using a CDN for static assets'),"}),"}) } else {,"}),"}) recommendations.push(,"}),"}) 'Continue monitoring for optimization opportunities'),"}),"}) recommendations.push(,"}),"}) 'Regularly review bundle sizes and performance'),"}),"}) }"}),"}) ,"}),"}) return recommendations,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const maximizer = new FrontMaximizer(),"}),"}) maximizer.maximize().then(() => {,"}),"}) console.log(,"}),"}) '🚀 Front Maximizer Completed'),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error(,"}),"}) '❌ Front Maximizer Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) fs'; import path from "pathpath'; import { fileURLToPath } from "urlurl'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); console.log(','🚀 Front Maximizer Started'); class FrontMaximizer {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.optimizations = []; this.issues = []} async maximize() { try {' console.log('🔍 Analyzing frontend for optimization opportunities...';); await this.analyzeBuildConfig(); await this.analyzeBundleSize(); await this.analyzeCodeSplitting(); await this.analyzeAssetOptimization(); await this.generateReport(); console.log('✅ Front maximizer analysis completed';)} catch (error) {' console.error('❌ Error during front maximization: error.message)} } async analyzeBuildConfig() { try {' console.log('⚙️ Analyzing build configuration...';); const viteConfigPath = path.join(this.projectRoot,vite.config.ts'); if (fs.existsSync(viteConfigPath)) {; const viteConfig = fs.readFileSync(viteConfigPath,utf8';); if (!viteConfig.includes('build.rollupOptions';)) {' this.optimizations.push('Add rollup options for better build optimization';)} if (!viteConfig.includes('build.chunkSizeWarningLimit';)) {' this.optimizations.push('Set chunk size warning limits for better monitoring';)} if (!viteConfig.includes('build.rollupOptions.output.manualChunks';)) {' this.optimizations.push('Implement manual chunk splitting for better caching';)} if (!viteConfig.includes('build.rollupOptions.output.assetFileNames';)) {' this.optimizations.push('Configure asset file naming for better caching';)} if (!viteConfig.includes('server.hmr';)) {' this.optimizations.push('Enable HMR for better development experience';)} if (!viteConfig.includes('preview.port';)) {' this.optimizations.push('Configure preview port for testing';)} } else {' this.issues.push('Vite configuration file not found';)} } catch (error) {' this.issues.push(`Could not analyze build config: ${error.message}`)} } async analyzeBundleSize() { try {` console.log('📦 Analyzing bundle size...';); const distPath = path.join(this.projectRoot,dist'); if (fs.existsSync(distPath)) {; const jsFiles = this.findFiles(distPath,.js';); const cssFiles = this.findFiles(distPath,.css'); let totalJsSize = 0; let totalCssSize = 0; jsFiles.forEach(file => {; const stats = fs.statSync(file); totalJsSize += stats.size; const sizeMB = Math.round(stats.size / 1024 / 1024 * 100) / 100; if (sizeMB > 1) {' this.optimizations.push(`Large JS bundle detected: ${path.basename(file)} (${sizeMB}MB) - consider code splitting`)} }); cssFiles.forEach(file => {; const stats = fs.statSync(file); totalCssSize += stats.size; const sizeKB = Math.round(stats.size / 1024 * 100) / 100; if (sizeKB > 100) {` this.optimizations.push(`Large CSS bundle detected: ${path.basename(file)} (${sizeKB}KB) - consider purging unused styles`)} }); const totalSizeMB = Math.round((totalJsSize + totalCssSize) / 1024 / 1024 * 100) / 100; if (totalSizeMB > 5) {` this.optimizations.push(`Total bundle size is ${totalSizeMB}MB - consider aggressive optimization`)}` console.log(`📊 Bundle sizes: JS ${Math.round(totalJsSize / 1024)}KB,CSS ${Math.round(totalCssSize / 1024)}KB`)} else { this.optimizations.push(` 'Build directory not found - run build first to analyze bundle size')} } catch (error) {' this.issues.push(`Could not analyze bundle size: ${error.message}`)} } async: analyzeCodeSplitting() { try {
