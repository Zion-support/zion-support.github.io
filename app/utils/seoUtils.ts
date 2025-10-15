export const seoUtils = {
  generateTitle: (pageTitle: string, siteName: string = 'Zion Tech Group') => {
    return `${pageTitle} | ${siteName}`;
  },
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
  generateOgImage: (title: string, description: string) => {
    const params = new URLSearchParams({
      title,
      description,
      site: 'Zion Tech Group'
    });
    return `https://og-image.vercel.app/${encodeURIComponent(title)}?${params.toString()}`;
  },
  generateStructuredData: (data: unknown) => ({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading technology solutions provider',
      ...(data as Record<string, unknown>)
    })
}