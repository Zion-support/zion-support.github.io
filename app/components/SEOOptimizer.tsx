'use client'
import React from 'react'
import Head from 'next/head'
interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
  className?: string
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'ZionTechGroup - AI Solutions & Technology Services',
  description = 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
  keywords = 'AI solutions, technology services, digital transformation, machine learning, artificial intelligence',
  ogImage = '/og-image.jpg',
  canonicalUrl = 'https://ziontechgroup.com',
  className = '',
}) => {
  const fullTitle = title.includes('ZionTechGroup') ? title : `${title} | ZionTechGroup`
  const keywordsString = keywords.split(', ').join(', ')
  return (
    <Head>
        <title>{fullTitle}</title>
            <meta name="description" content={description} />
                <meta name="keywords" content={keywordsString} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="canonical" href={canonicalUrl} />
                            <meta property="og:title" content={fullTitle} />
                                <meta property="og:description" content={description} />
                                    <meta property="og:image" content={ogImage} />
                                        <meta property="og:url" content={canonicalUrl} />
                                            <meta property="og:type" content="website" />
                                                <meta name="twitter:card" content="summary_large_image" />
                                                    <meta name="twitter:title" content={fullTitle} />
                                                        <meta name="twitter:description" content={description} />
                                                            <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
export default SEOOptimizer