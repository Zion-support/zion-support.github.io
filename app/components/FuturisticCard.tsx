import React from 'react';

interface FuturisticcardProps {
  children?: React.ReactNode;
}

const Futuristiccard: React.FC<FuturisticcardProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Futuristiccard;
