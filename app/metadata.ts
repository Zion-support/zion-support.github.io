export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export const defaultMetadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI and IT solutions for modern businesses',
  keywords: ['AI', 'IT Solutions', 'Web Development', 'Machine Learning', 'Technology'],
  ogTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  ogDescription: 'Leading provider of AI and IT solutions for modern businesses',
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
  twitterDescription: 'Leading provider of AI and IT solutions for modern businesses',
  twitterImage: '/images/twitter-image.jpg'
};

export const generateMetadata = (metadata: Partial<Metadata>): Metadata => {
  return {
    ...defaultMetadata,
    ...metadata
  };
};