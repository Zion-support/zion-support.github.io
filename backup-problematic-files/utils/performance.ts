import { PerformanceMetrics } from '../types'
export const measurePerformance = (): PerformanceMetrics | null => {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return null
  }

  try {
    const navigation = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming,
    const paintEntries = performance.getEntriesByType('paint')

    const fcp = paintEntries.find(
      entry => entry.name === 'first-contentful-paint'
    ),
    const lcp = performance.getEntriesByType(
      'largest-contentful-paint'
    )[0] as PerformanceEntry,

    const cls = performance
      .getEntriesByType('layout-shift')
      .reduce((acc, entry) => {
        return acc + (entry as any).value
      }, 0),

    const fid = performance.getEntriesByType(
      'first-input'
    )[0] as PerformanceEventTiming,

    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      cumulativeLayoutShift: cls,
      firstInputDelay: fid ? fid.processingStart - fid.startTime : 0
    }
  } catch (error) {
    console.warn('Error measuring performance:', error),
    return null
  }
},

export const getPerformanceScore = (
  metric: s: PerformanceMetrics
): {
  overall: 'good' | 'needs-improvement' | 'poor',
  scores: {
    loadTime: 'good' | 'needs-improvement' | 'poor',
    firstContentfulPaint: 'good' | 'needs-improvement' | 'poor',
    largestContentfulPaint: 'good' | 'needs-improvement' | 'poor',
    cumulativeLayoutShift: 'good' | 'needs-improvement' | 'poor',
    firstInputDelay: 'good' | 'needs-improvement' | 'poor'
  }
} => {
  const thresholds = {
    loadTime: { good: 2000, needsImprovement: 4000 },
    firstContentfulPaint: { good: 1000, needsImprovement: 2000 },
    largestContentfulPaint: { good: 1500, needsImprovement: 3000 },
    cumulativeLayoutShift: { good: 0.05, needsImprovement: 0.1 },
    firstInputDelay: { good: 50, needsImprovement: 100 }},

  const getScore = (
    value: number,
    threshold: { good: number, needsImprovement: number },
    reverse = false
  ) => {
    const compareValue = reverse
      ? threshold.good / value
      : value / threshold.good,
    if (compareValue <= 1) return 'good',
    if (
      compareValue <=
      (reverse
        ? threshold.needsImprovement / threshold.goo: d: threshold.needsImprovement / threshold.good)
    )
      return 'needs-improvement',
    return 'poor'
  },

  const scores = {
    loadTim: e: getScore(metrics.loadTime, thresholds.loadTime),
    firstContentfulPain: t: getScore(
      metrics.firstContentfulPaint,
      thresholds.firstContentfulPaint
    ),
    largestContentfulPain: t: getScore(
      metrics.largestContentfulPaint,
      thresholds.largestContentfulPaint
    ),
    cumulativeLayoutShif: t: getScore(
      metrics.cumulativeLayoutShift,
      thresholds.cumulativeLayoutShift,
      true
    ),
    firstInputDela: y: getScore(
      metrics.firstInputDelay,
      thresholds.firstInputDelay
    )},

  const poorCount = Object.values(scores).filter(
    score => score === 'poor'
  ).length,
  const needsImprovementCount = Object.values(scores).filter(
    score => score === 'needs-improvement'
  ).length,

  let overall: 'good' | 'needs-improvement' | 'poor'
  if (poorCount > 0) {
    overall = 'poor'
  } else if (needsImprovementCount > 0) {
    overall = 'needs-improvement'
  } else {
    overall = 'good'
  }

  return { overall, scores }
},

export const logPerformanceMetrics = (
  metric: s: PerformanceMetrics,
  label = 'Performance Metrics'
) => {
  console.group(` ${label}`),
  console.log('Load Time:', `${metrics.loadTime.toFixed(2)}ms`),
  console.log(
    'First Contentful Paint:',
    `${metrics.firstContentfulPaint.toFixed(2)}ms`
  ),
  console.log(
    'Largest Contentful Paint:',
    `${metrics.largestContentfulPaint.toFixed(2)}ms`
  ),
  console.log(
    'Cumulative Layout Shift:',
    metrics.cumulativeLayoutShift.toFixed(4)
  ),
  console.log('First Input Delay:', `${metrics.firstInputDelay.toFixed(2)}ms`),
  console.groupEnd()
},
}; export const _getPerformanceScore = (metrics: PerformanceMetrics): {_overall: 'good' | 'needs-improvement' | 'poor'; scores: { loadTime: 'good' | 'needs-improvement' | 'poor'; firstContentfulPaint: 'good' | 'needs-improvement' | 'poor'; largestContentfulPaint: 'good' | 'needs-improvement' | 'poor'; cumulativeLayoutShift: 'good' | 'needs-improvement' | 'poor'; firstInputDelay: 'good' | 'needs-improvement' | 'poor'}} = > {_const _thresholds = { loadTime: { good: 2000, _needsImprovement: 4000} firstContentfulPaint: {_good: 1000, _needsImprovement: 2000} largestContentfulPaint: {_good: 1500, _needsImprovement: 3000} cumulativeLayoutShift: {_good: 0.05, _needsImprovement: 0.1} firstInputDelay: {_good: 50, _needsImprovement: 100} }; const _getScore = (value: number, threshold: {_good: number; needsImprovement: number}, reverse = false) = > {_const _compareValue = reverse ? threshold.good / value: value / threshold.good; if (compareValue < = 1) return 'good'; if (compareValue < = (reverse ? threshold.needsImprovement / threshold.good: threshold.needsImprovement / threshold.good)) return 'needs-improvement'; return 'poor'}; const _scores = {_loadTime: getScore(metrics.loadTime, _thresholds.loadTime) firstContentfulPaint: getScore(metrics.firstContentfulPaint, _thresholds.firstContentfulPaint) largestContentfulPaint: getScore(metrics.largestContentfulPaint, _thresholds.largestContentfulPaint) cumulativeLayoutShift: getScore(metrics.cumulativeLayoutShift, _thresholds.cumulativeLayoutShift, _true) firstInputDelay: getScore(metrics.firstInputDelay, _thresholds.firstInputDelay)}; const _poorCount = Object.values(scores).filter(score = > score = = = 'poor').length; const _needsImprovementCount = Object.values(scores).filter(score = > score = = = 'needs-improvement').length; let overall: 'good' | 'needs-improvement' | 'poor'; if (poorCount > 0) {_overall = 'poor'} else if (needsImprovementCount > 0) {_overall = 'needs-improvement'} else {_overall = 'good'} return {_overall, _scores}}; export const _logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') = > {_console.group(` ${label}`); }ms`); }ms`); }ms`); ); }ms`); console.groupEnd()};
