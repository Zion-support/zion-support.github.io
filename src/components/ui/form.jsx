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
=======
import React from 'react';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export const FormLabel = ({ children, className = '' }) => {
  return <label className={className}>{children}</label>};

export const FormMessage = ({ className = '' }) => {
  return <div className={className}></div>};
