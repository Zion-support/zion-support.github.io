import React, { useEffect, useCallback, useState } from 'react';
export const BundleAnalyzer: React.FC < BundleAnalyzerProps> = ({

interface BundleAnalyzerProps extends React.PropsWithChildren<{}> {

  enabled?: boolean;
  showUI?: boolean;

}

interface BundleMetrics {

  totalSize: number;
  chunkCount: number;
largestChunk: {;
    name: string;
    size: number;

};
      // Get performance entries
      const navigationEntries = performance.getEntriesByType('navigation') ;
      const resourceEntries = performance.getEntriesByType('resource') ;

      let chunkCount = 0;
      let largestChunk = { name: any'', size: 0 };

      resourceEntries.forEach((entry:) => {
        if(entry.name.includes ('.js') || entry.name.includes('.css') ) {
          const size = entry.transferSize || entry.encodedBodySize || 0;
          totalSize += size;
      // Log performance insights
      console.group('🚀 Bundle Analysis') ;
      console.log(`Total Bundle Size: ${(totalSize / 1024 / 1024) .toFixed(2) } MB`) ;
      console.log(`Chunk Count: ${chunkCount}`) ;
      console.log(`Largest Chunk: ${largestChunk.name} (${(largestChunk.size / 1024 / 1024) .toFixed(2) } MB) `) ;
      console.log(`Average Chunk Size: ${(averageChunkSize / 1024 / 1024) .toFixed(2) } MB`) ;
      console.log(`Estimated Gzip Savings: ${(gzipSavings / 1024 / 1024) .toFixed(2) } MB`) ;

      // Performance recommendations
      if(totalSize > 5 * 1024 * 1024) { // 5MB
        console.warn('⚠️ Bundle size is large.Consider code splitting and lazy loading.') ;
      }

      if(chunkCount > 20) {
        console.warn('⚠️ Too many chunks.Consider consolidating small chunks.') ;
      }

      if(largestChunk.size > 2 * 1024 * 1024) { // 2MB
        console.warn('⚠️ Largest chunk is too big.Consider splitting it further.') ;
      }

      console.groupEnd () ;
    } catch(error) {
      console.error('Bundle analysis failed:', error) ;
    }
    const timer = setTimeout(analyzeBundle, 2000) ;

    return () => clearTimeout(timer) ;
  }, [enabled, analyzeBundle]) ;
    const optimizations = optimizeBundle () ;

    }
  }, [enabled, optimizeBundle]);

