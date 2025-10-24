'use client'

import React from 'react'
import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  )
}

export default EnhancedSEOHead
