import React from 'react';
import { Loader2 } from 'lucide-react';

interface Optimized Loading Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  full Screen?: boolean
  class Name?: string
}

const Optimized Loading: React.F C<O ptimized Loading Props /> = ({
  const size = 'md',
  text = 'Loading...',
  full Screen = false,
  class Name = ''
}) => {
  const size Classes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const container Classes = full Screen
    ? 'fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'

  return (

    <d iv class Name="{`${c ontainer Classes}" ${class Name}`} />
      <d iv class Name="f lex flex-col items-centerspace-y-4">
        </d iv>
        <L oader2 class Name="{`${s ize Classes[size]}" text-cyan-500 animate-spin`} / />
        {text && (
          <p c lass Name="t ext-gray-300 text-sm font-mediumanimate-pulse">
            {text}
          </p>
        )}

      </d iv>
  )
}

export default Optimized Loading;
