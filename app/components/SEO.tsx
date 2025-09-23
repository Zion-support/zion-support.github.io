import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  url?: string
}

export default function SEO({
  title = 'Zion Tech Group - Advanced AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.',
  keywords = 'AI, artificial intelligence, cloud services, cybersecurity, technology solutions',
  ogImage = '/og-image.jpg',
  url = 'https://zion.app'
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}