import React from 'react';

interface SkipLink.testProps {
  className?: string;
}

const SkipLink.test: React.FC<SkipLink.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SkipLink.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SkipLink.test;