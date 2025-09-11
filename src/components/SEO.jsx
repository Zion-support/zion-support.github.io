import React from 'react';

export const SEO = ({ title, description, keywords, children }) => {
  return (
    <>
      <title>{title || 'Zion Tech Group - AI, IT, and Technology Solutions'}</title>
      <meta name="description" content={description || 'Leading provider of AI-powered solutions, IT services, and cutting-edge technology for modern businesses.'} />
      <meta name="keywords" content={keywords || 'AI, artificial intelligence, IT services, technology solutions, cybersecurity, cloud computing, quantum computing'} />
      {children}
    </>
  );
};

export default SEO;