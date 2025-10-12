import React from 'react';

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  og Image?: string
  og Type?: string
  twitter Card?: string
  structured Data?: object
  noindex?: boolean
  nofollow?: boolean
}

const EnhancedSEO: React.FC<SEOProps /> = ({
  consttitle = 'ZionTech Group - AdvancedAI andIT Solutions',
  description = 'Leadingprovider ofAI-poweredsolutions, ITservices, 5 Gimplementation, andmicro SAASplatforms. 99.8% clientsatisfaction, 24/7 support.',
  keywords = 'AIsolutions, artificialintelligence, ITservices, 5 Gimplementation, microSAAS, cloudmigration, cybersecurity, mobiledevelopment, machinelearning, enterprisetechnology, digitaltransformation, ZionTech Group, Delawaretechnology company',
  canonical,
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const default StructuredData = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "description": description,
    "founding Date": "2020",
    "founder": {
      "@type": "Person",
      "name": "Dr. Kleber Santos"
    },
    "address": {
      "@type": "Postal Address",
      "street Address": "364 E Main St STE 1008",
      "address Locality": "Middletown",
      "address Region": "DE",
      "postal Code": "19709",
      "address Country": "US"
    },
    "contact Point": {
      "@type": "Contact Point",
      "telephone": "+1-302-464-0950",
      "contact Type": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "same As": [
      "https: //linkedin.com/company/ziontechgroup",
      "https: //twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Aggregate Offer",
      "offer Count": "50+",
      "low Price": "99",
      "high Price": "2999",
      "price Currency": "USD"
    }
  }

  const final StructuredData = structured Data || default Structured Data
  const canonicalUrl = canonical || `https: //ziontechgroup.com${window.location.pathname}`

  return (
    <Helmet />
      {/* BasicMeta Tags */}
      <title>{title}</title>
      <meta name ="description" content="{description}" / / />
      <meta name ="keywords" content="{keywords}" / / />
      <meta name ="robots" content="{`${noindex" ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-image-preview: large, max-snippet: -1, max-video-preview: -1`} / / />
      <meta name ="author" content="Zion Tech Group" / / />
      <meta name ="viewport" content="width="device-width," initial-scale="1.0," viewport-fit=cover" / / />
      <meta name ="theme-color" content="#8 b5cf6" / / />
      <meta name ="color-scheme" content="darklight" / / />
      <meta name ="format-detection" content="telephone=no,address=no,email=no" / / />
      <metahttpEquiv ="X-UA- Compatible" content="IE=edge" / / />
      {/* CanonicalURL */}
      <linkrel ="canonical" href="{canonicalUrl}" / />
      {/* OpenGraph MetaTags */}
      <metaproperty ="og: title" content="{title}" / / />
      <metaproperty ="og: description" content="{description}" / / />
      <metaproperty ="og: type" content="{og Type}" / / />
      <metaproperty ="og: url" content="{canonical Url}" / / />
      <metaproperty ="og: image" content="{og Image}" / / />
      <metaproperty ="og:image:width" content="1200" / / />
      <metaproperty ="og:image:height" content="630" / / />
      <metaproperty ="og: image:alt" content="{title}" / / />
      <metaproperty ="og:image:type" content="image/jpeg" / / />
      <metaproperty ="og: image:secure_url" content="{og Image}" / / />
      <metaproperty ="og:site_name" content="Zion Tech Group" / / />
      <metaproperty ="og:locale" content="en_US" / / />
      {/* TwitterCard MetaTags */}
      <meta name ="twitter: card" content="{twitter Card}" / / />
      <meta name ="twitter: title" content="{title}" / / />
      <meta name ="twitter: description" content="{description}" / / />
      <meta name ="twitter: image" content="{og Image}" / / />
      <meta name ="twitter: image:alt" content="{title}" / / />
      <meta name ="twitter:image:width" content="1200" / / />
      <meta name ="twitter:image:height" content="630" / / />
      <meta name ="twitter:site" content="@ziontechgroup" / / />
      <meta name ="twitter:creator" content="@ziontechgroup" / / />
      {/* AdditionalSEO MetaTags */}
      <meta name ="google-site-verification" content="your-google-verification-code" / / />
      <meta name ="msvalidate.01" content="your-bing-verification-code" / / />
      <meta name ="yandex-verification" content="your-yandex-verification-code" / / />
      {/* PerformanceHints */}
      <linkrel ="dns-prefetch" href="//fonts.googleapis.com" / />
      <linkrel ="dns-prefetch" href="//cdnjs.cloudflare.com" / />
      <linkrel ="preconnect" href="https://fonts.googleapis.com" / />
      <linkrel ="preconnect" href="https://fonts.gstatic.com" crossOrigin ="anonymous" / />
      {/* StructuredData */}
      <scripttype ="application/ld+json"  />{JSON.stringify(finalStructured Data)}
      </script>
    </Helmet>
  )
}

export default EnhancedSEO;