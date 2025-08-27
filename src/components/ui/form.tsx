import React from 'react';

// Form components for building forms
export const Form = ({ children, onSubmit, className = '', ...props }: React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form onSubmit={onSubmit} className={className} {...props}>
      {children}
    </form>
  );
};

export const FormField = ({ 
  control, 
  name, 
  render, 
  ...props 
}: {
  control: any;
  name: string;
  render: (props: any) => React.ReactElement;
  [key: string]: any;
}) => {
  return render({ field: { name, ...props } });
};

export const FormItem = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const FormLabel = ({ children, className = '', ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className={className} {...props}>
      {children}
    </label>
  );
};

export const FormControl = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const FormMessage = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};

export const FormDescription = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};