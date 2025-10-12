import React from 'react'

interface OptimizedLoadingProps {
  fullScreen?: boolean
  text?: string
}

export default function OptimizedLoading({ 
  fullScreen = false, 
  text = 'Loading...' 
}: OptimizedLoadingProps) {
  const containerClasses = fullScreen 
    ? 'min-h-screen flex items-center justify-center bg-gray-900'
    : 'flex items-center justify-center p-4'

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-300">{text}</p>
      </div>
    </div>
  )
}
