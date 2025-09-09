import React from 'react';

// Basic Form components for compatibility
export const Form = ({ children, ...props }: any) => (
  <form {...props}>{children}</form>
);

export const FormControl = ({ children }: any) => (
  <div className="form-control">{children}</div>
);

export const FormDescription = ({ children, className = '' }: any) => (
  <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
);

export const FormField = ({ control, name, render }: any) => {
  // Simple implementation - in a real app you'd use react-hook-form
  return render({
    field: {
      name,
      value: '',
      onChange: () => {},
      onBlur: () => {},
    },
    fieldState: {
      error: undefined,
      invalid: false,
      isDirty: false,
      isTouched: false,
    },
  });
};

export const FormItem = ({ children, className = '' }: any) => (
  <div className={`form-item ${className}`}>{children}</div>
);

export const FormLabel = ({ children, className = '' }: any) => (
  <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>
    {children}
  </label>
);

export const FormMessage = ({ children, className = '' }: any) => (
  <p className={`text-sm font-medium text-destructive ${className}`}>{children}</p>
);