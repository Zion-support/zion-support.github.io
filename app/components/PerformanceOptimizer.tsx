'use client'
import React, { useEffect, useRef } from 'react'
import { usePerformanceMonitor } from '../utils/performance'

interface PerformanceOptimizerProps {
  children: React.ReactNode
  componentName: string
}

export default function PerformanceOptimizer({ children, componentName }: PerformanceOptimizerProps) {
  const { startTiming, endTiming } = usePerformanceMonitor()
  const renderStartTime = useRef<number>(0)

  useEffect(() => {
    // Start timing when component mounts
    renderStartTime.current = performance.now()
    startTiming(`${componentName}-mount`)

    // End timing when component unmounts
    return () => {
      const renderTime = performance.now() - renderStartTime.current
      endTiming(`${componentName}-mount`, renderTime)
    }
  }, [componentName, startTiming, endTiming])

  return <>{children}</>
}