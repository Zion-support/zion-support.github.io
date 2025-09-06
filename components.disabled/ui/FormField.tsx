import React from 'react';

interface FormFieldProps {
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FormField</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FormField;