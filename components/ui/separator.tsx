import React from 'react'
<<<<<<< HEAD

interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function Separator({ className = '', orientation = 'horizontal' }: SeparatorProps) {
  const baseClasses = 'bg-slate-600';
  const orientationClasses = orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px';
  
  return (
    <div className={`${baseClasses} ${orientationClasses} ${className}`} />
  );
}
=======
  orientation?: any'
export function Separator({ className = '', orientation = 'horizontal'';
  const baseClasses = 'bg-slate-600';'
  const orientationClasses = orientation = = 'horizontal' ? 'w-full h-px' : any'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
