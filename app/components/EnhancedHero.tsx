import React from 'react';

interface EnhancedheroProps {
  children?: React.ReactNode;
}

const Enhancedhero: React.FC<EnhancedheroProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Enhancedhero;
