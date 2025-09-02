import React from 'react';

export const Form = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const FormField = ({ children, name }) => {
  return <div data-field={name}>{children}</div>;
};

export const FormItem = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export const FormControl = ({ children }) => {
  return <>{children}</>;
>>>>>>> 4d4d0101fe3f5e682336bc916d8652d84dbb4685
};

export const FormLabel = ({ children, className = '' }) => {
  return <label className={className}>{children}</label>;
};

export const FormMessage = ({ className = '' }) => {
  return <div className={className}></div>;
};
