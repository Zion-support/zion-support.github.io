import React, { Suspense } from 'react';
import LoadingStates from './LoadingStates';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = <LoadingStates /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

<<<<<<< HEAD
export default LazyWrapper;
=======
export default LazyWrapper;
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
