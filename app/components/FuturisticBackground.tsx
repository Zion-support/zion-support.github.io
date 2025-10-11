'use client'
import React from 'react'

interface FuturisticBackgroundProps {
  children: React.ReactNode
  variant?: 'default' | 'animated' | 'gradient'
  intensity?: 'low' | 'medium' | 'high'
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({
  children,
  variant = 'default',
  intensity = 'medium'
}) => {
  const getBackgroundClasses = () => {
    const baseClasses = 'min-h-screen relative overflow-hidden'
    
    switch (variant) {
      case 'animated':
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`
      case 'gradient':
        return `${baseClasses} bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900`
      default:
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`
    }
  }

  const getIntensityClasses = () => {
    switch (intensity) {
      case 'low':
        return 'opacity-30'
      case 'high':
        return 'opacity-80'
      default:
        return 'opacity-50'
    }
  }

  return (
    <div className={getBackgroundClasses()}>
      {/* Animated Background Elements */}
      {variant === 'animated' && (
        <>
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse ${getIntensityClasses()}`} />
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse ${getIntensityClasses()}`} style={{ animationDelay: '1s' }} />
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.2)_0%,transparent_70%)] animate-pulse ${getIntensityClasses()}`} style={{ animationDelay: '2s' }} />
        </>
      )}

      {/* Grid Pattern Overlay */}
      <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] ${getIntensityClasses()}`} />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default FuturisticBackground