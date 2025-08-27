import React from 'react';


// Form components for building accessible forms
=======
export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export const FormControl = ({ children }) => {
  return <div className="form-control">{children}</div>;
};

export const FormField = ({ control, name, render }) => {
  return render({ field: { name, value: '', onChange: () => {} } });
};

export const FormItem = ({ children }) => {
  return <div className="form-item">{children}</div>;
};

export const FormLabel = ({ children, className = '' }) => {
  return <label className={`form-label ${className}`}>{children}</label>;
};

export const FormMessage = ({ className = '' }) => {
  return <div className={`form-message ${className}`}></div>;
};
