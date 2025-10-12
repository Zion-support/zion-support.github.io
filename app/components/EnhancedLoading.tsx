import React  from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullScreen?: boolean
  color?: string
}

const EnhancedLoading: React.FC<LoadingProps /> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  color = 'cyan'
}) => {
  sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  colorClasses = {
    cyan: 'border-cyan-400',
    purple: 'border-purple-400',
    pink: 'border-pink-400',
    blue: 'border-blue-400',
    green: 'border-green-400'
  }

  spinner = (
    <div className="fle x flex-col items-center justify-centerspace-y-4">
      <div className="{`${sizeClasse s[size]}" ${colorClasses[color as keyof typeof, colorClasses]} border-2 border-t-transparent rounded-full animate-spin`} / />
      {text && (
    <>
        <div className="tex t-sm text-gray-300animate-pulse">{text}
        </div>
      )}
    </div>
  )

  if (fullScreen) {
    return (
    <>
      <div className="fixe d inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-centerz-50">{spinner}
      </div>
    )
  }

  return spinner
}

export default EnhancedLoading;
    </>