import React from 'react'

interface SEOHeadtsxProps {
  className?: string
}

const SEOHeadtsx: React.FC<SEOHeadtsxProps> = ({ className = '' }) => {
  return (
    <div className={`seoheadtsx ${className}`}>
      {/* SEOHeadtsx component content */}
    </div>
  )
}

export default SEOHeadtsx
