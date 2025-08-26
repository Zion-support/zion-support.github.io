import React from 'react';

// Simple form components for basic functionality
export const Form = ({ onSubmit, children, className = '', ...props }) => {
  return (
    <form onSubmit={onSubmit} className={className} {...props}>
      {children}
    </form>
  );
};

export const FormField = ({ name, control, render, ...props }) => {
  // Simple form field wrapper
  return render({ field: { name, ...props } });
};

export const FormItem = ({ children, className = '', ...props }) => {
  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const FormLabel = ({ children, className = '', ...props }) => {
  return (
    <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>
      {children}
    </label>
  );
};

export const FormControl = ({ children, ...props }) => {
  return React.cloneElement(children, props);
};

export const FormMessage = ({ children, className = '', ...props }) => {
  return (
    <p className={`text-sm font-medium text-destructive ${className}`} {...props}>
      {children}
    </p>
  );
};

export const FormDescription = ({ children, className = '', ...props }) => {
  return (
    <p className={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  );
};