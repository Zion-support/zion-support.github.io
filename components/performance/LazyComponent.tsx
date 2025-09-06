import React from 'react';

interface LazyComponentProps {
  className?: string;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LazyComponent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LazyComponent;