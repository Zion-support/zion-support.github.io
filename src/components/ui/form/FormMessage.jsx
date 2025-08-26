import React from 'react';

export default function FormMessage({ children, className = '' }) {
  if (!children) return null;
  
  return (
    <p className={`text-sm ${className}`}>
      {children}
    </p>
  );
}