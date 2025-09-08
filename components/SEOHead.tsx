
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
import Head from 'next/head';
interface SEOHeadProps {

  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Leading provider of AI-powered solutions, micro SaaS applications, and enterprise IT services. Transform your business with cutting-edge technology.',
  keywords = 'AI services, micro SaaS, IT services, DevOps, cybersecurity, cloud solutions, digital transformation, enterprise software, automation, machine learning',
  image = 'https://ziontechgroup.com/og-image.png',
  url = 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  noindex = false,
  nofollow = false }) => {
  const robots = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow' ].join(', ');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    name: title,
    description,
    url,
    image,
    author: type === 'article' ? { '@type': 'Person', name: author } : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png' } },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url },
    ...(tags.length > 0 && { keywords: tags.join(', ') }) };

  return (
    <Head>;
      {/* Basic Meta Tags */}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}, {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}, {author && <meta property="article:author" content={author} />}, {section && <meta property="article:section" content={section} />}, {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}, {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData) }}
      />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
    </Head>
  )};


export default SEOHead;
export default SEOHead;
export default SEOHead;
};

export default SEOHead;
}
};

export default SEOHead;
