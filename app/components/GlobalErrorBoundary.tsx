import React from 'react';

interface GlobalErrorBoundaryProps {
  [key: string]: unknown;
}

export default function GlobalErrorBoundary(_props: GlobalErrorBoundaryProps) {
  return (
    <div>
      <h1>Global Error Boundary</h1>
    </div>
  );
}