import React from 'react';

interface EnhancederrorboundaryProps {
  children?: React.ReactNode;
}

const Enhancederrorboundary: React.FC<EnhancederrorboundaryProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Enhancederrorboundary;
