<<<<<<< HEAD
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarGroupContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarGroupContent({
  className,
  children,
  ...props
}: SidebarGroupContentProps) {
  return (
    <div className={cn('space-y-1', className)} {...props}>
      {children}
    </div>
  );
=======
 interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
children?: React.ReactNode 
}export function SidebarGroupContent ({
  className, children, ...props 
}: SidebarGroupContentProps) {
  return (<div className= {
  cn ("space-y-1", className) 
}{
  ...props 
}> {
  children 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
}
}