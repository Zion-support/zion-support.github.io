import React from 'react';
<<<<<<< HEAD

export const Form = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const FormField = ({ children, name }) => {
  return <div data-field={name}>{children}</div>;
};

export const FormItem = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export const FormLabel = ({ children, className = '' }) => {
  return <label className={className}>{children}</label>;
};

export const FormMessage = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export const FormControl = ({ children }) => {
  return <div>{children}</div>;
};
=======
export const FormLabel = ({ children, className = '' }) => {
  return <label className={className}>{children}</label>};
export const FormMessage = ({ className = '' }) => {
  return <div className={className}></div>};
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
