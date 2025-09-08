import React from 'react'

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          logo: 'https://ziontechgroup.com/favicon.svg',
          description: 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            url: 'https://ziontechgroup.com/contact'
          },
          sameAs: [
            'https://linkedin.com/company/ziontechgroup',
            'https://twitter.com/ziontechgroup'
          ],
          ...data
        }
      
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'AI, Cloud, and Cybersecurity Solutions',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://ziontechgroup.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          },
          ...data
        }
      
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          ...data
        }
      
      default:
        return data
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}