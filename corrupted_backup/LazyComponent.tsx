<<<<<<< HEAD

=======
import React, { Suspense, ComponentType } from 'react';

interface LazyComponentProps {
  component: ComponentType<any>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component: Component, 
  fallback = <div>Loading...</div>, 
  ...props 
}) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
};

export default LazyComponent;