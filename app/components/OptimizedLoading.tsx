import React from 'react'
import { Loader2, Zap } from 'lucide-react'

interface OptimizedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  fullScreen?: boolean
  className?: string
  showLogo?: boolean
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = '',
  showLogo = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        {showLogo && (
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
            <Zap className="w-8 h-8 text-white" />
          </div>
        )}
        <Loader2 className={`${sizeClasses[size]} text-cyan-500 animate-spin`} />
        {text && (
          <div className="text-center">
            <p className="text-gray-300 text-sm font-medium animate-pulse mb-2">
              {text}
            </p>
            {fullScreen && (
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default OptimizedLoading