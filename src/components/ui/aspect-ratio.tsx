import React from 'react'
import { cn } from '@/lib/utils'

interface AspectRatioProps {
  ratio?: number
  children: React.ReactNode
  className?: string
}

export function AspectRatio({ 
  ratio = 16 / 9, 
  children, 
  className 
}: AspectRatioProps) {
  return (
    <div
      className={cn('relative w-full overflow-hidden', className)}
      style={{
        aspectRatio: ratio.toString()
      }}
    >
      {children}
    </div>
  )
}