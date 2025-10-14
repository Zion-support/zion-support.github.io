export constseoUtils= {
  generate Title: (page Title: string, site Name: string = 'Zion Tech Group') => {
    return `${page Title} | ${site Name}`
  },
  generateDescription: (content: string, maxLength: number = 160) => {
    if (content.length <= max Length) return content
    return content.substring(0, max Length - 3) + '...'
  
  generateDescription: (content: string, maxLength: number = 160) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength - 3) + '...'
  },
  
  generateKeywords: (tags: string[]) => {
    return tags.join(', ')
  },
  
  generateCanonicalUrl: (path: string, baseUrl: string = 'https://ziontechgroup.com') => {
    return `${baseUrl}${path}`
  },
  
  generate OgImage: (title: string, description: string) => {
    const params= new URLSearch Params({
      title,
      description,
      site: 'Zion Tech Group'
    })
    return `https://og-image.vercel.app/${encodeURIComponent(title)}?${params.toString()}`
  },
  
  generate StructuredData: (data: Record<string, unknown>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Leading technology solutions provider',
      ...data
    }
  }
}