import React from 'react';

interface ErrorResetOnRouteChangeProps {
  className?: string;
}

const ErrorResetOnRouteChange: React.FC<ErrorResetOnRouteChangeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorResetOnRouteChange</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorResetOnRouteChange;