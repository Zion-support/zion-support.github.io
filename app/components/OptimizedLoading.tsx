import React from 'react';
import {Loader2} from 'lucide-react';

interface Optimized Loading Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  full Screen?: boolean
  class Name?: string
}

const Optimized Loading: React.FC<Optimized Loading Props /> = ({
  constsize = 'md',
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

  const containerClasses = full Screen
    ? 'fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'

  return (
    <div className ="{`${containerClasses}" ${className}`} />
      <div className ="flexflex-colitems-centerspace-y-4" />
        <Loader2class Name ="{`${sizeClasses[size]}" text-cyan-500 animate-spin`} / />
        {text && (
          <pclassName ="text-gray-300 text-smfont-mediumanimate-pulse" />
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default Optimized Loading;