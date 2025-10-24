import React from 'react'

interface SEOtsxProps {
  className?: string
}

const SEOtsx: React.FC<SEOtsxProps> = ({ className = '' }) => {
  return (
    <div className={`seotsx ${className}`}>
      {/* SEOtsx component content */}
    </div>
  )
}

export default SEOtsx
