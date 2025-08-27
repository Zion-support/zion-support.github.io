import React from 'react';

export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export const FormControl = ({ children }) => {
  return <div className="space-y-2">{children}</div>;
};

export const FormField = ({ control, name, render }) => {
  // Simple form field implementation
  return render({
    field: {
      name,
      onChange: () => {},
      onBlur: () => {},
      value: '',
    },
  });
};

export const FormItem = ({ children }) => {
  return <div className="space-y-2">{children}</div>;
};

export const FormLabel = ({ children, className = '', ...props }) => {
  return (
    <label className={`text-sm font-medium text-zion-slate-light ${className}`} {...props}>
      {children}
    </label>
  );
};

export const FormMessage = ({ children, className = '', ...props }) => {
  if (!children) return null;
  return (
    <p className={`text-sm text-red-400 ${className}`} {...props}>
      {children}
    </p>
  );
};