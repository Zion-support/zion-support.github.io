import React, { Suspense } from 'react';
import Loading from './Loading';

interface LazyWrapperProps {
  children: React.ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  );
};

export default LazyWrapper;
