'use client'
import React from 'react'

interface SEOOptimizerProps {
  children: React.ReactNode
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  structuredData?: any
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  return <>{children}</>
}

export default SEOOptimizer