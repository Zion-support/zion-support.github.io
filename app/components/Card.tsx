import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'elevated' | 'dark'
  hover?: boolean
  onClick?: () => void
  role?: string
  'aria-label'?: string
  tabIndex?: number
}

export default function Card({
  children,
  className,
  variant = 'default',
  hover = false,
  onClick,
  role,
  'aria-label': ariaLabel,
  tabIndex,
}: CardProps) {
  const baseStyles = 'rounded-2xl border transition-all duration-300'
  
  const variants = {
    default: 'bg-white border-gray-200 shadow-sm',
    glass: 'bg-white/10 backdrop-blur-lg border-white/20',
    elevated: 'bg-white border-gray-200 shadow-lg',
    dark: 'bg-gray-900 border-gray-700 shadow-lg text-white',
  }
  
  const hoverStyles = hover ? 'hover:scale-105 hover:shadow-xl' : ''
  const clickableStyles = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' : ''

  const Component = onClick ? 'button' : 'div'

  return (
    <Component
      className={clsx(
        baseStyles,
        variants[variant],
        hoverStyles,
        clickableStyles,
        className
      )}
      onClick={onClick}
      role={role}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {children}
    </Component>
  )
}