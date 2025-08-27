import React from 'react';

interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
}

export function Form({ children, onSubmit, className = '' }: FormProps) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}

interface FormFieldProps {
  control: any;
  name: string;
  render: (props: { field: any }) => React.ReactNode;
}

export function FormField({ control, name, render }: FormFieldProps) {
  const field = { name, value: '', onChange: () => {} };
  return render({ field });
}

interface FormItemProps {
  children: React.ReactNode;
  className?: string;
}

export function FormItem({ children, className = '' }: FormItemProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function FormLabel({ children, className = '' }: FormLabelProps) {
  return (
    <label className={className}>
      {children}
    </label>
  );
}

interface FormControlProps {
  children: React.ReactNode;
}

export function FormControl({ children }: FormControlProps) {
  return <>{children}</>;
}

interface FormMessageProps {
  children: React.ReactNode;
  className?: string;
}

export function FormMessage({ children, className = '' }: FormMessageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
