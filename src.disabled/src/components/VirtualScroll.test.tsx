import React from 'react';

interface VirtualScroll.testProps {
  className?: string;
}

const VirtualScroll.test: React.FC<VirtualScroll.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>VirtualScroll.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default VirtualScroll.test;