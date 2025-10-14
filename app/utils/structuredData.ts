export const structured Data = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading technology solutions provider'
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',
    description: 'Leading technology solutions provider'
  },
  generate: (type: 'organization' | 'website') => {
    return structured Data[type]
  }
}