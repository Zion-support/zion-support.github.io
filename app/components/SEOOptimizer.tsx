import { useEffect   } from 'react';

interfaceSEOOptimizerProps {
  title?: stringdescription?: stringkeywords?: stringcanonical?: stringogImage?: stringstructuredData?: object
}

constSEOOptimizer: React.FC<SEOOptimizerProps /> = ({
  consttitle = 'ZionTechGroup - AdvancedAIandITSolutions',
  description = 'LeadingproviderofAI-poweredsolutions, ITservices, 5 Gimplementation, andmicroSAASplatforms. 99.8% clientsatisfaction, 24/7 support.',
  keywords = 'AIsolutions, artificialintelligence, ITservices, 5 Gimplementation, microSAAS, cloudmigration, cybersecurity, mobiledevelopment, machinelearning, enterprisetechnology, digitaltransformation, ZionTechGroup, Delawaretechnologycompany',
  canonical,
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Addstructureddatatopageif (structuredData) {
      constscript = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)
      
      return () => {
        document.head.removeChild(script)
      }
    }
  }, [structuredData])

  // GeneratebreadcrumbstructureddataconstgenerateBreadcrumbStructuredData = () => {
    constpathSegments = window.location.pathname.split('/').filter(Boolean)
    constbreadcrumbItems = pathSegments.map((segment, index) => ({
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

  // GenerateFAQstructureddataconstgenerateFAQStructuredData = () => {
    return {
      '@context': 'https: //schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name': 'WhatservicesdoesZionTechGroupoffer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text': 'ZionTechGroupofferscomprehensiveAIsolutions, ITservices, 5 Gimplementation, cloudmigration, cybersecurity, mobiledevelopment, andmicroSAASplatformsforbusinessesofallsizes.'
          }
        },
        {
          '@type': 'Question',
          name': 'HowcanIcontactZionTechGroup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text': 'Youcancontactusat +1 (302) 464-0950, emailusatkleber@ziontechgroup.com, orvisitourofficeat 364 EMainStSTE 1008, Middletown, DE 19709.'
          }
        },
        {
          '@type': 'Question',
          name': 'Whatisthetypicalresponsetimeforsupport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text': 'Weprovide 24/7 supportwithanaverageresponsetimeof 48 hoursforgeneralinquiriesandimmediateresponseforcriticalissues.'
          }
        }
      ]
    }
  }

  constcanonicalUrl = canonical || `https: //ziontechgroup.com${window.location.pathname}`
  constbreadcrumbData = generateBreadcrumbStructuredData()
  constfaqData = generateFAQStructuredData()

  return (
    <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
      {/* BasicMetaTags */}
    <>
      <title>{title}</title>
        <metaname="description" content="{description}" / / />
      <metaname="keywords" content="{keywords}" / / />
      <metaname="robots" content="index, follow, max-image-preview: large, max-snippet: -1, max-video-preview:-1" / / />
      <metaname="author" content="ZionTechGroup" / / />
      <metaname="viewport" content="width="device-width," initial-scale="1.0," viewport-fit=cover" / / />
      <metaname="theme-color" content="#8 b5 cf6" / / />
      <metaname="color-scheme" content="darklight" / / />
      <metaname="format-detection" content="telephone=no,address=no,email=no" / / />
      <metahttpEquiv="X-UA-Compatible" content="IE=edge" / / />
      {/* CanonicalURL */}
      <linkrel="canonical" href="{canonicalUrl}" />
      {/* OpenGraphMetaTags */}
    <>
      <metaproperty="og: title" content="{title}" / / />
      <metaproperty="og: description" content="{description}" / / />
      <metaproperty="og:type" content="website" / / />
      <metaproperty="og: url" content="{canonicalUrl}" / / />
      <metaproperty="og: image" content="{ogImage}" / / />
      <metaproperty="og:image:width" content="1200" / / />
      <metaproperty="og:image:height" content="630" / / />
      <metaproperty="og: image:alt" content="{title}" / / />
      <metaproperty="og:image:type" content="image/jpeg" / / />
      <metaproperty="og: image:secure_url" content="{ogImage}" / / />
      <metaproperty="og:site_name" content="ZionTechGroup" / / />
      <metaproperty="og:locale" content="en_US" / / />
      {/* TwitterCardMetaTags */}
    <>
      <metaname="twitter:card" content="summary_large_image" / / />
      <metaname="twitter: title" content="{title}" / / />
      <metaname="twitter: description" content="{description}" / / />
      <metaname="twitter: image" content="{ogImage}" / / />
      <metaname="twitter: image:alt" content="{title}" / / />
      <metaname="twitter:image:width" content="1200" / / />
      <metaname="twitter:image:height" content="630" / / />
      <metaname="twitter:site" content="@ziontechgroup" / / />
      <metaname="twitter:creator" content="@ziontechgroup" / / />
      {/* AdditionalSEOMetaTags */}
    <>
      <metaname="google-site-verification" content="your-google-verification-code" / / />
      <metaname="msvalidate.01" content="your-bing-verification-code" / / />
      <metaname="yandex-verification" content="your-yandex-verification-code" / / />
      {/* PerformanceHints */}
      <linkrel="dns-prefetch" href="//fonts.googleapis.com" />
      <linkrel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      <linkrel="preconnect" href="https://fonts.googleapis.com" />
      <linkrel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* StructuredData */}
    <>
      <scripttype="application/ld+json">{JSON.stringify(breadcrumbData)}
      </script>
      <scripttype="application/ld+json">{JSON.stringify(faqData)}
      </script>
      {structuredData && (
    <>
        <scripttype="application/ld+json">{JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

exportdefaultSEOOptimizer;
    </>
