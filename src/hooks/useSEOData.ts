export const useSEOData = (pathname: string) => {
  const defaultSEO = {
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: 'AI solutions, quantum computing, digital transformation, cloud services, enterprise technology',
    canonicalUrl: `https://zion.app${pathname}`,
    ogImage: 'https://zion.app/og-image.jpg',
    ogUrl: `https://zion.app${pathname}`,
    ogType: 'website' as const,
    twitterCard: 'summary_large_image' as const,
    siteName: 'Zion Tech Group'
  };

  return defaultSEO;
};