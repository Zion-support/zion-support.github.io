import React from 'react';

interface ImprovedSidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedSidebar({ className = '', children }: ImprovedSidebarProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}