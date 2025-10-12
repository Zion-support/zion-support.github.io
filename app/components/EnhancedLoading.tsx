import React from 'react';
export default EnhancedLoading;

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string;
  fullScreen?: boolean;
  color?: string;
} const EnhancedLoading: React.FC<LoadingProps /> = ({
  const size = 'md',
  text = 'Loading...',
  fullScreen = false,
  color = 'cyan'
} ) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  } const colorClasses = {
    cyan: 'border-cyan-400',
    purple: 'border-purple-400',
    pink: 'border-pink-400',
    blue: 'border-blue-400',
    green: 'border-green-400'
  } const spinner = (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
      <div className="{`${sizeClasses[size]} " ${colorClasses[color as keyof typeof, colorClasses]} border-2 border-t-transparent rounded-full animate-spin`}  /></div>
      {text && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di>{text}  </div>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di>{spinner}  </div>
    )
  }

  return spinner;
}
