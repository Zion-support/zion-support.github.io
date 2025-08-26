import React from 'react';

export function Select({ children, className = '', value, onChange, disabled = false }) {
  const baseClasses = "flex h-10 w-full items-center justify-between rounded-md border border-zion-blue-light/30 bg-zion-blue-dark/50 px-3 py-2 text-sm text-white placeholder:text-zion-slate-light/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-colors";
  
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

export function SelectItem({ children, value, className = '', ...props }) {
  return (
    <div 
      className={`
        relative flex w-full cursor-pointer select-none items-center 
        rounded-sm px-3 py-2 text-sm text-white outline-none 
        hover:bg-zion-blue/20 focus:bg-zion-blue/20 
        focus:text-white transition-colors
        ${className}
      `} 
      data-value={value} 
      {...props}
    >
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}

export function SelectContent({ children, className = '' }) {
  return (
    <div 
      className={`
        absolute top-full left-0 right-0 z-50 mt-1 rounded-md border 
        border-zion-blue-light/30 bg-zion-blue-dark/90 backdrop-blur-sm 
        shadow-lg ${className}
      `}
    >
      {children}
    </div>
  );
}
