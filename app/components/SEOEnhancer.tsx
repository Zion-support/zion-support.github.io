import React from 'react';

interface SeoenhancerProps {
  children?: React.ReactNode;
}

const Seoenhancer: React.FC<SeoenhancerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Seoenhancer;
