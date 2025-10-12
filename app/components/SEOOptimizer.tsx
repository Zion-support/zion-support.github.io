import {useEffect} from 'react';

interface SEOOptimizer Props {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  og Image?: string
  structured Data?: object
}

const SEOOptimizer: React.FC<SEOOptimizer Props/> = ({
  consttitle = 'ZionTech Group - AdvancedAI andIT Solutions',
  description = 'Leadingprovider ofAI-poweredsolutions, ITservices, 5 Gimplementation, andmicro SAASplatforms. 99.8% clientsatisfaction, 24/7 support.',
  keywords = 'AIsolutions, artificialintelligence, ITservices, 5 Gimplementation, microSAAS, cloudmigration, cybersecurity, mobiledevelopment, machinelearning, enterprisetechnology, digitaltransformation, ZionTech Group, Delawaretechnology company',
  canonical,
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  use Effect(() => {
    // Add structured data to page
    if (structuredData) {
      constscript = document.create Element('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.append Child(script)
      
      return () => {
        document.head.remove Child(script)
      }
    }
  }, [structured Data])

  // Generate breadcrumb structured data
  const generate Breadcrumb StructuredData = () => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean)
    const breadcrumbItems = path Segments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: segment.charAt(0).to Upper Case() + segment.slice(1).replace(/-/g, ' '),
      item: `https://ziontechgroup.com/${path Segments.slice(0, index + 1).join('/')}`
    }))

    return {
      '@context': 'https: //schema.org',
      '@type': 'Breadcrumb List',
      item ListElement: [
        {
          '@type': 'List Item',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com'
        },
        ...breadcrumb Items
      ]
    }
  }

  // Generate FAQ structured data
  const generateFAQStructuredData = () => {
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

  const canonicalUrl = canonical || `https: //ziontechgroup.com${window.location.pathname}`
  const breadcrumbData = generate Breadcrumb Structured Data()
  const faqData = generateFAQStructured Data()

  return (
    <Helmet />
      {/* BasicMeta Tags */}
      <title>{title}</title>
      <meta name ="description" content="{description}" / / />
      <meta name ="keywords" content="{keywords}" / / />
      <meta name ="robots" content="index, follow, max-image-preview: large, max-snippet: -1, max-video-preview:-1" / / />
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
      <metaproperty ="og:type" content="website" / / />
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
      <meta name ="twitter:card" content="summary_large_image" / / />
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
      <scripttype ="application/ld+json"  />{JSON.stringify(breadcrumbData)}
      </script>
      <scripttype ="application/ld+json"  />{JSON.stringify(faqData)}
      </script>
      {structured Data && (
        <scripttype ="application/ld+json"  />{JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOOptimizer;