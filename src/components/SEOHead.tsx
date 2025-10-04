<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI and IT solutions for modern businesses. Expert consulting, implementation, and support services.',
  keywords = 'AI solutions, IT consulting, cloud services, technology consulting'
}) => {
<<<<<<< HEAD
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullCanonicalUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St, STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b

const SEOHead: React.FC = () => {
=======
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
  return (
<<<<<<< HEAD
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">SEOHead</h2>
      <p className="text-gray-400">SEOHead component</p>
    </div>
  );
};

export default SEOHead;
=======
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOHead;
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b
