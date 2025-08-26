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
  children: React.ReactNode;
  name: string;
  control?: any;
  render?: (props: any) => React.ReactNode;
}

export function FormField({ children, name, control, render }: FormFieldProps) {
  if (render) {
    return render({ field: { name } });
  }
  return <>{children}</>;
}

interface FormControlProps {
  children: React.ReactNode;
}

export function FormControl({ children }: FormControlProps) {
  return <>{children}</>;
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

interface FormMessageProps {
  children?: React.ReactNode;
  className?: string;
}

export function FormMessage({ children, className = '' }: FormMessageProps) {
  if (!children) return null;
  return (
    <p className={className}>
      {children}
    </p>
  );
}