'use client';
import React from 'react';
<<<<<<< HEAD

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  className?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  className = ''
}) => {
  // For App Router, we'll use document.title and meta tags via useEffect
  React.useEffect(() => {
    const fullTitle = title.includes('ZionTechGroup') ? title : `${title} | ZionTechGroup`;
    document.title = fullTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const keywordsString = keywords.join(', ');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywordsString);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywordsString;
      document.head.appendChild(meta);
    }
  }, [title, description, keywords]);

  return null; // This component doesn't render anything
=======
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

const SEOOptimizer: React.FC = () => {
  return (
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
  );
>>>>>>> origin/main
};

export default SEOOptimizer;