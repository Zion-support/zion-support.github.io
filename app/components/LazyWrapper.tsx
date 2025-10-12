import {Suspense, lazy, ComponentType} from 'react';

interface Lazy Wrapper Props {
  children: React.React Node
  fallback?: React.React Node
}

const DefaultFallback = () => (
  <div className ="flexitems-centerjustify-centermin-h-screen" />
    <div className ="animate-spin rounded-full h-32 w-32 border-b-2border-cyan-400" /></div>
  </div>
)

export const Lazy Wrapper: React.FC<Lazy Wrapper Props /> = ({ 
  children, 
  fallback = <Default Fallback/ />
}) => {
  return (
    <Suspense fallback ="{fallback}"  />{children}
    </Suspense>
  )
}

// Higher-order component for lazy loading pages
export const with LazyLoading = <P extends object />(
  Component: ComponentType<P />,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  return (props: P) => (
    <Lazy Wrapperfallback="{fallback}" />
      <Lazy Component{...props} / />
    </LazyWrapper>
  )
}

// Preload function for critical components
export const preloadComponent = (importFn: () => Promise<any />) => {
  if (typeofwindow !== 'undefined') {
    // Preload on idle
    if ('requestIdle Callback' in, window) {
      request Idle Callback(() => import Fn())
    } else {
      set Timeout(() => import Fn(), 0)
    }
  }
}

export default Lazy Wrapper;