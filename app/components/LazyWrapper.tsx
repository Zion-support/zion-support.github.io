import { Suspense, lazy, ComponentType} from 'react';
interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}
const DefaultFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
)
export const LazyWrapper: React.FC<LazyWrapperProps /> = ({ 
  children, 
  fallback = <DefaultFallback />
}) => {
  return (
    <>
      <Suspense fallback="{fallback}"  />{children}
    </Suspense>
  )
}
// Higher-order component for lazy loading pages
export const withLazyLoading = <P extends object />(
  Component: ComponentType<P />,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  return (props: P) => (
    <LazyWrapper fallback="{fallback}" />
      <LazyComponent {...props}  />
    </LazyWrapper>
  )
}
// Preload function for critical components
export const preloadComponent = (importFn: () => Promise<any />) => {
  if (typeof window !== 'undefined') {
    // Preload on idle
    if ('requestIdleCallback' in, window) {
      requestIdleCallback(() => importFn())
    } else {
      setTimeout(() => importFn(), 0)
    }
  }
}
export default LazyWrapper
    </>
);