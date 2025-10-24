import React from 'react'

"use client"

interface DefaultSEOProps {
  className?: string}
}
;
const DefaultSEO: React.FC<DefaultSEOProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>DefaultSEO
      <p className="text-lg text-gray-300 mb-8">This component is under construction.
    </p>
  </div>
  )
}

export default DefaultSEO,
;