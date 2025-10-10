'use client',
import React, { useEffect, useCallback, useRef } from 'react',
import { Helmet } from 'react-helmet-async';

interface SEOData {}
  title: string,
  description: string,
  keywords: string[],
  canonicalUrl: string,
  author?: string,
  robots?: string,
  ogTitle?: string,
  ogDescription?: string,
  ogImage?: string,
  ogType?: string,
  twitterCard?: string,
  twitterTitle?: string,
  twitterDescription?: string;,
  twitterImage?: string,
  structuredData?: Record<string, unknown>,
  faq?: Array<{ question: string; answer: string }>,
}

interface AdvancedSEOOptimizerProps {}
  seoData: SEOData,
  enableStructuredData?: boolean,
  enableOpenGraph?: boolean,
  enableTwitterCards?: boolean,
  enableSchemaMarkup?: boolean,
}

  enableStructuredData = true,
  enableOpenGraph = true,
  enableTwitterCards = true,
  enableSchemaMarkup = true,
}) => {}
const structuredDataRef = useRef<HTMLScriptElement | null>(null),

const generateStructuredData = useCallback(() => {}
    if (!enableStructuredData || !seoData.structuredData) {}
      return null,
    }

      '@type': 'TechCompany',
      name: 'Zion Tech Group'
      description: seoData.description,
      url: seoData.canonicalUrl,
      logo: 'https://ziontechgroup.com/logo.webp'
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https: //twitter.com/ziontechgroup',
        'https: //github.com/zion-tech-group',
      ],
        '@type': 'ContactPoint',
        telephone: '+1-555-ZION-TECH',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
        streetAddress: '123 Tech Innovation Drive',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94105',
        addressCountry: 'US',
      },
      ...seoData.structuredData,
    },

    if (seoData.author) {}
      baseStructuredData.author = {}
        '@type': 'Person',
        name: seoData.author,
      },
    }

    if (seoData.publishedTime) {}
      baseStructuredData.datePublished = seoData.publishedTime,
    }

    if (seoData.modifiedTime) {}
      baseStructuredData.dateModified = seoData.modifiedTime,
    }

    if (seoData.section) {}
      baseStructuredData.articleSection = seoData.section,
    }

    if (seoData.tags && seoData.tags.length > 0) {}
      baseStructuredData.keywords = seoData.tags.join(', '),
    }

    return baseStructuredData,
  }, [seoData, enableStructuredData]),

      }))
    },
  }, [seoData, enableStructuredData]),

const generateFAQStructuredData = useCallback(() => {}
    if (!enableStructuredData || !seoData.faqs) {}
      return null,
    }

          '@type': 'Answer',
          text: faq.answer,
        }
      }))
    },
  }, [seoData, enableStructuredData]),

const generateOpenGraphData = useCallback(() => {
    if (!enableOpenGraph) return {},

    return {
      'og: title': seoData.ogTitle || seoData.title,
      'og: description': seoData.ogDescription || seoData.description,
      'og: url': seoData.canonicalUrl,
      'og: type': seoData.ogType || 'website'
      'og: image': seoData.ogImage || '/og-image.webp',
      'og: site_name': 'Zion Tech Group',
      'og: locale': 'en_US',
    },
  }, [seoData, enableOpenGraph]),

  // Generate Twitter Card data,
const generateTwitterCardData = useCallback(() => {
    if (!enableTwitterCards) return {},

    return {
      'twitter: card': 'summary_large_image'
      'twitter: title': seoData.ogTitle || seoData.title,
      'twitter: description': seoData.ogDescription || seoData.description,
      'twitter: image': seoData.ogImage || 'https://ziontechgroup.com/og-image.webp',
      'twitter: site': '@ziontechgroup',
      'twitter: creator': '@ziontechgroup',
    },
  }, [seoData, enableTwitterCards]),

  // Generate meta tags,
const generateMetaTags = useCallback(() => {
  // Generate Open Graph data
const generateOpenGraphData = useCallback(() => {}
    if (!enableOpenGraph) return {},

    return {}
      'og:title': seoData.ogTitle || seoData.title,
      'og:description': seoData.ogDescription || seoData.description,
      'og:url': seoData.canonicalUrl,
      'og:type': seoData.ogType || 'website',
      'og:image': seoData.ogImage || '/og-image.webp',
      'og:site_name': 'Zion Tech Group',
      'og:locale': 'en_US',
    },
  }, [seoData, enableOpenGraph]),

  // Generate Twitter Card data
const generateTwitterCardData = useCallback(() => {}
    if (!enableTwitterCards) return {},

    },
  }, [seoData, enableTwitterCards]),

  // Generate meta tags
const generateMetaTags = useCallback(() => {}
>>>>>>> origin/merge-error-fixes
    const metaTags = [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords.join(', ') },
      { name: 'author', content: seoData.author || 'Zion Tech Group' },
      { name: 'robots', content: seoData.robots || 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#3 B82 F6' },
      { name: 'msapplication-TileColor', content: '#3 B82 F6' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
    ],

    return metaTags,
  }, [seoData]),

    return {
      '@context': 'https: //schema.org',
    return {}
      '@context': 'https://schema.org',
>>>>>>> origin/merge-error-fixes
      '@type': 'BreadcrumbList',
    },
  }, [seoData, enableStructuredData]),

    return {
      '@context': 'https: //schema.org',
      '@type': 'FAQPage',
      mainEntity: seoData.faqs.map(faq => ({)
        '@type': 'Question'),
        name: faq.question),
        acceptedAnswer: {
          '@type': 'Answer'),
          text: faq.answer,
    return {}
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {}
          '@type': 'Answer',
          text: faq.answer
>>>>>>> origin/merge-error-fixes
        }
      }))
    },
  }, [seoData, enableStructuredData]),

const structuredData = generateStructuredData(),
const breadcrumbData = generateBreadcrumbStructuredData(),
const faqData = generateFAQStructuredData(),
const openGraphData = generateOpenGraphData(),
const twitterCardData = generateTwitterCardData(),
const metaTags = generateMetaTags(),

      document.title = seoData.title,

      let metaDescription = document.querySelector('meta[name="description"]'),
      if (!metaDescription) {}
        metaDescription = document.createElement('meta'),
        metaDescription.setAttribute('name', 'description'),
        document.head.appendChild(metaDescription),
      }
      metaDescription.setAttribute('content', seoData.description),

      // Update canonical URL,
      let canonicalLink = document.querySelector('link[rel="canonical"]'),
      if (!canonicalLink) {}
        canonicalLink = document.createElement('link'),
        canonicalLink.setAttribute('rel', 'canonical'),
        document.head.appendChild(canonicalLink),
      }
      canonicalLink.setAttribute('href', seoData.canonicalUrl),
    }
  }, [seoData]),

      structuredDataRef.current.remove(),
    }

    const script = document.createElement('script'),
    script.type = 'application/ld+json',
    script.textContent = JSON.stringify(data),
    document.head.appendChild(script),
    structuredDataRef.current = script,
  },

  useEffect(() => {}
    if (structuredData) {}
      addStructuredData(structuredData),
    }
  }, [structuredData]),

  useEffect(() => {
    // Track page performance,
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
      if (perfData) {
        // Track performance metrics,
        if (typeof (window as any).gtag === 'function') {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(perfData.loadEventEnd - perfData.fetchStart)
          }),
          (window as any).gtag('event', 'page_load_performance', {)
            event_category: 'Performance'),
            event_label: 'Page Load'),
            value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        }
      }
    }
  }, []),

        <meta key={index} name={tag.name} content={tag.content} />
      ))}

      {/* Canonical URL */}
      {seoData.canonicalUrl && (}
        <link rel="canonical" href={seoData.canonicalUrl} />
      )}

      {/* Open Graph Tags */}
        <meta key={property} property={property} content={content} />
      ))}

      {/* Twitter Card Tags */}
        <meta key={name} name={name} content={content} />
      ))}

      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.webp" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.webp" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.webp" />
      <link rel="manifest" href="/site.webmanifest" />
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https: //fonts.googleapis.com" />,
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
      <link rel="preconnect" href="https://www.google-analytics.com" />,
      <link rel="preconnect" href="https://www.googletagmanager.com" />,
,
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" /></lin>
      <link rel="dns-prefetch" href="//www.google-analytics.com" /></lin>
      <link rel="dns-prefetch" href="//www.googletagmanager.com" /></lin>
    </Helmet>
  ),
},

export default AdvancedSEOOptimizer,