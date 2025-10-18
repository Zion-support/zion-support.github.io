import React from 'react';

// Global error boundary component

export function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}