import React from 'react'

// Performance monitoring utilities

export class PerformanceMonitor {
  private timings: Map<string, number> = new Map()
  private marks: Map<string, number> = new Map()

  startTiming(name: string) {
    this.timings.set(name, performance.now())
  }

  endTiming(name: string): number {
    const startTime = this.timings.get(name)
    if (startTime) {
      const duration = performance.now() - startTime
      this.timings.delete(name)
      return duration
    }
    return 0
  }

  mark(name: string) {
    this.marks.set(name, performance.now())
  }

  measure(name: string, startMark: string, endMark?: string): number {
    const startTime = this.marks.get(startMark)
    const endTime = endMark ? this.marks.get(endMark) : performance.now()
    
    if (startTime && endTime) {
      return endTime - startTime
    }
    return 0
  }

  getMemoryUsage() {
    if ('memory' in performance) {
      return (performance as any).memory.usedJSHeapSize / 1024 / 1024 // MB
    }
    return 0
  }

  getNavigationTiming() {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      totalTime: navigation.loadEventEnd - navigation.fetchStart
    }
  }
}

const performanceMonitor = new PerformanceMonitor()

export const usePerformanceMonitor = () => {
  const startTiming = (name: string) => {
    performanceMonitor.startTiming(name)
  }

  const endTiming = (name: string) => {
    return performanceMonitor.endTiming(name)
  }

  const mark = (name: string) => {
    performanceMonitor.mark(name)
  }

  const measure = (name: string, startMark: string, endMark?: string) => {
    return performanceMonitor.measure(name, startMark, endMark)
  }

  const getMemoryUsage = () => {
    return performanceMonitor.getMemoryUsage()
  }

  const getNavigationTiming = () => {
    return performanceMonitor.getNavigationTiming()
  }

  return {
    startTiming,
    endTiming,
    mark,
    measure,
    getMemoryUsage,
    getNavigationTiming
  }
}

export default performanceMonitor