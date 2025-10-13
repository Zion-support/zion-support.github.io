import React from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function ResponsiveGrid({ children, className = '', ...props }: ResponsiveGridProps) {
  return (
    <div className={`responsivegrid-component ${className}`} {...props}>
      {children}
    </div>
  );
}