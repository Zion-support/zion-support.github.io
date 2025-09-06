import React from 'react';

interface LoaderOverlayProps {
  className?: string;
}

const LoaderOverlay: React.FC<LoaderOverlayProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoaderOverlay</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoaderOverlay;