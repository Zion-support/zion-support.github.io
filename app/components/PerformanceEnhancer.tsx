'use client'
import React, { useState, useEffect } from 'react'
import { Zap, TrendingUp, Activity, Settings, CheckCircle } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  score: number
}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    score: 0
  })

  const [isOptimizing, setIsOptimizing] = useState(false)
  const [optimizations, setOptimizations] = useState<string[]>([])

  useEffect(() => {
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setMetrics({
        loadTime: Math.random() * 1000 + 500,
        renderTime: Math.random() * 100 + 50,
        memoryUsage: Math.random() * 100,
        score: Math.floor(Math.random() * 40) + 60
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const optimizePerformance = () => {
    setIsOptimizing(true)
    
    // Simulate optimization process
    setTimeout(() => {
      setOptimizations([
        'Enabled code splitting',
        'Optimized images',
        'Minified CSS and JavaScript',
        'Enabled gzip compression',
        'Added service worker caching',
        'Optimized font loading',
        'Reduced bundle size by 30%'
      ])
      setIsOptimizing(false)
    }, 3000)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500'
    if (score >= 70) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Performance Enhancer</h3>
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          <Zap className="w-4 h-4 mr-2" />
          {isOptimizing ? 'Optimizing...' : 'Optimize'}
        </button>
      </div>

      {/* Performance Score */}
      <div className="text-center mb-8">
        <div className={`text-4xl font-bold ${getScoreColor(metrics.score)} mb-2`}>
          {metrics.score}/100
        </div>
        <div className="text-gray-300">Performance Score</div>
        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ${
              metrics.score >= 90 ? 'bg-green-500' : 
              metrics.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${metrics.score}%` }}
          ></div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white/5 rounded-lg p-4 text-center">
          <Activity className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <div className="text-lg font-bold text-white">{Math.round(metrics.loadTime)}ms</div>
          <div className="text-xs text-gray-400">Load Time</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4 text-center">
          <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <div className="text-lg font-bold text-white">{Math.round(metrics.renderTime)}ms</div>
          <div className="text-xs text-gray-400">Render Time</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4 text-center">
          <Settings className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-lg font-bold text-white">{Math.round(metrics.memoryUsage)}%</div>
          <div className="text-xs text-gray-400">Memory</div>
        </div>
      </div>

      {/* Optimizations Applied */}
      {optimizations.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            Optimizations Applied
          </h4>
          <ul className="space-y-2">
            {optimizations.map((optimization, index) => (
              <li key={index} className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                {optimization}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isOptimizing && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400 mx-auto mb-2"></div>
          <p className="text-gray-300 text-sm">Optimizing performance...</p>
        </div>
      )}
    </div>
  )
}

export default PerformanceEnhancer