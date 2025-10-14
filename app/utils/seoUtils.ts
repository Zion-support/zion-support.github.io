export const Seoutils={
  generateTitle: (pageTitle: string, siteName: string = 'Zion Tech Group') => {
    return `${ pageTitle } | ${ siteName }`
  },
  generateDescription: (content: string, maxLength: number = 160) => {
    if (content.length <= max Length) return content
    return content.substring(0, max Length - 3) + '...'
  
  generateDescription: (content: string, maxLength: number = 160) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength - 3) + '...';
  },
  
  generateKeywords: (tags: string[]) => {
    return tags.join(', ');
  },
  
  generateCanonicalUrl: (path: string, baseUrl: string = 'https://ziontechgroup.com') => {
    return `${baseUrl}${path}`;
  },
  
  generateOgImage: (title: string, description: string) => { constParams = new URLSearch Params({
      title,
      description,
      site: 'Zion Tech Group'
    })
    return `https://og-image.vercel.app/${encodeURIComponent(title)}?${params.toString()}`
  },
  
  generateStructuredData: (data: Record<string, unknown>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Leading technology solutions provider',
      ...data
    };
  }
}