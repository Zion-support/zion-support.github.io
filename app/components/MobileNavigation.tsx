import React from 'react';

interface MobileNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ className = '', children }) => {
  return (
    <div className={`mobilenavigation-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">MobileNavigation</h3>
          <p className="text-gray-600">This is the MobileNavigation component.</p>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;