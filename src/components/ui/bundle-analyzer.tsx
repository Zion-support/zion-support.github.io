import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Package, Zap } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';


interface BundleInfo {
  totalSize: number;
  gzippedSize: number;
  chunkCount: number;
  loadTime: number;
  cacheHitRate: number;
}

interface ChunkInfo {
  name: string;
  size: number;
  loadTime: number;
  cached: boolean;
}

export function BundleAnalyzer() {
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  const isAllowed = process.env.NODE_ENV !== 'production' || isAdmin;

  if (!isAllowed) {
    return null;
  }

  const [bundleInfo, setBundleInfo] = useState<BundleInfo | null>(null);
  const [chunks, setChunks] = useState<ChunkInfo[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isCollecting, setIsCollecting] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const show =
      process.env.NODE_ENV === 'development' ||
      localStorage.getItem('bundle-analyzer') === 'true';

    setShouldShow(show);

    if (!show) return;

    setIsVisible(true);
    collectBundleInfo();
  }, []);

  const collectBundleInfo = async () => {
    if (typeof window === 'undefined') return;

    setIsCollecting(true);

    try {
      // Get performance entries for script resources
      const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const scriptEntries = resourceEntries.filter(entry => 
        entry.name.includes('/_next/static/') && 
        (entry.name.endsWith('.js') || entry.name.endsWith('.css'))
      );

      // Calculate bundle information
      let totalSize = 0;
      let totalLoadTime = 0;
      const chunkData: ChunkInfo[] = [];

      scriptEntries.forEach(entry => {
        const size = entry.transferSize || entry.encodedBodySize || 0;
        const loadTime = entry.responseEnd - entry.requestStart;
        const cached = entry.transferSize === 0;
        
        totalSize += size;
        totalLoadTime += loadTime;

        chunkData.push({
          name: entry.name.split('/').pop()?.split('?')[0] || 'unknown',
          size,
          loadTime,
          cached});
      });

      // Estimate gzipped size (roughly 70% of original)
      const gzippedSize = totalSize * 0.7;
      const cacheHitRate = chunkData.filter(chunk => chunk.cached).length / chunkData.length;

      setBundleInfo({
        totalSize,
        gzippedSize,
        chunkCount: chunkData.length,
        loadTime: totalLoadTime / chunkData.length,
        cacheHitRate: cacheHitRate * 100});

      setChunks(chunkData.sort((a, b) => b.size - a.size).slice(0, 5)); // Top 5 largest chunks
    } catch (error) {
      logErrorToProduction('Failed to collect bundle info:', { data: error });
    } finally {
      setIsCollecting(false);
    }
  };

  const formatSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const getSizeColor = (size: number) => {
    if (size < 100000) return 'bg-green-500'; // < 100KB
    if (size < 500000) return 'bg-yellow-500'; // < 500KB
    return 'bg-red-500'; // > 500KB
  };

  const toggleAnalyzer = () => {
    const current = localStorage.getItem('bundle-analyzer') === 'true';
    localStorage.setItem('bundle-analyzer', (!current).toString());
    setIsVisible(!current);
    if (!current) {
      collectBundleInfo();
    }
  };

  if (!shouldShow) {
    return null;
  }

  if (!isVisible) {
    return (
      <div className=&quot;fixed bottom-20 right-4 z-50&quot;>
        <Button
          variant=&quot;outline&quot;
          size=&quot;sm&quot;
          onClick={toggleAnalyzer}
          className=&quot;bg-background/80 backdrop-blur-sm&quot;
        >
          <Package className=&quot;w-4 h-4 mr-2&quot; />
          Bundle Analyzer
        </Button>
      </div>
    );
  }

  return (
    <div className=&quot;fixed bottom-20 right-4 z-50 w-96&quot;>
      <Card className=&quot;bg-background/95 backdrop-blur-sm border shadow-lg&quot;>
        <CardHeader className=&quot;pb-2&quot;>
          <div className=&quot;flex items-center justify-between&quot;>
            <CardTitle className=&quot;text-sm flex items-center&quot;>
              <Package className=&quot;w-4 h-4 mr-2&quot; />
              Bundle Analyzer
            </CardTitle>
            <div className=&quot;flex gap-2&quot;>
              <Button
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                onClick={collectBundleInfo}
                disabled={isCollecting}
                className=&quot;h-6 w-6 p-0&quot;
              >
                <Zap className=&quot;w-3 h-3&quot; />
              </Button>
              <Button
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                onClick={toggleAnalyzer}
                className=&quot;h-6 w-6 p-0&quot;
              >
                ✕
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className=&quot;pt-0 space-y-3&quot;>
          {bundleInfo ? (
            <>
              <div className=&quot;grid grid-cols-2 gap-2 text-xs&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Total Size:</span>
                  <Badge className={getSizeColor(bundleInfo.totalSize)}>
                    {formatSize(bundleInfo.totalSize)}
                  </Badge>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Gzipped:</span>
                  <Badge variant=&quot;outline&quot;>
                    {formatSize(bundleInfo.gzippedSize)}
                  </Badge>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Chunks:</span>
                  <Badge variant=&quot;outline&quot;>{bundleInfo.chunkCount}</Badge>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Avg Load:</span>
                  <Badge variant=&quot;outline&quot;>
                    {bundleInfo.loadTime.toFixed(0)}ms
                  </Badge>
                </div>
              </div>

              <div>
                <div className=&quot;flex justify-between items-center text-xs mb-1&quot;>
                  <span>Cache Hit Rate</span>
                  <span>{bundleInfo.cacheHitRate.toFixed(1)}%</span>
                </div>
                <Progress value={bundleInfo.cacheHitRate} className=&quot;h-2&quot; />
              </div>

              <div>
                <div className=&quot;text-xs font-medium mb-2&quot;>Largest Chunks:</div>
                <div className=&quot;space-y-1&quot;>
                  {chunks.map((chunk, index) => (
                    <div key={chunk.name} className=&quot;flex justify-between items-center text-xs&quot;>
                      <div className=&quot;flex items-center gap-2 flex-1 min-w-0&quot;>
                        <span className=&quot;w-4 text-muted-foreground&quot;>{index + 1}.</span>
                        <span className=&quot;truncate&quot; title={chunk.name}>
                          {chunk.name}
                        </span>
                        {chunk.cached && (
                          <Badge variant=&quot;outline&quot; className=&quot;text-xs px-1 py-0&quot;>
                            cached
                          </Badge>
                        )}
                      </div>
                      <Badge className={getSizeColor(chunk.size)} variant=&quot;outline&quot;>
                        {formatSize(chunk.size)}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {bundleInfo.totalSize > 1000000 && (
                <div className=&quot;flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs&quot;>
                  <AlertTriangle className=&quot;w-3 h-3 text-yellow-600&quot; />
                  <span>Bundle size is large. Consider code splitting.</span>
                </div>
              )}
            </>
          ) : (
            <div className=&quot;text-xs text-muted-foreground&quot;>
              {isCollecting ? 'Analyzing bundle...' : 'Click refresh to analyze'}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 