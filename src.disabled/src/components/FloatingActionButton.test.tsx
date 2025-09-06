import React from 'react';

interface FloatingActionButton.testProps {
  className?: string;
}

const FloatingActionButton.test: React.FC<FloatingActionButton.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FloatingActionButton.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FloatingActionButton.test;