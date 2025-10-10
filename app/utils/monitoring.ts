'use client'
/**
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */;
;
;
import React from 'react'
import { performanceConfig  } from '../../performance.config'export interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
  inp?: number}
}
export interface ErrorReport {
  message: string,
  stack?: string
  component?: string
  timestamp: number,
  userAgent: string,
  url: string,}
}
class MonitoringService {}
  private metrics: PerformanceMetrics = {}
  private errors: ErrorReport[] = []
  private observer: PerformanceObserver | null = null
  ;

constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMonitoring()}
    }
  }
  private initializeMonitoring(): void {
    this.monitorWebVitals()
    this.monitorLongTasks()
    this.monitorResourceTiming()
    this.setupErrorHandling()}
  }
  private monitorWebVitals(): void {
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          ;

const entries = list.getEntries()}
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number }
          this.metrics.lcp;

export default monitoring;