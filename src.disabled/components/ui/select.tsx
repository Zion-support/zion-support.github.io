import React from 'react';

interface SelectProps {
  className?: string;
}

const Select: React.FC<SelectProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Select</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Select;