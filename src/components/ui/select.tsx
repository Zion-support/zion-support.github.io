import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  className?: string;
}

export function Select({ children, className = '', ...props }: SelectProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <select
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function SelectTrigger({ children, className = '' }: SelectTriggerProps) {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}>
      {children}
    </div>
  );
}

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SelectContent({ children, className = '' }: SelectContentProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

interface SelectValueProps {
  children?: React.ReactNode;
  placeholder?: string;
}

export function SelectValue({ children, placeholder }: SelectValueProps) {
  return (
    <span className="block truncate">
      {children || placeholder}
    </span>
  );
}

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function SelectItem({ children, value, className = '' }: SelectItemProps) {
  return (
    <option value={value} className={className}>
      {children}
    </option>
  );
}