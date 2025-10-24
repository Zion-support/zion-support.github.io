'use client';
import React from 'react';
import Head from 'next/head';
import { Metadata } from 'next';

<<<<<<< HEAD
interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  className?: string;
  children?: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  className = '',
  children
}) => {
  const fullTitle = title.includes('ZionTechGroup') ? title : `${title} | ZionTechGroup`;
  const keywordsString = keywords.join(', ');
=======
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
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywordsString} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="ZionTechGroup" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Additional SEO */}
        <meta name="author" content="ZionTechGroup" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
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
    </div>
>>>>>>> origin/main
  );
};

export default SEOOptimizer;