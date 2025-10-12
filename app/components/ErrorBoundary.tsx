import React from 'react';

interface ErrorBoundaryProps {
  // Add props as needed
}

export default function ErrorBoundary({ ...props }: ErrorBoundaryProps) {
  return (
    <div className="errorboundary">
      {/* Component content */}
    </div>
  );
}