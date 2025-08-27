import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Clock, Network, HardDrive } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simulate performance metrics collection
    const simulateMetrics = () => {
      const mockMetrics: PerformanceMetrics = {
        loadTime: Math.random() * 2000 + 500, // 500-2500ms
        firstContentfulPaint: Math.random() * 1000 + 200, // 200-1200ms
        largestContentfulPaint: Math.random() * 1500 + 300, // 300-1800ms
        cumulativeLayoutShift: Math.random() * 0.1, // 0-0.1
        firstInputDelay: Math.random() * 100 + 10 // 10-110ms
      }
      setMetrics(mockMetrics)
    }

    // Show component after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
      simulateMetrics()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100
    
    // Deduct points for poor performance
    if (metrics.loadTime > 2000) score -= 20
    if (metrics.firstContentfulPaint > 1000) score -= 15
    if (metrics.largestContentfulPaint > 1500) score -= 15
    if (metrics.cumulativeLayoutShift > 0.1) score -= 10
    if (metrics.firstInputDelay > 100) score -= 10
    
    return Math.max(score, 0)
  }

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreLabel = (score: number): string => {
    if (score >= 90) return 'Excellent'
    if (score >= 70) return 'Good'
    if (score >= 50) return 'Needs Improvement'
    return 'Poor'
  }

  if (!isVisible || !metrics) return null

  const score = getPerformanceScore(metrics)
  const scoreColor = getScoreColor(score)
  const scoreLabel = getScoreLabel(score)

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80 z-50"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Performance Monitor</h3>
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-blue-600" />
          <span className={`text-sm font-bold ${scoreColor}`}>
            {score}/100
          </span>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mb-3">
        {scoreLabel} Performance
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-600">Load Time</span>
          </div>
          <span className="text-xs font-medium">
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Network className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-600">FCP</span>
          </div>
          <span className="text-xs font-medium">
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HardDrive className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-600">LCP</span>
          </div>
          <span className="text-xs font-medium">
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">CLS</span>
          <span className="font-medium">
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">FID</span>
          <span className="font-medium">
            {metrics.firstInputDelay.toFixed(0)}ms
          </span>
        </div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        ×
      </button>
    </motion.div>
  )
}
