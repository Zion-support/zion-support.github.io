import React from 'react'
import { Link } from 'react-router-dom'

interface NeonButtonProps {
  to: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  to, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40',
    accent: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  }

  return (
    <Link
      to={to}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} group`}
    >
      {/* Neon glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  )
}

export default NeonButton
