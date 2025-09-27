import React from 'react';

interface SEOProps {title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion App - Advanced Technology Solutions',
  description = 'Leading technology solutions provider specializing in AI, cloud computing, web development and digital transformation.',
  keywords = ['AI development', 'cloud solutions', 'web development', 'mobile apps', 'data analytics', 'cybersecurity', 'technology consulting', 'Zion App'],
  image = '/og-image.jpg',
  url = 'https://zion.app',
  type = 'website'
}) => {
  // This component is now a no-op since we're using Next.js Head component directly in pages
  // The SEO functionality is handled by the Head component in each page
  return null;
};

export default SEO;