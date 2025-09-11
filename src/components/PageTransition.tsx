import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return <div className='animate-fade-in-up'>{children}</div>;
};

export default PageTransition;
