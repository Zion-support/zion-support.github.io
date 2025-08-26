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
  className?: string;
}

export function FormField({ children, className = '' }: FormFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
}

interface FormLabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

export function FormLabel({ children, htmlFor, className = '' }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className={`text-sm font-medium text-white ${className}`}>
      {children}
    </label>
  );
}

interface FormControlProps {
  children: React.ReactNode;
  className?: string;
}

export function FormControl({ children, className = '' }: FormControlProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface FormItemProps {
  children: React.ReactNode;
  className?: string;
}

export function FormItem({ children, className = '' }: FormItemProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
}

interface FormMessageProps {
  children: React.ReactNode;
  className?: string;
}

export function FormMessage({ children, className = '' }: FormMessageProps) {
  return (
    <p className={`text-sm text-red-400 ${className}`}>
      {children}
    </p>
  );
}