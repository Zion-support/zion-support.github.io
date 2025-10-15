import React, { lazy, ComponentType } from 'react',
      import OptimizedLoadingSpinner from './OptimizedLoadingSpinner',

      interface LazyRouteProps {},
      component: () => Promise<{ default: ComponentType<any> }>,
      fallback?: React.ReactNode;
    },
    {}
const LazyRoute: React.FC<LazyRouteProps> = ({},)
      component,
      fallback = <OptimizedLoadingSpinner size="lg" text="Loading page..." /> 
}) => {},
      const LazyComponent = lazy(component),
      return ()
    <fallback={fallback}></>

      <LazyComponent />
    </>
  )
    },
    {}
export default LazyRoute;


