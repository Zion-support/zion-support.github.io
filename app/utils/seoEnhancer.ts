import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const seoEnhancer.ts: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`seoenhancer.ts ${className}`}>
      {children}
    </div>
  );
};

export default seoEnhancer.ts;