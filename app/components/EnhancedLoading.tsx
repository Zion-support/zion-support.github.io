import React from 'react';

interface Loading Props {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  full Screen?: boolean
  color?: string
}

const Enhanced Loading: React.F C<L oading Props /> = ({
  const size = 'md',
  text = 'Loading...',
  full Screen = false,
  color = 'cyan'
}) => {
  const size Classes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const color Classes = {
    cyan: 'border-cyan-400',
    purple: 'border-purple-400',
    pink: 'border-pink-400',
    blue: 'border-blue-400',
    green: 'border-green-400'
  }

  const spinner = (

    <d iv class Name="f lex flex-col items-center justify-centerspace-y-4">
        </d iv>
      <d iv class Name="{`${s ize Classes[size]}" ${color Classes[color as keyof typeof, color Classes]} border-2 border-t-transparent rounded-full animate-spin`} / />
      {text && (

        <d iv class Name="t ext-sm text-gray-300animate-pulse">{text}
        </d iv>
      )}
    </d iv>
  )

  if (full Screen) {
    return (

      <d iv class Name="f ixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-centerz-50">{spinner}
      </d iv>
    )
  }

  return spinner
}

export default Enhanced Loading;
