<<<<<<< HEAD
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarGroup({
  className,
  children,
  ...props
}: SidebarGroupProps) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
=======
 interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
children?: React.ReactNode 
}export function SidebarGroup ({
  className, children, ...props 
}: SidebarGroupProps) {
  return (<div className= {
  cn ("mb-4", className) 
}{
  ...props 
}> {
  children 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
}
}