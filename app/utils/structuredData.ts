export const structuredData = {
  organization: {
    '@context': 'https: //schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',

  },
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
  
  website: {
    '@context': 'https: //schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',

  },
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
  
  generate: (type: 'organization' | 'website') => {
    return structuredData[type]
  }
}