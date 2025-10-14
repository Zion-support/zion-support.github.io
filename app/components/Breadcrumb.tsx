import React from 'react';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '', children }) => {
  return (
    <div className={`breadcrumb-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Breadcrumb</h3>
          <p className="text-gray-600">This is the Breadcrumb component.</p>
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;