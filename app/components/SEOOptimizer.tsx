'use client'
import React from 'react'
import Head from 'next/head'

interface SEOOptimizerProps {
  title: string
  description: string
  keywords?: string | string[]
  ogImage?: string
  className?: string
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
  className = ''
}) => {
  const fullTitle = title.includes('ZionTechGroup') ? title : `${title} | ZionTechGroup`
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}

export default SEOOptimizer