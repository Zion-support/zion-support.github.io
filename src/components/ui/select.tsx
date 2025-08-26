<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { cn } from '@/lib/utils';

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
=======

interface SelectProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
>>>>>>> origin/cursor/build-and-fix-errors-e276
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  defaultValue?: string;
}

<<<<<<< HEAD
export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

const SelectContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
  disabled: boolean;
} | undefined>(undefined);

export const Select: React.FC<SelectProps> = ({
  value = '',
  onValueChange,
  disabled = false,
  children,
  className,
  ...props
}) => {
  const handleValueChange = (newValue: string) => {
    if (!disabled && onValueChange) {
      onValueChange(newValue);
=======
export function Select({ 
  children, 
  className = '', 
  value, 
  onChange, 
  onValueChange,
  disabled = false,
  defaultValue
}: SelectProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (onValueChange) {
      onValueChange(e.target.value);
>>>>>>> origin/cursor/build-and-fix-errors-e276
    }
  };

  return (
<<<<<<< HEAD
    <SelectContext.Provider value={{ value, onValueChange: handleValueChange, disabled }}>
      <div className={cn('relative', className)} {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ children, className, ...props }) => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error('SelectTrigger must be used within a Select component');
  }

  return (
    <button
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      disabled={context.disabled}
      {...props}
=======
    <select
      className={`${baseClasses} ${className}`}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      defaultValue={defaultValue}
>>>>>>> origin/cursor/build-and-fix-errors-e276
    >
      {children}
    </button>
  );
};

export const SelectValue: React.FC<SelectValueProps> = ({ placeholder, className, ...props }) => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error('SelectValue must be used within a Select component');
  }

  return (
    <option value={value}>
      {children}
    </option>
  );
}

export function SelectTrigger({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}>
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}