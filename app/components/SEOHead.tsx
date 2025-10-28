<<<<<<< HEAD
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "SEOHead | Zion Tech Group",
  description: "Professional seohead services by Zion Tech Group",
  keywords: "seohead, technology, services",
  openGraph: {
    title: "SEOHead | Zion Tech Group",
    description: "Professional seohead services by Zion Tech Group",
    type: "website",
  },
};

export default function SEOHeadPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              SEOHead
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional seohead services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our SEOHead Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive seohead solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your seohead needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored seohead solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your seohead services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
=======
'use client';

import Head from 'next/head';
import React, { memo } from 'react';

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown>;
}

const SEOHead: React.FC<SEOHeadProps> = memo(({
  title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, artificial intelligence, machine learning, data analytics',
  canonical,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  structuredData,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Theme and App Meta Tags */}
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zion Tech Group',
            description: description,
            url: canonicalUrl,
            logo: '/images/logo.png',
            sameAs: [
              'https://linkedin.com/company/zion-tech-group',
              'https://twitter.com/ziontechgroup',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-555-0123',
              contactType: 'customer service',
            },
          }),
        }}
      />
    </Head>
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
  );
}