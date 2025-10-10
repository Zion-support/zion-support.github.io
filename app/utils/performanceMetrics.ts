'use client'
/**
 * Performance Metrics Utility
 * Advanced performance tracking and monitoring for web applications
 */export interface PerformanceMetric {
  name: string,
  value: number,
  unit: string,
  timestamp: Date,
  category: 'load' | 'runtime' | 'network' | 'memory' | 'custom',}
  metadata?: Record<string, unknown>}
}
export interface WebVitalsMetrics {
  FCP?: number
  LCP?: number
  FID?: number
  CLS?: number
  TTFB?: number
export interface PerformanceMetric {}
  name: string
  value: number
  unit: string
  timestamp: Date
  category: 'load' | 'runtime' | 'network' | 'memory' | 'custom'
  metadata?: Record<string, unknown>}</strin>
}
export interface WebVitalsMetrics {}
  FCP?: number
  LCP?: number
  FID?: number
  CLS?: number
  TTFB?: number
  INP?: number
}
export interface PerformanceReport {}
  metrics: PerformanceMetric[]
  webVitals: WebVitalsMetrics,
  summary: {
    avgLoadTime: number,
    totalMetrics: number,
    performanceScore: number,
  webVitals: WebVitalsMetrics}
  summary: {}
    avgLoadTime: number
    totalMetrics: number
    performanceScore: number
    recommendations: string[]}
  }
  timestamp: Date,
}
export class PerformanceMetrics {
  private static instance: PerformanceMetrics,}
  private metrics: PerformanceMetric[] = []}
  private webVitals: WebVitalsMetrics;

export default PerformanceMetrics
`