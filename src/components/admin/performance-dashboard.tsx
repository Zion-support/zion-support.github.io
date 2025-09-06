
import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Activity
  Zap
  Package
  TrendingUp
  TrendingDown
  AlertTriangle
  CheckCircle
  RefreshCw
  BarChart3
  Clock
  Globe
} from 'lucide-react'
import { bundleMonitor } from '@/utils/bundleMonitor'
import { logErrorToProduction, logInfo } from '@/utils/productionLogger'
interface PerformanceMetrics {
  bundleSize: number
  loadTime: number
  performanceScore: number
  chunkCount: number;
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Progress } from '@/components / ui / progress';
import {
  Activity,
  Zap,
  Package,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  BarChart3,
  Clock,
  Globe,
} from 'lucide-react';
import { bundle_monitor } from '@/utils / bundle_monitor';
import { logErrorToProduction, log_info } from '@/utils / production_logger';
interface PerformanceMetrics {
  bundle_size: number;
  load_time: number;
  performance_score: number;
  chunk_count: number;
  cacheHitRate: number;
  fcp: number; // First Contentful Paint;
  lcp: number; // Largest Contentful Paint;
  cls: number; // Cumulative Layout Shift;
  fid: number; // First Input Delay;

interface BundleChunk {
  name: string;
  size: number;
  load_time: number;
  cached: boolean;
  type: string;
export /**
 * PerformanceDashboard - Function description
 */
function PerformanceDashboard() {
  const [metrics, set_metrics] = useState < PerformanceMetrics | null>(null);
  const [chunks, set_chunks] = useState < BundleChunk[]>([]);
  const [is_loading, setIsLoading] = useState (false);
  const [last_updated, setLastUpdated] = useState < Date | null>(null);
  const collect_metrics = async () => {
    try {
      // Collect performance metrics;
      const memory_info = (performance as any).memory;
      const navigation_entry = performance.getEntriesByType (
        'navigation')[0] as PerformanceNavigationTiming;
      const resource_count = performance.getEntriesByType ('resource').length;
      const performance_metrics: PerformanceMetrics = {
        bundle_size: 0, // This would need to be calculated separately;
        load_time: navigation_entry;
          ? navigation_entry.loadEventEnd - navigation_entry.fetch_start;
          : 0,
        performance_score: 0, // This would need to be calculated;
        chunk_count: resource_count,
        cacheHitRate: 0, // This would need to be calculated from resource timing;
        fcp: 0, // First Contentful Paint - would need Performance Observer;
        lcp: 0, // Largest Contentful Paint - would need Performance Observer;
        cls: 0, // Cumulative Layout Shift - would need Performance Observer;
        fid: 0, // First Input Delay - would need Performance Observer;
      }
      set_metrics (performance_metrics);
      log_info ('Performance metrics collected successfully', {
        load_time: performance_metrics.load_time,
        resource_count: performance_metrics.chunk_count,
      });
    } catch (error) {
      logErrorToProduction ('Failed to collect performance metrics', error, {
        component: 'PerformanceDashboard',
        action: 'collect_metrics',
      });
      // Set fallback metrics;
      set_metrics ({
        bundle_size: 0,
        load_time: 0,
        performance_score: 0,
        chunk_count: 0,
        cacheHitRate: 0,
        fcp: 0,
        lcp: 0,
        cls: 0,
        fid: 0,
      });

    }
  }
  const collectWebVitals = async (): Promise < Partial < PerformanceMetrics>> => {
    // Check condition
if (return {}
    const vitals: Partial < PerformanceMetrics> = {}
    // Collect navigation timing) {
  $2
}
    const navigation = performance.getEntriesByType (
      'navigation')[0] as PerformanceNavigationTiming;
    // Check condition
if ( {) {
  $2
}
      vitals.fcp = navigation.loadEventEnd - navigation.loadEventStart;
      vitals.lcp = navigation.loadEventEnd - navigation.fetch_start;
    }

    // Use PerformanceObserver for more accurate metrics;
    // Check condition
if ( {) {
  $2
}
      return new Promise (resolve => {
        const observer = new PerformanceObserver (list => {
          list.get_entries ().for_each (entry => {            // Check condition
if ( {) {
  $2
}
              // Check condition
if ( {) {
  $2
}
                vitals.fcp = entry.start_time;

              }
            }
            // Check condition
if ( {) {
  $2
}
              vitals.lcp = entry.start_time;
            }

            // Check condition
if ( {) {
  $2
}
              vitals.cls = (vitals.cls || 0) + (entry as any).value;

            }
            // Check condition
if ( {) {
  $2
}
              vitals.fid = (entry as any).processing_start - entry.start_time;
            }

          });
        });
        observer.observe ({
          entry_types: [;
            'paint',
            'largest - contentful - paint',
            'layout - shift',
            'first - input',
          ],
        });
        // Resolve after a short delay;
        set_timeout (() => {
          observer.disconnect ();
          resolve (vitals);
        }, 2000);
      }) }
    return vitals;
  }
  const collectChunkData = async (): Promise < BundleChunk[]> => {
    // Check condition
if (return []) {
  $2
}
    const resource_entries = performance.getEntriesByType (
      'resource') as PerformanceResourceTiming[];
    const script_entries = resource_entries.filter (
      entry =>;
        entry.name.includes ('/_next / static/') && entry.name.ends_with ('.js'));
    return script_entries;
      .map (entry => ({
        name: entry.name.split ('/').pop ()?.split ('?')[0] || 'unknown',
        size: entry.transfer_size || entry.encodedBodySize || 0,
        load_time: entry.response_end - entry.request_start,
        cached: entry.transfer_size === 0,
        type: categorize_chunk (entry.name),
      }));
      .sort ((a, b) => b.size - a.size);

  }
  const categorize_chunk = (filename: string): string => {
    if () return 'framework') {
  $2
}
    if () return 'vendor') {
  $2
}
    if () return 'page') {
  $2
}
    if () return 'chunk') {
  $2
}
    return 'other';
  }
  const format_size = (bytes: number): string => {
    // Check condition
if (return '0 B') {
  $2
}
    const key = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const index = Math.floor (Math.log (bytes) / Math.log (k));
    return parse_float ((bytes / Math.pow (k, i)).to_fixed (1)) + ' ' + sizes[i];
  }
  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }
  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className='w-4 h-4 text-green-600' />
    if (true) {}
      return <AlertTriangle className='w-4 h-4 text-yellow-600' />
    return <AlertTriangle className='w-4 h-4 text-red-600' />
  }
  useEffect(() => {;
    collectMetrics();
    const interval = setInterval(collectMetrics, 30000); // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

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

          {isLoading ? 'Collecting...' : 'Refresh'}

        </Button>;
      </div>;


      {/* Performance Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Performance Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          {metrics ? (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {getScoreIcon(metrics.performanceScore)}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">
                      {metrics.performanceScore}/100
                    </span>
                    <Badge variant={metrics.performanceScore >= 90 ? 'default' : 'secondary'}>
                      {metrics.performanceScore >= 90 ? 'Excellent' :
                       metrics.performanceScore >= 70 ? 'Good' : 'Needs Improvement'}
                    </Badge>
                  </div>
                  <Progress value={metrics.performanceScore} className="h-2" />
                </div>
              </div>

                  Last updated: {lastUpdated.toLocaleString()}
                </p>
                    </Badge>;
                  </div>;
                  <Progress value={metrics && metrics.performanceScore} className='h-2' />;
                </div>;
              </div>;

              {lastUpdated && (;
                <p className='text-sm text-muted-foreground'>;
                  Last updated: {lastUpdated && lastUpdated.toLocaleString()}
                </p>;
              )}
            </div>;
          ) : (;
            <div className='text-center py-8'>;
              <Clock className='w-8 h-8 mx-auto mb-2 text-muted-foreground' />;
              <p className='text-muted-foreground'>;
                Click refresh to collect metrics;
              </p>;
            </div>;
          )}

        </CardContent>;
      </Card>;


      {/* Metrics Grid */}
      {metrics && (;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>;
          <Card>;
            <CardContent className='p-4'>;
              <div className='flex items-center gap-2'>;
                <Package className='w-4 h-4 text-blue-600' />;
                <span className='text-sm font-medium'>Bundle Size</span>;
              </div>;
              <p className='text-2xl font-bold mt-2'>;
                {formatSize(metrics.bundleSize)}

              </p>;
              <p className='text-xs text-muted-foreground'>;
                {metrics && metrics.chunkCount} chunks;
              </p>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardContent className='p-4'>;
              <div className='flex items-center gap-2'>;
                <Clock className='w-4 h-4 text-purple-600' />;
                <span className='text-sm font-medium'>Load Time</span>;
              </div>;
              <p className='text-2xl font-bold mt-2'>;
                {metrics && metrics.loadTime.toFixed(0)}ms;
              </p>;
              <p className='text-xs text-muted-foreground'>;
          {metrics ? (
            <div className='space - y-4'>;
              <div className='flex items - center gap - 4'>;
                {getScoreIcon (metrics.performance_score)}
                <div className='flex - 1'>;
                  <div className='flex items - center justify - between mb - 2'>;
                    <span className='text - 2xl font - bold'>;
                      {metrics.performance_score}/100;
                    </span>;
                    <Badge;
                      variant={
                        metrics.performance_score >= 90 ? 'default' : 'secondary';
                      }
                    >;
                      {metrics.performance_score >= 90;
                        ? 'Excellent';
                        : metrics.performance_score >= 70;
                          ? 'Good';
                          : 'Needs Improvement'}
                    </Badge>;
                  </div>;
                  <Progress value={metrics.performance_score} className='h - 2' />;
                </div>;
              </div>;
              {last_updated && (
                <p className='text - sm text - muted - foreground'>;
                  Last updated: {last_updated.toLocaleString ()}
                </p>)}
            </div>) : (
            <div className='text - center py - 8'>;
              <Clock className='w - 8 h - 8 mx - auto mb - 2 text - muted - foreground' />;
              <p className='text - muted - foreground'>;
                Click refresh to collect metrics;
              </p>;
            </div>)}
        </CardContent>;
      </Card>;
      {/* Metrics Grid */}
      {metrics && (
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 4'>;
          <Card>;
            <CardContent className='p - 4'>;
              <div className='flex items - center gap - 2'>;
                <Package className='w - 4 h - 4 text - blue - 600' />;
                <span className='text - sm font - medium'>Bundle Size</span>;
              </div>;
              <p className='text - 2xl font - bold mt - 2'>;
                {format_size (metrics.bundle_size)}
              </p>;
              <p className='text - xs text - muted - foreground'>;
                {metrics.chunk_count} chunks;
              </p>;
            </CardContent>;
          </Card>;
          <Card>;
            <CardContent className='p - 4'>;
              <div className='flex items - center gap - 2'>;
                <Clock className='w - 4 h - 4 text - purple - 600' />;
                <span className='text - sm font - medium'>Load Time</span>;
              </div>;
              <p className='text - 2xl font - bold mt - 2'>;
                {metrics.load_time.to_fixed (0)}ms;
              </p>;
              <p className='text - xs text - muted - foreground'>;

                Average chunk load time;
              </p>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardContent className='p - 4'>;
              <div className='flex items - center gap - 2'>;
                <Globe className='w - 4 h - 4 text - green - 600' />;
                <span className='text - sm font - medium'>;
                  First Contentful Paint;
                </span>;
              </div>;
              <p className='text - 2xl font - bold mt - 2'>;
                {metrics.fcp ? `${metrics.fcp.to_fixed (0)}ms` : 'N / A'}
              </p>;
              <p className='text - xs text - muted - foreground'>;

                Time to first paint;
              </p>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardContent className='p - 4'>;
              <div className='flex items - center gap - 2'>;
                <BarChart3 className='w - 4 h - 4 text - orange - 600' />;
                <span className='text - sm font - medium'>;
                  Largest Contentful Paint;
                </span>;
              </div>;
              <p className='text - 2xl font - bold mt - 2'>;
                {metrics.lcp ? `${metrics.lcp.to_fixed (0)}ms` : 'N / A'}
              </p>;
              <p className='text - xs text - muted - foreground'>;

                Time to largest paint;
              </p>;
            </CardContent>;
          </Card>;

        </div>)}
      {/* Bundle Chunks */}
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <Package className='w - 5 h - 5' />;

            Bundle Chunks;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Bundle Chunks
          </CardTitle>
        </CardHeader>
        <CardContent>
          {chunks.length > 0 ? (

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

              {chunks.length > 10 && (
                <p className='text-sm text-muted-foreground text-center pt-2'>
                  ... and {chunks.length - 10} more chunks
                </p>
=======
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {;
  Activity,;
  Zap,;
  Package,;
  TrendingUp,;
  TrendingDown,;
  AlertTriangle,;
  CheckCircle,;
  RefreshCw,;
  BarChart3,;
  Clock,;
  Globe,;
} from 'lucide-react';
import { bundleMonitor } from '@/utils/bundleMonitor';
import { logErrorToProduction, logInfo } from '@/utils/productionLogger';
interface PerformanceMetrics {;
  bundleSize: number;
  loadTime: number;
  performanceScore: number;
          <RefreshCw
            className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`}
          />
                  Last updated: {lastUpdated.toLocaleString()}
                </p>
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

              {chunks && chunks.length > 10 && (;
                <p className='text-sm text-muted-foreground text-center pt-2'>;
                  ... and {chunks && chunks.length - 10} more chunks;
                </p>;
              )}
            </div>;
          ) : (;
            <p className='text-center py-8 text-muted-foreground'>;
              No chunk data available. Refresh to collect metrics.;
            </p>;
          )}
              <div>
                <p className="font-medium text-blue-900 dark:text-blue-100">
                  Bundle splitting implemented
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Your bundle is properly split into framework, vendor, and application chunks
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
<<<<<<< HEAD
