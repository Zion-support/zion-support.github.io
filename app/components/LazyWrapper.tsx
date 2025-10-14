import React from "react";

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ children, fallback }) => {
  return (
    <React.Suspense fallback={fallback || <div className="p-4">Loading...</div>}>
      {children}
    </React.Suspense>
  );
};

export default LazyWrapper;
