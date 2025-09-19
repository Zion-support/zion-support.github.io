import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
}

const SEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - AI, Blockchain & Quantum Computing Solutions",
  description = "Leading technology company specializing in AI solutions, blockchain technology, IT services, quantum computing, cybersecurity, and cloud solutions. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, blockchain technology, quantum computing, IT services, cybersecurity, cloud solutions, machine learning, smart contracts, digital transformation",
  canonicalUrl = "https://ziontechgroup.com",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": description,
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://ziontechgroup.com/contact"
          },
          "sameAs": [
            "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://github.com/ziontechgroup"
          ],
          "offers": [
            {
              "@type": "Service",
              "name": "AI Solutions",
              "description": "Advanced artificial intelligence services including machine learning, natural language processing, and computer vision."
            },
            {
              "@type": "Service", 
              "name": "Blockchain Technology",
              "description": "Secure and decentralized solutions for modern businesses with smart contracts and DeFi platforms."
            },
            {
              "@type": "Service",
              "name": "Quantum Computing",
              "description": "Next-generation quantum computing solutions for complex problem-solving and optimization."
            }
          ]
        })}
      </script>
    </>
  )
}

export default SEO