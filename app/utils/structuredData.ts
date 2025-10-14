export const structured Data = {
  organization: {
    '@context': 'https: //schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',

  },
  website: {
    '@type': 'Web Site',
    name: 'Zion Tech Group',

  },
  generate: (type: 'organization' | 'website') => {
    return structured Data[type]
  }
