import React from 'react'
import { ErrorBoundary } from './ErrorBoundary';


interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

export default function GlobalErrorBoundary({ children }: GlobalErrorBoundaryProps) {
  return (
    <div>
      {children}
    </div>
  );
}