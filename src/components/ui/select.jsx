import React from 'react';

export function Select({ children, className = '', value, onChange, disabled }) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <select className={`${baseClasses} ${className}`} value={value} onChange={onChange} disabled={disabled}>
      {children}
    </select>
  );
}

export function SelectItem({ children, value }) {
  return (
    <option value={value} className="text-sm">
      {children}
    </option>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}

export function SelectTrigger({ children, className = '', onClick, disabled }) {
  return (
    <button 
      type="button"
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function SelectContent({ children, className = '' }) {
  return (
    <div className={`
      absolute top-full left-0 right-0 z-50 mt-1 rounded-md border 
      border-input bg-background shadow-lg ${className}
    `}>
      {children}
    </div>
  );
}
