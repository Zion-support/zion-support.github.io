import React from 'react';

interface SimpleFooter.testProps {
  className?: string;
}

const SimpleFooter.test: React.FC<SimpleFooter.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SimpleFooter.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SimpleFooter.test;