<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface IconsProps {
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
export const Icon = (
  name,
  className = "",
  ...props;
: 
=======
export const Icon = ({
//   name,
  className = "",
//   ...props
}: {
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  name: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

export default function Icons({ className = '', children }: IconsProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
    <span className="{`icon" ${className}`} {...props}></span>
      {name}
</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  );
}