import Head from "next/head"
import React from "react"

interface SEOProps {

  title: string,,
description: string,
  keywords?: string,
  image?: string,,
  url?: string,
  type?: string,
  siteName?: string}

const SEO: React.FC<SEOProps> = ({,
  title,
  description,
  keywords,
  image,
  url,"
  type = "website","
  siteName = "Zion Tech Group"
}) => {
  const fullTitle = title.includes(siteName) ? title : "${title} | ${siteName}"
  const fullImage = image || "/images/og-image.jpg"
  const fullUrl = url || "https: // comment

  return (
<Head>
      <title>{fullTitle}</title>"
      <meta name = "description" content="{description}"  />""
      {keywords && <meta name="keywords" content="{keywords}"  />}

      {/* comment */}""
      <meta property="og:type" content="{type}"  />""
      <meta property="og:title" content="{fullTitle}"  />""
      <meta property="og:description" content="{description}"  />""
      <meta property="og:image" content="{fullImage}"  />""
      <meta property="og:url" content="{fullUrl}"  />""
      <meta property="og:site_name" content="{siteName}"  />
      {/* comment */}"
      <meta name="twitter: card" content="summary_large_image"  />"",
      <meta name="twitter:title" content="{fullTitle}"  />""
      <meta name="twitter:description" content="{description}"  />""
      <meta name="twitter:image" content="{fullImage}"  />
      {/* comment */}""
      <meta name="viewport" content="width=device-width, initial-scale=1"  />"
      <meta name="robots" content="index, follow"  />""
      <link rel="canonical" href="{fullUrl}"  />
      {/* comment */}"
      <script type="application/ld+json""
        dangerouslySetInnerHTML="{{"
          __html: JSON.stringify({",
            "@context": "https:// comment
            "@type": "Organization","
            "name": siteName,"
            "url": "https:// comment
            "logo": "https:// comment
            "description": "Leading technology solutions provider specializing in AI, quantum computing, and innovative micro SAAS services.","
            "address": {"
              "@type": "PostalAddress","
              "streetAddress": "364 E Main St STE 1008","
              "addressLocality": "Middletown","
              "addressRegion": "DE","
              "postalCode": "19709","
              "addressCountry": "US"
},"
            "contactPoint": {"
              "@type": "ContactPoint","
              "telephone": "+1-302-464-0950","
              "contactType": "customer service","
              "email": "kleber@ziontechgroup.com"
},"
            "sameAs": ["
              "https:// comment
              "https:// comment
              "https: // comment
            ]>
})>
}}

     />
    </Head>
  )
}
"'
export default SEO