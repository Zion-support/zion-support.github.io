import React from 'react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string;
fullScreen?: boolean;
color?: string
}

const EnhancedLoading: React.FC<LoadingProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  color = 'cyan'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    cyan: 'border-cyan-400',
    purple: 'border-purple-400',
    pink: 'border-pink-400',
    blue: 'border-blue-400',
    green: 'border-green-400'
  }

  const spinner = (
    <div>
      <div>
      {text && (
        <div>
          {text}
        </div>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div>
        {spinner}
      </div>
    )
  }

  return spinner
}

export default EnhancedLoading