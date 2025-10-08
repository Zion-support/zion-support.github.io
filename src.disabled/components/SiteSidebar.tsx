import React from 'react';

interface SiteSidebarProps {
  className?: string;
  children?: React.ReactNode;
}

const SiteSidebar: React.FC<SiteSidebarProps> = ({
  className = '',
  children,
}) => {
  return (
    <div className={`sitesidebar-component ${className}`}>
      {children || (
        <div className='p-4 text-center text-gray-600'>
          <h3 className='text-lg font-semibold mb-2'>SiteSidebar</h3>
          <p>Component placeholder - implementation needed</p>
        </div>
      )}
    </div>
  );
};

export default SiteSidebar;
