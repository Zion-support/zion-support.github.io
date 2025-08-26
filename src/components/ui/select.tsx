import React from 'react';

interface SelectProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

export function Select({ 
  children, 
  className = '', 
  value, 
  onChange, 
  disabled = false 
}: SelectProps) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-zion-cyan/20 bg-zion-slate-dark px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <select
      className={`${baseClasses} ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {children}
    </select>
  );
}

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
}

export function SelectItem({ children, value }: SelectItemProps) {
  return (
    <option value={value} className="bg-zion-slate-dark text-white">
      {children}
    </option>
  );
}

export function SelectTrigger({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-zion-cyan/20 bg-zion-slate-dark px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent ${className}`}>
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span className="text-sm text-white">{placeholder || 'Select an option'}</span>;
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}