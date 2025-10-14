import React from 'react';

interface ImprovedSidebarProps {
  className?: string;
  children?: React.ReactNode;
}

const ImprovedSidebar: React.FC<ImprovedSidebarProps> = ({ className = '', children }) => {
  return (
    <div className={`improvedsidebar ${className}`}>
      {children}
    </div>
  );
};

export default ImprovedSidebar;