import React from 'react';

interface CheckboxProps {
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Checkbox</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Checkbox;