import React from 'react';
import { Loader2 } from 'lucide-react';

interface OptimizedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  fullScreen?: boolean
  className?: string
}

const OptimizedLoading: React.FC<OptimizedLoadingProps /> = ({
  const size = 'md',
  text='Loading...',
  fullScreen=false,
  className=''
}) => {
  const sizeClasses = {
    sm: 'w-4h-4',
    md: 'w-6h-6',
    lg: 'w-8h-8',
    xl: 'w-12h-12'
  }

  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'

  return (
    <div className="{`${containerClasses}" ${className}`} />
      <div className="flex flex-col items-center space-y-4" />
        <Loader2 className="{`${sizeClasses[size]}" text-cyan-500 animate-spin`} />
        {text && (
          <p className="text-gray-300 text-smfont-medium animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default OptimizedLoading;