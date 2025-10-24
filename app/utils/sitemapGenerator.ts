export const sitemapGenerator = {
  generateSitemap: (routes: string[]) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';
    return routes.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8
    }));
  }
};
