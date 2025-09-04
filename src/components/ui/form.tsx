import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export function Form({ children, ...props }: FormProps) {
  return (
    <form {...props}>
      {children}
    </form>
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

interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export function FormLabel({ children, className = '', htmlFor }: FormLabelProps) {
  return (
    <label 
      htmlFor={htmlFor}
      className={`block text-sm font-medium ${className}`}
    >
      {children}
    </label>
  );
}

interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
}

export function FormField({ children, className = '' }: FormFieldProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      {children}
    </div>
  );
}

interface FormMessageProps {
  children?: React.ReactNode;
  className?: string;
}

export function FormMessage({ children, className = '' }: FormMessageProps) {
  if (!children) return null;
  
  return (
    <p className={`text-sm text-red-600 ${className}`}>
      {children}
    </p>
  );
}