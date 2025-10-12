'use client'
import React from 'react'

interface FuturisticCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export default function FuturisticCard({ 
  children, 
  className = '', 
  hover = true, 
  glow = true 
}: FuturisticCardProps) {
  return (
    <div className={`
      relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 
      transition-all duration-300 group
      ${hover ? 'hover:bg-white/20 hover:scale-105' : ''}
      ${glow ? 'hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]' : ''}
      ${className}
    `}>
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  )
}