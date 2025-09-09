import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Form({ children, ...props }) {
  const methods = useFormContext();
  
  return (
    <form {...props}>
      {children}
    </form>
  );
}