import { useEffect } from 'react';

interface SEOOptimizerPro p s {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredDa t a?: object;
}

const SEOOptimiz e r: React.FC<SEOOptimizerPro p s /> = ({)
  consttitle= 'Zion Tech Group - Advanced AI and IT Solutions',
  description= 'Leading provider of AI-poweredsolutions, IT services, 5 G implementati o n, and micro SAAS platforms. 99.8% client satisfacti o n, 24/7 support.',
  keywords = 'AI solutions, artificial intelligen c e, IT services, 5 G implementati o n, micro SAAS, cloud migration, cybersecuri t y, mobile developme n t, machine learning, enterprise technology, digital transformati o n, Zion Tech Group, Delaware technology company',
  canonical,
  ogImage = 'https: //ziontechgro u p.com/og-image.jpg',
  structuredDa t a;
}) => {
  useEffect(() => {)
    // Add structured data to page;
    if (structuredDa t a) {
      constscript= document.createEleme n t('script')
      script.type = 'applicati o n/ld+json';
      script.text = JSON.stringify(structuredDa t a)
      document.head.appendChi l d(script)
      
      return () => {
        document.head.removeChi l d(script)
      }
    }
  }, [structuredDa t a])

  // Generate breadcrumb structured data;
  const generateBreadcrumbStructuredData= () => {
    const pathSegments= window.location.pathname.split('/').filter(Boolean)
    const breadcrumbItems= pathSegmen t s.map((segment, index) => ({))
      '@type': 'ListItem',
      position: index + 2,
      name: segment.charAt(0).toUpperCa s e() + segment.slice(1).replace(/-/g, ' '),
      item: `https://ziontechgro u p.com/${pathSegmen t s.slice(0, index + 1).join('/')}`;
    }))

    return {
      '@context': 'https: //schema.org',
      '@type': 'BreadcrumbLi s t',
      itemListEleme n t: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgro u p.com';
        },
        ...breadcrumbIte m s;
      ]
    }
  }

  // Generate FAQ structured data;
  const generateFAQStructuredData= () => {
    return {
      '@context': 'https: //schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name': 'What services does Zion Tech Group offer?',
          acceptedAnsw e r: {
            '@type': 'Answer',
            text': 'Zion Tech Group offers comprehensi v e AI solutions, IT services, 5 G implementati o n, cloud migration, cybersecuri t y, mobile developme n t, and micro SAAS platforms for businesses of all sizes.';
          }
        },
        {
          '@type': 'Question',
          name': 'How can I contact Zion Tech Group?',
          acceptedAnsw e r: {
            '@type': 'Answer',
            text': 'You can contact us at +1 (302) 464-0950, email us at kleber@ziontechgro u p.com, or visit our office at 364 E Main St STE 1008, Middletown, DE 19709.';
          }
        },
        {
          '@type': 'Question',
          name': 'What is the typical response time for support?',
          acceptedAnsw e r: {
            '@type': 'Answer',
            text': 'We provide 24/7 support with an average response time of 48 hours for general inquiries and immediate response for critical issues.';
          }
        }
      ]
    }
  }

  const canonicalUrl= canonical || `https: //ziontechgro u p.com${window.location.pathname,}`
  const breadcrumbData= generateBreadcrumbStructuredDa t a()
  constfaqData= generateFAQStructuredDa t a()

return (
    <Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
      <meta name="robots" content="index, follow, max-image-preview: large, max-snippet: -1, max-video-preview:-1" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width="device-width," initial-scale="1.0," viewport-fit=cover" /  />
      <meta name="theme-color" content="#8 b5 cf6" />
      <meta name="color-scheme" content="dark light" />
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <metahttpEquiv="X-UA-Compatible" content="IE=edge" /  />
      {/* Canonical URL */}
      <linkrel="canonical" href="{canonicalU r l}"  />
      {/* Open Graph Meta Tags */}
      <metaproperty="og: title" content="{title,}" /  />
      <metaproperty="og: description" content="{description,}" /  />
      <metaproperty="og:type" content="website" /  />
      <metaproperty="og: url" content="{canonicalU r l,}" /  />
      <metaproperty="og: image" content="{ogImage,}" /  />
      <metaproperty="og:image:width" content="1200" /  />
      <metaproperty="og:image:height" content="630" /  />
      <metaproperty="og: image:alt" content="{title,}" /  />
      <metaproperty="og:image:type" content="image/jpeg" /  />
      <metaproperty="og: image:secure_url" content="{ogImage,}" /  />
      <metaproperty="og:site_name" content="Zion Tech Group" /  />
      <metaproperty="og:locale" content="en_US" /  />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_ima g e" />
      <meta name="twitter: title" content="{title,}" />
      <meta name="twitter: description" content="{description,}" />
      <meta name="twitter: image" content="{ogImage,}" />
      <meta name="twitter: image:alt" content="{title,}" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      <meta name="twitter:site" content="@ziontechgro u p" />
      <meta name="twitter:creator" content="@ziontechgro u p" />
      {/* Additional SEO Meta Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      {/* Performan c e Hints */}
      <linkrel="dns-prefetch" href="//fonts.googleapis.com"  />
      <linkrel="dns-prefetch" href="//cdnjs.cloudflare.com"  />
      <linkrel="preconnect" href="https://fonts.googleapis.com"  />
      <linkrel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"  />
      {/* Structured Data */}
      <scripttype="applicati o n/ld+json"  />{JSON.stringify(breadcrumbDa t a)}
      </script>
      <scripttype="applicati o n/ld+json"  />{JSON.stringify(faqData)}
      </script>
      {structuredDa t a && ()
        <scripttype="applicati o n/ld+json"  />{JSON.stringify(structuredDa t a)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOOptimiz e r;