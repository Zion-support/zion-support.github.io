import React from 'react';

interface TestingProps {
  className?: string;
}

const Testing: React.FC<TestingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Testing</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Testing;