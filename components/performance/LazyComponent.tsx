import React, { Suspense } from 'react';

interface LazyComponentProps {
  component: React.ComponentType<Record<string, unknown>>;
  fallback?: React.ReactNode;
  props?: Record<string, unknown>;
}

export const LazyComponent: React.FC<LazyComponentProps> = ({
  component: Component,
  fallback = <div>Loading...</div>,
  props = {},
}) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyComponent;