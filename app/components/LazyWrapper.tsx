import React from "react";

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyWrapper = ({ children }: LazyWrapperProps) => {
  return (
    <div className="lazy-wrapper">
      {children}
    </div>
  );
};

export default LazyWrapper;
