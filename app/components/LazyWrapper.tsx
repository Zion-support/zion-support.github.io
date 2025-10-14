import React, { ReactNode } from "react";

interface LazyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function LazyWrapper({ children }: LazyWrapperProps) {
  return (
    <div>
      {children}
    </div>
  );
}