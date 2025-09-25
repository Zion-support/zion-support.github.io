import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  url?: string
}

export default function SEO({ title, description, keywords, url }: SEOProps) {
  const metaTitle = title
  const metaDescription = description
  const metaKeywords = keywords || ''
  const metaUrl = url || ''

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      {metaUrl && <link rel="canonical" href={metaUrl} />}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {metaUrl && <meta property="og:url" content={metaUrl} />}
    </Head>
  )
}
