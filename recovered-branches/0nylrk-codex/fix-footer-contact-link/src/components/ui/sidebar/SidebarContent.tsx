<<<<<<< HEAD
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarContent({
  className,
  children,
  ...props
}: SidebarContentProps) {
  return (
    <div className={cn('flex-1 px-2 py-4', className)} {...props}>
      {children}
    </div>
  );
=======
 interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
children?: React.ReactNode 
}export function SidebarContent ({
  className, children, ...props 
}: SidebarContentProps) {
  return (<div className= {
  cn ("flex-1 px-2 py-4", className) 
}{
  ...props 
}> {
  children 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
}
}