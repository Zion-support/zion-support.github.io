import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GlobalErrorBoundary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GlobalErrorBoundary;