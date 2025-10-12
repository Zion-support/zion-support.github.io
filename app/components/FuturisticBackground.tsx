import React from 'react';

interface FuturisticbackgroundProps {
  children?: React.ReactNode;
}

const Futuristicbackground: React.FC<FuturisticbackgroundProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Futuristicbackground;
