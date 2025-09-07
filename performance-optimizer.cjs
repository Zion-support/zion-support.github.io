
class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();


    await this.optimizeImages();
    // Optimize bundle
    await this.optimizeBundle();

