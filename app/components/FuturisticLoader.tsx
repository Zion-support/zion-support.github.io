'use client'
import React from 'react'

interface FuturisticLoaderProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({
  size = 'md',
  color = 'cyan'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const colorClasses = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    green: 'text-green-400',
    blue: 'text-blue-400'
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} ${colorClasses[color as keyof typeof colorClasses]} animate-spin`}>
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="60 20"
            className="opacity-25"
          />
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="60 20"
            strokeDashoffset="60"
            className="opacity-75"
          />
        </svg>
      </div>
    </div>
  )
}

export default FuturisticLoader