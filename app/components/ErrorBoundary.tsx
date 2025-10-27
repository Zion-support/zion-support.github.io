import React from 'react';
const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className, children }) => {
  return (
    <div className={'errorboundary ' + className}>
      {children || <p>ErrorBoundary component</p>}
    </div>
  );
};
};

export default ErrorBoundary;
