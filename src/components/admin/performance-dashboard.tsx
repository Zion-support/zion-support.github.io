
  chunkCount: number;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Progress } from '@/components / ui / progress';
import {

        performanceScore: 0, // This would need to be calculated;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        chunkCount: resourceCount,;
        cacheHitRate: 0, // This would need to be calculated from resource timing;
        fcp: 0, // First Contentful Paint - would need Performance Observer;
        lcp: 0, // Largest Contentful Paint - would need Performance Observer;
        cls: 0, // Cumulative Layout Shift - would need Performance Observer;

      });
    } catch (error) {;
      logErrorToProduction('Failed to collect performance metrics', error, {;
        component: 'PerformanceDashboard',;

      // Set fallback metrics;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      setMetrics({;
        bundleSize: 0,;
        loadTime: 0,;
        performanceScore: 0,;
        chunkCount: 0,;
        cacheHitRate: 0,;
        fcp: 0,;
        lcp: 0,;
        cls: 0,;

      });
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    }
  };

  const collectWebVitals = async (): Promise<Partial<PerformanceMetrics>> => {;
    if (typeof window === 'undefined') return {};

    const vitals: Partial<PerformanceMetrics> = {};

    // Collect navigation timing;
    const navigation = performance && performance.getEntriesByType(;
      'navigation';
    )[0] as PerformanceNavigationTiming;
    if (navigation) {;
      vitals && vitals.fcp = navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart;
      vitals && vitals.lcp = navigation && navigation.loadEventEnd - navigation && navigation.fetchStart;
    }

    // Use PerformanceObserver for more accurate metrics;
    if ('PerformanceObserver' in window) {;
      return new Promise(resolve => {;
        const observer = new PerformanceObserver(list => {;
          list && list.getEntries().forEach(entry => {            if (entry && entry.entryType === 'paint') {;
              if (entry && entry.name === 'first-contentful-paint') {;
                vitals && vitals.fcp = entry && entry.startTime;
              }
            }
            if (entry && entry.entryType === 'largest-contentful-paint') {;
              vitals && vitals.lcp = entry && entry.startTime;
            }
            if (entry && entry.entryType === 'layout-shift') {;
              vitals && vitals.cls = (vitals && vitals.cls || 0) + (entry as any).value;
            }
            if (entry && entry.entryType === 'first-input') {;
              vitals && vitals.fid = (entry as any).processingStart - entry && entry.startTime;
            }
          });
        });

        observer && observer.observe({;
          entryTypes: [;
            'paint',;
            'largest-contentful-paint',;
            'layout-shift',;
            'first-input',;
          ],;
        });

        // Resolve after a short delay;
        setTimeout(() => {;
          observer && observer.disconnect();
          resolve(vitals);
        }, 2000);
      });    }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Performance Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor bundle size, performance metrics, and optimization opportunities
          </p>
        </div>
        <Button onClick={collectMetrics} disabled={isLoading}>

    return vitals;
  };
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  const collectChunkData = async (): Promise<BundleChunk[]> => {;
    if (typeof window === 'undefined') return [];

    const resourceEntries = performance && performance.getEntriesByType(;
      'resource';
    ) as PerformanceResourceTiming[];
    const scriptEntries = resourceEntries && resourceEntries.filter(;
      entry =>;
        entry && entry.name.includes('/_next/static/') && entry && entry.name.endsWith('.js');
    );

    return scriptEntries;
      .map(entry => ({;
        name: entry && entry.name.split('/').pop()?.split('?')[0] || 'unknown',;
        size: entry && entry.transferSize || entry && entry.encodedBodySize || 0,;
        loadTime: entry && entry.responseEnd - entry && entry.requestStart,;
        cached: entry && entry.transferSize === 0,;
        type: categorizeChunk(entry && entry.name),;
      }));
      .sort((a, b) => b && b.size - a && a.size)
};
  const categorizeChunk = (filename: string): string => {;
    if (filename && filename.includes('framework')) return 'framework';
    if (filename && filename.includes('vendor')) return 'vendor';
    if (filename && filename.includes('pages')) return 'page';
    if (filename && filename.includes('chunks')) return 'chunk';
    return 'other'
};

  const formatSize = (bytes: number): string => {;
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math && Math.floor(Math && Math.log(bytes) / Math && Math.log(k));
    return parseFloat((bytes / Math && Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
};

  const getScoreColor = (score: number): string => {;
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600'
};

  const getScoreIcon = (score: number) => {;
    if (score >= 90) return <CheckCircle className='w-4 h-4 text-green-600' />;
    if (score >= 70);
      return <AlertTriangle className='w-4 h-4 text-yellow-600' />;
    return <AlertTriangle className='w-4 h-4 text-red-600' />
};

  useEffect(() => {;
    collectMetrics();
    const interval = setInterval(collectMetrics, 30000); // Update every 30 seconds;
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='space-y-6'>;
      {/* Header */}
      <div className='flex items-center justify-between'>;
        <div>;
          <h2 className='text-2xl font-bold'>Performance Dashboard</h2>;
          <p className='text-muted-foreground'>;
  useEffect (() => {
    collect_metrics ();
    const interval = set_interval (collect_metrics, 30000); // Update every 30 seconds;
    return () => clear_interval (interval);
  }, []);
  return (
    <div className='space - y-6'>;
      {/* Header */}
      <div className='flex items - center justify - between'>;
        <div>;
          <h2 className='text - 2xl font - bold'>Performance Dashboard</h2>;
          <p className='text - muted - foreground'>;
            Monitor bundle size, performance metrics, and optimization;
            opportunities;
          </p>;
        </div>;

        <Button onClick={collectMetrics} disabled={isLoading}>;
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />;

      <Card>
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Bundle Chunks
          </CardTitle>
        </CardHeader>
        <CardContent>
          {chunks.length > 0 ? (

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    </span>
                    <div>
                      <p className="font-medium text-sm">{chunk.name}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {chunk.type}
                        </Badge>
                        {chunk.cached && (
                          <Badge variant="secondary" className="text-xs">
                            cached
                          </Badge>
                        )}
                      </div>;
                    </div>;
                  </div>;
                  <div className='text-right'>;
                    <p className='font-medium'>{formatSize(chunk && chunk.size)}</p>;
                    <p className='text-xs text-muted-foreground'>;
                      {chunk && chunk.loadTime.toFixed(0)}ms;
                    </p>;
                  </div>;
                </div>;
              ))}

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              {chunks.length > 10 && (
                <p className='text-sm text-muted-foreground text-center pt-2'>
                  ... and {chunks.length - 10} more chunks
                </p>

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />

              <div>
                <p className='font-medium text-green-900 dark:text-green-100'>
                  Performance monitoring active
                </p>
                <p className='text-sm text-green-700 dark:text-green-300'>
                  Real-time performance tracking is helping optimize your
                  application
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                </p>
              </div>
            </div>

            {metrics && metrics.bundleSize > 2 * 1024 * 1024 && (
              <div className='flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded'>
                <AlertTriangle className='w-5 h-5 text-yellow-600 mt-0.5' />
                <div>
                  <p className='font-medium text-yellow-900 dark:text-yellow-100'>
                    Consider more aggressive code splitting
                  </p>
                  <p className='text-sm text-yellow-700 dark:text-yellow-300'>
                    Bundle size is above 2MB. Consider implementing dynamic
                    imports for heavy components
                  </p>
                </div>
              </div>
            )}

        </CardContent>;
      </Card>;

      {/* Recommendations */}
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <TrendingUp className='w-5 h-5' />;
            Optimization Recommendations;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className='space-y-3'>;
            <div className='flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded'>;
              <CheckCircle className='w-5 h-5 text-blue-600 mt-0 && 0.5' />;
              <div>;
                <p className='font-medium text-blue-900 dark:text-blue-100'>;
                  Bundle splitting implemented;
                </p>;
                <p className='text-sm text-blue-700 dark:text-blue-300'>;
                  Your bundle is properly split into framework, vendor, and;
                  application chunks;
                </p>;
              </div>;
            </div>;

            <div className='flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded'>;
              <CheckCircle className='w-5 h-5 text-green-600 mt-0 && 0.5' />;
              <div>;
                <p className='font-medium text-green-900 dark:text-green-100'>;
                  Performance monitoring active;
                </p>;
                <p className='text-sm text-green-700 dark:text-green-300'>;
                  Real-time performance tracking is helping optimize your;
                  application;
                </p>;
              </div>;
            </div>;

            {metrics && metrics.bundleSize > 2 * 1024 * 1024 && (;
              <div className='flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded'>;
                <AlertTriangle className='w-5 h-5 text-yellow-600 mt-0 && 0.5' />;
                <div>;
                  <p className='font-medium text-yellow-900 dark:text-yellow-100'>;
                    Consider more aggressive code splitting;
                  </p>;
                  <p className='text-sm text-yellow-700 dark:text-yellow-300'>;
                    Bundle size is above 2MB. Consider implementing dynamic;
                    imports for heavy components;
                  </p>;
                </div>;
              </div>;
            )}

          </div>;
        </CardContent>;
      </Card>;
    </div>;
  );
} ;

          {chunks.length > 0 ? (
            <div className='space - y-2'>;
              {chunks.slice (0, 10).map ((chunk, index) => (
                <div;
                  key={chunk.name}
                  className='flex items - center justify - between p - 3 bg - gray - 50 dark:bg - gray - 800 rounded';
                >;
                  <div className='flex items - center gap - 3'>;
                    <span className='text - sm font - mono text - muted - foreground'>                      {index + 1}
                    </span>;
                    <div>;
                      <p className='font - medium text - sm'>{chunk.name}</p>;
                      <div className='flex items - center gap - 2'>;
                        <Badge variant='outline' className='text - xs'>;
                          {chunk.type}
                        </Badge>;
                        {chunk.cached && (
                          <Badge variant='secondary' className='text - xs'>;
                            cached;
                          </Badge>)}
                      </div>;
                    </div>;
                  </div>;
                  <div className='text - right'>;
                    <p className='font - medium'>{format_size (chunk.size)}</p>;
                    <p className='text - xs text - muted - foreground'>;
                      {chunk.load_time.to_fixed (0)}ms;
                    </p>;
                  </div>;
                </div>))}
              {chunks.length > 10 && (
                <p className='text - sm text - muted - foreground text - center pt - 2'>;
                  ... and {chunks.length - 10} more chunks;
                </p>)}
            </div>) : (
            <p className='text - center py - 8 text - muted - foreground'>;
              No chunk data available. Refresh to collect metrics.;
            </p>)}
        </CardContent>;
      </Card>;
      {/* Recommendations */}
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <TrendingUp className='w - 5 h - 5' />;
            Optimization Recommendations;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <div className='space - y-3'>;
            <div className='flex items - start gap - 3 p - 3 bg - blue - 50 dark:bg - blue - 900 / 20 rounded'>;
              <CheckCircle className='w - 5 h - 5 text - blue - 600 mt - 0.5' />;
              <div>;
                <p className='font - medium text - blue - 900 dark:text - blue - 100'>;
                  Bundle splitting implemented;
                </p>;
                <p className='text - sm text - blue - 700 dark:text - blue - 300'>;
                  Your bundle is properly split into framework, vendor, and;
                  application chunks;
                </p>;
              </div>;
            </div>;
            <div className='flex items - start gap - 3 p - 3 bg - green - 50 dark:bg - green - 900 / 20 rounded'>;
              <CheckCircle className='w - 5 h - 5 text - green - 600 mt - 0.5' />;
              <div>;
                <p className='font - medium text - green - 900 dark:text - green - 100'>;
                  Performance monitoring active;
                </p>;
                <p className='text - sm text - green - 700 dark:text - green - 300'>;
                  Real - time performance tracking is helping optimize your;
                  application;
                </p>;
              </div>;
            </div>;
            {metrics && metrics.bundle_size > 2 * 1024 * 1024 && (
              <div className='flex items - start gap - 3 p - 3 bg - yellow - 50 dark:bg - yellow - 900 / 20 rounded'>;
                <AlertTriangle className='w - 5 h - 5 text - yellow - 600 mt - 0.5' />;
                <div>;
                  <p className='font - medium text - yellow - 900 dark:text - yellow - 100'>;
                    Consider more aggressive code splitting;
                  </p>;
                  <p className='text - sm text - yellow - 700 dark:text - yellow - 300'>;
                    Bundle size is above 2MB. Consider implementing dynamic;
                    imports for heavy components;
                  </p>;
                </div>;
              </div>)}
          </div>;
        </CardContent>;
      </Card>;
    </div>);
}
}

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
