import React from 'react';

export const Form = ({ children, onSubmit, className = '' }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

export const FormField = ({ control, name, render }) => {
  return render({ field: { name, value: '', onChange: () => {} } });
};

export const FormItem = ({ children, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
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

export const FormControl = ({ children }) => {
  return children;
};

export const FormDescription = ({ children, className = '' }) => {
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>
      {children}
    </p>
  );
};

export const FormMessage = ({ children, className = '' }) => {
  return (
    <p className={`text-sm font-medium text-destructive ${className}`}>
      {children}
    </p>
  );
};

export const useForm = () => {
  return {
    control: {},
    formState: { errors: {} },
    handleSubmit: (fn) => (e) => {
      e.preventDefault();
      fn();
    },
    register: () => ({}),
    setValue: () => ({}),
    getValues: () => ({}),
    watch: () => ({}),
    reset: () => ({}),
  };
};