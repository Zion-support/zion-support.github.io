import React from 'react';
const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ className, children }) => {
  return (
    <div className={'errorboundarywrapper ' + className}>
      {children || <p>ErrorBoundaryWrapper component</p>}
    </div>
  );
};
};

export default ErrorBoundaryWrapper;
