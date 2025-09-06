import React from 'react';

interface PageTransitionProps {
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PageTransition</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PageTransition;