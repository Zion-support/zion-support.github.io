import React, { useEffect, useCallback, useState } from 'react';

interface BundleAnalyzerProps {
  enabled?: boolean;
  showUI?: boolean;
}

interface BundleMetrics {
  totalSize: number;
  chunkCount: number;
  largestChunk: {
    name: string;
    size: number;
  };
  averageChunkSize: number;
  gzipSavings: number;
}

export const BundleAnalyzer: React.FC<BundleAnalyzerProps> = ({ 
  enabled = true,
  showUI = false
}) => {
  const [metrics, setMetrics] = useState<BundleMetrics>({
    totalSize: 0,
    chunkCount: 0,
    largestChunk: { name: '', size: 0 },
    averageChunkSize: 0,
    gzipSavings: 0
  });

  const analyzeBundle = useCallback(() => {
    if (!enabled) return;

    try {
      // Get performance entries
      const navigationEntries = performance.getEntriesByType('navigation');
      const resourceEntries = performance.getEntriesByType('resource');
      
      // Calculate bundle metrics
      let totalSize = 0;
      let chunkCount = 0;
      let largestChunk = { name: '', size: 0 };
      
      resourceEntries.forEach((entry: any) => {
        if (entry.name.includes('.js') || entry.name.includes('.css')) {
          const size = entry.transferSize || entry.encodedBodySize || 0;
          totalSize += size;
          chunkCount++;
          
          if (size > largestChunk.size) {
            largestChunk = { name: entry.name, size };
          }
        }
      });

      const averageChunkSize = chunkCount > 0 ? totalSize / chunkCount : 0;
      const gzipSavings = totalSize * 0.7; // Estimate 70% savings with gzip

      setMetrics({
        totalSize,
        chunkCount,
        largestChunk,
        averageChunkSize,
        gzipSavings
      });

      // Log performance insights
      console.group('🚀 Bundle Analysis');
      console.log(`Total Bundle Size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Chunk Count: ${chunkCount}`);
      console.log(`Largest Chunk: ${largestChunk.name} (${(largestChunk.size / 1024 / 1024).toFixed(2)} MB)`);
      console.log(`Average Chunk Size: ${(averageChunkSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Estimated Gzip Savings: ${(gzipSavings / 1024 / 1024).toFixed(2)} MB`);
      
      // Performance recommendations
      if (totalSize > 5 * 1024 * 1024) { // 5MB
        console.warn('⚠️ Bundle size is large. Consider code splitting and lazy loading.');
      }
      
      if (chunkCount > 20) {
        console.warn('⚠️ Too many chunks. Consider consolidating small chunks.');
      }
      
      if (largestChunk.size > 2 * 1024 * 1024) { // 2MB
        console.warn('⚠️ Largest chunk is too big. Consider splitting it further.');
      }
      
      console.groupEnd();
    } catch (error) {
      console.error('Bundle analysis failed:', error);
    }
  }, [enabled]);

  const optimizeBundle = useCallback(() => {
    if (!enabled) return;

    // Implement bundle optimization strategies
    const optimizations: string[] = [];

    if (metrics.totalSize > 5 * 1024 * 1024) {
      optimizations.push('Implement code splitting for routes');
      optimizations.push('Use dynamic imports for heavy components');
      optimizations.push('Optimize third-party library imports');
    }

    if (metrics.chunkCount > 20) {
      optimizations.push('Consolidate small chunks');
      optimizations.push('Use webpack chunk optimization');
    }

    if (metrics.largestChunk.size > 2 * 1024 * 1024) {
      optimizations.push('Split large components');
      optimizations.push('Implement tree shaking');
    }

    // Apply optimizations
    optimizations.forEach(optimization => {
      console.log(`🔧 Optimization: ${optimization}`);
    });

    return optimizations;
  }, [enabled, metrics]);

  useEffect(() => {
    if (!enabled) return;

    // Analyze bundle after page load
    const timer = setTimeout(analyzeBundle, 2000);
    
    return () => clearTimeout(timer);
  }, [enabled, analyzeBundle]);

  useEffect(() => {
    if (!enabled) return;

    // Run optimization analysis
    const optimizations = optimizeBundle();
    
    if (optimizations && optimizations.length > 0) {
      console.log('📊 Bundle optimization recommendations:', optimizations);
    }
  }, [enabled, optimizeBundle]);

  // Don't render UI unless explicitly requested
  if (!showUI) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
      <h3 className="text-sm font-semibold text-gray-800 mb-2">Bundle Analysis</h3>
      <div className="space-y-2 text-xs text-gray-600">
        <div>Total Size: {(metrics.totalSize / 1024 / 1024).toFixed(2)} MB</div>
        <div>Chunks: {metrics.chunkCount}</div>
        <div>Largest: {(metrics.largestChunk.size / 1024 / 1024).toFixed(2)} MB</div>
        <div>Gzip Savings: {(metrics.gzipSavings / 1024 / 1024).toFixed(2)} MB</div>
      </div>
    </div>
  );
};