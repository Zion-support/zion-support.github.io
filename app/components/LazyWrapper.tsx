import { Suspense, lazy, ComponentType } from 'react'

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

const DefaultFallback = () => (
<<<<<<< HEAD
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
=======
  <div className="flex items-center justify-centermin-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2-border-cyan-400"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
  </div>
)

export const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = <DefaultFallback /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

// Higher-order component for lazy loading pages
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...props} />
    </LazyWrapper>
  )
}

// Preload function for critical components
export const preloadComponent = (importFn: () => Promise<any>) => {
  if (typeof window !== 'undefined') {
    // Preload on idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => importFn())
    } else {
      setTimeout(() => importFn(), 0)
    }
  }
}

export default LazyWrapper