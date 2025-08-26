import React from 'react';

export function Select({ children, className = '', value, onValueChange, disabled = false }) {
  const baseClasses = "flex h-10 w-full items-center justify-between rounded-md border border-zion-blue-light/30 bg-zion-blue-dark/50 px-3 py-2 text-sm text-white placeholder:text-zion-slate-light/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors";
  
  return (
    <select 
      className={`${baseClasses} ${className}`} 
      value={value} 
      onChange={(e) => onValueChange?.(e.target.value)} 
      disabled={disabled}
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children, className = '', onClick, disabled = false }) {
  return (
    <button 
      type="button"
      className={`flex h-10 w-full items-center justify-between rounded-md border border-zion-blue-light/30 bg-zion-blue-dark/50 px-3 py-2 text-sm text-white placeholder:text-zion-slate-light/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function SelectItem({ children, value, className = '', ...props }) {
  return (
    <option 
      className={`text-white bg-zion-blue-dark ${className}`} 
      value={value} 
      {...props}
    >
      {children}
    </option>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}

export function SelectContent({ children, className = '' }) {
  return (
    <div className={`
      absolute top-full left-0 right-0 z-50 mt-1 rounded-md border 
      border-zion-blue-light/30 bg-zion-blue-dark/90 backdrop-blur-sm 
      shadow-lg ${className}
    `}>
      {children}
    </div>
  );
}
