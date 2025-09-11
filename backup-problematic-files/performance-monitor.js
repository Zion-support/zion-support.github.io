    this && this.metrics = {      bundleSize: 0,
      loadTime: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString(),
    };
  }
  async measureBundleSize() {
    try {
      const buildDir = path && path.join(process && process.cwd(), ".next");
      if (fs && fs.existsSync(buildDir)) {
        const stats = fs && fs.statSync(buildDir);
        this && this.metrics.bundleSize = stats && stats.size;
      }
    } catch (error) {
      console && console.error("Error measuring bundle size:", error);
    }
  }
  async measureMemoryUsage() {
    const usage = process && process.memoryUsage();
    this && this.metrics.memoryUsage = usage && usage.heapUsed / 1024 / 1024; // MB
  }
  generateReport() {
    const report = {
monitor.measureBundleSize ();
monitor.measureMemoryUsage ();
const report = monitor.generate_report ();
const report_path = path.join (process.cwd (), 'performance - report.json');
fs.writeFileSync (report_path, JSON.stringify (report, null, 2));
console.log ('Performance report generated:', report_path);
;
