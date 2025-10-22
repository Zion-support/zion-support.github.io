export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export class PerformanceUtils {
  private static instance: PerformanceUtils;
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  };

  private constructor() {}

  public static getInstance(): PerformanceUtils {
    if (!PerformanceUtils.instance) {
      PerformanceUtils.instance = new PerformanceUtils();
    }
    return PerformanceUtils.instance;
  }

  public measureLoadTime(): number {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    this.metrics.loadTime = loadTime;
    return loadTime;
  }

  public measureRenderTime(fn: () => void): number {
    const start = performance.now();
    fn();
    const end = performance.now();
    const renderTime = end - start;
    this.metrics.renderTime = renderTime;
    return renderTime;
  }

  public measureMemoryUsage(): number {
    const memory = (performance as any).memory;
    if (memory) {
      const memoryUsage = memory.usedJSHeapSize / 1024 / 1024;
      this.metrics.memoryUsage = memoryUsage;
      return memoryUsage;
    }
    return 0;
  }

  public measureFPS(): Promise<number> {
    return new Promise((resolve) => {
      let frameCount = 0;
      const startTime = performance.now();

      const countFrames = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - startTime >= 1000) {
          const fps = Math.round((frameCount * 1000) / (currentTime - startTime));
          this.metrics.fps = fps;
          resolve(fps);
        } else {
          requestAnimationFrame(countFrames);
        }
      };
      
      requestAnimationFrame(countFrames);
    });
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public resetMetrics(): void {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0,
    };
  }

  public optimizePerformance(): void {
    // Force garbage collection if available
    if ((window as any).gc) {
      (window as any).gc();
    }
    
    // Update memory usage
    this.measureMemoryUsage();
  }
}

export const performanceUtils = PerformanceUtils.getInstance();