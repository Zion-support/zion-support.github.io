// SEO enhancement utilities
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
}

export const updateSEO = (data: SEOData): void => {
  if (typeof window === 'undefined') return;
  
  // Update title
  document.title = data.title;
  
  // Update meta description
  updateMetaTag('description', data.description);
  
  // Update meta keywords
  updateMetaTag('keywords', data.keywords.join(', '));
  
  // Update canonical URL
  updateCanonicalUrl(data.canonicalUrl);
  
  // Update Open Graph tags
  if (data.ogImage) {
    updateMetaTag('og:image', data.ogImage, 'property');
  }
  if (data.ogType) {
    updateMetaTag('og:type', data.ogType, 'property');
  }
};

const updateMetaTag = (name: string, content: string, attribute: string = 'name'): void => {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const updateCanonicalUrl = (url: string): void => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
};
