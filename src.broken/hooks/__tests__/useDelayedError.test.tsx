import React from 'react';

interface UseDelayedError.testProps {
  className?: string;
}

const UseDelayedError.test: React.FC<UseDelayedError.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UseDelayedError.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UseDelayedError.test;