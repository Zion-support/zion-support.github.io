import React from 'react';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export function Separator({ orientation = 'horizontal', className = '', ...props }: SeparatorProps) {
  const classes = orientation === 'horizontal' 
    ? 'h-[1px] w-full bg-gray-200' 
    : 'h-full w-[1px] bg-gray-200';
  
  return (
    <div className={`${classes} ${className}`} {...props} />
  );
}