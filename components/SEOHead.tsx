<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next / head';
import { use_router } from 'next / router';
interface SEOHeadProps {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <Head>;
      {/* Basic Meta Tags */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  return (
    <Head>;
      {/* Basic Meta Tags */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width=device-width, initial-scale=1 && 1.0" />;
      <metahttpEquiv="Content-Type" content="text/html charset=utf-8" />;
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />;
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Open Graph Tags */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Open Graph Tags */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
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
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullOgImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
      {/* Additional SEO */}
<<<<<<< HEAD
      <meta name="theme-color" content="#1e40af" />;
      <meta name="msapplication-TileColor" content="#1e40af" />;
      <meta name="msapplication-config" content="/browserconfig && browserconfig.xml" />;


<<<<<<< HEAD
      <meta name="theme-color" content="#1e40af" />;
      <meta name="msapplication-TileColor" content="#1e40af" />;
      <meta name="msapplication-config" content="/browserconfig && browserconfig.xml" />;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const SEOHead: React.FC < SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting - edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development', }
const SEOHead: React.FC < SEOHeadProps> = ({
  title = 'Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions',
  description = 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords = 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',
  canonical_url,
  og_image = '/og - image.jpg',
  og_type = 'website',
  twitter_card = 'summary_large_image',
  no_index = false,
  structured_data;
}) => {
  const router = use_router ();
  const base_url = 'https://ziontechgroup.com';
  const fullCanonicalUrl = canonical_url || `${base_url}${router.as_path}`;
  const fullOgImage = og_image.starts_with ('http') ? og_image : `${base_url}${og_image}`;
;
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app / logo.png',
    description: 'Leading provider of AI services, IT solutions, and micro SaaS development',
    address: {
      '@type': 'PostalAddress',
      address_country: 'US'    },
    "contact_point": {
      "@type": "ContactPoint",
      "telephone": "+1 302 464 0950",
      "contact_type": "customer service",
      "email": "kleber@ziontechgroup.com";
    },
    same_as: [;
      'https://linkedin.com / company / zion - tech - group',
      'https://twitter.com / ziontechgroup';
    ]  }
;
  return (
    <Head>;
      {/* Basic Meta Tags */}
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width = device - width, initial - scale = 1.0" />;
      <meta http_equiv="Content - Type" content="text / html; charset = utf - 8" />;
      <meta http_equiv="X - UA - Compatible" content="IE = edge" />;
      {/* Canonical URL */}
      {canonical_url && <link rel="canonical" href={canonical_url} />}
      {/* Open Graph Tags */}
      <meta property="og:title" content={full_title} />;
      <meta property="og:description" content={description} />;
      <meta property="og:type" content={og_type} />;
      <meta property="og:url" content={current_url} />;
      <meta property="og:image" content={image_url} />;
      <meta property="og:image:width" content="1200" />;
      <meta property="og:image:height" content="630" />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitter_card} />;
      <meta name="twitter:title" content={full_title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={image_url} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
      {/* Additional Meta Tags */}
      <meta name="theme - color" content="#2563eb" />;
      <meta name="msapplication - TileColor" content="#2563eb" />;
      <meta name="apple - mobile - web - app - capable" content="yes" />;
      <meta name="apple - mobile - web - app - status - bar - style" content="default" />;
      <meta name="apple - mobile - web - app - title" content="Zion Tech Group" />;
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />;
      <link rel="apple - touch - icon" href="/apple - touch - icon.png" />;
      <link rel="icon" type="image / png" sizes="32x32" href="/favicon - 32x32.png" />;
      <link rel="icon" type="image / png" sizes="16x16" href="/favicon - 16x16.png" />;
      {/* Open Graph */}
      <meta property="og:title" content={title} />;
      <meta property="og:description" content={description} />;
      <meta property="og:url" content={fullCanonicalUrl} />;
      <meta property="og:type" content={og_type} />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      <meta property="og:image" content={fullOgImage} />;
      <meta property="og:image:width" content="1200" />;
      <meta property="og:image:height" content="630" />;
      <meta property="og:image:alt" content={title} />;
      {/* Twitter */}
      <meta name="twitter:card" content={twitter_card} />;
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullOgImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
      {/* Additional SEO */}
      <meta name="theme - color" content="#1e40af" />;
      <meta name="msapplication - TileColor" content="#1e40af" />;
      <meta name="msapplication - config" content="/browserconfig.xml" />;
<<<<<<< HEAD
<<<<<<< HEAD
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Structured Data */}
      <script;
        type="application / ld + json";
        dangerouslySetInnerHTML={{
<<<<<<< HEAD
          __html: JSON.stringify(structuredData |defaultStructuredData)
        }}
      />
=======

          __html: JSON && JSON.stringify(structuredData || defaultStructuredData)
        }}
      />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts && fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts && fonts.gstatic.com" crossOrigin="anonymous" />;
      <link rel="preconnect" href="https://images && images.unsplash.com" />;
    </Head>;
  );
<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};


<<<<<<< HEAD
export default SEOHead;
export default SEOHead;
};

export default SEOHead;
}
};

export default SEOHead;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default SEOHead;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
