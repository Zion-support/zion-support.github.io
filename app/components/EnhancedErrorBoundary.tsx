import React from 'react';

const EnhancedErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default EnhancedErrorBoundary;