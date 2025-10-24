'use client'
import React from 'react'
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullScreen?: boolean
  className?: string
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md'
  text = 'Loading...'
  fullScreen = false
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6'
    md: 'w-8 h-8'
    lg: 'w-12 h-12'
  }
  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'
  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="...">
        {/* Spinner */}
        <div className="...">
          <div
            className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
          ></div>
        </div>
        
        {/* Loading text */}
        {text && (
          <p className="...">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}
export default Loading