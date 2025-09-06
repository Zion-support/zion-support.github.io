<<<<<<< HEAD
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenu({
  className,
  children,
  ...props
}: SidebarMenuProps) {
  return (
    <ul className={cn('space-y-1', className)} {...props}>
      {children}
    </ul>
  );
}
=======
 interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
children?: React.ReactNode 
}className, children, ...props 
}: SidebarMenuProps) {
  return (<ul > {
  children 
}</ul>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
