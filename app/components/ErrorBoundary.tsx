import React from 'react';
interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

  return (
    <div className={'errorboundary ' + className}>
      {children || <p>ErrorBoundary component</p>}
    </div>
  );
};
export default ErrorBoundary;
