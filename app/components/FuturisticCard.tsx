import React from 'react'

interface FuturisticCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  glow = true 
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Card background */}
      <div className="relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40">
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative z-10 p-6">
          {children}
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Glow effect */}
      {glow && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      )}
    </div>
  )
}

export default FuturisticCard
