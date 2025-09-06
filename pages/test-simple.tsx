import React from 'react';

interface TestSimpleProps {
  className?: string;
}

const TestSimple: React.FC<TestSimpleProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TestSimple</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TestSimple;