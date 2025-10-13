<<<<<<< HEAD
interface AdvancedPerformanceMonitorProps {
  className?: string;
}

export default function AdvancedPerformanceMonitor({ className = '' }: AdvancedPerformanceMonitorProps) {
  return (
    <div className={`advanced-performance-monitor ${className}`}>
      <h3>Performance Monitor</h3>
      <p>Advanced performance monitoring component</p>
=======
'use client'
import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memoryUsage: number | null
  loadTime: number | null
}

const AdvancedPerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run in development
    if (process.env['NODE_ENV'] !== 'development') return

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
    </div>
  );
}
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

<<<<<<< HEAD
    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();

    // Monitor performance every 5 seconds
    const interval = setInterval(() => {
      measureResourceTiming();
    }, 5000);

export default AdvancedPerformanceMonitor;
=======
export default AdvancedPerformanceMonitor
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
