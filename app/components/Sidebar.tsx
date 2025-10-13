<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

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
