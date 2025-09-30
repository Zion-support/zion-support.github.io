import React, { Suspense, lazy } from 'react';

interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component, 
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />,
  ...props 
}) => {
  const LazyLoadedComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
    </Suspense>
  );
};

export default LazyComponent;