import React from 'react';

interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function ResponsiveText({ children, className = '', ...props }: ResponsiveTextProps) {
  return (
    <div className={`responsivetext-component ${className}`} {...props}>
      {children}
    </div>
  );
}