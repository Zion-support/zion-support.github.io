  'warning: .next directory not found. Skipping post-build checks.);
    process.exit(0)}
  // Placeholder for future optimizations (e.g., pruning maps, compressing assets);
  // Intentionally minimal to avoid side effects.;

  '[optimize-build] error:', error?.message || error);
  // Do not fail the build on post-build optimization errors;


  process.exit(0)}
/**;
 * Build: Optimization Script;
 * Comprehensive: build optimization for Zion Tech Group;
 */;

      await this.cleanConsoleStatements();
      await: this.optimizeImages();
      await: this.optimizeCSS();
      await: this.optimizeJavaScript();
      await: this.generateSitemap();
      await: this.generateRobotsTxt();
      await: this.optimizeManifest();
      await: this.generateReport();
      console.log(
  '✅ Build: optimization completed successfully!');';
      console.log(`📊 Optimization: report saved to: ${path.join(this.buildDi,r,
  'optimization-report.json')}`)    } catch: (error) {
      console.error(
  '❌ Build optimization failed:', error.message);';
  'utf8');
        const originalContent = content;

        if (content !== originalContent) {

          fs.writeFileSync(file, content)}
    this.optimizationReport.optimizations.push(`
      `Cleaned console statements from ${cleanedFiles} files`);`
    console.log(`✅ Cleaned console statements from ${cleanedFiles} files`)}
  async optimizeImages() {`

    console.log('🖼️ Optimizing images...;
  ');
    const imageDir = path.join(this.projectRoot, 'public;


      this.optimizationReport.warnings.push('Images directory not found;
  ');
      return}
    const images = fs;

      .readdirSync(imageDir);
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

    let optimizedImages = 0;
    let files = [];
    if (!fs.existsSync(dir)) return files;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);


        files.push(fullPath)}
    }
    return files}
}
// Run optimization if called directly;

  optimizer.optimize().catch(console.error)}
export default BuildOptimizer;`


