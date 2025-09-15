import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  structuredData?: object;
}

<<<<<<< HEAD
export default function SEOHead({
  title = 'Zion Tech Group - Leading AI, Quantum Computing & Advanced Technology Solutions',
  description = 'Transform your business with cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Trusted by 1000+ companies worldwide.',
  keywords = 'AI solutions, quantum computing, cybersecurity, digital transformation, cloud services, DevOps, machine learning, space technology',
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  structuredData
}: SEOHeadProps) {
=======
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced IT & AI Solutions',
  description = 'Leading provider of cutting-edge IT services, AI solutions, and digital transformation services. Expert cybersecurity, cloud migration, and custom software development.',
  keywords = 'IT services, AI solutions, cybersecurity, cloud migration, software development, digital transformation, micro SaaS, mobile development',
  canonical,
  ogImage = '/og-image.jpg',
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || window.location.href;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ZION-TECH",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ]
  };

>>>>>>> origin/merged-prs
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
<<<<<<< HEAD
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
=======
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
>>>>>>> origin/merged-prs
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Head>
  );
}
