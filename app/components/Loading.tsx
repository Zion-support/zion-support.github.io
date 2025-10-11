'use client'
import React from 'react'

interface LoadingProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Loading: React.FC<LoadingProps> = ({
  message = "Loading...",
  size = 'md',
  className = ""
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4`}></div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{message}</p>
    </div>
  )
}

export default Loading