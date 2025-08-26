import React from 'react';

interface FormProps {
  children: React.ReactNode;
  [key: string]: any;
}

export function Form({ children, ...props }: FormProps) {
  return <div {...props}>{children}</div>;
}

interface FormFieldProps {
  control: any;
  name: string;
  render: (props: any) => React.ReactNode;
}

export function FormField({ control, name, render }: FormFieldProps) {
  return <>{render({ field: { name, onChange: () => {}, value: '' } })}</>;
}

interface FormItemProps {
  children: React.ReactNode;
  className?: string;
}

export function FormItem({ children, className = '' }: FormItemProps) {
  return <div className={`space-y-2 ${className}`}>{children}</div>;
}

interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function FormLabel({ children, className = '' }: FormLabelProps) {
  return <label className={`text-sm font-medium ${className}`}>{children}</label>;
}

interface FormControlProps {
  children: React.ReactNode;
}

export function FormControl({ children }: FormControlProps) {
  return <>{children}</>;
}

interface FormMessageProps {
  children?: React.ReactNode;
  className?: string;
}

export function FormMessage({ children, className = '' }: FormMessageProps) {
  if (!children) return null;
  return <p className={`text-sm text-red-500 ${className}`}>{children}</p>;
}