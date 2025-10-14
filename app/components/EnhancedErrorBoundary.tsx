import React from "react";

interface EnhancedErrorBoundaryProps {
  children: React.ReactNode;
}

const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = ({ children }) => {
  return <>{children}</>;
};

export default EnhancedErrorBoundary;
