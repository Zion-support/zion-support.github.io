import React from 'react';

interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

export function Form({ children, onSubmit }: FormProps) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

interface FormControlProps {
  children: React.ReactNode;
}

export function FormControl({ children }: FormControlProps) {
  return <div>{children}</div>;
}

interface FormItemProps {
  children: React.ReactNode;
}

export function FormItem({ children }: FormItemProps) {
  return <div className="space-y-2">{children}</div>;
}

interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function FormLabel({ children, className = '' }: FormLabelProps) {
  return <label className={`block text-sm font-medium ${className}`}>{children}</label>;
}

interface FormFieldProps {
  control: any;
  name: string;
  render: (props: any) => React.ReactNode;
}

export function FormField({ control, name, render }: FormFieldProps) {
  return render({ field: { name, value: '', onChange: () => {} } });
}

interface FormMessageProps {
  children?: React.ReactNode;
  className?: string;
}

export function FormMessage({ children, className = '' }: FormMessageProps) {
  if (!children) return null;
  return <p className={`text-sm ${className}`}>{children}</p>;
}