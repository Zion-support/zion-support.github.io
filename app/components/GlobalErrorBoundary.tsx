import React from 'react'

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