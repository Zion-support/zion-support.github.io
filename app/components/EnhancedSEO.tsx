'use client'

import React from 'react'

interface SEOProps {
  title?: string
  description?: string
}

const EnhancedSEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </>
  )
}

export default EnhancedSEO