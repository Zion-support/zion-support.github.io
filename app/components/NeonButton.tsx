import React from 'react'
import { cn } from '../lib/utils'

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}) => {
  const baseClasses = "relative font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40",
    secondary: "bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40",
    accent: "bg-gradient-to-r from-pink-500 to-red-600 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl"
  }
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        "before:absolute before:inset-0 before:rounded-inherit before:bg-gradient-to-r before:from-purple-500/20 before:to-blue-600/20 before:blur-sm before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}

export default NeonButton