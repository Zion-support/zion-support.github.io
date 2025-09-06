import React from 'react';

interface ErrorOverlayProps {
  className?: string;
}

const ErrorOverlay: React.FC<ErrorOverlayProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorOverlay</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorOverlay;