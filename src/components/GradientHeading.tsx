import React from 'react'
import { cn } from '@/utils/cn'

interface GradientHeadingProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function GradientHeading({ 
  children, 
  className, 
  as: Component = 'h1' 
}: GradientHeadingProps) {
  return (
    <Component
      className={cn(
        'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold',
        className
      )}
    >
      {children}
    </Component>
  )
}