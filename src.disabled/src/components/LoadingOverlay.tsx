import React from 'react';

interface LoadingOverlayProps {
  className?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoadingOverlay</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoadingOverlay;