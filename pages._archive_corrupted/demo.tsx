import React from 'react';

interface DemoProps {
  className?: string;
}

const Demo: React.FC<DemoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Demo</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Demo;