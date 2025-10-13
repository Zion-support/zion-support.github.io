<<<<<<< HEAD
import React from 'react';

interface IconsProps {
=======
export const Icon = (
  name,
  className = "",
  ...props;
: 
  name: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

export default function Icons({ className = '', children }: IconsProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}