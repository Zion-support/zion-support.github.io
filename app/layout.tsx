import React from 'react';

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Layout({ className = '', children, ...props }: LayoutProps) {
  return (
    <div className={`layout-component ${className}`} {...props}>
      {children}
    </div>
  );
}
