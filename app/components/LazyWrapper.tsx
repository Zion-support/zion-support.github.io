'use client'
import React, { Suspense, lazy } from 'react'
import FuturisticLoader from './FuturisticLoader'

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  fallback = <FuturisticLoader size="lg" />
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

export default LazyWrapper