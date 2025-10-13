import React from 'react';

interface ErrorFallbackProps {
  // Add props here
}

export default function ErrorFallback({}: ErrorFallbackProps) {
  return (
    <div className="errorfallback">
      <h2>ErrorFallback</h2>
      <p>Component under development.</p>
    </div>
  );
}