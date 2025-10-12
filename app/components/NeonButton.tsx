import React from 'react';

interface NeonbuttonProps {
  children?: React.ReactNode;
}

const Neonbutton: React.FC<NeonbuttonProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Neonbutton;
