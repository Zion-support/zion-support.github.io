import React from 'react';

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Layout({ className = '', children }: LayoutProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}