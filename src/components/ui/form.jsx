import React from 'react';

export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export const FormField = ({ children, name }) => {
  return <div data-field={name}>{children}</div>;
};

export const FormItem = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export const FormControl = ({ children }) => {
  return <div>{children}</div>;
};

export const FormLabel = ({ children, className = '', htmlFor }) => {
  return <label htmlFor={htmlFor} className={className}>{children}</label>;
};

export const FormMessage = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};
