<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }
            }
            // Check condition
if ( {) {
  $2
}
              vitals.lcp = entry.start_time;
            }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            // Check condition
if ( {) {
  $2
}
              vitals.cls = (vitals.cls || 0) + (entry as any).value;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }
            // Check condition
if ( {) {
  $2
}
              vitals.fid = (entry as any).processing_start - entry.start_time;
            }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  chunkCount: number;
  cacheHitRate: number;
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  cls: number; // Cumulative Layout Shift
  fid: number; // First Input Delay
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface BundleChunk {
  name: string;
  size: number;
<<<<<<< HEAD
  loadTime: number;
  cached: boolean;
  type: string
export function PerformanceDashboard() {

  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [chunks, setChunks] = useState<BundleChunk[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const collectMetrics = async () => {
    try {
      // Collect performance metrics
      const memoryInfo = (performance as any).memory
      const navigationEntry = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming
      const resourceCount = performance.getEntriesByType('resource').length
      const performanceMetrics: PerformanceMetrics = {
        bundleSize: 0, // This would need to be calculated separately
        loadTime: navigationEntry
          ? navigationEntry.loadEventEnd - navigationEntry.fetchStart
          : 0
        performanceScore: 0, // This would need to be calculated
        chunkCount: resourceCount
        cacheHitRate: 0, // This would need to be calculated from resource timing
        fcp: 0, // First Contentful Paint - would need Performance Observer
        lcp: 0, // Largest Contentful Paint - would need Performance Observer
        cls: 0, // Cumulative Layout Shift - would need Performance Observer
        fid: 0, // First Input Delay - would need Performance Observer
      }
      setMetrics(performanceMetrics)
      logInfo('Performance metrics collected successfully', {
        loadTime: performanceMetrics.loadTime
        resourceCount: performanceMetrics.chunkCount
      })
    } catch (error) {
      logErrorToProduction('Failed to collect performance metrics', error, {
        component: 'PerformanceDashboard'
        action: 'collectMetrics'
      })
      // Set fallback metrics
      setMetrics({
        bundleSize: 0
        loadTime: 0
        performanceScore: 0
        chunkCount: 0
        cacheHitRate: 0
        fcp: 0
        lcp: 0
        cls: 0
        fid: 0
      })
    }
  }
  const collectWebVitals = async (): Promise<Partial<PerformanceMetrics>> => {
    if (typeof window === 'undefined') return {}
    const vitals: Partial<PerformanceMetrics> = {}
    // Collect navigation timing
    const navigation = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming
    if (navigation) {
      vitals.fcp = navigation.loadEventEnd - navigation.loadEventStart
      vitals.lcp = navigation.loadEventEnd - navigation.fetchStart
    }
    // Use PerformanceObserver for more accurate metrics
    if ('PerformanceObserver' in window) {
      return new Promise(resolve => {
        const observer = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {            if (entry.entryType === 'paint') {
              if (entry.name === 'first-contentful-paint') {
                vitals.fcp = entry.startTime
              }
            }
            if (entry.entryType === 'largest-contentful-paint') {
              vitals.lcp = entry.startTime
            }
            if (entry.entryType === 'layout-shift') {
              vitals.cls = (vitals.cls |0) + (entry as any).value
            }
            if (entry.entryType === 'first-input') {
              vitals.fid = (entry as any).processingStart - entry.startTime
            }
          })
        })
        observer.observe({
          entryTypes: [
            'paint'
            'largest-contentful-paint'
            'layout-shift'
            'first-input'
          ]
        })
        // Resolve after a short delay
        setTimeout(() => {
          observer.disconnect()
          resolve(vitals)
        }, 2000)
      }) }
    return vitals
  }
  const collectChunkData = async (): Promise<BundleChunk[]> => {
    if (typeof window === 'undefined') return []
    const resourceEntries = performance.getEntriesByType(
      'resource'
    ) as PerformanceResourceTiming[]
    const scriptEntries = resourceEntries.filter(
      entry =>
        entry.name.includes('/_next/static/') && entry.name.endsWith('.js')
    )
    return scriptEntries
      .map(entry => ({
        name: entry.name.split('/').pop()?.split('?')[0] |'unknown'
        size: entry.transferSize |entry.encodedBodySize |0
        loadTime: entry.responseEnd - entry.requestStart
        cached: entry.transferSize === 0
        type: categorizeChunk(entry.name)
      }))
      .sort((a, b) => b.size - a.size)
  }
  const categorizeChunk = (filename: string): string => {
    if (filename.includes('framework')) return 'framework'
    if (filename.includes('vendor')) return 'vendor'
    if (filename.includes('pages')) return 'page'
    if (filename.includes('chunks')) return 'chunk'
    return 'other'
  }
  const formatSize = (bytes: number): string => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import React, { useState, useEffect } from 'react',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { Progress } from '@/components/ui/progress',;
import { Activity, Zap, Package, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, RefreshCw, BarChart3, Clock, Globe } from 'lucide-react';
import { bundleMonitor } from '@/utils/bundleMonitor',;
import { logErrorToProduction, logInfo } from '@/utils/productionLogger',;
interface PerformanceMetrics {;
  bundleSize: number,;
  loadTime: number,;
  performanceScore: number,;
  chunkCount: number,;
  cacheHitRate: number,;
  fcp: number, // First Contentful Paint;
  lcp: number, // Largest Contentful Paint;
  cls: number, // Cumulative Layout Shift;
  fid: number, // First Input Delay;
}
<<<<<<< HEAD
  type: string;
=======
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
    // Check condition
if (return 'text - green - 600') {
  $2
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Check condition
if (return 'text - yellow - 600') {
  $2
}
    return 'text - red - 600';
  }
  const getScoreIcon = (score: number) =>: any {
    // Check condition
if (return <CheckCircle className='w - 4 h - 4 text - green - 600' />) {
  $2
}
    // Check condition
if (
      return <AlertTriangle className='w - 4 h - 4 text - yellow - 600' />) {
  $2
}
    return <AlertTriangle className='w - 4 h - 4 text - red - 600' />;
  }

  type: string;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function PerformanceDashboard() {;
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [chunks, setChunks] = useState<BundleChunk[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const collectMetrics = async () => {;
    try {;
      // Collect performance metrics;
      const memoryInfo = (performance as any).memory;
      const navigationEntry = performance && performance.getEntriesByType(;
        'navigation';
      )[0] as PerformanceNavigationTiming;
      const resourceCount = performance && performance.getEntriesByType('resource').length;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const performanceMetrics: PerformanceMetrics = {;
        bundleSize: 0, // This would need to be calculated separately;
        loadTime: navigationEntry;
          ? navigationEntry && navigationEntry.loadEventEnd - navigationEntry && navigationEntry.fetchStart;
          : 0,;
<<<<<<< HEAD
<<<<<<< HEAD
;
interface BundleChunk {;
  name: string,;
  size: number,;
  loadTime: number,;
  cached: boolean,;
  type: string;
}
;
export function PerformanceDashboard() {;
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),;
  const [chunks, setChunks] = useState<BundleChunk[]>([]),;
  const [isLoading, setIsLoading] = useState(false),;
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null),;
  const collectMetrics = async () => {;
    try {;
      // Collect performance metrics;
      const memoryInfo = (performance as any).memory,;
      const navigationEntry = window.window.window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,;
      const resourceCount = window.window.window.performance.getEntriesByType('resource').length,;
      const performanceMetrics: PerformanceMetrics = {;
        bundleSize: 0, // This would need to be calculated separately;
        loadTime: navigationEntry ? navigationEntry.loadEventEnd - navigationEntry.fetchStart : 0,;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        performanceScore: 0, // This would need to be calculated;
        chunkCount: resourceCount,;
        cacheHitRate: 0, // This would need to be calculated from resource timing;
        fcp: 0, // First Contentful Paint - would need Performance Observer;
        lcp: 0, // Largest Contentful Paint - would need Performance Observer;
        cls: 0, // Cumulative Layout Shift - would need Performance Observer;
<<<<<<< HEAD
<<<<<<< HEAD
        fid: 0  // First Input Delay - would need Performance Observer;
      },;
      setMetrics(performanceMetrics),;
      logInfo('Performance metrics collected successfully', {;
        loadTime: performanceMetrics.loadTime,;
        resourceCount: performanceMetrics.chunkCount;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        fid: 0, // First Input Delay - would need Performance Observer;
      };

      setMetrics(performanceMetrics);
      logInfo('Performance metrics collected successfully', {;
        loadTime: performanceMetrics && performanceMetrics.loadTime,;
        resourceCount: performanceMetrics && performanceMetrics.chunkCount,;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });
    } catch (error) {;
      logErrorToProduction('Failed to collect performance metrics', error, {;
        component: 'PerformanceDashboard',;
<<<<<<< HEAD
<<<<<<< HEAD
        action: 'collectMetrics';
      }),;
=======
        action: 'collectMetrics',;
      });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        action: 'collectMetrics',;
      });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Set fallback metrics;
      setMetrics({;
        bundleSize: 0,;
        loadTime: 0,;
        performanceScore: 0,;
        chunkCount: 0,;
        cacheHitRate: 0,;
        fcp: 0,;
        lcp: 0,;
        cls: 0,;
<<<<<<< HEAD
<<<<<<< HEAD
        fid: 0;
      });
    }
  },;
  const collectWebVitals = async (): Promise<Partial<PerformanceMetrics>> => {;
    if (typeof window === 'undefined') return {},;
    const vitals: Partial<PerformanceMetrics> = {},;
    // Collect navigation timing;
    const navigation = window.window.window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,;
    if (navigation) {;
      vitals.fcp = navigation.loadEventEnd - navigation.loadEventStart,;
      vitals.lcp = navigation.loadEventEnd - navigation.fetchStart;
    }
;
    // Use PerformanceObserver for more accurate metrics;
    if ('PerformanceObserver' in window) {;
      return new Promise((resolve) => {;
        const observer = new PerformanceObserver((list) => {;
          list.getEntries().forEach((entry) => {;
            if (entry.entryType === 'paint') {;
              if (entry.name === 'first-contentful-paint') {;
                vitals.fcp = entry.startTime;
              }
            }
            if (entry.entryType === 'largest-contentful-paint') {;
              vitals.lcp = entry.startTime;
            }
            if (entry.entryType === 'layout-shift') {;
              vitals.cls = (vitals.cls || 0) + (entry as any).value;
            }
            if (entry.entryType === 'first-input') {;
              vitals.fid = (entry as any).processingStart - entry.startTime;
            }
          });
        }),;
        observer.observe({ entryTypes: ['paintlargest-contentful-paintlayout-shiftfirst-input'] }),;
        // Resolve after a short delay;
        setTimeout(() => {;
          observer.disconnect(),;
          resolve(vitals);
        }, 2000);
      });
    }
    
    return vitals
  },

  const collectChunkData = async (): Promise<BundleChunk[]> => {
    if (typeof window === 'undefined') return [],
    
    const resourceEntries = window.window.window.performance.getEntriesByType('resource') as PerformanceResourceTiming[],
    const scriptEntries = resourceEntries.filter(entry => 
      entry.name.includes('/_next/static/') && entry.name.endsWith('.js')
    ),

    return scriptEntries.map(entry => ({
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
    if (score >= 90) return <CheckCircle className="w-4 h-4 text-green-600" />,
    if (score >= 70) return <AlertTriangle className="w-4 h-4 text-yellow-600" />,
    return <AlertTriangle className="w-4 h-4 text-red-600" />
  },

  useEffect(() => {
    collectMetrics(),
    const interval = setInterval(collectMetrics, 30000), // Update every 30 seconds

    return () => clearInterval(interval)
  }, []),
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        fid: 0,;
      });
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
          <RefreshCw
            className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`}
          />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <RefreshCw
            className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`}
          />
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
;
<<<<<<< HEAD
              {lastUpdated && (
                <p className='text-sm text-muted-foreground'>
ursor/fix-website-loading-errors-and-merge-6662
=======

          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return vitals;
  };
  const collectChunkData = async (): Promise<BundleChunk[]> => {;
    if (typeof window === 'undefined') return [];
=======
    return vitals;
  };

  const collectChunkData = async (): Promise<BundleChunk[]> => {;
    if (typeof window === 'undefined') return [];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const resourceEntries = performance && performance.getEntriesByType(;
      'resource';
    ) as PerformanceResourceTiming[];
    const scriptEntries = resourceEntries && resourceEntries.filter(;
      entry =>;
        entry && entry.name.includes('/_next/static/') && entry && entry.name.endsWith('.js');
    );
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return scriptEntries;
      .map(entry => ({;
        name: entry && entry.name.split('/').pop()?.split('?')[0] || 'unknown',;
        size: entry && entry.transferSize || entry && entry.encodedBodySize || 0,;
        loadTime: entry && entry.responseEnd - entry && entry.requestStart,;
        cached: entry && entry.transferSize === 0,;
        type: categorizeChunk(entry && entry.name),;
      }));
      .sort((a, b) => b && b.size - a && a.size);
  };
  const categorizeChunk = (filename: string): string => {;
    if (filename && filename.includes('framework')) return 'framework';
    if (filename && filename.includes('vendor')) return 'vendor';
    if (filename && filename.includes('pages')) return 'page';
    if (filename && filename.includes('chunks')) return 'chunk';
    return 'other';
  };
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const formatSize = (bytes: number): string => {;
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math && Math.floor(Math && Math.log(bytes) / Math && Math.log(k));
    return parseFloat((bytes / Math && Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getScoreColor = (score: number): string => {;
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getScoreIcon = (score: number) => {;
    if (score >= 90) return <CheckCircle className='w-4 h-4 text-green-600' />;
    if (score >= 70);
      return <AlertTriangle className='w-4 h-4 text-yellow-600' />;
    return <AlertTriangle className='w-4 h-4 text-red-600' />;
  };
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

        <Button onClick={collectMetrics} disabled={isLoading}>;
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {isLoading ? 'Collecting...' : 'Refresh'}

        </Button>;
      </div>;


<<<<<<< HEAD
        </Button>;
      </div>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Performance Score */}
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <Zap className='w-5 h-5' />;
        <Button on_click={collect_metrics} disabled={is_loading}>;
          <RefreshCw;
            className={`w - 4 h - 4 mr - 2 ${is_loading ? 'animate - spin' : ''}`}
          />;
          {is_loading ? 'Collecting...' : 'Refresh'}
        </Button>;
      </div>;
      {/* Performance Score */}
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <Zap className='w - 5 h - 5' />;
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { Progress } from '@/components/ui/progress',;
import { Activity, Zap, Package, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, RefreshCw, BarChart3, Clock, Globe } from 'lucide-react';
import { bundleMonitor } from '@/utils/bundleMonitor',;
import { logErrorToProduction, logInfo } from '@/utils/productionLogger',;
;
interface PerformanceMetrics {;
  bundleSize:number,;
  loadTime:number,;
  performanceScore:number,;
  chunkCount:number,;
  cacheHitRate:number,;
  fcp:number, // First Contentful Paint;
  lcp:number, // Largest Contentful Paint;
  cls:number, // Cumulative Layout Shift;
  fid:number, // First Input Delay;}
;
interface BundleChunk {;
  name:string,;
  size:number,;
  loadTime:number,;
  cached:boolean,;
  type:string;
}
;
export function PerformanceDashboard() {;
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),;
  const [chunks, setChunks] = useState<BundleChunk[]>([]),;
  const [isLoading, setIsLoading] = useState(false),;
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null),;
;
  const collectMetrics = async () => {;
    try {;
      // Collect performance metrics;
      const memoryInfo = (performance as any).memory,;
      const navigationEntry = window.window.window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,;
      const resourceCount = window.window.window.performance.getEntriesByType('resource').length,;
;
      const performanceMetrics:PerformanceMetrics = {;
        bundleSize:0, // This would need to be calculated separately;
        loadTime:navigationEntry ? navigationEntry.loadEventEnd - navigationEntry.fetchStart :0,;
        performanceScore:0, // This would need to be calculated;
        chunkCount:resourceCount,;
        cacheHitRate:0, // This would need to be calculated from resource timing;
        fcp:0, // First Contentful Paint - would need Performance Observer;
        lcp:0, // Largest Contentful Paint - would need Performance Observer  ;
        cls:0, // Cumulative Layout Shift - would need Performance Observer;
        fid:0  // First Input Delay - would need Performance Observer;
      },;
;
      setMetrics(performanceMetrics),;
      logInfo('Performance metrics collected successfully', { ;
        loadTime:performanceMetrics.loadTime,;
        resourceCount:performanceMetrics.chunkCount;
      }),;
    } catch (error) {;
      logErrorToProduction('Failed to collect performance metrics', error, {;
        component:'PerformanceDashboard',;
        action:'collectMetrics';
      }),;
      // Set fallback metrics;
      setMetrics({;
        bundleSize:0,;
        loadTime:0,;
        performanceScore:0,;
        chunkCount:0,;
        cacheHitRate:0,;
        fcp:0,;
        lcp:0,;
        cls:0,;
        fid:0;
      }),;
    }
  },;
;
  const collectWebVitals = async ():Promise<Partial<PerformanceMetrics>> => {;
    if (typeof window === 'undefined') return {},;
    ;
    const vitals:Partial<PerformanceMetrics> = {},;
    ;
    // Collect navigation timing;
    const navigation = window.window.window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,;
    if (navigation) {;
      vitals.fcp = navigation.loadEventEnd - navigation.loadEventStart,;
      vitals.lcp = navigation.loadEventEnd - navigation.fetchStart,;
    }
    ;
    // Use PerformanceObserver for more accurate metrics;
    if ('PerformanceObserver' in window) {;
      return new Promise((resolve) => {;
        const observer = new PerformanceObserver((list) => {;
          list.getEntries().forEach((entry) => {;
            if (entry.entryType === 'paint') {;
              if (entry.name === 'first-contentful-paint') {;
                vitals.fcp = entry.startTime,;
              }
            }
            if (entry.entryType === 'largest-contentful-paint') {;
              vitals.lcp = entry.startTime,;
            }
            if (entry.entryType === 'layout-shift') {;
              vitals.cls = (vitals.cls || 0) + (entry as any).value,;
            }
            if (entry.entryType === 'first-input') {;
              vitals.fid = (entry as any).processingStart - entry.startTime,;
            }
          }),;
        }),;
        ;
        observer.observe({ entryTypes:['paintlargest-contentful-paint', 'layout-shiftfirst-input'] }),;
        ;
        // Resolve after a short delay;
        setTimeout(() => {;
          observer.disconnect(),;
          resolve(vitals),;
        }, 2000),;
      }),;
    }
    ;
    return vitals,;
  },;
;
  const collectChunkData = async ():Promise<BundleChunk[]> => {;
    if (typeof window === 'undefined') return [],;
    ;
    const resourceEntries = window.window.window.performance.getEntriesByType('resource') as PerformanceResourceTiming[],;
    const scriptEntries = resourceEntries.filter(entry => ;
      entry.name.includes('/_next/static/') && entry.name.endsWith('.js');
    ),;
;
    return scriptEntries.map(entry => ({;
      name:entry.name.split('/').pop()?.split('?')[0] || 'unknown',;
      size:entry.transferSize || entry.encodedBodySize || 0,;
      loadTime:entry.responseEnd - entry.requestStart,;
      cached:entry.transferSize === 0,;
      type:categorizeChunk(entry.name);
    })).sort((a, b) => b.size - a.size),;
  },;
;
  const categorizeChunk = (filename:string):string => {;
    if (filename.includes('framework')) return 'framework',;
    if (filename.includes('vendor')) return 'vendor',;
    if (filename.includes('pages')) return 'page',;
    if (filename.includes('chunks')) return 'chunk',;
    return 'other';
  },;
;
  const formatSize = (bytes:number):string => {;
    if (bytes === 0) return '0 B',;
    const k = 1024,;
    const sizes = ['BKB', 'MBGB'],;
    const i = Math.floor(Math.log(bytes) / Math.log(k)),;
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i],;
  },;
;
  const getScoreColor = (score:number):string => {;
    if (score >= 90) return 'text-green-600',;
    if (score >= 70) return 'text-yellow-600',;
    return 'text-red-600';
  },;
;
  const getScoreIcon = (score:number) => {;
    if (score >= 90) return <CheckCircle className="w-4 h-4 text-green-600" />,;
    if (score >= 70) return <AlertTriangle className="w-4 h-4 text-yellow-600" />,;
    return <AlertTriangle className="w-4 h-4 text-red-600" />;
  },;
;
  useEffect(() => {;
    collectMetrics(),;
    const interval = setInterval(collectMetrics, 30000), // Update every 30 seconds;
;
    return () => clearInterval(interval),;
  }, []),;
;
  return (;
    <div className="space-y-6">;
      {/* Header */}
      <div className="flex items-center justify-between">;
        <div>;
          <h2 className="text-2xl font-bold">Performance Dashboard</h2>;
          <p className="text-muted-foreground">;
            Monitor bundle size, performance metrics, and optimization opportunities;
          </p>;
        </div>;
        <Button onClick={collectMetrics} disabled={isLoading}>;
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' :''}`} />;
          {isLoading ? 'Collecting...' :'Refresh'}
        </Button>;
      </div>;
;
      {/* Performance Score */}
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <Zap className="w-5 h-5" />;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Performance Score;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
=======


              
              {lastUpdated && (
                <p className="text-sm text-muted-foreground">


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Last updated: {lastUpdated.toLocaleString()}
                </p>
                    </Badge>;
                  </div>;
                  <Progress value={metrics && metrics.performanceScore} className='h-2' />;
                </div>;
              </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        </CardContent>;
      </Card>;
=======

        </CardContent>;
      </Card>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </p>;
              <p className='text-xs text-muted-foreground'>;
                {metrics && metrics.chunkCount} chunks;
              </p>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          {metrics ? (;
            <div className="space-y-4">;
              <div className="flex items-center gap-4">;
                {getScoreIcon(metrics.performanceScore)}
                <div className="flex-1">;
                  <div className="flex items-center justify-between mb-2">;
                    <span className="text-2xl font-bold">;
                      {metrics.performanceScore}/100;
                    </span>;
                    <Badge variant={metrics.performanceScore >= 90 ? 'default' :'secondary'}>;
                      {metrics.performanceScore >= 90 ? 'Excellent' :;
                       metrics.performanceScore >= 70 ? 'Good' :'Needs Improvement'}
                    </Badge>;
                  </div>;
                  <Progress value={metrics.performanceScore} className="h-2" />;
                </div>;
              </div>;
              ;
              {lastUpdated && (;
                <p className="text-sm text-muted-foreground">;
                  Last updated:{lastUpdated.toLocaleString()}
                </p>;
              )}
            </div>;
          ) :(;
            <div className="text-center py-8">;
              <Clock className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />;
              <p className="text-muted-foreground">Click refresh to collect metrics</p>;
            </div>;          )}
        </CardContent>;
      </Card>;
;
      {/* Metrics Grid */}
      {metrics && (;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">;
          <Card>;
            <CardContent className="p-4">;
              <div className="flex items-center gap-2">;
                <Package className="w-4 h-4 text-blue-600" />;
                <span className="text-sm font-medium">Bundle Size</span>;
              </div>;
              <p className="text-2xl font-bold mt-2">{formatSize(metrics.bundleSize)}</p>;
              <p className="text-xs text-muted-foreground">;
                {metrics.chunkCount} chunks;
              </p>;
            </CardContent>;
          </Card>;
;
          <Card>;
            <CardContent className="p-4">;
              <div className="flex items-center gap-2">;
                <Clock className="w-4 h-4 text-purple-600" />;
                <span className="text-sm font-medium">Load Time</span>;
              </div>;
              <p className="text-2xl font-bold mt-2">{metrics.loadTime.toFixed(0)}ms</p>;
              <p className="text-xs text-muted-foreground">;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Average chunk load time;
              </p>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
;
          <Card>;
            <CardContent className="p-4">;
              <div className="flex items-center gap-2">;
                <Globe className="w-4 h-4 text-green-600" />;
                <span className="text-sm font-medium">First Contentful Paint</span>;
              </div>;
              <p className="text-2xl font-bold mt-2">;
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` :'N/A'}
              </p>;
              <p className="text-xs text-muted-foreground">;
=======

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Time to first paint;
              </p>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
;
          <Card>;
            <CardContent className="p-4">;
              <div className="flex items-center gap-2">;
                <BarChart3 className="w-4 h-4 text-orange-600" />;
                <span className="text-sm font-medium">Largest Contentful Paint</span>;
              </div>;
              <p className="text-2xl font-bold mt-2">;
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` :'N/A'}
              </p>;
              <p className="text-xs text-muted-foreground">;
=======

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Time to largest paint;
              </p>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
        </div>;
      )}
;
      {/* Bundle Chunks */}
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <Package className="w-5 h-5" />;
=======

        </div>)}
      {/* Bundle Chunks */}
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <Package className='w - 5 h - 5' />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Bundle Chunks;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;

<<<<<<< HEAD
<<<<<<< HEAD
              {lastUpdated && (
                <p className='text-sm text-muted-foreground'>
              
              {lastUpdated && (
                <p className="text-sm text-muted-foreground">
                  Last updated: {lastUpdated.toLocaleString()}
                </p>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <Clock className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-muted-foreground">Click refresh to collect metrics</p>
            </div>
          )}
        </CardContent>
      </Card>
      {/* Metrics Grid */}
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Bundle Size</span>
              </div>
              <p className="text-2xl font-bold mt-2">{formatSize(metrics.bundleSize)}</p>
              <p className="text-xs text-muted-foreground">
                {metrics.chunkCount} chunks
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Load Time</span>
              </div>
              <p className="text-2xl font-bold mt-2">{metrics.loadTime.toFixed(0)}ms</p>
              <p className="text-xs text-muted-foreground">
                Average chunk load time
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">First Contentful Paint</span>
              </div>
              <p className="text-2xl font-bold mt-2">
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Time to first paint
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium">Largest Contentful Paint</span>
              </div>
              <p className="text-2xl font-bold mt-2">
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Time to largest paint
              </p>
            </CardContent>
          </Card>
        </div>
      )}
      {/* Bundle Chunks */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Bundle Chunks
          </CardTitle>
        </CardHeader>
        <CardContent>
          {chunks.length > 0 ? (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='space-y-2'>
              {chunks.slice(0, 10).map((chunk, index) => (
                <div
                  key={chunk.name}
                  className='flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded'
                >
                  <div className='flex items-center gap-3'>
                    <span className='text-sm font-mono text-muted-foreground'>                      {index + 1}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="space-y-2">
              {chunks.slice(0, 10).map((chunk, index) => (
                <div key={chunk.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-muted-foreground">
                      {index + 1}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD


              


=======
              
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {chunks.length > 10 && (
                <p className='text-sm text-muted-foreground text-center pt-2'>
                  ... and {chunks.length - 10} more chunks
                </p>

              {chunks && chunks.length > 10 && (;
                <p className='text-sm text-muted-foreground text-center pt-2'>;
                  ... and {chunks && chunks.length - 10} more chunks;
                </p>;
              )}
<<<<<<< HEAD
            </div>;
          ) : (;
            <p className='text-center py-8 text-muted-foreground'>;
<<<<<<< HEAD
          {chunks.length > 0 ? (;
            <div className="space-y-2">;
              {chunks.slice(0, 10).map((chunk, index) => (;
                <div key={chunk.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">;
                  <div className="flex items-center gap-3">;
                    <span className="text-sm font-mono text-muted-foreground">;
                      {index + 1}
                    </span>;
                    <div>;
                      <p className="font-medium text-sm">{chunk.name}</p>;
                      <div className="flex items-center gap-2">;
                        <Badge variant="outline" className="text-xs">;
                          {chunk.type}
                        </Badge>;
                        {chunk.cached && (;
                          <Badge variant="secondary" className="text-xs">;
                            cached;
                          </Badge>;
                        )}
                      </div>;
                    </div>;
                  </div>;
                  <div className="text-right">;
                    <p className="font-medium">{formatSize(chunk.size)}</p>;
                    <p className="text-xs text-muted-foreground">;
                      {chunk.loadTime.toFixed(0)}ms;
                    </p>;
                  </div>;
                </div>;
              ))}
              {chunks.length > 10 && (
                <p className='text-sm text-muted-foreground text-center pt-2'>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatSize(chunk.size)}</p>
                    <p className="text-xs text-muted-foreground">
                      {chunk.loadTime.toFixed(0)}ms
                    </p>
                  </div>
                </div>
              ))}
              
              {chunks.length > 10 && (
                <p className="text-sm text-muted-foreground text-center pt-2">
                  ... and {chunks.length - 10} more chunks
                </p>
              )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          ) : (
            <p className="text-center py-8 text-muted-foreground">
              No chunk data available. Refresh to collect metrics.
            </p>
          )}
        </CardContent>
      </Card>
      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Optimization Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900 dark:text-blue-100">
                  Bundle splitting implemented
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Your bundle is properly split into framework, vendor, and application chunks
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded'>
              <CheckCircle className='w-5 h-5 text-green-600 mt-0.5' />
<<<<<<< HEAD
                <p className="font-medium text-green-900 dark:text-green-100">
ursor/fix-website-loading-errors-and-merge-6662
=======
              No chunk data available. Refresh to collect metrics.;
            </p>;
          )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />


              <div>
                <p className='font-medium text-green-900 dark:text-green-100'>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  Performance monitoring active
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  Performance monitoring active
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </p>
                <p className='text-sm text-green-700 dark:text-green-300'>
                  Real-time performance tracking is helping optimize your
                  application
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded'>
              <CheckCircle className='w-5 h-5 text-green-600 mt-0.5' />
            
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-900 dark:text-green-100">
                  Performance monitoring active
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Real-time performance tracking is helping optimize your application
                </p>
              </div>
            </div>
              <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
ursor/fix-website-loading-errors-and-merge-6662
=======
                </p>
              </div>
            </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
                </p>
              </div>
            </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            


            {metrics && metrics.bundleSize > 2 * 1024 * 1024 && (
              <div className='flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded'>
                <AlertTriangle className='w-5 h-5 text-yellow-600 mt-0.5' />
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <p className='font-medium text-yellow-900 dark:text-yellow-100'>
                    Consider more aggressive code splitting
                  </p>
                  <p className='text-sm text-yellow-700 dark:text-yellow-300'>
                    Bundle size is above 2MB. Consider implementing dynamic
                    imports for heavy components
<<<<<<< HEAD
<<<<<<< HEAD
            
            {metrics && metrics.bundleSize > 2 * 1024 * 1024 && (
              <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-900 dark:text-yellow-100">
                    Consider more aggressive code splitting
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Bundle size is above 2MB. Consider implementing dynamic imports for heavy components
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </p>
                </div>
              </div>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
}
}
              ;
              {chunks.length > 10 && (;
                <p className="text-sm text-muted-foreground text-center pt-2">;
                  ... and {chunks.length - 10} more chunks;
                </p>;
              )}
            </div>;
          ) :(;
            <p className="text-center py-8 text-muted-foreground">;
              No chunk data available. Refresh to collect metrics.;
            </p>;
          )}
        </CardContent>;
      </Card>;
;
      {/* Recommendations */}
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <TrendingUp className="w-5 h-5" />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        </CardContent>;
      </Card>;

      {/* Recommendations */}
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <TrendingUp className='w-5 h-5' />;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Optimization Recommendations;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="space-y-3">;
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">;
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />;
              <div>;
                <p className="font-medium text-blue-900 dark:text-blue-100">;
                  Bundle splitting implemented;
                </p>;
                <p className="text-sm text-blue-700 dark:text-blue-300">;
                  Your bundle is properly split into framework, vendor, and application chunks;
                </p>;
              </div>;
            </div>;
            ;
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded">;
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />;
              <div>;
                <p className="font-medium text-green-900 dark:text-green-100">;
                  Performance monitoring active;
                </p>;
                <p className="text-sm text-green-700 dark:text-green-300">;
                  Real-time performance tracking is helping optimize your application;
                </p>;
              </div>;
            </div>;
            ;
            {metrics && metrics.bundleSize > 2 * 1024 * 1024 && (;
              <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">;
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />;
                <div>;
                  <p className="font-medium text-yellow-900 dark:text-yellow-100">;
                    Consider more aggressive code splitting;
                  </p>;
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">;
                    Bundle size is above 2MB. Consider implementing dynamic imports for heavy components;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </p>;
                </div>;
              </div>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
}
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



          </div>;
        </CardContent>;
      </Card>;
    </div>;
<<<<<<< HEAD

} ;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
} ;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
  ),;} 
 const collectMetrics = async () => {;
  try {;
  //Collect performance metrics ;
}
};
const vitals: Partial<PerformanceMetrics> = {;
  ;
};
//Collect navigation timing //Use PerformanceObserver for more accurate metrics if ('PerformanceObserver' in window) {;
  return new Promise ( (resolve) => {;
  const observer = new PerformanceObserver ( (list) => {;
  list.getEntries () .forEach ( (entry) => {';
  if (entry.entryType === 'paint') {';
  if (entry.name === 'first-contentful-paint') {;
  ;
}return vitals;
};';
entry.name.includes ('/ next/static/') && entry.name.endsWith ('.js') );
return scriptEntries.map (entry => ({;
  useEffect ( () => {;
  collectMetrics ();
const interval = setInterval (collectMetrics,  30000), //Update every 30 seconds return () => clearInterval (interval) ;
}, []);
return (<div className="space-y-6" > {;
  /* Header */ ";
}<div className="flex items-center justify-between" > text-2xl font-bold">Performance Dashboard</h2> <p className=" text-muted-foreground"> Monitor bundle size, performance metrics, and optimization opportunities </p> </div> <Button onClick={;
  collectMetrics ;
}disabled= {;
  isLoading ;
}> <RefreshCw className= {;
  `w-4 h-4 mr-2 $ {';
  isLoading ? 'animate-spin' : '' ;
}` ;
}/> {';
  isLoading ? 'Collecting...': 'Refresh' ;
}</Button> </div> {;
  /* Performance Score */ ";
}<Card> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Zap className=" w-5 h-5"/> Performance Score </CardTitle> </CardHeader> <CardContent> </span> <Badge variant= {';
  metrics.performanceScore >= 90 ? 'default': 'secondary' ;
}> {';
  metrics.performanceScore >= 90 ? 'Excellent': metrics.performanceScore >= 70 ? 'Good': 'Needs Improvement' ;
}</Badge> </div> Last updated: {;
  lastUpdated.toLocaleString () ;
}</p>) ";
}</div>) : (<div className=" text-center py-8"> <Clock className=" w-8 h-8 mx-auto mb-2 text-muted-foreground"/> <p className=" text-muted-foreground">Click refresh to collect metrics</p> </div>) ";
}</CardContent> </Card> <Card> <CardContent className=" p-4"> <div className=" flex items-center gap-2"> <Package className=" w-4 h-4 text-blue-600"/> <span className=" text-sm font-medium">Bundle Size</span> </div> </p> </CardContent> </Card> <Card> <CardContent className=" p-4"> <div className=" flex items-center gap-2"> <Clock className=" w-4 h-4 text-purple-600"/> <span className=" text-sm font-medium">Load Time</span> </div> Average chunk load time </p> </CardContent> </Card> <Card> <CardContent className=" p-4"> <div className=" flex items-center gap-2"> <Globe className=" w-4 h-4 text-green-600"/> <span className=" text-sm font-medium">First Contentful Paint</span> </div> </p> <p className=" text-xs text-muted-foreground"> Time to first paint </p> </CardContent> </Card> <Card> <CardContent className=" p-4"> <div className=" flex items-center gap-2"> <BarChart3 className=" w-4 h-4 text-orange-600"/> <span className=" text-sm font-medium">Largest Contentful Paint</span> </div> </p> <p className=" text-xs text-muted-foreground"> Time to largest paint </p> </CardContent> </Card> </div>) ;
}{;
  /* Bundle Chunks */ ";
}<Card> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Package className=" w-5 h-5"/> Bundle Chunks </CardTitle> </CardHeader> <CardContent> cached </Badge>) ;
}</div> </div> </div> </p> </div> </div>) ) ;
}... and {;
  chunks.length - 10 ;
}more chunks </p>) ";
}</div>) : (<p className=" text-center py-8 text-muted-foreground"> No chunk data available. Refresh to collect metrics. </p>) ;
}</CardContent> </Card> {;
  /* Recommendations */ ";
}<Card> <CardHeader> <CardTitle className=" flex items-center gap-2"> <TrendingUp className=" w-5 h-5"/> Optimization Recommendations </CardTitle> </CardHeader> <CardContent> <div className=" space-y-3"> <div className=" flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded"> <CheckCircle className=" w-5 h-5 text-blue-600 mt-0.5"/> <div> <p className=" font-medium text-blue-900 dark:text-blue-100"> Bundle splitting implemented </p> <p className=" text-sm text-blue-700 dark:text-blue-300"> Your bundle is properly split into framework, vendor, and application chunks </p> </div> </div> <div className=" flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded"> <CheckCircle className=" w-5 h-5 text-green-600 mt-0.5"/> <div> <p className=" font-medium text-green-900 dark:text-green-100"> Performance monitoring active </p> <p className=" text-sm text-green-700 dark:text-green-300"> Real-time performance tracking is helping optimize your application </p> </div> </div> <div> <p className=" font-medium text-yellow-900 dark:text-yellow-100"> Consider more aggressive code splitting </p> <p className=" text-sm text-yellow-700 dark:text-yellow-300" > Bundle size is above 2MB. Consider implementing dynamic imports for heavy components </p> </div> </div>) ;
}</div> </CardContent> </Card> </div>) ;
}'"
  );
} ;
}
}
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
