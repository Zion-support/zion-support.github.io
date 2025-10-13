// Metadata configuration
export const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.',
  keywords: 'AI solutions, IT services, digital transformation, business automation, technology consulting',
  author: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  image: 'https://ziontechgroup.com/og-image.jpg',
  twitter: '@ziontechgroup',
  linkedin: 'https://linkedin.com/company/ziontechgroup',
};

export const defaultMetadata = {
  title: metadata.title,
  description: metadata.description,
  keywords: metadata.keywords,
  openGraph: {
    title: metadata.title,
    description: metadata.description,
    url: metadata.url,
    image: metadata.image,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: metadata.title,
    description: metadata.description,
    image: metadata.image,
  },
};

export default metadata;