import React from 'react';

interface GlobalErrorBoundaryProps {
  // Add props here
}

export default function GlobalErrorBoundary({}: GlobalErrorBoundaryProps) {
  return (
    <div className="globalerrorboundary">
      <h2>GlobalErrorBoundary</h2>
      <p>Component under development.</p>
    </div>
  );
}