'use client'

import Head from 'next/head'

type SEOProps = {
  title: string
  description?: string
  keywords?: string
  url?: string
}

export default function SEO({ title, description, keywords, url }: SEOProps) {
  const metaDescription = description ?? ''
  const metaKeywords = keywords ?? ''
  const canonicalUrl = url ?? ''

  return (
    <Head>
      <title>{title}</title>
      {metaDescription && <meta name="description" content={metaDescription} />}
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Head>
  )
}
