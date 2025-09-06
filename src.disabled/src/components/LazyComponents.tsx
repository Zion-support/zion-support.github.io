import React from 'react';

interface LazyComponentsProps {
  className?: string;
}

const LazyComponents: React.FC<LazyComponentsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LazyComponents</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LazyComponents;