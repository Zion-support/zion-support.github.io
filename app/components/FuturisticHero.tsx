import React from 'react';

interface FuturisticheroProps {
  children?: React.ReactNode;
}

const Futuristichero: React.FC<FuturisticheroProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Futuristichero;
