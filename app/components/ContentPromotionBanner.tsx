import React from 'react';

interface ContentpromotionbannerProps {
  children?: React.ReactNode;
}

const Contentpromotionbanner: React.FC<ContentpromotionbannerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Contentpromotionbanner;
