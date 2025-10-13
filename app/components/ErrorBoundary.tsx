import React from 'react';

interface ErrorBoundaryProps {
  // Add props here
}

export default function ErrorBoundary({}: ErrorBoundaryProps) {
  return (
    <div className="errorboundary">
      <h2>ErrorBoundary</h2>
      <p>Component under development.</p>
    </div>
  );
}