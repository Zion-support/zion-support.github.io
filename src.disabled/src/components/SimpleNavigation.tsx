import React from 'react';

interface SimpleNavigationProps {
  className?: string;
}

const SimpleNavigation: React.FC<SimpleNavigationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SimpleNavigation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SimpleNavigation;