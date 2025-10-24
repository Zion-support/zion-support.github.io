import React from 'react';
import MetaTags from './MetaTags';

interface DefaultSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const DefaultSEO: React.FC<DefaultSEOProps> = ({
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Leading provider of AI solutions, cloud services, and digital transformation technologies. Empowering businesses with cutting-edge technology.',
  keywords = 'AI, artificial intelligence, cloud services, digital transformation, technology solutions',
  ogImage = '/og-image.jpg'
}) => {
  return (
    <MetaTags
      title={title}
      description={description}
      keywords={keywords}
      ogTitle={title}
      ogDescription={description}
      ogImage={ogImage}
      twitterTitle={title}
      twitterDescription={description}
      twitterImage={ogImage}
    />
  );
};

export default DefaultSEO;