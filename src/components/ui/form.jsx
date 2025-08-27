import React from 'react';

// Simple form components for now
export const Form = ({ children, ...props }) => (
  <form {...props}>{children}</form>
);

export const FormControl = ({ children }) => children;

export const FormField = ({ name, render }) => render({ field: { name } });

export const FormItem = ({ children }) => <div>{children}</div>;

export const FormLabel = ({ children, className }) => (
  <label className={className}>{children}</label>
);

export const FormMessage = ({ children, className }) => (
  <div className={className}>{children}</div>
);
