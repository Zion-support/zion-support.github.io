import { useState } from 'react'
import { motion } from 'framer-motion'
'use client'
interface FuturisticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}
const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children
  onClick
  variant = 'primary'
  size = 'md'
  disabled = false
  loading = false
  className = ''
  type = 'button'
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover: shadow-cyan-500/40';
      case 'secondary':
        return 'bg-white/10 text-white border border-white/20 hover: bg-white/20 backdrop-blur-sm';
      case 'accent':
        return 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25 hover: shadow-orange-500/40';
      case 'ghost':
        return 'text-cyan-400 hover: text-cyan-300 hove,
  r:bg-cyan-500/10';,
    default: return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hove,
  r:shadow-cyan-500/40'
  }
  }
  const getSizeClasses = $2;
export default FuturisticButton