import React from 'react';

interface useFormProps {
  className?: string;
  children?: React.ReactNode;
}

const useForm: React.FC<useFormProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`useform ${className}`}>
      {children}
    </div>
  );
};

export default useForm;