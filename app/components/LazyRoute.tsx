import React, { Suspense, lazy, ComponentType } from 'react';;''
import OptimizedLoadingSpinner from './OptimizedLoadingSpinner;'
      type LazyRouteProps = Record<string, never>;,
      component: () => Promise<{ default: ComponentType<any> }>,
      fallback?: React.ReactNode;
    },
    {
const LazyRoute: React.FC<LazyRouteProps> = ({},
      component,
      fallback = <OptimizedLoadingSpinner size="lg" text="Loading page..." />: value""
}) => {}: value,
      const LazyComponent = lazy(component): value,
      return (
    <Suspense fallback={fallback}></Suspense>: value
      <LazyComponent />
    </Suspense>
  )
    },;
    {
export default LazyRoute;"'"'"'"'"
