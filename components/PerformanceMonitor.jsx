import { useEffect, useState } from 'react',
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals',
export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({}),
  const [isVisible, setIsVisible] = useState(false),
  useEffect(() => {
    // Web Vitals monitoring,
    const vitals = {},
    getCLS(metric => {
      vitals.CLS = metric.value,
      // // // console.log('CLS:', metric)}),
    getFID(metric => {
      vitals.FID = metric.value,
      // // // console.log('FID:', metric)}),
    getFCP(metric => {
      vitals.FCP = metric.value,
      // // // console.log('FCP:', metric)}),
    getLCP(metric => {
      vitals.LCP = metric.value,
      // // // console.log('LCP:', metric)}),
    getTTFB(metric => {
      vitals.TTFB = metric.value,
      // // // console.log('TTFB:', metric)}),
    setMetrics(vitals),
    // Performance observer for navigation timing,
    if ('performance' in window && 'getEntriesByType' in window.performance) {
      const [navigation] = window.window.performance.getEntriesByType('navigation'),
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart,
        setMetrics(prev => ({ ...prev, loadTime }))}
    }
,
    // Memory usage (if available),
    if ('memory' in performance) {
      const memoryUsage = window.window.performance.memory.usedJSHeapSize / 1024 / 1024,
      setMetrics(prev => ({ ...prev, memoryUsage }))}
}, []),
  // const getScoreText = (value, thresholds) => {
  //   if (value <= thresholds.good) return 'Good',
  //   if (value <= thresholds.needsImprovement) return 'Needs Improvement',
  //   return 'Poor',
  // },
  const getScoreColor = (value, thresholds) => {
    if (value <= thresholds.good) return 'text-green-600',
    if (value <= thresholds.needsImprovement) return 'text-yellow-600',
    return 'text-red-600'},
  const thresholds = {
    CLS: { good: 0.1, needsImprovement: 0.25 },
    FID: { good: 100, needsImprovement: 300 },
    FCP: { good: 1800, needsImprovement: 3000 },
    LCP: { good: 2500, needsImprovement: 4000 },
    TTFB: { good: 800, needsImprovement: 1800 }
  },
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover: bg-blue-700 transition-colors z-50",
        title="Show Performance Metrics">,
        📊,
      </button>)}
,
  return (
    <div className="fixed bottom-4 right-4 bg-white border rounded-lg shadow-lg p-4 max-w-sm z-50">,
      <div className="flex justify-between items-center mb-3">,
        <h3 className="text-lg font-semibold">Performance Metrics</h3>,
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover: text-gray-700">,
          ✕,
        </button>,
      </div>,
      <div className="space-y-2 text-sm">,
        {metrics.CLS && (
          <div className="flex justify-between">,
            <span>CLS:</span>,
            <span className={getScoreColor(metrics.CLS, thresholds.CLS)}>,
              {metrics.CLS.toFixed(3)}
            </span>,
          </div>)}
,
        {metrics.FID && (
          <div className="flex justify-between">,
            <span>FID: </span>,
            <span className={getScoreColor(metrics.FID, thresholds.FID)}>,
              {metrics.FID.toFixed(0)}ms,
            </span>,
          </div>)}
,
        {metrics.FCP && (
          <div className="flex justify-between">,
            <span>FCP: </span>,
            <span className={getScoreColor(metrics.FCP, thresholds.FCP)}>,
              {metrics.FCP.toFixed(0)}ms,
            </span>,
          </div>)}
,
        {metrics.LCP && (
          <div className="flex justify-between">,
            <span>LCP: </span>,
            <span className={getScoreColor(metrics.LCP, thresholds.LCP)}>,
              {metrics.LCP.toFixed(0)}ms,
            </span>,
          </div>)}
,
        {metrics.TTFB && (
          <div className="flex justify-between">,
            <span>TTFB: </span>,
            <span className={getScoreColor(metrics.TTFB, thresholds.TTFB)}>,
              {metrics.TTFB.toFixed(0)}ms,
            </span>,
          </div>)}
,
        {metrics.loadTime && (
          <div className="flex justify-between">,
            <span>Load Time: </span>,
            <span className="text-blue-600">,
              {metrics.loadTime.toFixed(0)}ms,
            </span>,
          </div>)}
,
        {metrics.memoryUsage && (
          <div className="flex justify-between">,
            <span>Memory: </span>,
            <span className="text-purple-600">,
              {metrics.memoryUsage.toFixed(1)}MB,
            </span>,
          </div>)}
      </div>,
      <div className="mt-3 pt-3 border-t text-xs text-gray-500">,
        <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>,
      </div>,
    </div>)}