'use client';
import React from 'react';

interface StructuredDataProps {
  children?: React.ReactNode;
}

const StructuredData: React.FC<StructuredDataProps> = ({ children }) => {
  return (
    <div className="structured-data">
      {children}
    </div>
  );
};

export default StructuredData;