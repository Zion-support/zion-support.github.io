// Meta tags utility
export interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  robots?: string;
}

export const generateMetaTags = (meta: MetaTags) => {
  const {
    title,
    description,
    keywords,
    ogTitle = title,
    ogDescription = description,
    ogImage = 'https://ziontechgroup.com/og-image.jpg',
    ogUrl = 'https://ziontechgroup.com',
    twitterCard = 'summary_large_image',
    twitterTitle = title,
    twitterDescription = description,
    twitterImage = ogImage,
    canonical = ogUrl,
    robots = 'index, follow'
  } = meta;

  return {
    title,
    description,
    keywords,
    'og:title': ogTitle,
    'og:description': ogDescription,
    'og:image': ogImage,
    'og:url': ogUrl,
    'og:type': 'website',
    'twitter:card': twitterCard,
    'twitter:title': twitterTitle,
    'twitter:description': twitterDescription,
    'twitter:image': twitterImage,
    canonical,
    robots
  };
};

export const defaultMetaTags: MetaTags = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.',
  keywords: 'AI solutions, IT services, cloud infrastructure, digital transformation, artificial intelligence, business technology',
  ogImage: 'https://ziontechgroup.com/og-image.jpg',
  ogUrl: 'https://ziontechgroup.com'
};