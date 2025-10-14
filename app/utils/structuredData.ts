export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading technology solutions provider'
  },
  
  website: {
    '@type': 'WebSite',
    name: 'Zion Tech Group',
    description: 'Leading technology solutions provider'
  },
  
  generate: (type: 'organization' | 'website') => {
    return structuredData[type]
  }
}