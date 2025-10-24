export const performanceUtils = {
  isSlowConnection: () => {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
    }
    return false;
  },
  
  shouldUseLowQualityImages: () => {
    return performanceUtils.isSlowConnection();
  }
};
