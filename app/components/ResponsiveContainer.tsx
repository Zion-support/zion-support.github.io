import React from 'react';

interface ResponsiveContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ className = '', children }) => {
  return (
    <div className={`responsivecontainer-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">ResponsiveContainer</h3>
          <p className="text-gray-600">This is the ResponsiveContainer component.</p>
        </div>
      )}
    </div>
  );
};

export default ResponsiveContainer;