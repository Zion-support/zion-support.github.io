import React from 'react';

const ErrorBoundary = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorBoundary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorBoundary;
