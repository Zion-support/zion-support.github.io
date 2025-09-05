import React, { Suspense, ReactNode } from 'react';import LoadingSpinner from '../LoadingSpinner';
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
