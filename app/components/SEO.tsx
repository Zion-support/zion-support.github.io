<<<<<<< HEAD
import React from 'react';

interface SEOProps {

  title?: string;
  description?: string;

}

    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Zion Tech Group","
    url: "https://ziontechgroup.com","
    logo: "https://ziontechgroup.com/logo.svg","
    description: "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
    address: {
      '@type': 'PostalAddress',"
      addressLocality: "Middletown","
      addressRegion: "DE","
      addressCountry: "US" },
    contactPoint: {
      '@type': 'ContactPoint',"
      telephone: "+1-302-464-0950","
      contactType: "customer service","
      email: "kleber@ziontechgroup.com" },

=======
  title?: string;
  description?: string;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group','
      'https://twitter.com/ziontechgroup','
      'https://github.com/ziontechgroup''
    ]
  }
  return (
    <Helmet></Helmet>
      <title>{title}</title>
<<<<<<< HEAD
"
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />
      { /* Open Graph */ }"
      <meta property="og:title" content={title} />"
      <meta property="og:description" content={description} />"
      <meta property="og:type" content={type} />"
      <meta property="og:url" content={url} />"
      <meta property="og:image" content={image} />
      { /* Twitter */ }"
      <meta name="twitter:card" content="summary_large_image" />"
      <meta name="twitter:title" content={title} />"
      <meta name="twitter:description" content={description} />"
      <meta name="twitter:image" content={image} />
      { /* Canonical URL */ }"
      <link rel="canonical" href={url} />
    </Helmet>
")
=======
  );
};
export default SEO;
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
