'use client'

import { Suspense, lazy, ComponentType, ReactNode } from 'react'

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>
  fallback?: ReactNode
  [key: string]: any
}

const defaultFallback = (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
)

export default function LazyComponent({ 
  component, 
  fallback = defaultFallback, 
  ...props 
}: LazyComponentProps) {
  const LazyComponent = lazy(component)

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

// Pre-configured lazy components for common use cases
export const LazyTestimonials = lazy(() => import('./Testimonials'))
export const LazyAnimatedCounter = lazy(() => import('./AnimatedCounter'))
export const LazyScrollReveal = lazy(() => import('./ScrollReveal'))
export const LazyPerformanceMetrics = lazy(() => import('./PerformanceMetrics'))
export const LazyTechnologyStack = lazy(() => import('./TechnologyStack'))

// Higher-order component for lazy loading
export function withLazyLoading<P extends object>(
  Component: ComponentType<P>,
  fallback?: ReactNode
) {
  return function LazyWrappedComponent(props: P) {
    return (
      <Suspense fallback={fallback || defaultFallback}>
        <Component {...props} />
      </Suspense>
    )
  }
}