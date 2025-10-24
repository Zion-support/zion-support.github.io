import React from 'react'

interface MetaTagsProps {
  className?: string
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterCard?: string
}

const MetaTags: React.FC<MetaTagsProps> = ({
  className = '',
  title = 'Zion Tech Group - AI Solutions & IT Services',
  description = 'Leading provider of AI solutions, IT services, quantum computing, autonomous systems, and enterprise technology solutions.',
  keywords = 'AI solutions, IT services, quantum computing, autonomous systems, enterprise technology',
  ogTitle,
  ogDescription,
  ogImage,
  twitterCard = 'summary_large_image'
}) => {
  return (
    <div className={className}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || '/og-image.jpg'} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
    </div>
  )
}

export default MetaTags