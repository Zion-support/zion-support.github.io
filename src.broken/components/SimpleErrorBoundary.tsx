import React from 'react';

interface SimpleErrorBoundaryProps {
  className?: string;
}

const SimpleErrorBoundary: React.FC<SimpleErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SimpleErrorBoundary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SimpleErrorBoundary;