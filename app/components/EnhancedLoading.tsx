import React from 'react';

interface Loading Props {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  full Screen?: boolean
  color?: string
}

const Enhanced Loading: React.FC<Loading Props/> = ({
  constsize = 'md',
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

  constspinner = (
    <div className ="flexflex-colitems-centerjustify-centerspace-y-4" />
      <div className ="{`${sizeClasses[size]}" ${colorClasses[coloras keyoftypeof, colorClasses]} border-2 border-t-transparentrounded-fullanimate-spin`} / />
      {text && (
        <div className ="text-smtext-gray-300animate-pulse"  />{text}
        </div>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className ="fixedinset-0 bg-gray-900 bg-opacity-90 flexitems-centerjustify-centerz-50"  />{spinner}
      </div>
    )
  }

  return spinner
}

export default Enhanced Loading;