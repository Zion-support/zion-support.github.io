import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'elevated'
  hover?: boolean
}

export default function Card({
  children,
  className,
  variant = 'default',
  hover = false,
}: CardProps) {
  const baseStyles = 'rounded-2xl border transition-all duration-300'
  
  const variants = {
    default: 'bg-white border-gray-200 shadow-sm',
    glass: 'bg-white/10 backdrop-blur-lg border-white/20',
    elevated: 'bg-white border-gray-200 shadow-lg',
  }
  
  const hoverStyles = hover ? 'hover:scale-105 hover:shadow-xl' : ''

  return (
    <div className={clsx(
      baseStyles,
      variants[variant],
      hoverStyles,
      className
    )}>
      {children}
    </div>
  )
}