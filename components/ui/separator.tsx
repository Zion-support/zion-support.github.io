import React, { forwardRef } from 'react';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(function Separator(
  { className = '', orientation = 'horizontal', ...props },
  ref
) {
  const sizeClass = orientation === 'horizontal' ? 'h-px w-full' : 'w-px h-full';
  return (
    <div
      ref={ref}
      className={`shrink-0 bg-gray-300 ${sizeClass} ${className}`}
      {...props}
    />
  );
});

export default Separator;