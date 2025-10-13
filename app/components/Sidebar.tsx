import React from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Sidebar({ className = '', children, ...props }: SidebarProps) {
  return (
    <div className={`sidebar-component ${className}`} {...props}>
      {children}
    </div>
  );
}
