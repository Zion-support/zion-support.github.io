import React from 'react';

export interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export interface FormFieldProps {
  control: any;
  name: string;
  render: (props: any) => React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ control, name, render }) => {
  return render({ field: { name, value: '', onChange: () => {} } });
};

export interface FormItemProps {
  children: React.ReactNode;
}

export const FormItem: React.FC<FormItemProps> = ({ children }) => {
  return <div className="form-item">{children}</div>;
};

export interface FormControlProps {
  children: React.ReactNode;
}

export const FormControl: React.FC<FormControlProps> = ({ children }) => {
  return <div className="form-control">{children}</div>;
};

export interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const FormLabel: React.FC<FormLabelProps> = ({ children, className }) => {
  return <label className={className}>{children}</label>;
};

export interface FormMessageProps {
  className?: string;
}

export const FormMessage: React.FC<FormMessageProps> = ({ className }) => {
  return <div className={className} />;
};