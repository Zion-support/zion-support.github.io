<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

=======
import Head from "next/head";
import React from "react";
>>>>>>> origin/automation-fixes
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
<<<<<<< HEAD
  structuredData?: object;
  noindex?: boolean;
<<<<<<< HEAD
  nofollow?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology solutions.',
  keywords = 'AI services, IT solutions, micro SaaS, technology consulting, cloud migration, cybersecurity, blockchain, web development',
=======
  noIndex?: boolean;
  structuredData?: object;
=======
  nofollow?: boolean}

const SEOHead: React.FC<SEOHeadProps> = ({",
  title = "Zion Tech Group - AI & Technology Solutions",";
  description = "Leading provider of AI-powered solutions, micro SaaS applications, and enterprise IT services. Transform your business with cutting-edge technology.",";
  keywords = "AI services, micro SaaS, IT services, DevOps, cybersecurity, cloud solutions, digital transformation, enterprise software, automation, machine learning",";
  image = "https:// comment;
  url = "https:// comment;
  type = "website",
  publishedTime,
  modifiedTime,";
  author = "Zion Tech Group",
  section,
  tags = [],
  noindex = false,
  nofollow = false,,
}) => {
  const robots = [].join(", ");
}
  const structuredData = {} : undefined,
    publisher: {",
      "@type": "Organization",";
      name: "Zion Tech Group",
      logo: {",
        "@type": "ImageObject",";
        url: "https:// comment;
},
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {",
      "@type": "WebPage",";
      "@id": url,,
},";
    ...(tags.length > 0 && { keywords: tags.join(", ") }),
  return (;
<Head>;
      {/* comment */}

      <title>{title}</title>;
      <meta name="description" content="{description}"  />;
      <meta name="keywords" content="{keywords}"  />";
      <meta name="author" content="{author}"  />";
      <meta name="robots" content="{robots}"  />";
      <link rel="canonical" href="{url}"  />;

      {/* comment */}";
      <meta property="og:type" content="{type}"  />";
      <meta property="og:title" content="{title}"  />";
      <meta property="og:description" content="{description}"  />";
      <meta property="og:url" content="{url}"  />";
      <meta property="og:image" content="{image}"  />";
      <meta property="og: image:width" content="1200"  />";
      <meta property="og:image:height" content="630"  />";
      <meta property="og:site_name" content="Zion Tech Group"  />";
      <meta property="og:locale" content="en_US"  />",
      {publishedTime && <meta property="article:published_time" content="{publishedTime}"  />}";
      {modifiedTime && <meta property="article:modified_time" content="{modifiedTime}"  />}";
      {author && <meta property="article:author" content="{author}"  />}";
      {section && <meta property="article:section" content="{section}"  />}

      {tags.map((tag, index) => (";
        <meta key="{index}" property="article:tag" content="{tag}"  />;
      ))}

      {/* comment */}";
      <meta name="twitter: card" content="summary_large_image"  />",
      <meta name="twitter:title" content="{title}"  />";
      <meta name="twitter:description" content="{description}"  />";
      <meta name="twitter:image" content="{image}"  />";
      <meta name="twitter: site" content="@ziontechgroup"  />";
      <meta name="twitter:creator" content="@ziontechgroup"  />;
      {/* comment */}";
      <script type="application/ld+json;
        dangerouslySetInnerHTML="{{";
          __html: JSON.stringify(),>;
}}

     />;

      {/* comment */}";
      <meta name="viewport" content="width="device-width," initial-scale="1," shrink-to-fit=no"  />";
      <meta name="theme-color" content="#0a0a1a"  />";
      <meta name="apple-mobile-web-app-capable" content="yes"  />";
      <meta name="apple-mobile-web-app-status-bar-style" content="default"  />";
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group"  />;
    </Head>;
  );
>>>>>>> origin/automation-fixes
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions',
  description = 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords = 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-91d8
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData
}) => {
  const router = useRouter();
  const baseUrl = 'https://ziontechgroup.com';
  const fullCanonicalUrl = canonicalUrl || `${baseUrl}${router.asPath}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  const defaultStructuredData = {
<<<<<<< HEAD
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.png',
    description: 'Leading provider of AI services, IT solutions, and micro SaaS development',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
=======
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": baseUrl,
    "logo": `${baseUrl}/favicon.svg`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-91d8
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 302 464 0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
<<<<<<< HEAD
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup'
    ]
=======
    "sameAs": [baseUrl]
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-91d8
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<<<<<<< HEAD
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
=======
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="language" content="en-US" />
      <link rel="canonical" href={fullCanonicalUrl} />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-91d8
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData)
        }}
      />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
    </Head>
  );
};

export default SEOHead;