'use client'
import React, { Suspense, ReactNode } from 'react'
import FuturisticLoader from './FuturisticLoader'

interface LazyWrapperProps {
  children: ReactNode
  fallback?: ReactNode
  delay?: number
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = <FuturisticLoader text="Loading content..." />,
  delay = 0
}) => {
  const [showContent, setShowContent] = React.useState(delay === 0)

  React.useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [delay])

  if (!showContent) {
    return <>{fallback}</>
  }

  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

export default LazyWrapper