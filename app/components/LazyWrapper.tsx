import { Suspense, lazy, ComponentType} from 'react';

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

DefaultFallback = () => (
  <div className="fle x items-center justify-centermin-h-screen">
    <div className="animat e-spin rounded-full h-32 w-32 border-b-2border-cyan-400"></div>
)

export const LazyWrapper: React.FC<LazyWrapperProps /> = ({ 
  children, 
  fallback = <DefaultFallback / />
}) => {
  return (
    <>
    <Suspense fallback="{fallback}">{children}
    </Suspense>
  )
}

// Higher-order component for lazy loading pages
    <>
export withLazyLoading = <P extends object />(
  Component: ComponentType<P />,
  fallback?: React.ReactNode
) => {
  LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  return (props: P) => (
    <>
    <LazyWrapper fallback="{fallback}" />
      <LazyComponent {...props} / />
    </LazyWrapper>
  )
}

// Preload function for critical components
export preloadComponent = (importFn: () => Promise<any />) => {
  if (typeof window !== 'undefined') {
    // Preload on idle
    if ('requestIdleCallback' in, window) {
      requestIdleCallback(() => importFn())
    } else {
      setTimeout(() => importFn(), 0)
    }
  }
}

export default LazyWrapper;
    </>