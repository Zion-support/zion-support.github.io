import React from 'react';
interface ErrorBoundaryWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

  return (
    <div className={'errorboundarywrapper ' + className}>
      {children || <p>ErrorBoundaryWrapper component</p>}
    </div>
  );
};
export default ErrorBoundaryWrapper;
