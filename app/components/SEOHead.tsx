import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
}

export default function SEOHead({
  title = 'Zion Tech Group - Advanced AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Enterprise-grade technology that drives innovation and growth.',
  keywords = ['AI', 'artificial intelligence', 'cloud services', 'cybersecurity', 'technology solutions', 'enterprise software', 'digital transformation'],
  image = '/og-image.jpg',
  url = 'https://zion.app',
  type = 'website',
}: SEOHeadProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3b82f6" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
    </Head>
  )
}