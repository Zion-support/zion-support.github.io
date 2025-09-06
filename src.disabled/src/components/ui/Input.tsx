import React from 'react';

interface InputProps {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Input</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Input;