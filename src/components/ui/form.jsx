import React from 'react';

export const Form = memo(({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const FormField = memo(({ children, name }) => {
  return <div data-field={name}>{children}</div>;
};

export const FormItem = memo(({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export const FormControl = memo(({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export const FormLabel = memo(({ children, className = '' }) => {
  return <label className={className}>{children}</label>;
};

export const FormMessage = memo(({ className = '' }) => {
  return <div className={className}></div>;
};
