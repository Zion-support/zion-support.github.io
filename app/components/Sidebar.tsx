import React from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Sidebar({ className = '', children }: SidebarProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}