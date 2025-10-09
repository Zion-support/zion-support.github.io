'use client';
import React from 'react;
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOHead: any,
    e= 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, quantum computing, autonomous systems, digital transformation, cloud services, cybersecurity, business intelligence, machine learning, automation',
  image = '/og-image.svg',
  url = 'https: any,
  type = 'website',
  structuredData,
  canonical,
  noindex = false,
  nofollow = false,
}) => {;
  const canonicalUrl = canonical || url;
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'};

  return null;
};
';
export default SEOHead;'`';