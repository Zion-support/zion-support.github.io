import React from 'react';

export const SEO = ({ title, description, keywords, url }) => {
  return (
    <>
      <title>{title || 'Zion Tech Group - Technology Solutions'}</title>
      <meta name="description" content={description || 'Comprehensive technology solutions including AI, cybersecurity, cloud infrastructure, and micro SAAS services.'} />
      <meta name="keywords" content={keywords || 'technology, AI, cybersecurity, cloud, micro SAAS, IT services'} />
      <meta property="og:title" content={title || 'Zion Tech Group - Technology Solutions'} />
      <meta property="og:description" content={description || 'Comprehensive technology solutions including AI, cybersecurity, cloud infrastructure, and micro SAAS services.'} />
      <meta property="og:url" content={url || 'https://ziontechgroup.com'} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'Zion Tech Group - Technology Solutions'} />
      <meta name="twitter:description" content={description || 'Comprehensive technology solutions including AI, cybersecurity, cloud infrastructure, and micro SAAS services.'} />
    </>
  );
};

export default SEO;