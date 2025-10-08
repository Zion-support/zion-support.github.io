class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private isInitialized: boolean = false;

  private constructor() {}

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }
    this.isInitialized = true;
    //     console.log('Performance monitor initialized');
  }

  cleanup(): void {
    this.isInitialized = false;
    //     console.log('Performance monitor cleaned up');
  }
}

export default PerformanceMonitor;
