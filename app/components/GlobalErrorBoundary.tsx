import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>GlobalErrorBoundary</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default GlobalErrorBoundary;