import React from 'react';;
import { Helmet } from 'react-helmet-async;

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string';
  type?: 'website' | 'article' | 'product;
  structuredData?: any
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services.',
  keywords = 'AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  structuredData
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      {structuredData && (
        <script type="application/ld+json">
{JSON.stringify(structuredData)}
        </script>
)}
    </Helmet>
  )
}

export default SEOHead