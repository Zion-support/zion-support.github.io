import React from 'react';

interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function Separator({
  className = '',
  orientation = 'horizontal',
}: SeparatorProps) {
  const baseClasses = 'bg-slate-600';
  const orientationClasses =
    orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px';

  return (
    <div className={`${baseClasses} ${orientationClasses} ${className}`} />
  );
}
