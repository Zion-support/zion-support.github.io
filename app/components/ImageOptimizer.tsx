
'use client'
import React from 'react'
interface ImageOptimizerProps {
  className?: string
  children?: React.ReactNode
}
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
export default ImageOptimizer
