import React from 'react';

interface LoadingstatesProps {
  children?: React.ReactNode;
}

const Loadingstates: React.FC<LoadingstatesProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Loadingstates;
