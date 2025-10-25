'use client'
import React, { useState, useEffect } from 'react'

interface FuturisticLoaderProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  text?: string
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({ 
  size = 'md', 
  color = 'from-cyan-400 to-purple-500',
  text = 'Loading...'
}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Animated Spinner */}
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer Ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-gray-700`}></div>
        
        {/* Progress Ring */}
        <div 
          className={`absolute inset-0 rounded-full border-2 border-transparent border-t-${color.split('-')[1]}-400 border-r-${color.split('-')[1]}-400 animate-spin`}
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, currentColor ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`
          }}
        ></div>
        
        {/* Inner Glow */}
        <div className={`absolute inset-1 rounded-full bg-gradient-to-r ${color} opacity-20 animate-pulse`}></div>
        
        {/* Center Dot */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r ${color} rounded-full animate-ping`}></div>
      </div>

      {/* Progress Text */}
      <div className="text-center">
        <div className="text-sm text-gray-300 mb-1">{text}</div>
        <div className="text-xs text-gray-500">{Math.round(progress)}%</div>
      </div>

      {/* Progress Bar */}
      <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} transition-all duration-300 ease-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Animated Dots */}
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 bg-gradient-to-r ${color} rounded-full animate-bounce`}
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default FuturisticLoader