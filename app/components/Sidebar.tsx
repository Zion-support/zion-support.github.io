'use client';

import React, { memo } from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`sidebar ${className}`}>
      {children}
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;