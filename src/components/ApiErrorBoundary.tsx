import React from 'react';

interface ApiErrorBoundaryProps {
  className?: string;
}

const ApiErrorBoundary: React.FC<ApiErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiErrorBoundary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiErrorBoundary;