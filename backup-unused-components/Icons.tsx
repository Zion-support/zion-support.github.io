<<<<<<< HEAD
import React from 'react';

interface IconsProps {
export const Icon = (
  name,
  className = "",
  ...props;
:
export const Icon = ({
//   name,
  className = "",
//   ...props
}: {
  name: string;
  ...props
=======
...props
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
: ,
    name: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Icons({ className = '', children }: IconsProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
    <span className="{`icon" ${className}`} {...props}></span>
      {name}
</span>
  );
}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
