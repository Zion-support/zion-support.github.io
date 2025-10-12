import { Suspense, lazy, ComponentType } from 'react'

interface LazyWrapperProps {
  children: React.ReactNode;
fallback?: React.ReactNode
}

const DefaultFallback = () => (
  <div>
    <div></div>
  </div>
)

export const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = <DefaultFallback></DefaultFallback> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

// Higher-order component for lazy loading pages;
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  return (props: P) => (
    </LazyWrapperProps>
    </DefaultFallback>
    </P>
    </P>
    </LazyComponent>
    </a>
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...props} />
    </LazyWrapper>
  )
}

// Preload function for critical components;
export const preloadComponent = (importFn: () => Promise<a>) => {
  if (typeof window !== 'undefined') {
    // Preload on idle;
if ('requestIdleCallback' in window) {
      requestIdleCallback(() => importFn())
    } else {
      setTimeout(() => importFn(), 0)
    }
  }
}

export default LazyWrapper