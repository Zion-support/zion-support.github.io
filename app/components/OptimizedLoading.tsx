<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
import { Loader2 } from 'lucide-react';

interface OptimizedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  fullScreen?: boolean
  className?: string
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'

  return (
<<<<<<< HEAD
    <div className={`${containerClasses} ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className={`${sizeClasses[size]} text-cyan-500 animate-spin`} />
=======
    <div className="{`${container-Classes}" ${className}`} />
      <div className="flex flex-col items-centerspace-y-4">
        <Loader2 className="{`${size-Classes[size]}" text-cyan-500 animate-spin`} / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
        {text && (
          <p className="text-gray-300 text-sm font-medium animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default OptimizedLoading