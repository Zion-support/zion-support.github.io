import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function ResponsiveContainer({ children, className = '', ...props }: ResponsiveContainerProps) {
  return (
    <div className={`responsivecontainer-component ${className}`} {...props}>
      {children}
    </div>
  );
}