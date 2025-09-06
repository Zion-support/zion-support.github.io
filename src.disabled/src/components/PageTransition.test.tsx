import React from 'react';

interface PageTransition.testProps {
  className?: string;
}

const PageTransition.test: React.FC<PageTransition.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PageTransition.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PageTransition.test;