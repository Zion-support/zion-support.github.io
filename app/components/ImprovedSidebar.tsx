import React from 'react';

interface ImprovedSidebarProps {
  children?: React.ReactNode;
}

const ImprovedSidebar: React.FC<ImprovedSidebarProps> = ({ children }) => {
  return (
    <div className="improvedsidebar">
      {children}
    </div>
  );
};

export default ImprovedSidebar;