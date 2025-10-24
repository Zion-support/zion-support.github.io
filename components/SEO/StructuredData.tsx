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