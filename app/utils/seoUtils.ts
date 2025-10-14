export const seoUtils = {
  generateTitle: (pageTitle: string, siteName: string = 'Zion Tech Group') => {
    return `${pageTitle} | ${siteName}`
  },
  generateDescription: (content: string, maxLength: number = 160) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength - 3) + '...'
  
  generateDescription: (content: string, maxLength: number = 160) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength - 3) + '...'
  },
  
  generateKeywords: (tags: string[]) => {
    return tags.join(', ')
  },
  
  generateCanonicalUrl: (path: string, baseUrl: string = 'https://ziontechgroup.com') => {
    return `${baseUrl}${path}`
  },
  
  generateOg Image: (title: string, description: string) => {
    const params = new URLSearch Params({
      title,
      description,
      site: 'Zion Tech Group'
    })
    return `https://og-image.vercel.app/${encodeURIComponent(title)}?${params.toString()}`
  },
  
  generateStructured Data: (data: Record<string, unknown>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Leading technology solutions provider',
      ...data
    }
  }
}