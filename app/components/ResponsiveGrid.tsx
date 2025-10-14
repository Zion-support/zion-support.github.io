import React from 'react';

interface ResponsiveGridProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ className = '', children }) => {
  return (
    <div className={`responsivegrid ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;