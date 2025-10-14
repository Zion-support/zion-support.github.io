import React from 'react';

interface ResponsiveTextProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ className = '', children }) => {
  return (
    <div className={`responsivetext-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">ResponsiveText</h3>
          <p className="text-gray-600">This is the ResponsiveText component.</p>
        </div>
      )}
    </div>
  );
};

export default ResponsiveText;