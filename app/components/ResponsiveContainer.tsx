import React from 'react';

interface ResponsiveContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ className = '', children }) => {
  return (
<div className={`responsive-container ${className}`}>
      {children || <h2>ResponsiveContainer</h2>}
334a97c43c32bf9e815481016c5bf31caa46a580
    </div>
  );
};

ResponsiveContainer.displayName = 'ResponsiveContainer';

export default ResponsiveContainer;