import React, { Suspense, lazy } from 'react';

interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<unknown> }>,
  fallback?: React.ReactNode;
  [key: string]: unknown,
}

export const LazyComponent: React.FC<LazyComponentProps> = ({
  component;
  fallback = <div>Loading...</div>;
  ...props
}) => {
  const LazyLoadedComponent = lazy(component);
};

export default LazyComponent;


import React from 'react'
}
import React, { Suspense, lazy } from 'react';


import React from 'react'
}
import React, { Suspense, lazy } from 'react';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
}

  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
    </Suspense>
  );
};

export default LazyComponent;
import React from 'react';
},

  return (

