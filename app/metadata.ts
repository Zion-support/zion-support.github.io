
// import { Helmet } from 'react-helmet-async';

export interface MetadataOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

export const generateMetadata = (options: MetadataOptions = {}) => {
  const {
    title = 'Zion Tech Group - Advanced AI and IT Solutions',
    description = 'Leading provider of AI development, web development, mobile apps, cloud solutions, and cybersecurity services. Transform your business with cutting-edge technology.',
    keywords = ['AI development', 'web development', 'mobile apps', 'cloud solutions', 'cybersecurity', 'IT services'],
    ogTitle = title,
    ogDescription = description,
    ogImage = '/og-image.jpg',
    twitterCard = 'summary_large_image',
    twitterTitle = title,
    twitterDescription = description,
    twitterImage = '/twitter-image.jpg',
    canonical,
    noIndex = false,
    noFollow = false
  } = options;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    'og:title': ogTitle,
    'og:description': ogDescription,
    'og:image': ogImage,
    'og:type': 'website',
    'twitter:card': twitterCard,
    'twitter:title': twitterTitle,
    'twitter:description': twitterDescription,
    'twitter:image': twitterImage,
    canonical,
    robots: `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`
  };
};

export default generateMetadata;

