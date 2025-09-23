import Head from 'next/head'

export default function SEO({ 
  title = "Zion Tech Group — Advanced IT & AI Services",
  description = "Leading provider of advanced IT solutions, AI services, and cutting-edge technology solutions for modern businesses.",
  keywords = "IT services, AI solutions, cloud computing, cybersecurity, DevOps, automation",
  image = "/og-image.jpg",
  url = "https://ziontechgroup.com"
}) {
  const fullTitle = title.includes("Zion Tech Group") ? title : `${title} — Zion Tech Group`
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <link rel="canonical" href={url} />
      
      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    </Head>
  )
}