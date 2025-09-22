import { Metadata } from 'next'

interface SEOEnhancerProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/images/og-default.jpg'
}: SEOEnhancerProps): Metadata {
  const baseUrl = 'https://ziontechgroup.com'
  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl

  return {
    title: `${title} | Zion Tech Group`,
    description,
    keywords: [
      'AI solutions',
      'artificial intelligence',
      'automation',
      'technology innovation',
      'business transformation',
      'AI platforms',
      ...keywords
    ],
    openGraph: {
      title: `${title} | Zion Tech Group`,
      description,
      type: 'website',
      url: fullUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Zion Tech Group`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

export function generateStructuredData(type: 'Organization' | 'WebSite' | 'Service', data: any) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  switch (type) {
    case 'Organization':
      return {
        ...baseStructuredData,
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com',
        logo: 'https://ziontechgroup.com/images/logo.png',
        description: 'Leading provider of AI solutions, automation platforms, and cutting-edge technology services.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-0123',
          contactType: 'customer service',
        },
        sameAs: [
          'https://linkedin.com/company/zion-tech-group',
          'https://twitter.com/ziontechgroup',
        ],
        ...data,
      }

    case 'WebSite':
      return {
        ...baseStructuredData,
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com',
        description: 'AI solutions, automation platforms, and technology services',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://ziontechgroup.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        ...data,
      }

    case 'Service':
      return {
        ...baseStructuredData,
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
        },
        ...data,
      }

    default:
      return baseStructuredData
  }
}