import React from 'react';

interface ModelProps {
  className?: string;
}

const Model: React.FC<ModelProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Model</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Model;