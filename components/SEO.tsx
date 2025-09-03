import Head from "next/head"
import React from "react"

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  siteName?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  siteName = "Zion Tech Group",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags
}) => {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com')
  const defaultImage = image || 'https://ziontechgroup.com/og-image.jpg'
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      
      {/* Article specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={currentUrl} />
    </Head>
  )
}

export default SEO