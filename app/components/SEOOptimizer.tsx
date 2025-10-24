<<<<<<< HEAD
'use client'
import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  children: ReactNode;
  className?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children, className }) => {
  useEffect(() => {
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading technology solutions provider specializing in AI, IT services, and 5G solutions",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
=======
'use client';
import React from 'react';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEOOptimizer - Zion Tech Group',
  description: 'Comprehensive seooptimizer solutions for modern businesses.',
  keywords: 'seooptimizer, AI solutions, technology services',
  openGraph: {
    title: 'SEOOptimizer - Zion Tech Group',
    description: 'Comprehensive seooptimizer solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/components',
  },
};
>>>>>>> origin/main

const SEOOptimizer: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className={className}>
      <Helmet>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Helmet>
      {children}
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            SEOOptimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive seooptimizer solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default SEOOptimizer;
=======
export default SEOOptimizer;
>>>>>>> origin/main
