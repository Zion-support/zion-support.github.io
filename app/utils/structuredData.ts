export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading technology solutions provider',
    url: 'https://ziontechgroup.com'
  },
  
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com'
  },
  
  generate: (type: 'organization' | 'website') => {
    return structuredData[type]
  }
}