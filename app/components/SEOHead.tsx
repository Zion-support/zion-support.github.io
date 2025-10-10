import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOHeadProps {
    title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
  }
}
const SEOHead: React.FC<SEOHeadProps> = ({
    title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.',
  keywords = 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation',
  canonical,

  ogImage = '/og-image.jpg',

  ogType = 'website',

  twitterCard = 'summary_large_image',

  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta>
      {/* Twitter Card Meta Tags */}
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      {/* Additional SEO Meta Tags */}
      <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      <meta name="description" content="AI-powered solution" />
  );
};

export default SEOHead;
