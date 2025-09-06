import React from 'react';

interface ScrollProgressBarProps {
  className?: string;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ScrollProgressBar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ScrollProgressBar;