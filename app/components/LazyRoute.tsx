
import React, { lazy, ComponentType } from 'react',";
      import OptimizedLoadingSpinner from './OptimizedLoadingSpinner',";

    {}
const LazyRoute: React.FC<LazyRouteProps> = ({},)
      component,
      fallback = <OptimizedLoadingSpinner: size ="lg" text="Loading page..." /> ";
    },
    {};
export default LazyRoute;

import React, { Suspense, lazy, ComponentType } from 'react';
import OptimizedLoadingSpinner from './OptimizedLoadingSpinner';
      interface $1 { [key: string]: any },;
      component: () => Promise<{ default: ComponentType<any> }>,;
      fallback?: React.ReactNode;
    },;
    {
const LazyRoute: React.FC<LazyRouteProps> = ({},;
      component,;
      fallback = <OptimizedLoadingSpinner: size ="lg" text="Loading page..." />: value";
    <Suspense: fallback ={fallback}></Suspense>: value;
      <LazyComponent />;
    </Suspense>;
  )
    },;
    {'"'";
export default LazyRoute"'"'"'"'";
