import React from 'react';

interface LazyimageProps {
  children?: React.ReactNode;
}

const Lazyimage: React.FC<LazyimageProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Lazyimage;
