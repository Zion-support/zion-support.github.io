<<<<<<< HEAD
import React, { lazy, Suspense } from 'react';

interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

export const LazyComponent: React.FC<LazyComponentProps> = ({
  component,
  fallback = <div>Loading...</div>,
  ...props
}) => {
  const LazyLoadedComponent = lazy(component);
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
=======
import React from 'react'
};
import React, { Suspense, lazy } from 'react';


interface LazyComponentProps {
  component: ComponentType<Record<string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown,
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component: Component, 
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />,
  ...props
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
>>>>>>> origin/main
    </Suspense>
  );
};

<<<<<<< HEAD
export default LazyComponent;
=======
export default LazyComponent;
import React from 'react',;
},




>>>>>>> origin/main
