export const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const staticPages = [
    '',
    '/services',
    '/contact',
    '/ai-solutions',
    '/it-services',
    '/about',
    '/blog',
  ];

  return staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString(),
  }));
};
