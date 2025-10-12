import React from 'react';
export default OptimizedLoading;
interface OptimizedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps /> = ({
  const size = 'md',
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

  const containerClasses = fullScreen;
    ? 'fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'

const componentsPage: React.FC = () => {
  return (
    <div className="{`${containerClasses}" ${className}`} /></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <Loader2 className="{`${sizeClasses[size]}" text-cyan-500 animate-spin`}  /></Loader2>
        {text && (
          <p className="w-5h-5ml-2">{text}
          </p>
        )}
      </div>
  )
}
