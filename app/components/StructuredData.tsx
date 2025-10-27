import React from 'react';

interface StructuredDataProps {
  className?: string;
  children?: React.ReactNode;
}

const StructuredData: React.FC<StructuredDataProps> = ({ className = '', children }) => {
  return (
    <div className={`structured-data ${className}`}>
      {children}
    </div>
  );
};

export default StructuredData;
