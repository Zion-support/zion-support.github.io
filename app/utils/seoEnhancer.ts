interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

export function enhanceSEO(config: SEOConfig) {
  return {
    title: config.title || 'Default Title',
    description: config.description || 'Default Description',
    keywords: config.keywords || [],
    canonical: config.canonical || '',
    ogImage: config.ogImage || '',
  };
}

export function generateMetaTags(config: SEOConfig) {
  const enhanced = enhanceSEO(config);
  
  return {
    title: enhanced.title,
    description: enhanced.description,
    keywords: enhanced.keywords.join(', '),
    canonical: enhanced.canonical,
    'og:image': enhanced.ogImage,
  };
}