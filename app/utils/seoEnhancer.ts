export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: Record<string, any>;
}

export function generateMetaTags(config: SEOConfig): Record<string, string> {
  const metaTags: Record<string, string> = {
    title: config.title,
    description: config.description,
    'og:title': config.title,
    'og:description': config.description,
    'og:type': 'website',
    'twitter:card': config.twitterCard || 'summary',
    'twitter:title': config.title,
    'twitter:description': config.description,
  };

  if (config.canonicalUrl) {
    metaTags.canonical = config.canonicalUrl;
  }

  if (config.ogImage) {
    metaTags['og:image'] = config.ogImage;
    metaTags['twitter:image'] = config.ogImage;
  }

  if (config.keywords && config.keywords.length > 0) {
    metaTags.keywords = config.keywords.join(', ');
  }

  return metaTags;
}

export function generateStructuredData(config: SEOConfig): string {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.title,
    description: config.description,
    ...config.structuredData,
  };

  return JSON.stringify(structuredData);
}
