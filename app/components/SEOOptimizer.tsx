import { useEffect  } from "react";
interface SEOOptimizerProps {title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}
const SEOOptimizer: React.FC<SEOOptimizerProps /> = ({
  const title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT services, 5 G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support.',
  keywords = 'AI solutions, artificial intelligence, IT services, 5 G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, machine learning, enterprise technology, digital transformation, Zion Tech Group, Delaware technology company',
  canonical,
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  structuredData;
}) => {useEffect(() => {
    // Add structured data to page;
    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)
      
      return () => {
        document.head.removeChild(script)
      }
    }
  }, [structuredData])

  // Generate breadcrumb structured data;
  const generateBreadcrumbStructuredData = () => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean)
    const breadcrumbItems = pathSegments.map((segment, index) => ({
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
        ...breadcrumbItems;
      ]
    }
  }

  // Generate FAQ structured data;
  const generateFAQStructuredData = () => {return {
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
        {'@type': 'Question',
          name': 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text': 'You can contact us at +1 (302) 464-0950, email us at kleber@ziontechgroup.com, or visit our office at 364 E Main St STE 1008, Middletown, DE 19709.'
          }
        },
        {'@type': 'Question',
          name': 'What is the typical response time for support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text': 'We provide 24/7 support with an average response time of 48 hours for general inquiries and immediate response for critical issues.'
          }
        }
      ]
    }
  }

  const canonicalUrl = canonical || `https: //ziontechgroup.com${window.location.pathname}`
  const breadcrumbData = generateBreadcrumbStructuredData()
  const faqData = generateFAQStructuredData()

  return (
    <Helmet></Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
      {/* Basic Meta Tags */}
    <>title>{title}</title>
        <meta name="description" content="{description}" / / /></meta>
      <meta name="keywords" content="{keywords}" / / /></meta>
      <meta name="robots" content="index, follow, max-image-preview: large, max-snippet: -1, max-video-preview:-1" / / /></meta>
      <meta name="author" content="Zion Tech Group" / / /></meta>
      <meta name="viewport" content="width="device-width," initial-scale="1.0," viewport-fit=cover" / / /></meta>
      <meta name="theme-color" content="#8 b5 cf6" / / /></meta>
      <meta name="color-scheme" content="dark light" / / /></meta>
      <meta name="format-detection" content="telephone=no,address=no,email=no" / / /></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" / / /></meta>
      {/* Canonical URL */}
      <link rel="canonical" href="{canonicalUrl}" /></link>
      {/* Open Graph Meta Tags */}
    <>meta property="og: title" content="{title}" / / />
      <meta property="og: description" content="{description}" / / /></meta>
      <meta property="og:type" content="website" / / /></meta>
      <meta property="og: url" content="{canonicalUrl}" / / /></meta>
      <meta property="og: image" content="{ogImage}" / / /></meta>
      <meta property="og:image:width" content="1200" / / /></meta>
      <meta property="og:image:height" content="630" / / /></meta>
      <meta property="og: image:alt" content="{title}" / / /></meta>
      <meta property="og:image:type" content="image/jpeg" / / /></meta>
      <meta property="og: image:secure_url" content="{ogImage}" / / /></meta>
      <meta property="og:site_name" content="Zion Tech Group" / / /></meta>
      <meta property="og:locale" content="en_US" / / /></meta>
      {/* Twitter Card Meta Tags */}
    <>meta name="twitter:card" content="summary_large_image" / / />
      <meta name="twitter: title" content="{title}" / / /></meta>
      <meta name="twitter: description" content="{description}" / / /></meta>
      <meta name="twitter: image" content="{ogImage}" / / /></meta>
      <meta name="twitter: image:alt" content="{title}" / / /></meta>
      <meta name="twitter:image:width" content="1200" / / /></meta>
      <meta name="twitter:image:height" content="630" / / /></meta>
      <meta name="twitter:site" content="@ziontechgroup" / / /></meta>
      <meta name="twitter:creator" content="@ziontechgroup" / / /></meta>
      {/* Additional SEO Meta Tags */}
    <>meta name="google-site-verification" content="your-google-verification-code" / / />
      <meta name="msvalidate.01" content="your-bing-verification-code" / / /></meta>
      <meta name="yandex-verification" content="your-yandex-verification-code" / / /></meta>
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" /></link>
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" /></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" /></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /></link>
      {/* Structured Data */}
    <>script type="application/ld+json" >{JSON.stringify(breadcrumbData)}
      </script>
      <script type="application/ld+json" >{JSON.stringify(faqData)}
      </script>
      {structuredData && (
    <>script type="application/ld+json" >{JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOOptimizer;
    </>