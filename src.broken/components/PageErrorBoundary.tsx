import React from 'react';

interface PageErrorBoundaryProps {
  className?: string;
}

const PageErrorBoundary: React.FC<PageErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PageErrorBoundary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PageErrorBoundary;