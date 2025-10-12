

'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;

const SEOHead: React.FC<SEOHeadProps /> = ({
  const title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.',
  keywords = 'AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics, machine learning, artificial intelligence',
  canonical = 'https: //ziontechgroup.com',
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
  const defaultStructuredData = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https: //linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "services": [
      "AI Solutions",
      "Cloud Infrastructure",
      "Cybersecurity",
      "Software Development",
      "Data Analytics",
      "Machine Learning"
    ]
  };
  const finalStructuredData = structuredData || defaultStructuredData;
  return (

        <title>5G Data Analytics - Zion Tech Group</title>
      {/* Basic Meta Tags */}
    
      <title>{title}</title>
      {/* Canonical URL */}
      {/* Open Graph Meta Tags */}
    
      {/* Twitter Card Meta Tags */}
    
      {/* Additional Meta Tags */}
    
      {/* Favicon and Icons */}

      {/* Preconnect to external domains */}
    
      {/* DNS Prefetch */}
    
      {/* Structured Data */}
    
      <script type="application/ld+json">{JSON.stringify(finalStructuredData)}

      {/* Additional SEO Scripts */}
      <script type="application/ld+json"  />{JSON.stringify({
          "@context": "https: //schema.org",
          "@type": "WebSite",
          "name": "Zion Tech Group",
          "url": "https: //ziontechgroup.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https: //ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        })}
      
      {/* Performance Hints */}

      {/* Security Headers */}
    
      <meta httpEquiv="X-Frame-Options" content="DENY" / / />;
  );
};

export default SEOHead;

=======
export default function SEOHead() {
  return (
    <>
      <Helmet>
        <title>S E O Head - Zion Tech Group</title>
        <meta name="description" content="Professional s e o head by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">S E O Head</h1>
          <p className="text-lg text-gray-300 mb-8">Professional s e o head coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
