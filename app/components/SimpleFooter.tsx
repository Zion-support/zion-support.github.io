import React from 'react';

interface SimpleFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const SimpleFooter: React.FC<SimpleFooterProps> = ({ className = '', children }) => {
  return (
    <footer className={`simple-footer ${className}`}>
      {children}
    </footer>
  );
};

SimpleFooter.displayName = 'SimpleFooter';

export default SimpleFooter;