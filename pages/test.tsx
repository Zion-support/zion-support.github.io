import React from 'react';

interface TestProps {
  className?: string;
}

const Test: React.FC<TestProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Test;