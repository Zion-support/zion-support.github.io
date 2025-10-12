import React from 'react';

interface EnhancedseoProps {
  children?: React.ReactNode;
}

const Enhancedseo: React.FC<EnhancedseoProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Enhancedseo;
