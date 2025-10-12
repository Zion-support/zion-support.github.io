import React from 'react';

interface ErrorboundaryProps {
  children?: React.ReactNode;
}

const Errorboundary: React.FC<ErrorboundaryProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Errorboundary;
