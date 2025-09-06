import React from 'react';

interface PageTransitionProps {
  className?: string;
  children?: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ className = '', children }) => {
  return (
    <div data-testid="agetransition" className={className}>
      {children || <div>PageTransition Component</div>}
    </div>
  );
};

export default PageTransition;
