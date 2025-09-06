import React from 'react';

interface InputFieldsProps {
  className?: string;
}

const InputFields: React.FC<InputFieldsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InputFields</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InputFields;