'use client'
import React, { useEffect } from 'react'
import Head from 'next/head'

interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string
  className?: string
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  title = "Zion Tech Group", 
  description = "Advanced AI solutions for modern businesses",
  keywords = "AI, artificial intelligence, tech solutions",
  className = ""
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }
  }, [title])

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}

export default SEOOptimizer