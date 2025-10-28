import React from 'react';

interface SimpleFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const SimpleFooter: React.FC<SimpleFooterProps> = (_{ className = '', _children }) => {
  return (
    <div className={`simplefooter-component ${className}`}>
      {children}
    </div>
  );
};

SimpleFooter.displayName = 'SimpleFooter';

export default SimpleFooter;