import React from 'react';

interface SimpleNavigation.testProps {
  className?: string;
}

const SimpleNavigation.test: React.FC<SimpleNavigation.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SimpleNavigation.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SimpleNavigation.test;