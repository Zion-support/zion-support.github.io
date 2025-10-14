import React from 'react''; interface FuturisticCardProps {} children: React.ReactNode; className?: string; variant?: 'default' | 'glow' | 'gradient'}'; const FuturisticCard: React.FC<FuturisticCardProp s> = ({ } children,; className = '',''; variant = 'default''}) => {'}' const baseClasses = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm''; const variantClasses = {}; default: 'bg-white/10',';,''
glow: 'bg-white/10 shadow-lg shadow-blue-500/20',';,''
gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20''; } children: React.ReactNode; className?: string; onClick?: () => void; }'
export default function FuturisticCard({ children, className = '', onClick }: FuturisticCardProps) {'}' return ( <div classNam e={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 ${className}`}`;`'`
onClic k={onClick} > {children} </di v> ); }
'`'`'`