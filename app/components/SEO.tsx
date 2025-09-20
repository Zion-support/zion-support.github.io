import React from 'react'

interface SEOProps {
  title?: string
  description?: string
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <div>
      {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
    </div>
  )
}
export default SEO;