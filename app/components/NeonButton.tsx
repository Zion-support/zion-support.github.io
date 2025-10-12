'use client'
import React from 'react'

interface NeonButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export default function NeonButton({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false
}: NeonButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 transform hover:scale-105 active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${className}
  `
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-purple-500 to-blue-600 text-white
      hover:from-purple-600 hover:to-blue-700
      shadow-[0_0_20px_rgba(147,51,234,0.3)]
      hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]
    `,
    secondary: `
      bg-gradient-to-r from-pink-500 to-purple-600 text-white
      hover:from-pink-600 hover:to-purple-700
      shadow-[0_0_20px_rgba(236,72,153,0.3)]
      hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]
    `,
    outline: `
      border-2 border-purple-500 text-purple-400
      hover:bg-purple-500 hover:text-white
      hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]
    `
  }
  
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`
  
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    )
  }
  
  return (
    <button 
      onClick={onClick} 
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  )
}