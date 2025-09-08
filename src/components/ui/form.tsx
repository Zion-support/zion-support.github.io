import React from 'react';
import { cn } from '@/lib/utils';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form
      className={cn('space-y-4', className)}
      {...props}
    >
      {children}
    </form>
  );
}

interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
}

export function FormField({ children, className }: FormFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {children}
    </div>
  );
}

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export function FormLabel({ children, className, ...props }: FormLabelProps) {
  return (
    <label
      className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
      {...props}
    >
      {children}
    </label>
  );
}

interface FormControlProps {
  children: React.ReactNode;
  className?: string;
}

export function FormControl({ children, className }: FormControlProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}

interface FormMessageProps {
  children: React.ReactNode;
  className?: string;
}

export function FormMessage({ children, className }: FormMessageProps) {
  return (
    <p className={cn('text-sm font-medium text-destructive', className)}>
      {children}
    </p>
  );
}

interface FormItemProps {
  children: React.ReactNode;
  className?: string;
}

export function FormItem({ children, className }: FormItemProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {children}
    </div>
  );
}

interface FormDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function FormDescription({ children, className }: FormDescriptionProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </p>
  );
}