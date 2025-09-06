import React from 'react';

interface VirtualScrollProps {
  className?: string;
}

const VirtualScroll: React.FC<VirtualScrollProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>VirtualScroll</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default VirtualScroll;