import React from 'react';

interface FuturisticbuttonProps {
  children?: React.ReactNode;
}

const Futuristicbutton: React.FC<FuturisticbuttonProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Futuristicbutton;
