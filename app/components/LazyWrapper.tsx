import React from "react";

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function LazyWrapper({ children, fallback }: LazyWrapperProps) {
  return (
    <React.Suspense fallback={fallback || <div>Loading...</div>}>
      {children}
    </React.Suspense>
  );
}