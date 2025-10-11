'use client'
import React from 'react'

interface EnhancedLoadingProps {
  message?: string
  showSpinner?: boolean
  className?: string
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  message = "Loading...",
  showSpinner = true,
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      {showSpinner && (
        <div className="relative mb-4">
          <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-pink-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {message}
        </h3>
        <div className="flex space-x-1 justify-center">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedLoading