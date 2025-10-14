import React from 'react';

interface ResponsiveTextProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ className = '', children }) => {
  return (
    <div className={`responsivetext ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveText;