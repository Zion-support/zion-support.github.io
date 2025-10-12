import React from 'react';

interface SkiplinkProps {
  children?: React.ReactNode;
}

const Skiplink: React.FC<SkiplinkProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Skiplink;
