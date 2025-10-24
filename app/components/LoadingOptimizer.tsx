'use client'
import React, { useState, useEffect } from 'react'
import FuturisticLoader from './FuturisticLoader'

interface LoadingOptimizerProps {
  children: React.ReactNode
  delay?: number
  minLoadingTime?: number
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({
  children,
  delay = 0,
  minLoadingTime = 500
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, minLoadingTime)

      return () => clearTimeout(timer)
    }
  }, [isLoading, minLoadingTime])

  if (isLoading || !showContent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <FuturisticLoader size="lg" />
      </div>
    )
  }

  return <>{children}</>
}

export default LoadingOptimizer