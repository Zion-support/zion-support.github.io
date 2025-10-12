import React from 'react';

interface GlobalerrorboundaryProps {
  children?: React.ReactNode;
}

const Globalerrorboundary: React.FC<GlobalerrorboundaryProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Globalerrorboundary;
