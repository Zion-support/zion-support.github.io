import React from 'react'
import { cn } from '../lib/utils'

interface FuturisticCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: 'purple' | 'blue' | 'cyan' | 'pink' | 'green'
  hover?: boolean
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className, 
  glowColor = 'purple',
  hover = true 
}) => {
  const glowClasses = {
    purple: 'shadow-purple-500/20 hover:shadow-purple-500/40',
    blue: 'shadow-blue-500/20 hover:shadow-blue-500/40',
    cyan: 'shadow-cyan-500/20 hover:shadow-cyan-500/40',
    pink: 'shadow-pink-500/20 hover:shadow-pink-500/40',
    green: 'shadow-green-500/20 hover:shadow-green-500/40'
  }
  
  return (
    <div
      className={cn(
        "relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 transition-all duration-300",
        hover && "hover:bg-white/15 hover:scale-105",
        glowClasses[glowColor],
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-purple-500/10 before:to-blue-600/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default FuturisticCard