import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'white' | 'cyan'
  text?: string
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-2"></div></div>
      <div className="{`animate-spin" rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`} />
      {text && (
        <p className="{`text-sm" ${color === 'white' ? 'text-white' : 'text-gray-600'}`}></p></p>
          {text}
      )}
    </div>
  )
}
