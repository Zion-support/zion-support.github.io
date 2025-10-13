import React from 'react';
interface IconsProps {
export const Icon = (
  name,
  className = "",
//   ...props
}: {
  name: string;
  ...props
...props
: ,
    name: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Icons({ className = '', children }: IconsProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <span className="{`icon" ${className}`} {...props}></span>
      {name}
</span>
  );
