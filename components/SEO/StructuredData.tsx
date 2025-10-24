<<<<<<< HEAD
import React from 'react'
"use client"
interface StructuredDataProps {
  className?: string
}
const StructuredData: React.FC<StructuredDataProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>StructuredData</h2>
      <p>This component is under construction.</p>
    </div>
  );
};
export default StructuredData
=======
import React from 'react';

interface StructuredDataProps {
  className?: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      {/* Structured data component content */}
    </div>
  );
};

export default StructuredData;
>>>>>>> origin/main
