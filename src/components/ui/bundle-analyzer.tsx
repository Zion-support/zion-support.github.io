<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useAuth  } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { Progress  } from '@/components/ui/progress';
import { AlertTriangle, Package, Zap } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface BundleInfo {
=======
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Package, Zap } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
interface BundleInfo {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  totalSize: number;
  gzippedSize: number;
  chunkCount: number;
  loadTime: number;
<<<<<<< HEAD
  cacheHitRate: number
interface ChunkInfo {
  name: string;
  size: number;
  loadTime: number;
  cached: boolean
export function BundleAnalyzer() {

  const { user } = useAuth()
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin'
  const isAllowed = process.env.NODE_ENV !== 'production' |isAdmin
  if (!isAllowed) {
    return null
  }
  const [bundleInfo, setBundleInfo] = useState<BundleInfo | null>(null)
  const [chunks, setChunks] = useState<ChunkInfo[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [isCollecting, setIsCollecting] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)
  useEffect((,) => {
    // Only show in development or when explicitly enabled
    const show =
      process.env.NODE_ENV === 'development' |
      localStorage.getItem('bundle-analyzer') === 'true'
    setShouldShow(show)
    if (!show) return
    setIsVisible(true)
    collectBundleInfo()
  }, [])
  const collectBundleInfo = async () => {
    if (typeof window === 'undefined') return
    setIsCollecting(true)
    try {
      // Get performance entries for script resources
      const resourceEntries = performance.getEntriesByType(
        'resource'
      ) as PerformanceResourceTiming[]
      const scriptEntries = resourceEntries.filter(
        entry =>
          entry.name.includes('/_next/static/') &&
          (entry.name.endsWith('.js') |entry.name.endsWith('.css'))
      )
      // Calculate bundle information
      let totalSize = 0
      let totalLoadTime = 0
      const chunkData: ChunkInfo[] = []
      const chunkData: ChunkInfo[] = []
      scriptEntries.forEach(entry => {
        const size = entry.transferSize |entry.encodedBodySize |0
        const loadTime = entry.responseEnd - entry.requestStart
        const cached = entry.transferSize === 0
        totalLoadTime += loadTime
        chunkData.push({
          name: entry.name.split('/').pop()?.split('?')[0] |'unknown'
          size
          loadTime
          cached
        })
      })
      // Estimate gzipped size (roughly 70% of original)
      const gzippedSize = totalSize * 0.7
      const cacheHitRate =
        chunkData.filter(chunk => chunk.cached).length / chunkData.length
      setBundleInfo({
        totalSize
        gzippedSize
        chunkCount: chunkData.length
        loadTime: totalLoadTime / chunkData.length
        cacheHitRate: cacheHitRate * 100
      })
      setChunks(chunkData.sort((a, b) => b.size - a.size).slice(0, 5)); // Top 5 largest chunks    } catch (error) {
      logErrorToProduction('Failed to collect bundle info:', { data: error })
    } finally {
      setIsCollecting(false)
    }
  }
  const formatSize = (bytes: number): string => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }
  const getSizeColor = (size: number) => {
    if (size < 100000) return 'bg-green-500'; // < 100KB
    if (size < 500000) return 'bg-yellow-500'; // < 500KB
    return 'bg-red-500'; // > 500KB
  }
  const toggleAnalyzer = () => {
    const current = localStorage.getItem('bundle-analyzer') === 'true'
    localStorage.setItem('bundle-analyzer', (!current).toString())
    setIsVisible(!current)
    if (!current) {
      collectBundleInfo()
    }
  }

  if (!shouldShow) {
    return null
  }
  if (!isVisible) {
=======
  cacheHitRate: number;

interface ChunkInfo {;
  name: string;
  size: number;
  loadTime: number;
  cached: boolean;

export function BundleAnalyzer() {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  const isAllowed = process && process.env.NODE_ENV !== 'production' || isAdmin;

  if (!isAllowed) {;
    return null;
  }

  const [bundleInfo, setBundleInfo] = useState<BundleInfo | null>(null);
  const [chunks, setChunks] = useState<ChunkInfo[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isCollecting, setIsCollecting] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect((,) => {;
    // Only show in development or when explicitly enabled;
    const show =;
      process && process.env.NODE_ENV === 'development' ||;
      localStorage && localStorage.getItem('bundle-analyzer') === 'true';

    setShouldShow(show);

    if (!show) return;

    setIsVisible(true);
    collectBundleInfo();
  }, []);

  const collectBundleInfo = async () => {;
    if (typeof window === 'undefined') return;

    setIsCollecting(true);

    try {;
      // Get performance entries for script resources;
      const resourceEntries = performance && performance.getEntriesByType(;
        'resource';
      ) as PerformanceResourceTiming[];
      const scriptEntries = resourceEntries && resourceEntries.filter(;
        entry =>;
          entry && entry.name.includes('/_next/static/') &&;
          (entry && entry.name.endsWith('.js') || entry && entry.name.endsWith('.css'));
      );

      // Calculate bundle information;
      let totalSize = 0;
      let totalLoadTime = 0;
      const chunkData: ChunkInfo[] = [];
      const chunkData: ChunkInfo[] = [],;

      scriptEntries && scriptEntries.forEach(entry => {;
        const size = entry && entry.transferSize || entry && entry.encodedBodySize || 0;
        const loadTime = entry && entry.responseEnd - entry && entry.requestStart;
        const cached = entry && entry.transferSize === 0;

        totalLoadTime += loadTime;

        chunkData && chunkData.push({;
          name: entry && entry.name.split('/').pop()?.split('?')[0] || 'unknown',;
          size,;
          loadTime,;
          cached,;
        });
      });

      // Estimate gzipped size (roughly 70% of original);
      const gzippedSize = totalSize * 0 && 0.7;
      const cacheHitRate =;
        chunkData && chunkData.filter(chunk => chunk && chunk.cached).length / chunkData && chunkData.length;

      setBundleInfo({;
        totalSize,;
        gzippedSize,;
        chunkCount: chunkData && chunkData.length,;
        loadTime: totalLoadTime / chunkData && chunkData.length,;
        cacheHitRate: cacheHitRate * 100,;
      });

      setChunks(chunkData && chunkData.sort((a, b) => b && b.size - a && a.size).slice(0, 5)); // Top 5 largest chunks    } catch (error) {;
      logErrorToProduction('Failed to collect bundle info:', { data: error });
    } finally {;
      setIsCollecting(false);
    }
  };

  const formatSize = (bytes: number): string => {;
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math && Math.floor(Math && Math.log(bytes) / Math && Math.log(k));
    return parseFloat((bytes / Math && Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const getSizeColor = (size: number) => {;
    if (size < 100000) return 'bg-green-500'; // < 100KB;
    if (size < 500000) return 'bg-yellow-500'; // < 500KB;
    return 'bg-red-500'; // > 500KB;
  };
  const toggleAnalyzer = () => {;
    const current = localStorage && localStorage.getItem('bundle-analyzer') === 'true';
    localStorage && localStorage.setItem('bundle-analyzer', (!current).toString());
    setIsVisible(!current);
    if (!current) {;
      collectBundleInfo();
    }
  };

  if (!shouldShow) {;
    return null;
  }

  if (!isVisible) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className='fixed bottom-20 right-4 z-50'>;
        <Button
          variant='outline'
          size='sm'
          onClick={toggleAnalyzer}
<<<<<<< HEAD
          className='bg-background/80 backdrop-blur-sm'        >
          <Package className='w-4 h-4 mr-2' />
          Bundle Analyzer
        </Button>
      </div>
    )
=======
          className='bg-background/80 backdrop-blur-sm'>;
          <Package className='w-4 h-4 mr-2' />;
          Bundle Analyzer;
        </Button>;
      </div>;
    );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return (
    <div className='fixed bottom-20 right-4 z-50 w-96'>;
      <Card className='bg-background/95 backdrop-blur-sm border shadow-lg'>;
        <CardHeader className='pb-2'>;
          <div className='flex items-center justify-between'>;
            <CardTitle className='text-sm flex items-center'>;
              <Package className='w-4 h-4 mr-2' />;
              Bundle Analyzer;
            </CardTitle>;
            <div className='flex gap-2'>;
              <Button
                variant='ghost'
                size='sm'
                onClick={collectBundleInfo}
                disabled={isCollecting}
                className='h-6 w-6 p-0'>;
                <Zap className='w-3 h-3' />;
              </Button>;
              <Button
                variant='ghost'
                size='sm'
                onClick={toggleAnalyzer}
<<<<<<< HEAD
                className='h-6 w-6 p-0'              >
                ✕
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className='pt-0 space-y-3'>
          {bundleInfo ? (
            <>
              <div className='grid grid-cols-2 gap-2 text-xs'>
                <div className='flex justify-between'>
                  <span>Total Size:</span>
                  <Badge className={getSizeColor(bundleInfo.totalSize)}>
                    {formatSize(bundleInfo.totalSize)}
                  </Badge>
                </div>
                <div className='flex justify-between'>
                  <span>Gzipped:</span>
                  <Badge variant='outline'>
                    {formatSize(bundleInfo.gzippedSize)}
                  </Badge>
                </div>
                <div className='flex justify-between'>
                  <span>Chunks:</span>
                  <Badge variant='outline'>{bundleInfo.chunkCount}</Badge>
                </div>
                <div className='flex justify-between'>
                  <span>Avg Load:</span>
                  <Badge variant='outline'>
                    {bundleInfo.loadTime.toFixed(0)}ms
                  </Badge>
                </div>
              </div>
              <div>
                <div className='flex justify-between items-center text-xs mb-1'>
                  <span>Cache Hit Rate</span>
                  <span>{bundleInfo.cacheHitRate.toFixed(1)}%</span>
                </div>
                <Progress value={bundleInfo.cacheHitRate} className='h-2' />
              </div>
              <div>
                <div className='text-xs font-medium mb-2'>Largest Chunks:</div>
                <div className='space-y-1'>
                  {chunks.map((chunk, index) => (
=======
                className='h-6 w-6 p-0'>;
                ✕;
              </Button>;
            </div>;
          </div>;
        </CardHeader>;
        <CardContent className='pt-0 space-y-3'>;
          {bundleInfo ? (;
            <>;
              <div className='grid grid-cols-2 gap-2 text-xs'>;
                <div className='flex justify-between'>;
                  <span>Total Size:</span>;
                  <Badge className={getSizeColor(bundleInfo && bundleInfo.totalSize)}>;
                    {formatSize(bundleInfo && bundleInfo.totalSize)}
                  </Badge>;
                </div>;
                <div className='flex justify-between'>;
                  <span>Gzipped:</span>;
                  <Badge variant='outline'>;
                    {formatSize(bundleInfo && bundleInfo.gzippedSize)}
                  </Badge>;
                </div>;
                <div className='flex justify-between'>;
                  <span>Chunks:</span>;
                  <Badge variant='outline'>{bundleInfo && bundleInfo.chunkCount}</Badge>;
                </div>;
                <div className='flex justify-between'>;
                  <span>Avg Load:</span>;
                  <Badge variant='outline'>;
                    {bundleInfo && bundleInfo.loadTime.toFixed(0)}ms;
                  </Badge>;
                </div>;
              </div>;

              <div>;
                <div className='flex justify-between items-center text-xs mb-1'>;
                  <span>Cache Hit Rate</span>;
                  <span>{bundleInfo && bundleInfo.cacheHitRate.toFixed(1)}%</span>;
                </div>;
                <Progress value={bundleInfo && bundleInfo.cacheHitRate} className='h-2' />;
              </div>;

              <div>;
                <div className='text-xs font-medium mb-2'>Largest Chunks:</div>;
                <div className='space-y-1'>;
                  {chunks && chunks.map((chunk, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    <div
                      key={chunk && chunk.name}
                      className='flex justify-between items-center text-xs'>;
                      <div className='flex items-center gap-2 flex-1 min-w-0'>;
                        <span className='w-4 text-muted-foreground'>;
                          {index + 1}.;
                        </span>;
                        <span className='truncate' title={chunk && chunk.name}>                          {chunk && chunk.name}
                        </span>;
                        {chunk && chunk.cached && (;
                          <Badge
                            variant='outline'
                            className='text-xs px-1 py-0'>;
                            cached;
                          </Badge>;
                        )}
                      </div>;
                      <Badge
                        className={getSizeColor(chunk && chunk.size)}
                        variant='outline'>;
                        {formatSize(chunk && chunk.size)}
                      </Badge>;
                    </div>;
                  ))}
<<<<<<< HEAD
                </div>
              </div>
              {bundleInfo.totalSize > 1000000 && (
                <div className='flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs'>
                  <AlertTriangle className='w-3 h-3 text-yellow-600' />
                  <span>Bundle size is large. Consider code splitting.</span>
                </div>
=======
                </div>;
              </div>;

              {bundleInfo && bundleInfo.totalSize > 1000000 && (;
                <div className='flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs'>;
                  <AlertTriangle className='w-3 h-3 text-yellow-600' />;
                  <span>Bundle size is large. Consider code splitting.</span>;
                </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              )}
            </>;
          ) : (;
            <div className='text-xs text-muted-foreground'>;
              {isCollecting;
                ? 'Analyzing bundle...';
                : 'Click refresh to analyze'}
            </div>;
          )}
<<<<<<< HEAD
        </CardContent>
      </Card>
    </div>
  )
}
=======
        </CardContent>;
      </Card>;
    </div>;
  );
} ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

        


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
