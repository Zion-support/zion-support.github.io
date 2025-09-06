<<<<<<< HEAD
import { cn } from '@/lib/utils';
import React from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function GradientHeading({
  children,
  className,
  level = 'h2',
}: GradientHeadingProps) {
  const Tag = level;

  return (
    <Tag
      className={cn(
        'text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </Tag>
  );
}
=======
 interface GradientHeadingProps {
  children: React.ReactNode;
className?: string;
return (<Tag className= {
  cn () 
}> {
  children 
}</Tag>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
