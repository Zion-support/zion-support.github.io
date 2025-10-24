'use client'
import React, { useEffect, useState } from 'react'
import { Loader2, Zap, Clock, CheckCircle } from 'lucide-react'

interface LoadingOptimizerProps {
  message?: string
  showProgress?: boolean
  maxDuration?: number
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({
  message = "Optimizing your experience...",
  showProgress = true,
  maxDuration = 5000
}) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / maxDuration) * 100, 100)
      
      setProgress(newProgress)
      
      if (newProgress >= 100) {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [maxDuration])

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-8">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <p className="text-green-400 font-semibold">Optimization Complete!</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      {/* Animated Icon */}
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <div className="absolute inset-0 w-16 h-16 border-2 border-cyan-400 rounded-full animate-spin border-t-transparent"></div>
      </div>

      {/* Message */}
      <div className="text-center">
        <p className="text-white font-medium text-lg mb-2">{message}</p>
        <div className="flex items-center space-x-2 text-gray-400">
          <Clock className="w-4 h-4" />
          <span className="text-sm">This may take a few moments</span>
        </div>
      </div>

      {/* Progress Bar */}
      {showProgress && (
        <div className="w-64 space-y-2">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Loading Steps */}
      <div className="space-y-2 text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${progress > 20 ? 'bg-green-400' : 'bg-gray-600'}`}></div>
          <span>Initializing...</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${progress > 50 ? 'bg-green-400' : 'bg-gray-600'}`}></div>
          <span>Processing data...</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${progress > 80 ? 'bg-green-400' : 'bg-gray-600'}`}></div>
          <span>Finalizing...</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingOptimizer