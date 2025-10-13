'use client''/**;
 * Comprehensive Monitoring Utility;
 * Real-time application monitoring, performance tracking, and error reporting;
 */;
import React from 'react';';'import {performanceConfig}}from '../../performance.config';';'export interface PerformanceMetrics {lcp?: number;}
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;}}
export interface ErrorReport {message: string,}
  stack?: string;
  component?: string;
  timestamp: number,
  userAgent: string,
  url: string,}}
class MonitoringService {}}private metrics: PerformanceMetrics = {,}private errors: ErrorReport[] = [],
  private observer: PerformanceObserver | null = null,
  constructor() {if (typeof window !== 'undefined') {''      this.initializeMonitoring()}}
  }
        const fidObserver = new PerformanceObserver((list) => {const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {,
          entries.forEach((entry: PerformanceEntry) => {
  
            this.metrics.fid = (entry as any).processingStart - entry.startTime,
            this.reportMetric('fid', this.metrics.fid)}})''        });
const clsObserver = new PerformanceObserver(list => {);
const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {,
            if (!(entry as any).hadRecentInput) {
  
    // Keep HEAD version;
              this.metrics.cls = clsValue,
              this.reportMetric('cls', clsValue)}}''          })
        });
const fcpObserver = new PerformanceObserver(list => {);
const entries = list.getEntries();
          entries.forEach(entry => {)
            this.metrics.fcp = entry.startTime;
            this.reportMetric('fcp', entry.startTime)}})''        })
        fcpObserver.observe({entryTypes: ['paint'] ,)})''      } catch (error) {// Keep HEAD version;}}
  }
  private monitorLongTasks(): void {if ('PerformanceObserver' in window && performanceConfig.monitoring.enableLongTaskDetection) {}''      try {const longTaskObserver = new PerformanceObserver((list) => {}
          for (const entry of list.getEntries()) {
  
    // Keep HEAD version;}})
        longTaskObserver.observe({entryTypes: ['longtask'] ,)})''      } catch (error) {// Long task API might not be available;}}
    }
  }
      try {;
        const resourceObserver = new PerformanceObserver((list) => {;
          const entries = list.getEntries();
    // Keep HEAD version;}})
        })
        resourceObserver.observe({entryTypes: ['resource'] ,)})''      } catch (_error) {// Keep HEAD version;}}
  }
  private setupErrorHandling(): void {// Global error handler;}
    window.addEventListener('error', (event) => {''      this.logError({)
        message: event.message,
        stack: event.error?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href;,}})
    })
    window.addEventListener('unhandledrejection', (event) => {this.logError({)}message: `Unhandled Promise Rejection: ${event.reason,}`,;''        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      })
    })
  }
  private reportMetric(name: string, value: number): void {,}
    // Sample rate,
    if (Math.random() > performanceConfig.monitoring.sampleRate) {
  
      return;}}
    const thresholds = performanceConfig.webVitals[name as keyof typeof performanceConfig.webVitals]
    if (thresholds) {const rating = value <= thresholds.good ? 'good' : value <= thresholds.needsImprovement ? 'needs-improvement' : 'poor''    // Keep HEAD version // Send to analytics (if configured);
    if (typeof (window as any).gtag === 'function') {''      (window as any).gtag('event', name, {)''        value: Math.round(name === 'cls' ? value * 1000 : value),''        event_category: 'Web Vitals',}})''    }
  }
  public logError(error: ErrorReport): void {,}
    this.errors.push(error)
    // Keep only last 50 errors,
    if (this.errors.length > 50) {
  
      this.errors = this.errors.slice(-50)}}
    // Send to error tracking service (if configured);
  }
  public getMetrics(): PerformanceMetrics {}}return {...this.metrics}}}
  public getErrors(): ErrorReport[] {return [...this.errors]}}
  public clearErrors(): void {this.errors = []}}}
  public measureMemory(): void {if ('memory' in performance && performanceConfig.monitoring.enableMemoryMonitoring) {}}const memory = (performance as Performance & {memory?: { usedJSHeapSize: number; totalJSHeapSize: number, jsHeapSizeLimit: number ,}}).memory;''      if (memory) {// Keep HEAD version;}}
    }
  }
  public measureNavigationTiming(): void {if ('performance' in window && 'getEntriesByType' in performance) {}';'const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;''      if (navigation) {
  
    // Keep HEAD version;}}
    }
  }
}
// Singleton instance;
const monitoring = new MonitoringService();
export default monitoring;
>>>>>>> cursor/delete-records-a75e
