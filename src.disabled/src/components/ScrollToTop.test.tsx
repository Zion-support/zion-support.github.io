import React from 'react';

interface ScrollToTop.testProps {
  className?: string;
}

const ScrollToTop.test: React.FC<ScrollToTop.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ScrollToTop.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ScrollToTop.test;