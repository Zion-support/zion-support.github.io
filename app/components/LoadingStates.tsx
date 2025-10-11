'use client'
import React from 'react'
import { Loader2, Brain, Zap } from 'lucide-react'

interface PageLoaderProps {
  message?: string
  showProgress?: boolean
}

export const PageLoader: React.FC<PageLoaderProps> = ({ 
  message = "Loading...", 
  showProgress = false 
}) => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    if (showProgress) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100
          return prev + Math.random() * 15
        })
      }, 200)

      return () => clearInterval(interval)
    }
  }, [showProgress])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Brain className="w-10 h-10 text-white animate-spin" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
            <Zap className="w-3 h-3 text-white" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        
        {showProgress && (
          <div className="w-64 mx-auto">
            <div className="bg-slate-700 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className="text-sm text-gray-400">
              {Math.round(Math.min(progress, 100))}% Complete
            </p>
          </div>
        )}
        
        <div className="flex items-center justify-center space-x-2 mt-6">
          <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
          <span className="text-gray-300">Please wait...</span>
        </div>
      </div>
    </div>
  )
}

export const SkeletonLoader: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`animate-pulse bg-slate-700 rounded ${className}`} />
)

export const CardSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4">
    <div className="flex items-center space-x-4">
      <SkeletonLoader className="w-12 h-12 rounded-lg" />
      <SkeletonLoader className="h-6 w-32" />
    </div>
    <SkeletonLoader className="h-4 w-full" />
    <SkeletonLoader className="h-4 w-3/4" />
    <div className="space-y-2">
      <SkeletonLoader className="h-3 w-full" />
      <SkeletonLoader className="h-3 w-5/6" />
      <SkeletonLoader className="h-3 w-4/6" />
    </div>
  </div>
)

export const TableSkeleton: React.FC = () => (
  <div className="space-y-3">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex space-x-4">
        <SkeletonLoader className="h-4 w-1/4" />
        <SkeletonLoader className="h-4 w-1/4" />
        <SkeletonLoader className="h-4 w-1/4" />
        <SkeletonLoader className="h-4 w-1/4" />
      </div>
    ))}
  </div>
)