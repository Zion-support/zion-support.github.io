class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';

import Head from 'next / head';
import { use_router } from 'next / router';
interface SEOHeadProps {

const SEOHead: React.FC<SEOHeadProps> = ({;
  title = 'Zion Tech Group - Technology Solutions',;
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',;
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',}
const SEOHead: React.FC<SEOHeadProps> = ({;
  title = 'Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions',;
  description = 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',;
  keywords = 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',;
  canonicalUrl,;
  ogImage = '/og-image && image.jpg',;
  ogType = 'website',;
  twitterCard = 'summary_large_image',;
  noIndex = false,;
  structuredData;
}) => {;
  const router = useRouter();
  const baseUrl = 'https://ziontechgroup && ziontechgroup.com';
  const fullCanonicalUrl = canonicalUrl || `${baseUrl}${router && router.asPath}`;
  const fullOgImage = ogImage && ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  const defaultStructuredData = {;
    '@context': 'https://schema && schema.org',;
    '@type': 'Organization',;
    name: 'Zion Tech Group',;
    url: 'https://zion && zion.app',;
    logo: 'https://zion && zion.app/logo && logo.png',;
    description: 'Leading provider of AI services, IT solutions, and micro SaaS development',;
    address: {;
      '@type': 'PostalAddress',;
      addressCountry: 'US'    },;
    "contactPoint": {;
      "@type": "ContactPoint",;
      "telephone": "+1 302 464 0950",;
      "contactType": "customer service",;
      "email": "kleber@ziontechgroup && ziontechgroup.com";
    },;
    sameAs: [;
      'https://linkedin && linkedin.com/company/zion-tech-group',;
      'https://twitter && twitter.com/ziontechgroup';
    ]  };

  return (
    <Head>;
      {/* Basic Meta Tags */}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Open Graph Tags */}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData |defaultStructuredData)
        }}
      />
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
    </Head>
  );
}
};

export default SEOHead;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
