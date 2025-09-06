<<<<<<< HEAD
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

export function SidebarSection({
  className,
  title,
  children,
  ...props
}: SidebarSectionProps) {
  return (
    <div className={cn('py-2', className)} {...props}>
      {title && (
        <h3 className='px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider'>
          {title}
        </h3>
      )}
      <div className='space-y-1'>{children}</div>
    </div>
  );
}
=======
 interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
title?: string;
children?: React.ReactNode 
}export function SidebarSection ({
  className, title, children, ...props 
}: SidebarSectionProps) {
  return (<div className= {
  cn ("py-2", className) 
}{
  ...props 
}> {
  title && (<h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider" > {
  title 
}</h3>) 
}<div className="space-y-1" > {
  children 
}</div> 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
