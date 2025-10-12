import React from 'react';

interface SeoheadProps {
  children?: React.ReactNode;
}

const Seohead: React.FC<SeoheadProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Seohead;
