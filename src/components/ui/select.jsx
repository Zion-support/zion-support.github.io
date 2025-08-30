import React from 'react';

export function SelectItem({ children, className = '', value, ...props }) {
  return (
    <div className={`
      relative flex w-full cursor-pointer select-none items-center 
      rounded-sm px-3 py-2 text-sm text-white outline-none 
      hover:bg-slate-700/50 focus:bg-slate-700/50 
      focus:text-white transition-colors
      ${className}
    `} data-value={value} {...props}>
      {children}
    </div>
  )}
