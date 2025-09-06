<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';

interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

const LazyComponent: React.FC<LazyComponentProps> = ({
  component,
  fallback = <div>Loading...</div>,
  ...props
}) => {
  const LazyLoadedComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
    </Suspense>
  );
};

=======
 return (<Suspense fallback= {
  fallback 
}> <LazyLoadedComponent {
  ...props 
}/> </Suspense>) 
};
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
export default LazyComponent;
