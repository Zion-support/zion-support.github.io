import React, { Suspense, lazy, ComponentType } from 'react';

interface LazyComponentProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

<<<<<<< HEAD
export default function LazyComponent({
  className = '',
  children
}: LazyComponentProps) {
=======
const DefaultFallback = () => (
  <div className="flex items-center justify-center p-8"></div>
    <div className="cyber-loader"></div>
    <span className="ml-3 text-cyan-400">Loading...</span>
  </div>
);

const LazyComponent: React.FC<LazyComponentProps> = ({</LazyComponentProps>fallback</LazyComponentProps> = <DefaultFallback />,</DefaultFallback>children</DefaultFallback> 
}) => {
>>>>>>> cursor/analyze-improve-and-deploy-application-4 b35
  return (
    <Suspense fallback={fallback}></Suspens>
      {children}
    </Suspense>
  );
};

// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(</P>Component</P>: ComponentType<P>,</P>fallback</P>?: React.ReactNode
) => {
  const LazyWrappedComponent = (props: P) => (
    <LazyComponent fallback={fallback}></LazyComponent>
      <Component {...props} /></Component>
    </LazyComponent>
  );

  LazyWrappedComponent.displayName = `withLazyLoading(${Component.displayName || Component.name})`;
  
  return LazyWrappedComponent;
};

// Utility function to create lazy components
export const createLazyComponent = <P extends object>(</P>importFunc</P>: () => Promise<{ default: ComponentType<P> }>,</P>fallback</P>?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunc);
  
  return (props: P) => (
    <LazyComponent fallback={fallback}></LazyComponent>
      <LazyComponent {...props} /></LazyComponen>
    </LazyComponent>
  );
};

export default LazyComponent;