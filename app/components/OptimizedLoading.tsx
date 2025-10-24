'use client'
import React from 'react'
import FuturisticLoader from './FuturisticLoader'

interface OptimizedLoadingProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({
  message = "Loading...",
  size = 'md',
  color = 'cyan'
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <FuturisticLoader size={size} color={color} />
      <p className="mt-4 text-gray-300 text-lg">{message}</p>
    </div>
  )
}

export default OptimizedLoading