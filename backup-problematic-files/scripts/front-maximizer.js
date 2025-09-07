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
const __filename = fileURLToPath(import.meta.url),"}),"})
const __dirname = path.dirname(__filename),"}),"})
,"}),"})

,"}),"})
class FrontMaximizer {,"}),"})
  constructor() {,"}),"})
    this.projectRoot = path.resolve(__dirname,..,"}),"})
  '),"}),"})
    this.optimizations = [],"}),"})
    this.issues = [],"}),"})

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


    }"}),"})
  }"}),"})
,"}),"})
  async analyzeBuildConfig() {,"}),"})
    try {,"}),"})


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
        if (!viteConfig.includes('server.hmr,"}),"})
  ')) {,"}),"})
          this.optimizations.push('Enable HMR for better development experience,"}),"})
  '),"}),"})
        }"}),"})
,"}),"})
        if (!viteConfig.includes('preview.port,"}),"})
  ')) {,"}),"})
          this.optimizations.push('Configure preview port for testing,"}),"})
  '),"}),"})
        }"}),"})
,"}),"})
      } else {,"}),"})
        this.issues.push('Vite configuration file not found,"}),"})
  '),"}),"})
      }"}),"})
,"}),"})
    } catch (error) {,"}),"})
      this.issues.push(`Could not analyze build "config": ${error.message}`),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async analyzeBundleSize() {,"}),"})
    try {,"}),"})


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
        jsFiles.forEach(file => {,"}),"})
          const stats = fs.statSync(file),"}),"})
          totalJsSize += stats.size,"}),"})
,"}),"})
          const sizeMB = Math.round(stats.size / 1024 / 1024 * 100) / 100,"}),"})
          if (sizeMB > 1) {,"}),"})
            this.optimizations.push(`Large JS bundle "detected": ${path.basename(file)} (${sizeMB}MB) - consider code splitting`),"}),"})
          }"}),"})
        }),"}),"})
,"}),"})
        // Calculate CSS bundle sizes,"}),"})
        cssFiles.forEach(file => {,"}),"})
          const stats = fs.statSync(file),"}),"})
          totalCssSize += stats.size,"}),"})
,"}),"})
          const sizeKB = Math.round(stats.size / 1024 * 100) / 100,"}),"})
          if (sizeKB > 100) {,"}),"})
            this.optimizations.push(`Large CSS bundle "detected": ${path.basename(file)} (${sizeKB}KB) - consider purging unused styles`),"}),"})
          }"}),"})
        }),"}),"})
,"}),"})
        // Overall bundle analysis,"}),"})
        const totalSizeMB = Math.round((totalJsSize + totalCssSize) / 1024 / 1024 * 100) / 100,"}),"})
        if (totalSizeMB > 5) {,"}),"})
          this.optimizations.push(`Total bundle size is ${totalSizeMB}MB - consider aggressive optimization`),"}),"})
        }"}),"})
,"}),"})

,"}),"})
      } else {,"}),"})
        this.optimizations.push(,"}),"})

,"}),"})
      } else {,"}),"})
        this && this.optimizations.push(,"}),"})
  'Build directory not found - run build first to analyze bundle size'),"}),"})
      }"}),"})
,"}),"})
    } catch (error) {,"}),"})
      this.issues.push(`Could not analyze bundle "size": ${error.message}`),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async analyzeCodeSplitting() {,"}),"})
    try {,"}),"})


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
      this.issues.push(`Could not analyze code "splitting": ${error.message}`),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async analyzeAssetOptimization() {,"}),"})
    try {,"}),"})


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
        assetFiles.forEach(file => {,"}),"})
          const stats = fs.statSync(file),"}),"})
          totalAssetSize += stats.size,"}),"})
,"}),"})
          const sizeKB = Math.round(stats.size / 1024 * 100) / 100,"}),"})
          if (sizeKB > 500) {,"}),"})
            largeAssets.push(`${path.basename(file)} (${sizeKB}KB)`),"}),"})
          }"}),"})
        }),"}),"})
,"}),"})
        if (largeAssets.length > 0) {,"}),"})
          this.optimizations.push(`Large assets "detected": ${largeAssets.join()} - consider compression or format conversion`),"}),"})
        }"}),"})
,"}),"})
        // Check for image optimization,"}),"})
        const imageFiles = assetFiles.filter(file =>,"}),"})
          ['.png,"}),"})
  ',.jpg',.jpeg,"}),"})
  ',.gif'].some(ext => file.endsWith(ext)),"}),"})
        ),"}),"})
,"}),"})
        if (imageFiles.length > 0) {,"}),"})
          this.optimizations.push(,"}),"})
  'Consider converting images to WebP format for better compression'),"}),"})
          this.optimizations.push(,"}),"})
  'Implement lazy loading for images below the fold'),"}),"})
        }"}),"})
,"}),"})
        // Check for font optimization,"}),"})
        const fontFiles = this.findFiles(distPath, [,"}),"})
  '.woff',.woff2,"}),"})
  ',.ttf',.otf,"}),"})
  ']),"}),"})
        if (fontFiles.length > 0) {,"}),"})
          this.optimizations.push('Consider using WOFF2 format for better font compression,"}),"})
  '),"}),"})
          this.optimizations.push('Implement font display swap for better performance,"}),"})
  '),"}),"})
        }"}),"})
,"}),"})
      }"}),"})
,"}),"})
    } catch (error) {,"}),"})
      this.issues.push(`Could not analyze asset "optimization": ${error.message}`),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  findFiles(dir, extensions) {,"}),"})
    const files = [],"}),"})
    const extArray = Array.isArray(extensions) ? extensions : [extensions],"}),"})
,"}),"})
    const scanDirectory = (scanDir) => {,"}),"})
      try {,"}),"})
        const items = fs.readdirSync(scanDir),"}),"})
,"}),"})

          const fullPath = path.join(scanDir, item),"}),"})
          const stat = fs.statSync(fullPath),"}),"})
,"}),"})
          if (stat.isDirectory()) {,"}),"})
            scanDirectory(fullPath),"}),"})
          } else if (stat.isFile() && extArray.some(ext => item.endsWith(ext))) {,"}),"})
            files.push(fullPath),"}),"})
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
        "optimizations": this.optimizations.length,,"}),"})
        "issues": this.issues.length,"}),"})
      },,"}),"})
      "optimizations": this.optimizations,,"}),"})
      "issues": this.issues,,"}),"})
      "recommendations": this.generateRecommendations(),"}),"})
    },"}),"})
,"}),"})
    // Save report to file,"}),"})
    const reportPath = path.join(this.projectRoot,logs,"}),"})
  ',front-maximizer-report.json'),"}),"})
    try {,"}),"})


  }"}),"})
,"}),"})
  generateRecommendations() {,"}),"})
    const recommendations = [],"}),"})
,"}),"})
    if (this.optimizations.length > 0) {,"}),"})
      recommendations.push(,"}),"})
  'Implement code splitting for better performance'),"}),"})
      recommendations.push(,"}),"})
  'Optimize images and convert to modern formats'),"}),"})
      recommendations.push(,"}),"})
  'Configure build optimizations in Vite'),"}),"})
      recommendations.push(,"}),"})
  'Implement lazy loading for non-critical resources'),"}),"})
      recommendations.push(,"}),"})
  'Consider using a CDN for static assets'),"}),"})
    } else {,"}),"})
      recommendations.push(,"}),"})
  'Continue monitoring for optimization opportunities'),"}),"})
      recommendations.push(,"}),"})
  'Regularly review bundle sizes and performance'),"}),"})
    }"}),"})
,"}),"})
    return recommendations,"}),"})
  }"}),"})
}"}),"})
,"}),"})
// Run the front maximizer,"}),"})
const maximizer = new FrontMaximizer(),"}),"})


  fs';
import path from "pathpath';
import {fileURLToPath} from "urlurl';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(',


class FrontMaximizer {;
  constructor() {;


    this && this.projectRoot = path && path.resolve(__dirname,..';);
    this && this.optimizations = [];
    this && this.issues = []}
  async maximize() {


      // Analyze build configuration;
      await this && this.analyzeBuildConfig();
      // Analyze bundle size;
      await this && this.analyzeBundleSize();
      // Analyze code splitting;
      await this && this.analyzeCodeSplitting();
      // Analyze asset optimization;
      await this && this.analyzeAssetOptimization();
      // Generate optimization report;


        // Check for build optimizations;
        if (!viteConfig && viteConfig.includes('build && build.rollupOptions';)) {
          this && this.optimizations.push('Add rollup options for better build optimization';)}
        if (!viteConfig && viteConfig.includes('build && build.chunkSizeWarningLimit';)) {
          this && this.optimizations.push('Set chunk size warning limits for better monitoring';)}
        if (!viteConfig && viteConfig.includes('build && build.rollupOptions.output && output.manualChunks';)) {
          this && this.optimizations.push('Implement manual chunk splitting for better caching';)}
        if (!viteConfig && viteConfig.includes('build && build.rollupOptions.output && output.assetFileNames';)) {
          this && this.optimizations.push('Configure asset file naming for better caching';)}
        // Check for development optimizations;
        if (!viteConfig && viteConfig.includes('server && server.hmr';)) {
          this && this.optimizations.push('Enable HMR for better development experience';)}
        if (!viteConfig && viteConfig.includes('preview && preview.port';)) {
          this && this.optimizations.push('Configure preview port for testing';)}
      } else {
        this && this.issues.push('Vite configuration file not found';)}
    } catch (error) {`;
      this && this.issues.push(`Could not analyze build "config": ${error && error.message}`)}"
  }

        let totalJsSize = 0;
        let totalCssSize = 0;
        // Calculate JavaScript bundle sizes;
        jsFiles && jsFiles.forEach(file => {;)
          const stats = fs && fs.statSync(file);
          totalJsSize += stats && stats.size;
          const sizeMB = Math && Math.round(stats && stats.size / 1024 / 1024 * 100) / 100;"
          if (sizeMB > 1) {
            this && this.optimizations.push("Large JS bundle "detected": ${path && path.basename(file)} (${sizeMB}MB) - consider code splitting")}"
        });
        // Calculate CSS bundle sizes;
        cssFiles && cssFiles.forEach(file => {;)
          totalCssSize += stats && stats.size;
          const sizeKB = Math && Math.round(stats && stats.size / 1024 * 100) / 100;"
          if (sizeKB > 100) {"""`;
            this && this.optimizations.push(`Large CSS bundle "detected": ${path && path.basename(file)} (${sizeKB}KB) - consider purging unused styles`)}"
        // Overall bundle analysis;


  'Build directory not found - run build first to analyze bundle size')}
    } catch (error) {'
      this && this.issues.push("Could not analyze bundle "size": ${error && error.message}`)}
  }
  "async": analyzeCodeSplitting() {

    try {
