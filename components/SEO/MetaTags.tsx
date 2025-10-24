import React from 'react'

"use client"

interface MetaTagsProps {
  className?: string}
}
;
const MetaTags: React.FC<MetaTagsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>MetaTags
      <p className="text-lg text-gray-300 mb-8">This component is under construction.
    </p>
  </div>
  )
}

export default MetaTags,
;