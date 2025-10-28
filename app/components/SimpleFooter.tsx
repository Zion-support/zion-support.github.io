import React from 'react';
import Footer from './/Footer';

interface SimpleFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const SimpleFooter: React.FC<SimpleFooterProps> = ({ className = '', children }) => {
  return (
    <div className={`simplefooter-component ${className}`}>
      {children}
    </div>
  );
};

SimpleFooter.displayName = 'SimpleFooter';

export default SimpleFooter;