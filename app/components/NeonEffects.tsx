'use client'
import React from 'react'

interface NeonTextProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function NeonText({ 
  children, 
  className = '', 
  glowColor = '#8b5cf6',
  intensity = 'medium' 
}: NeonTextProps) {
  const intensityClasses = {
    low: 'drop-shadow-[0_0_5px_rgba(139,92,246,0.3)]',
    medium: 'drop-shadow-[0_0_10px_rgba(139,92,246,0.5)] drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]',
    high: 'drop-shadow-[0_0_15px_rgba(139,92,246,0.7)] drop-shadow-[0_0_30px_rgba(139,92,246,0.5)] drop-shadow-[0_0_45px_rgba(139,92,246,0.3)]'
  }

  return (
    <span 
      className={`${intensityClasses[intensity]} ${className}`}
      style={{ 
        textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
        filter: 'drop-shadow(0 0 5px rgba(139,92,246,0.5))'
      }}
    >
      {children}
    </span>
  )
}

interface NeonBorderProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  animated?: boolean
}

export function NeonBorder({ 
  children, 
  className = '', 
  glowColor = '#8b5cf6',
  animated = false 
}: NeonBorderProps) {
  const baseClasses = `border-2 border-transparent bg-gradient-to-r from-transparent via-transparent to-transparent bg-clip-border`
  const glowClasses = `shadow-[0_0_20px_${glowColor}] shadow-${glowColor.replace('#', '')}`
  const animationClasses = animated ? 'animate-pulse' : ''

  return (
    <div 
      className={`${baseClasses} ${glowClasses} ${animationClasses} ${className}`}
      style={{
        borderImage: `linear-gradient(45deg, ${glowColor}, transparent, ${glowColor}) 1`,
        boxShadow: `0 0 20px ${glowColor}, inset 0 0 20px ${glowColor}20`
      }}
    >
      {children}
    </div>
  )
}

interface NeonButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

export function NeonButton({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  animated = true 
}: NeonButtonProps) {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-500',
    secondary: 'bg-transparent text-purple-400 border-purple-500 hover:bg-purple-500/10',
    accent: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-cyan-500'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const animationClasses = animated ? 'hover:scale-105 transition-all duration-300' : ''

  return (
    <button
      onClick={onClick}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${animationClasses}
        border-2 rounded-lg font-semibold
        shadow-[0_0_20px_rgba(139,92,246,0.5)]
        hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]
        transition-all duration-300
        ${className}
      `}
      style={{
        textShadow: '0 0 10px rgba(255,255,255,0.5)',
        boxShadow: `0 0 20px ${variant === 'primary' ? 'rgba(139,92,246,0.5)' : 'rgba(6,182,212,0.5)'}`
      }}
    >
      {children}
    </button>
  )
}

interface NeonCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  hover?: boolean
}

export function NeonCard({ 
  children, 
  className = '', 
  glowColor = '#8b5cf6',
  hover = true 
}: NeonCardProps) {
  const hoverClasses = hover ? 'hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:scale-105' : ''

  return (
    <div 
      className={`
        bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6
        border border-slate-700/50
        shadow-[0_0_20px_rgba(139,92,246,0.2)]
        transition-all duration-300
        ${hoverClasses}
        ${className}
      `}
      style={{
        boxShadow: `0 0 20px ${glowColor}20, inset 0 0 20px ${glowColor}10`
      }}
    >
      {children}
    </div>
  )
}

interface PulsingDotProps {
  color?: string
  size?: number
  className?: string
}

export function PulsingDot({ 
  color = '#8b5cf6', 
  size = 8, 
  className = '' 
}: PulsingDotProps) {
  return (
    <div
      className={`rounded-full animate-pulse ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`
      }}
    />
  )
}

interface AnimatedGradientProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  duration?: number
}

export function AnimatedGradient({ 
  children, 
  className = '', 
  colors = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'],
  duration = 3 
}: AnimatedGradientProps) {
  const gradientString = colors.join(', ')
  
  return (
    <div
      className={`${className}`}
      style={{
        background: `linear-gradient(-45deg, ${gradientString})`,
        backgroundSize: '400% 400%',
        animation: `gradientShift ${duration}s ease infinite`
      }}
    >
      {children}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}