import React from 'react';

interface ScrollToTopProps {
  className?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ScrollToTop</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ScrollToTop;