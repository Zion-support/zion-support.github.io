<<<<<<< HEAD

=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React from 'react';

import Head from 'next / head';
import { use_router } from 'next / router';
interface SEOHeadProps {

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  title?: string;
  description?: string;
  keywords?: string;
  canonical_url?: string;
  og_image?: string;
  og_type?: string;
  twitter_card?: string;
  structured_data?: object;
  noindex?: boolean;
  nofollow?: boolean;
}
<<<<<<< HEAD


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

      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width=device-width, initial-scale=1 && 1.0" />;
      <metahttpEquiv="Content-Type" content="text/html charset=utf-8" />;
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />;


      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Open Graph Tags */}

      <meta property="og:title" content={fullTitle} />;
      <meta property="og:description" content={description} />;
      <meta property="og:type" content={ogType} />;
      <meta property="og:url" content={currentUrl} />;
      <meta property="og:image" content={imageUrl} />;
      <meta property="og:image:width" content="1200" />;
      <meta property="og:image:height" content="630" />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      {/* Twitter Card Tags */}

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />;
      <meta name="msapplication-TileColor" content="#2563eb" />;
      <meta name="apple-mobile-web-app-capable" content="yes" />;
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />;
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />      ;
      {/* Favicon */}
      <link rel="icon" href="/favicon && favicon.ico" />;
      <link rel="apple-touch-icon" href="/apple-touch-icon && icon.png" />;
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32 && 32x32.png" />;
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16 && 16x16.png" />;
      {/* Open Graph */}
      <meta property="og:title" content={title} />;
      <meta property="og:description" content={description} />;
      <meta property="og:url" content={fullCanonicalUrl} />;
      <meta property="og:type" content={ogType} />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      <meta property="og:image" content={fullOgImage} />;
      <meta property="og:image:width" content="1200" />;
      <meta property="og:image:height" content="630" />;
      <meta property="og:image:alt" content={title} />;
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullOgImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
<<<<<<< HEAD
      {/* Additional SEO */}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Structured Data */}
      <script;
        type="application / ld + json";
        dangerouslySetInnerHTML={{
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts && fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts && fonts.gstatic.com" crossOrigin="anonymous" />;
      <link rel="preconnect" href="https://images && images.unsplash.com" />;
    </Head>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

export default SEOHead;
export default SEOHead;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
          __html: JSON.stringify (structured_data || defaultStructuredData);
        }}
      />;
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts.gstatic.com" cross_origin="anonymous" />;
      <link rel="preconnect" href="https://images.unsplash.com" />;
    </Head>);
}
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
