import React from 'react';

interface StructuredDataProps {
  className?: string;
  children?: React.ReactNode;
}

const StructuredData: React.FC<StructuredDataProps> = ({ className = '', children }) => {
  return (
    <div className={`structureddata-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">StructuredData</h3>
          <p className="text-gray-600">This is the StructuredData component.</p>
        </div>
      )}
    </div>
  );
};

export default StructuredData;