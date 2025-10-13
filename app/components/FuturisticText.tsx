import React from 'react';

interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
  variant?: string;
  as?: string;
}

export default function FuturisticText({ className = '', children, variant, as }: FuturisticTextProps) {
  const Component = as as keyof JSX.IntrinsicElements || 'div';
  
  return (
    <Component className={`${className}`}>
      {children}
    </Component>
  );
}