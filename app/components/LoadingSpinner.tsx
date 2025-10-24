import React from 'react'
import { Helmet } from 'react-helmet-async'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', className = '' }) => {
  return (
    <div>
      <Helmet>
        <title>LoadingSpinner</title>
        <meta name="description" content="Advanced LoadingSpinner solution for modern businesses." />
        <meta name="keywords" content="AI,artificial, intelligence, LoadingSpinner, AI, solutions, intelligent automation" />
      </Helmet>
      <div className={`flex justify-center items-center ${className}`}>
        <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${
          size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6'
        }`}></div>
      </div>
    </div>
  )
}

export default LoadingSpinner