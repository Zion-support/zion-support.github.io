import React from 'react';

interface DynamicContentShowcaseProps {
  className?: string;
  children?: React.ReactNode;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({ className = '', children }) => {
  return (
    <div className={`dynamiccontentshowcase ${className}`}>
      {children}
    </div>
  );
};

export default DynamicContentShowcase;