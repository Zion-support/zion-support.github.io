import React from 'react';

export const Form = ({ children, ...props }) => {
  return (
    <form {...props}>
      {children}
    </form>
  );
};

export const FormControl = ({ children }) => {
  return <div className="form-control">{children}</div>;
};

export const FormField = ({ control, name, render }) => {
  return render({ field: { name } });
};

export const FormItem = ({ children, className = '' }) => {
  return (
    <div className={`form-item ${className}`}>
      {children}
    </div>
  );
};

export const FormLabel = ({ children, className = '' }) => {
  return (
    <label className={`form-label ${className}`}>
      {children}
    </label>
  );
};

export const FormMessage = ({ children, className = '' }) => {
  return (
    <div className={`form-message ${className}`}>
      {children}
    </div>
  );
};