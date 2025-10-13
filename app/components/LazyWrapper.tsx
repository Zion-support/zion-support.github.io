<<<<<<< HEAD
import React, { Suspense, lazy, ComponentType } from 'react'
import LoadingSpinner from './LoadingSpinner'
interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode}
=======
import React, { Suspense, lazy, ComponentType } from 'react';'
import LoadingSpinner from './LoadingSpinner';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;}
}
>>>>>>> cursor/analyze-improve-and-deploy-application-4227

const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = <LoadingSpinner size="lg" text="Loading component..." /> }
}) => {
  return (}
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
<<<<<<< HEAD
  );
}
=======
  )}
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
<<<<<<< HEAD
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
=======
) => {}
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...props} />
    </LazyWrapper>
<<<<<<< HEAD
  );
<<<<<<< HEAD
}
export default LazyWrapper;
=======
  )}
export default LazyWrapper
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
};

export default LazyWrapper;'
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
