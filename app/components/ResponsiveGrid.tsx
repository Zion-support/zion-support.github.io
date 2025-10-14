import React from 'react';

interface ResponsiveGridProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ className = '', children }) => {
  return (
    <div className={`responsivegrid-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">ResponsiveGrid</h3>
          <p className="text-gray-600">This is the ResponsiveGrid component.</p>
        </div>
      )}
    </div>
  );
};

export default ResponsiveGrid;