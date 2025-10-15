import React from 'react';

interface ImprovedsidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvedsidebar({ className = '', children }: ImprovedsidebarProps) {
  return (
    <div className={`ImprovedSidebar-component ${className}`}>
      {children}
    </div>
  );
}