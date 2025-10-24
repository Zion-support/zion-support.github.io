import React from 'react'

"use client"

interface StructuredDataProps {
  className?: string}
}
;
const StructuredData: React.FC<StructuredDataProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>StructuredData
      <p className="text-lg text-gray-300 mb-8">This component is under construction.
    </p>
  </div>
  )
}

export default StructuredData,
;