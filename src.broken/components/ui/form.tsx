import React from 'react';

interface FormProps {
  className?: string;
}

const Form: React.FC<FormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Form</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Form;