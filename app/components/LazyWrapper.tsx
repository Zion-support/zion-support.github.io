import { Suspense, lazy, ComponentType} from 'react';

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode

 (

        </div></div>

)

export const LazyWrapper: React.FC<LazyWrapperProps /> = ({ 
  children, 

  fallback = <DefaultFallback>
  return (
    
    <Suspense fallback="{fallback}">{children}

  )

// Higher-order component for lazy loading pages

export const withLazyLoading = <P extends object />(
  Component: ComponentType<P />,
  fallback?: React.ReactNode
 Promise.resolve({ default: Component }))

 (

  )

// Preload function for critical components
export const preloadComponent = (importFn: () => Promise<any />) => {
  if (typeof window !== 'undefined') {
    // Preload on idle
    if ('requestIdleCallback' in, window) {
 importFn())
    } else {
 importFn(), 0)

export default LazyWrapper;

