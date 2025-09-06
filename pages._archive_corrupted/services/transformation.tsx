import React from 'react';

interface TransformationProps {
  className?: string;
}

const Transformation: React.FC<TransformationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Transformation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Transformation;