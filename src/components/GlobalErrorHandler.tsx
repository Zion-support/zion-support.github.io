import React from 'react';

interface GlobalErrorHandlerProps {
  className?: string;
}

const GlobalErrorHandler: React.FC<GlobalErrorHandlerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GlobalErrorHandler</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GlobalErrorHandler;