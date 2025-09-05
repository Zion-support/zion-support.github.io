<<<<<<< HEAD
import React from 'react'};
;
=======
import React, { Suspense, ComponentType, ReactNode } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  children, 
  fallback = <LoadingSpinner text="Loading component..." /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
