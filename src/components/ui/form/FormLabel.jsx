import React from 'react';

export default function FormLabel({ children, className = '', ...props }) {
  return (
    <label className={`block text-sm font-medium ${className}`} {...props}>
      {children}
    </label>
  );
}