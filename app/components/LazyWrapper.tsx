import React from 'react';

interface LazywrapperProps {
  children?: React.ReactNode;
}

const Lazywrapper: React.FC<LazywrapperProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Lazywrapper;
