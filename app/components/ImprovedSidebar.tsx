import React from 'react';

interface ImprovedSidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedSidebar({ className = '', children, ...props }: ImprovedSidebarProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
