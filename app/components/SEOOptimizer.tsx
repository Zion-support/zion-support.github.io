import { useEffect } from 'react';

interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  structuredData?: object
}

const SEOOptimizer: React.FC<SEOOptimizerProps /> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT services, 5 G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support.',
  keywords = 'AI solutions, artificial intelligence, IT services, 5 G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, machine learning, enterprise technology, digital transformation, Zion Tech Group, Delaware technology company',
  canonical,
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Add structured data to page
    if (structuredData) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)
      
      return () => {
        document.head.removeChild(script)
      }
    }
  }, [structuredData])

  // Generate breadcrumb structured data
  generateBreadcrumbStructuredData = () => {
    pathSegments = window.location.pathname.split('/').filter(Boolean)
    breadcrumbItems = pathSegments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      item: `https://ziontechgroup.com/${pathSegments.slice(0, index + 1).join('/')}`
    }))

    return {
      '@context': 'https: //schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com'
        },
        ...breadcrumbItems
      ]
    }
  }

  // Generate FAQ structured data
  generateFAQStructuredData = () => {
    return {
      '@context': 'https: //schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name': 'What services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text': 'Zion Tech Group offers comprehensive AI solutions, IT services, 5 G implementation, cloud migration, cybersecurity, mobile development, and micro SAAS platforms for businesses of all sizes.'
          }
        },
        {
          '@type': 'Question',
          name': 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text': 'You can contact us at +1 (302) 464-0950, email us at kleber@ziontechgroup.com, or visit our office at 364 E Main St STE 1008, Middletown, DE 19709.'
          }
        },
        {
          '@type': 'Question',
          name': 'What is the typical response time for support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text': 'We provide 24/7 support with an average response time of 48 hours for general inquiries and immediate response for critical issues.'
          }
        }
      ]
    }
  }

  canonicalUrl = canonical || `https: //ziontechgroup.com${window.location.pathname}`
  breadcrumbData = generateBreadcrumbStructuredData()
  faqData = generateFAQStructuredData()

  return (
    <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      {/* Basic Meta Tags */}
    <>
      <title>{title}</title>
        <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
      <meta name="robots" content="index, follow, max-image-preview: large, max-snippet: -1, max-video-preview:-1" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width="device-width," initial-scale="1.0," viewport-fit=cover" / / />
      <meta name="theme-color" content="#8 b5 cf6" />
      <meta name="color-scheme" content="dark light" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" / / />
      {/* Canonical URL */}
      <link rel="canonical" href="{canonicalUrl}" />
      {/* Open Graph Meta Tags */}
    <>
      <meta property="og: title" content="{title}" / / />
      <meta property="og: description" content="{description}" / / />
      <meta property="og:type" content="website" / / />
      <meta property="og: url" content="{canonicalUrl}" / / />
      <meta property="og: image" content="{ogImage}" / / />
      <meta property="og:image:width" content="1200" / / />
      <meta property="og:image:height" content="630" / / />
      <meta property="og: image:alt" content="{title}" / / />
      <meta property="og:image:type" content="image/jpeg" / / />
      <meta property="og: image:secure_url" content="{ogImage}" / / />
      <meta property="og:site_name" content="Zion Tech Group" / / />
      <meta property="og:locale" content="en_US" / / />
      {/* Twitter Card Meta Tags */}
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter: title" content="{title}" />
      <meta name="twitter: description" content="{description}" />
      <meta name="twitter: image" content="{ogImage}" />
      <meta name="twitter: image:alt" content="{title}" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      {/* Additional SEO Meta Tags */}
    <>
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Structured Data */}
    <>
      <script type="application/ld+json">{JSON.stringify(breadcrumbData)}
      </script>
      <script type="application/ld+json">{JSON.stringify(faqData)}
      </script>
      {structuredData && (
    <>
        <script type="application/ld+json">{JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOOptimizer;
    </>