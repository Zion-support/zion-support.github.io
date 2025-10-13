import React from 'react'

interface EnhancedSEOProps {
  title?: string
  description?: string
  keywords?: string
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ title, description, keywords }) => {
  return <div className="enhanced-seo" />
}

export default EnhancedSEO
