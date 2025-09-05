import React, { Suspense, ReactNode } from 'react';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  children, 
  fallback = <div>Loading...</div> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;