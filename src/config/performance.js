
export const performanceConfig = {
  monitoring: {
    enabled: true,
    sampleRate: 0.1
  },
  optimization: {
    lazyLoading: true,
    imageOptimization: true,
    bundleSplitting: true
  },
  metrics: {
    targetLoadTime: 2000,
    targetFCP: 1500,
    targetLCP: 2500,
    targetCLS: 0.1
  }
};
