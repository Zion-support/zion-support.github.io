import React from 'react'
interface FuturisticCardProps {} children: React.ReactNode className?: string' variant?: 'default' | 'glow' | 'gradient'
}
const FuturisticCard: React.FC<FuturisticCardProps> = ({} children,'' className = ',' variant = 'default'
}) => {''} const baseClasses = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm' const variantClasses = {} default: 'bg-white/10',' glow: 'bg-white/10 shadow-lg shadow-blue-500/20',' gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' } return ( <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>` {children} </div> )
}
export default FuturisticCard'
