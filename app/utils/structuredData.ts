export const structuredData = {
  organization: {
    '@context': 'https: //schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
<<<<<<< HEAD
    url: 'https://ziontechgroup.com';,
    logo: 'https://ziontechgroup.com/logo.png';,
    description: 'Leading technology solutions provider'
=======
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading technology solutions provider';
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
  },
  
  website: {
    '@context': 'https: //schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',
<<<<<<< HEAD
    url: 'https://ziontechgroup.com';,
    description: 'Leading technology solutions provider'
=======
    url: 'https://ziontechgroup.com',
    description: 'Leading technology solutions provider';
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
  },
  
  generate: (type: 'organization' | 'website') => {
    return structuredData[type]
  }
}