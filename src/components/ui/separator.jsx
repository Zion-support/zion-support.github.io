import React from 'react';

export function Separator({ className = '', orientation = 'horizontal', decorative = true, ...props }) {
  const baseClasses = orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px';
  
  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation}
      className={`${baseClasses} bg-gray-300 ${className}`}
      {...props}
    />
  );
}