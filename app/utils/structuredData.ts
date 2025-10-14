export const structuredData = {
  organization: {
    '@context': 'https: //schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',

  },
  
  website: {
    '@type': 'WebSite',
    name: 'Zion Tech Group',

  },
  
  generate: (type: 'organization' | 'website') => {
    return structuredData[type]
  }
