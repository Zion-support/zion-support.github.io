import React from 'react';
import { cn } from '@/lib/utils';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
}

interface FormItemProps {
  children: React.ReactNode;
  className?: string;
}

interface FormControlProps {
  children: React.ReactNode;
  className?: string;
}

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
}

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  error?: string;
}

interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface FormRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form className={cn('space-y-6', className)} {...props}>
      {children}
    </form>
  );
}

export function FormField({ children, className }: FormFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {children}
    </div>
  );
}

export function FormItem({ children, className }: FormItemProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {children}
    </div>
  );
}

export function FormControl({ children, className }: FormControlProps) {
  return (
    <div className={cn('space-y-1', className)}>
      {children}
    </div>
  );
}

export function FormLabel({ children, required, className, ...props }: FormLabelProps) {
  return (
    <label 
      className={cn('block text-sm font-medium text-gray-700', className)} 
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}

export function FormInput({ error, className, ...props }: FormInputProps) {
  return (
    <div className="space-y-1">
      <input
        className={cn(
          'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
          error && 'border-red-300 focus:ring-red-500 focus:border-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export function FormTextarea({ error, className, ...props }: FormTextareaProps) {
  return (
    <div className="space-y-1">
      <textarea
        className={cn(
          'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
          'resize-vertical min-h-[100px]',
          error && 'border-red-300 focus:ring-red-500 focus:border-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export function FormSelect({ error, children, className, ...props }: FormSelectProps) {
  return (
    <div className="space-y-1">
      <select
        className={cn(
          'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
          error && 'border-red-300 focus:ring-red-500 focus:border-red-500',
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export function FormCheckbox({ label, error, className, ...props }: FormCheckboxProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center">
        <input
          type="checkbox"
          className={cn(
            'h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded',
            'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
            error && 'border-red-300',
            className
          )}
          {...props}
        />
        <label className="ml-2 block text-sm text-gray-700">
          {label}
        </label>
      </div>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export function FormRadio({ label, error, className, ...props }: FormRadioProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center">
        <input
          type="radio"
          className={cn(
            'h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300',
            'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
            error && 'border-red-300',
            className
          )}
          {...props}
        />
        <label className="ml-2 block text-sm text-gray-700">
          {label}
        </label>
      </div>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export function FormDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-sm text-gray-500', className)}>
      {children}
    </p>
  );
}

export function FormMessage({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-sm text-gray-600', className)}>
      {children}
    </p>
  );
}