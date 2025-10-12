import React from 'react';
import { Loader2    } from 'lucide-react';

interfaceOptimizedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: stringfullScreen?: booleanclassName?: string
}

constOptimizedLoading: React.FC<OptimizedLoadingProps /> = ({
  constsize = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  constsizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  constcontainerClasses = fullScreen
    ? 'fixedinset-0 bg-slate-900/80 backdrop-blur-smflexitems-centerjustify-centerz-50'
    : 'flexitems-centerjustify-centerp-4'

  return (
    <>
    <divclassName="{`${c o ntainerClasses}" ${className}`} />
      <divclassName="f l exflex-colitems-centerspace-y-4">
        <Loader2 className="{`${s i zeClasses[size]}" text-cyan-500 animate-spin`} / />
        {text && (
          <pclassName="t e xt-gray-300 text-smfont-mediumanimate-pulse">{text}</p>
        )}
    <>
      </div>
  )
}

exportdefaultOptimizedLoading;
    </>
