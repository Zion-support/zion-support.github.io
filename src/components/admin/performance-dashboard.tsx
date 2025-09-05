<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Progress } from '@/components/ui/progress',
import { Activity, Zap, Package, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, RefreshCw, BarChart3, Clock, Globe } from 'lucide-react'
import { bundleMonitor } from '@/utils/bundleMonitor',
import { logErrorToProduction, logInfo } from '@/utils/productionLogger',

interface PerformanceMetrics {
  bundleSize: number,
  loadTime: number,
  performanceScore: number,
  chunkCount: number,
  cacheHitRate: number,
  fcp: number, // First Contentful Paint
  lcp: number, // Largest Contentful Paint
  cls: number, // Cumulative Layout Shift
  fid: number, // First Input Delay
}

interface BundleChunk {
  name: string,
  size: number,
  loadTime: number,
  cached: boolean,
  type: string
}

export function PerformanceDashboard() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),
  const [chunks, setChunks] = useState<BundleChunk[]>([]),
  const [isLoading, setIsLoading] = useState(false),
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null),
=======
import React, {_useState, _useEffect} from 'react';

interface PerformanceMetrics {_bundleSize: number;
  loadTime: number;
  performanceScore: number;
  chunkCount: number;
  cacheHitRate: number;
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  cls: number; // Cumulative Layout Shift
  fid: number; // First Input Delay}

interface BundleChunk {_name: string;
  size: number;
  loadTime: number;
  cached: boolean;
  type: string;}

export function PerformanceDashboard() {_const [metrics, _setMetrics] = useState<PerformanceMetrics | null>(null);
  const [chunks, _setChunks] = useState<BundleChunk[]>([]);
  const [isLoading, _setIsLoading] = useState(false);
  const [lastUpdated, _setLastUpdated] = useState<Date | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _collectMetrics = async () => {
    try {
      // Collect performance metrics
<<<<<<< HEAD
      const memoryInfo = (performance as any).memory,
      const navigationEntry = window.window.window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
      const resourceCount = window.window.window.performance.getEntriesByType('resource').length,

      const performanceMetrics: PerformanceMetrics = {
        bundleSize: 0, // This would need to be calculated separately
        loadTime: navigationEntry ? navigationEntry.loadEventEnd - navigationEntry.fetchStart : 0,
        performanceScore: 0, // This would need to be calculated
        chunkCount: resourceCount,
        cacheHitRate: 0, // This would need to be calculated from resource timing
        fcp: 0, // First Contentful Paint - would need Performance Observer
        lcp: 0, // Largest Contentful Paint - would need Performance Observer  
        cls: 0, // Cumulative Layout Shift - would need Performance Observer
        fid: 0  // First Input Delay - would need Performance Observer
      },

      setMetrics(performanceMetrics),
      logInfo('Performance metrics collected successfully', { 
        loadTime: performanceMetrics.loadTime,
        resourceCount: performanceMetrics.chunkCount
      })
    } catch (error) {
      logErrorToProduction('Failed to collect performance metrics', error, {
        component: 'PerformanceDashboard',
        action: 'collectMetrics'
      }),
      // Set fallback metrics
      setMetrics({
        bundleSize: 0,
        loadTime: 0,
        performanceScore: 0,
        chunkCount: 0,
        cacheHitRate: 0,
        fcp: 0,
        lcp: 0,
        cls: 0,
        fid: 0
      })
=======
      const _memoryInfo = (performance as any).memory;
      const _navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const _resourceCount = performance.getEntriesByType('resource').length;

      const performanceMetrics: PerformanceMetrics = {
        bundleSize: 0, _// This would need to be calculated separately
        loadTime: navigationEntry ? navigationEntry.loadEventEnd - navigationEntry.fetchStart : 0, _performanceScore: 0, _// This would need to be calculated
        chunkCount: resourceCount, _cacheHitRate: 0, _// This would need to be calculated from resource timing
        fcp: 0, _// First Contentful Paint - would need Performance Observer
        lcp: 0, _// Largest Contentful Paint - would need Performance Observer  
        cls: 0, _// Cumulative Layout Shift - would need Performance Observer
        fid: 0  // First Input Delay - would need Performance Observer};

      setMetrics(performanceMetrics);
      logInfo('Performance metrics collected successfully', {_loadTime: performanceMetrics.loadTime, _resourceCount: performanceMetrics.chunkCount});
    } catch (error) {_logErrorToProduction('Failed to collect performance metrics', _error, _{
        component: 'PerformanceDashboard', _action: 'collectMetrics'});
      // Set fallback metrics
      setMetrics({_bundleSize: 0, _loadTime: 0, _performanceScore: 0, _chunkCount: 0, _cacheHitRate: 0, _fcp: 0, _lcp: 0, _cls: 0, _fid: 0});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const collectWebVitals = async (): Promise<Partial<PerformanceMetrics>> => {
    if (typeof window === 'undefined') return {},
=======
  const _collectWebVitals = async (): Promise<Partial<PerformanceMetrics>> => {_if (typeof window === 'undefined') return {};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    const vitals: Partial<PerformanceMetrics> = {},
    
    // Collect navigation timing
<<<<<<< HEAD
    const navigation = window.window.window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
    if (navigation) {
      vitals.fcp = navigation.loadEventEnd - navigation.loadEventStart,
      vitals.lcp = navigation.loadEventEnd - navigation.fetchStart
    }
=======
    const _navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {_vitals.fcp = navigation.loadEventEnd - navigation.loadEventStart;
      vitals.lcp = navigation.loadEventEnd - navigation.fetchStart;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Use PerformanceObserver for more accurate metrics
    if ('PerformanceObserver' in window) {_return new Promise(_(resolve) => {
        const _observer = new PerformanceObserver(_(list) => {
          list.getEntries().forEach(_(entry) => {
            if (entry.entryType === 'paint') {
              if (entry.name === 'first-contentful-paint') {
<<<<<<< HEAD
                vitals.fcp = entry.startTime
              }
            }
            if (entry.entryType === 'largest-contentful-paint') {
              vitals.lcp = entry.startTime
            }
            if (entry.entryType === 'layout-shift') {
              vitals.cls = (vitals.cls || 0) + (entry as any).value
            }
            if (entry.entryType === 'first-input') {
              vitals.fid = (entry as any).processingStart - entry.startTime
            }
          })
        }),
        
        observer.observe({ entryTypes: ['paintlargest-contentful-paintlayout-shiftfirst-input'] }),
        
        // Resolve after a short delay
        setTimeout(() => {
          observer.disconnect(),
          resolve(vitals)
        }, 2000)
      })
=======
                vitals.fcp = entry.startTime;}
            }
            if (entry.entryType === 'largest-contentful-paint') {_vitals.lcp = entry.startTime;}
            if (entry.entryType === 'layout-shift') {_vitals.cls = (vitals.cls || 0) + (entry as any).value;}
            if (entry.entryType === 'first-input') {_vitals.fid = (entry as any).processingStart - entry.startTime;}
          });
        });
        
        observer.observe({_entryTypes: ['paint', _'largest-contentful-paint', _'layout-shift', _'first-input']});
        
        // Resolve after a short delay
        setTimeout__(() => {_observer.disconnect();
          resolve(vitals);}, 2000);
      });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    
    return vitals
  },

<<<<<<< HEAD
  const collectChunkData = async (): Promise<BundleChunk[]> => {
    if (typeof window === 'undefined') return [],
    
    const resourceEntries = window.window.window.performance.getEntriesByType('resource') as PerformanceResourceTiming[],
    const scriptEntries = resourceEntries.filter(entry => 
=======
  const _collectChunkData = async (): Promise<BundleChunk[]> => {_if (typeof window === 'undefined') return [];
    
    const _resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const _scriptEntries = resourceEntries.filter(entry => 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      entry.name.includes('/_next/static/') && entry.name.endsWith('.js')
    ),

    return scriptEntries.map(entry => ({
<<<<<<< HEAD
      name: entry.name.split('/').pop()?.split('?')[0] || 'unknown',
      size: entry.transferSize || entry.encodedBodySize || 0,
      loadTime: entry.responseEnd - entry.requestStart,
      cached: entry.transferSize === 0,
      type: categorizeChunk(entry.name)
    })).sort((a, b) => b.size - a.size)
  },

  const categorizeChunk = (filename: string): string => {
    if (filename.includes('framework')) return 'framework',
    if (filename.includes('vendor')) return 'vendor',
    if (filename.includes('pages')) return 'page',
    if (filename.includes('chunks')) return 'chunk',
    return 'other'
  },

  const formatSize = (bytes: number): string => {
    if (bytes === 0) return '0 B',
    const k = 1024,
    const sizes = ['BKBMBGB'],
    const i = Math.floor(Math.log(bytes) / Math.log(k)),
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  },

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600',
    if (score >= 70) return 'text-yellow-600',
    return 'text-red-600'
  },

  const getScoreIcon = (score: number) => {
<<<<<<< HEAD
    if (score >= 90) return <CheckCircle className="w-4 h-4 text-green-600" />,
    if (score >= 70) return <AlertTriangle className="w-4 h-4 text-yellow-600" />,
    return <AlertTriangle className="w-4 h-4 text-red-600" />
  },
=======
    if (score >= 90) return <CheckCircle className=&quot;w-4 h-4 text-green-600&quot; />;
    if (score >= 70) return <AlertTriangle className=&quot;w-4 h-4 text-yellow-600&quot; />;
    return <AlertTriangle className=&quot;w-4 h-4 text-red-600&quot; />;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  useEffect(() => {
    collectMetrics(),
    const interval = setInterval(collectMetrics, 30000), // Update every 30 seconds

    return () => clearInterval(interval)
  }, []),

  return (
    <div className=&quot;space-y-6&quot;>
      {/* Header */}
      <div className=&quot;flex items-center justify-between&quot;>
=======
      name: entry.name.split('/').pop()?.split('?')[0] || 'unknown', _size: entry.transferSize || entry.encodedBodySize || 0, _loadTime: entry.responseEnd - entry.requestStart, _cached: entry.transferSize === 0, _type: categorizeChunk(entry.name)})).sort(_(a, _b) => b.size - a.size);
  };

  const _categorizeChunk = (filename: string): string => {_if (filename.includes('framework')) return 'framework';
    if (filename.includes('vendor')) return 'vendor';
    if (filename.includes('pages')) return 'page';
    if (filename.includes('chunks')) return 'chunk';
    return 'other';};

  const _formatSize = (bytes: number): string => {_if (bytes === 0) return '0 B';
    const _k = 1024;
    const _sizes = ['B', _'KB', _'MB', _'GB'];
    const _i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, _i)).toFixed(1)) + ' ' + sizes[i];};

  const _getScoreColor = (score: number): string => {_if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';};

  const _getScoreIcon = (_score: number) => {_if (score >= 90) return <CheckCircle className="w-4 h-4 text-green-600" />;
    if (score >= 70) return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    return <AlertTriangle className="w-4 h-4 text-red-600" />;};

  useEffect__(() => {_collectMetrics();
    const _interval = setInterval(collectMetrics, _30000); // Update every 30 seconds

    return () => clearInterval(interval);}, []);

  return (
    <div className="space-y-6">
      {_/* Header */}
      <div className="flex items-center justify-between">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <div>
          <h2 className=&quot;text-2xl font-bold&quot;>Performance Dashboard</h2>
          <p className=&quot;text-muted-foreground&quot;>
            Monitor bundle size, performance metrics, and optimization opportunities
          </p>
        </div>
        <Button onClick={_collectMetrics} disabled={_isLoading}>
          <RefreshCw className={_`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          {_isLoading ? 'Collecting...' : 'Refresh'}
        </Button>
      </div>

      {_/* Performance Score */}
      <Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <Zap className=&quot;w-5 h-5&quot; />
            Performance Score
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          {metrics ? (
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-center gap-4&quot;>
                {getScoreIcon(metrics.performanceScore)}
                <div className=&quot;flex-1&quot;>
                  <div className=&quot;flex items-center justify-between mb-2&quot;>
                    <span className=&quot;text-2xl font-bold&quot;>
                      {metrics.performanceScore}/100
=======
          {_metrics ? (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {getScoreIcon(metrics.performanceScore)}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">
                      {_metrics.performanceScore}/100
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                    <Badge variant={_metrics.performanceScore >= 90 ? 'default' : 'secondary'}>
                      {_metrics.performanceScore >= 90 ? 'Excellent' : 
                       metrics.performanceScore >= 70 ? 'Good' : 'Needs Improvement'}
                    </Badge>
                  </div>
<<<<<<< HEAD
                  <Progress value={metrics.performanceScore} className=&quot;h-2&quot; />
                </div>
              </div>
              
              {lastUpdated && (
                <p className=&quot;text-sm text-muted-foreground&quot;>
=======
                  <Progress value={_metrics.performanceScore} className="h-2" />
                </div>
              </div>
              
              {_lastUpdated && (
                <p className="text-sm text-muted-foreground">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Last updated: {lastUpdated.toLocaleString()}
                </p>
              )}
            </div>
          ) : (
            <div className=&quot;text-center py-8&quot;>
              <Clock className=&quot;w-8 h-8 mx-auto mb-2 text-muted-foreground&quot; />
              <p className=&quot;text-muted-foreground&quot;>Click refresh to collect metrics</p>
            </div>
          )}
        </CardContent>
      </Card>

<<<<<<< HEAD
      {/* Metrics Grid */}
      {metrics && (
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4&quot;>
=======
      {_/* Metrics Grid */}
      {_metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <Card>
            <CardContent className=&quot;p-4&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <Package className=&quot;w-4 h-4 text-blue-600&quot; />
                <span className=&quot;text-sm font-medium&quot;>Bundle Size</span>
              </div>
<<<<<<< HEAD
              <p className=&quot;text-2xl font-bold mt-2&quot;>{formatSize(metrics.bundleSize)}</p>
              <p className=&quot;text-xs text-muted-foreground&quot;>
                {metrics.chunkCount} chunks
=======
              <p className="text-2xl font-bold mt-2">{formatSize(metrics.bundleSize)}</p>
              <p className="text-xs text-muted-foreground">
                {_metrics.chunkCount} chunks
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className=&quot;p-4&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <Clock className=&quot;w-4 h-4 text-purple-600&quot; />
                <span className=&quot;text-sm font-medium&quot;>Load Time</span>
              </div>
<<<<<<< HEAD
              <p className=&quot;text-2xl font-bold mt-2&quot;>{metrics.loadTime.toFixed(0)}ms</p>
              <p className=&quot;text-xs text-muted-foreground&quot;>
=======
              <p className="text-2xl font-bold mt-2">{_metrics.loadTime.toFixed(0)}ms</p>
              <p className="text-xs text-muted-foreground">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Average chunk load time
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className=&quot;p-4&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <Globe className=&quot;w-4 h-4 text-green-600&quot; />
                <span className=&quot;text-sm font-medium&quot;>First Contentful Paint</span>
              </div>
<<<<<<< HEAD
              <p className=&quot;text-2xl font-bold mt-2&quot;>
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
=======
              <p className="text-2xl font-bold mt-2">
                {_metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
              <p className=&quot;text-xs text-muted-foreground&quot;>
                Time to first paint
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className=&quot;p-4&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <BarChart3 className=&quot;w-4 h-4 text-orange-600&quot; />
                <span className=&quot;text-sm font-medium&quot;>Largest Contentful Paint</span>
              </div>
<<<<<<< HEAD
              <p className=&quot;text-2xl font-bold mt-2&quot;>
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
=======
              <p className="text-2xl font-bold mt-2">
                {_metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
              <p className=&quot;text-xs text-muted-foreground&quot;>
                Time to largest paint
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {_/* Bundle Chunks */}
      <Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <Package className=&quot;w-5 h-5&quot; />
            Bundle Chunks
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          {chunks.length > 0 ? (
            <div className=&quot;space-y-2&quot;>
              {chunks.slice(0, 10).map((chunk, index) => (
                <div key={chunk.name} className=&quot;flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded&quot;>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <span className=&quot;text-sm font-mono text-muted-foreground&quot;>
                      {index + 1}
                    </span>
                    <div>
                      <p className=&quot;font-medium text-sm&quot;>{chunk.name}</p>
                      <div className=&quot;flex items-center gap-2&quot;>
                        <Badge variant=&quot;outline&quot; className=&quot;text-xs&quot;>
                          {chunk.type}
                        </Badge>
                        {chunk.cached && (
                          <Badge variant=&quot;secondary&quot; className=&quot;text-xs&quot;>
=======
          {_chunks.length > 0 ? (
            <div className="space-y-2">
              {chunks.slice(0, _10).map(_(chunk, _index) => (
                <div key={chunk.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-muted-foreground">
                      {_index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-sm">{_chunk.name}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {_chunk.type}
                        </Badge>
                        {_chunk.cached && (
                          <Badge variant="secondary" className="text-xs">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            cached
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
                  <div className=&quot;text-right&quot;>
                    <p className=&quot;font-medium&quot;>{formatSize(chunk.size)}</p>
                    <p className=&quot;text-xs text-muted-foreground&quot;>
                      {chunk.loadTime.toFixed(0)}ms
=======
                  <div className="text-right">
                    <p className="font-medium">{_formatSize(chunk.size)}</p>
                    <p className="text-xs text-muted-foreground">
                      {_chunk.loadTime.toFixed(0)}ms
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </p>
                  </div>
                </div>
              ))}
              
<<<<<<< HEAD
              {chunks.length > 10 && (
                <p className=&quot;text-sm text-muted-foreground text-center pt-2&quot;>
=======
              {_chunks.length > 10 && (
                <p className="text-sm text-muted-foreground text-center pt-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  ... and {chunks.length - 10} more chunks
                </p>
              )}
            </div>
          ) : (
            <p className=&quot;text-center py-8 text-muted-foreground&quot;>
              No chunk data available. Refresh to collect metrics.
            </p>
          )}
        </CardContent>
      </Card>

      {_/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <TrendingUp className=&quot;w-5 h-5&quot; />
            Optimization Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className=&quot;space-y-3&quot;>
            <div className=&quot;flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded&quot;>
              <CheckCircle className=&quot;w-5 h-5 text-blue-600 mt-0.5&quot; />
              <div>
                <p className=&quot;font-medium text-blue-900 dark:text-blue-100&quot;>
                  Bundle splitting implemented
                </p>
                <p className=&quot;text-sm text-blue-700 dark:text-blue-300&quot;>
                  Your bundle is properly split into framework, vendor, and application chunks
                </p>
              </div>
            </div>
            
            <div className=&quot;flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded&quot;>
              <CheckCircle className=&quot;w-5 h-5 text-green-600 mt-0.5&quot; />
              <div>
                <p className=&quot;font-medium text-green-900 dark:text-green-100&quot;>
                  Performance monitoring active
                </p>
                <p className=&quot;text-sm text-green-700 dark:text-green-300&quot;>
                  Real-time performance tracking is helping optimize your application
                </p>
              </div>
            </div>
            
<<<<<<< HEAD
            {metrics && metrics.bundleSize > 2 * 1024 * 1024 && (
              <div className=&quot;flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded&quot;>
                <AlertTriangle className=&quot;w-5 h-5 text-yellow-600 mt-0.5&quot; />
=======
            {_metrics && metrics.bundleSize > 2 * 1024 * 1024 && (
              <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <div>
                  <p className=&quot;font-medium text-yellow-900 dark:text-yellow-100&quot;>
                    Consider more aggressive code splitting
                  </p>
                  <p className=&quot;text-sm text-yellow-700 dark:text-yellow-300&quot;>
                    Bundle size is above 2MB. Consider implementing dynamic imports for heavy components
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 