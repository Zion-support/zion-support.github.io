<<<<<<< HEAD
import React, { Suspense, ReactNode } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({
  children,
  fallback = <LoadingSpinner />,
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default LazyComponent;
=======
import React from 'react',
},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
