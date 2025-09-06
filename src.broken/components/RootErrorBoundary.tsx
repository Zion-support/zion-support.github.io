import React from 'react';

interface RootErrorBoundaryProps {
  className?: string;
}

const RootErrorBoundary: React.FC<RootErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RootErrorBoundary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RootErrorBoundary;