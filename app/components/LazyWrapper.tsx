import React, { Suspense } from "react";

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ children, fallback }) => {
  return (
    <Suspense fallback={fallback || <div className="p-4">Loading...</div>}>
      {children}
    </Suspense>
  );
};

export default LazyWrapper;