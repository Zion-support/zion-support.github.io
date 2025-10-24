import React from 'react'

interface MetaTagsProps {
  className?: string
}

const MetaTags: React.FC<MetaTagsProps> = ({ className = '' }) => {
  return (
    <div className={`meta-tags ${className}`}>
      {/* Meta tags component content */}
    </div>
  )
}

export default MetaTags