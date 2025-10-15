export const structuredData = { organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Leading technology solutions provider' },
  generate: (type: 'organization' | 'website') => { return structuredData[type] }
}