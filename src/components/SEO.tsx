import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  url?: string
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, url }) => {
  return (
    <div>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <meta property="og:url" content={url} />}
    </div>
  )
}

export default SEO