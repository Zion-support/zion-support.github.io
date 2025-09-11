import React from 'react';

export const SEO = ({ title, description, keywords, children }) => {
  return (
    <>
      <title>
        {title || 'Zion Tech Group - AI, IT, and Technology Solutions'}
      </title>
      <meta
        name='description'
        content={
          description ||
          'Leading provider of AI-powered solutions, IT services, and cutting-edge technology for modern businesses.'
        }
      />
      <meta
        name='keywords'
        content={
          keywords ||
          'AI, artificial intelligence, IT services, technology solutions, cybersecurity, cloud computing, quantum computing'
        }
      />
      {children}
    </>
  );
};

// SEO hook for dynamic content
export const useSEO = (pageData = {}) => {
  const defaultSEO = {
    title: 'Zion Tech Group - AI-Powered Business Transformation',
    description:
      'Leading provider of AI solutions, quantum computing, and cloud infrastructure. Transform your business with cutting-edge technology.',
    keywords:
      'AI, artificial intelligence, quantum computing, cloud infrastructure, digital transformation, Zion Tech Group',
    canonical: '/',
  };

  return {
    ...defaultSEO,
    ...pageData,
  };
};

export default SEO;
