import React from 'react';

interface TestMinimalProps {
  className?: string;
}

const TestMinimal: React.FC<TestMinimalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TestMinimal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TestMinimal;