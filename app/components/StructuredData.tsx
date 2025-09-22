import { ReactNode } from 'react'

interface StructuredDataProps {
  data: Record<string, any>
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Predefined structured data schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  description: 'Advanced AI and Technology Solutions for Enterprise Transformation',
  url: 'https://zion.app',
  logo: 'https://zion.app/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'Customer Service',
  },
  sameAs: [
    'https://linkedin.com/company/zion-tech-group',
    'https://twitter.com/ziontechgroup',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Technology Drive',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zion Tech Group',
  url: 'https://zion.app',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://zion.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI and Technology Solutions',
  description: 'Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, and digital transformation.',
  provider: {
    '@type': 'Organization',
    name: 'Zion Tech Group',
  },
  serviceType: 'Technology Consulting',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Technology Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Solutions',
          description: 'Artificial Intelligence and Machine Learning solutions for enterprise applications.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Infrastructure',
          description: 'Cloud migration, architecture, and management services.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cybersecurity',
          description: 'Advanced security solutions and threat protection services.',
        },
      },
    ],
  },
}