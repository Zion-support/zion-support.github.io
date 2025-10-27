import React from 'react';

interface SimpleFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const SimpleFooter: React.FC<SimpleFooterProps> = ({ className, children }) => {
  return (
    <div className={`simplefooter-component ${className || ''}`}>
      {children}
    </div>
  );
};

export default SimpleFooter;
