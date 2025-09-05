import React, { Suspense, ComponentType, ReactNode } from 'react';

interface LazyComponentProps {
  component: ComponentType<Record<string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component: Component, 
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />,
  ...props 
}) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyComponent;