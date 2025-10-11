'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'

interface SEOHeadProps {title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string}

const SEOHead: React.FC<SEOHeadProps> = ({title, 
  description, 
  keywords = [], 
  canonicalUrl}) => {return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEOHead