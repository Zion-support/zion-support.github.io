import React from 'react';

interface ImprovedsidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvedsidebar({ className = '', children, ...props }: ImprovedsidebarProps) {
  return (
    <div className={`improvedsidebar-component ${className}`} {...props}>
      {children}
    </div>
  );
};

