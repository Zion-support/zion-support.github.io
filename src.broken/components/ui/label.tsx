import React from 'react';

interface LabelProps {
  className?: string;
}

const Label: React.FC<LabelProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Label</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Label;