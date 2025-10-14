import React from 'react';

interface ImprovedSidebarProps {
  className?: string;
  children?: React.ReactNode;
}

const ImprovedSidebar: React.FC<ImprovedSidebarProps> = ({ className = '', children }) => {
  return (
    <div className={`improvedsidebar-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">ImprovedSidebar</h3>
          <p className="text-gray-600">This is the ImprovedSidebar component.</p>
        </div>
      )}
    </div>
  );
};

export default ImprovedSidebar;