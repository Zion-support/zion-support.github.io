import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'



interface Enhanced SEO Props {
  title: string
  description: string
  keywords?: string
  canonical Url?: string
  og Image?: string
  }
  )
const EnhancedSEO: React.FC<Enhanced SEO Props> = ({
  title
  description
  keywords
canonical Url
  og Image
}) => {
  return (
    <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
  )
      {canonical Url && <link rel="canonical" href={canonical Url} />}
  )
      {/* Open Graph */}
  )
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
<meta property="og: type" content="website" />
      {og Image && <meta property="og:image" content={og Image} />}
  )
      {/* Twitter Card */}
  )
      <meta name="twitter: card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {og Image && <meta name="twitter:image" content={og Image} />}
  )
    </Helmet>
  )
  }
  )
export default EnhancedSEO;;