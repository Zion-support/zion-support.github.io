import React from 'react';
import React from "react;
import { cn    } from "../utils/cn;

interface FuturisticTextProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'muted';'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';'
  glow?: boolean
  animate?: boolean
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  as: Component = 'p','
  className = ,'
  children,
  variant = 'primary','
  size = 'base','
  weight = 'normal','
  glow = false,
  animate = false,
  ...props
}) => {
  const baseClasses = 'font-sans';'
  
  const variantClasses = {
    primary: 'text-white','
    secondary: 'text-gray-300','
    accent: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent','
    muted: 'text-gray-400
  }
  const sizeClasses = {
    xs: 'text-xs','
    sm: 'text-sm','
    base: 'text-base','
    lg: 'text-lg','
    xl: 'text-xl','
    '2xl': 'text-2xl','
    '3xl': 'text-3xl','
    '4xl': 'text-4xl','
    '5xl': 'text-5xl','
    '6xl': 'text-6xl','
    '7xl': 'text-7xl','
    '8xl': 'text-8xl','
    '9xl': 'text-9xl
  }
  const weightClasses = {
    light: 'font-light','
    normal: 'font-normal','
    medium: 'font-medium','
    semibold: 'font-semibold','
    bold: 'font-bold','
    extrabold: 'font-extrabold','
    black: 'font-black
  }
  const glowClasses = glow ? 'drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]' : ';'
  const animateClasses = animate ? 'animate-pulse' : ';'
  
  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    weightClasses[weight],
    glowClasses,
    animateClasses,
    className
  )
  return React.createElement(Component, {
    className: combinedClasses,
    ...props
  }, children)
}
export default FuturisticText