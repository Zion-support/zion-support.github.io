'use client'
import React, { useEffect, useState } from 'react'
import { Loader2, Zap, CheckCircle, Clock } from 'lucide-react'

interface OptimizedLoadingProps {
  message?: string
  duration?: number
  showSteps?: boolean
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({
  message = "Loading optimized content...",
  duration = 3000,
  showSteps = true
}) => {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const steps = [
    "Initializing...",
    "Optimizing assets...",
    "Caching resources...",
    "Finalizing..."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (duration / 100))
        if (newProgress >= 100) {
          setIsComplete(true)
          clearInterval(interval)
          return 100
        }
        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [duration])

  useEffect(() => {
    if (showSteps) {
      const stepInterval = setInterval(() => {
        setCurrentStep(prev => {
          const nextStep = prev + 1
          if (nextStep >= steps.length) {
            clearInterval(stepInterval)
            return prev
          }
          return nextStep
        })
      }, duration / steps.length)

      return () => clearInterval(stepInterval)
    }
  }, [duration, steps.length, showSteps])

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-8">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <p className="text-green-400 font-semibold">Loading Complete!</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      {/* Animated Icon */}
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <div className="absolute inset-0 w-16 h-16 border-2 border-cyan-400 rounded-full animate-spin border-t-transparent"></div>
      </div>

      {/* Message */}
      <div className="text-center">
        <p className="text-white font-medium text-lg mb-2">{message}</p>
        <div className="flex items-center space-x-2 text-gray-400">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Optimizing for best performance</span>
        </div>
      </div>

      {/* Progress Bar */}
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

      {/* Loading Steps */}
      {showSteps && (
        <div className="space-y-2 text-sm text-gray-400">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                index <= currentStep ? 'bg-green-400' : 'bg-gray-600'
              }`}></div>
              <span className={index <= currentStep ? 'text-white' : ''}>{step}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default OptimizedLoading