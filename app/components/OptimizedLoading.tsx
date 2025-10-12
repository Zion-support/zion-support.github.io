
import React from 'react';
import { Loader2 } from 'lucide-react';


interface OptimizedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  t ext?: s tring
  f ull Scr een?: b ool ean
  c las sNa me?: s tring
}
c onst OptimizedLoading: React.FC<OptimizedLoadingProps /> = ({
  c onst size = 'md',
  t ext = 'Loading...',
  f ull Scr een = f alse,
  c las sNa me = ''
}) => {
  c onst size Cla sses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }
  c onst c ontainerC las ses = f ull Scr een
    ? 'fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'


  return (
    <div className="{`${containerClasses}" ${className}`} />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <Loader2 className="{`${sizeClasses[size]}" text-cyan-500 animate-spin`}  />
        {text && (
          <p className="w-5 h-5ml-2">{text}
          </p>
        )}
      </div>
  )
}

export default OptimizedLoading;

