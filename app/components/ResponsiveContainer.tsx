import React from 'react';

interface ResponsiveContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ className, children }) => {
  return (
    <div className={`responsivecontainer-component ${className || ''}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
