import React from 'react';

interface ResponsiveContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ className = '', children }) => {
  return (
    <div className={`responsivecontainer ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;