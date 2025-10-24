<<<<<<< HEAD
<<<<<<<< HEAD:app/components/SEOOptimizer.tsx
'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';
interface SEOOptimizerProps {
  className?: string
}
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
========
import React, { useEffect } from 'react'
import Head from 'next/head'
'use client'
>>>>>>>> origin/main:app-backup/components/SEOOptimizer.tsx
  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.'
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'
  canonicalUrl = '"https": //ziontechgroup.com',
  ogImage = '"https": //ziontechgroup.com/og-image.jpg';,
    const metaDescription = document.querySelector('meta[name=&quot;description&quot;]'
      metaDescription.setAttribute('content'
      const meta = document.createElement('meta'
      meta.name = 'description'
    const metaKeywords = document.querySelector('meta[name=&quot;keywords&quot;]'
      metaKeywords.setAttribute('content', keywords.join(', '
      const meta = document.createElement('meta'
      meta.name = 'keywords'
      meta.content = keywords.join(', '
    let canonicalLink = document.querySelector('link[rel=&quot;canonical&quot;]'
      canonicalLink.setAttribute('href'
      canonicalLink = document.createElement('link'
      canonicalLink.rel = 'canonical'
        ogTag.setAttribute('content'
        ogTag = document.createElement('meta'
        ogTag.setAttribute('property'
        ogTag.setAttribute('content'
    updateOGTag('"og": title');
    updateOGTag('"og": description');
    updateOGTag('"og": image');
    updateOGTag('"og": url');
    updateOGTag('"og": type', 'website'
        twitterTag.setAttribute('content'
        twitterTag = document.createElement('meta'
        twitterTag.setAttribute('name'
        twitterTag.setAttribute('content'
    updateTwitterTag('"twitter": card', 'summary_large_image'
    updateTwitterTag('"twitter": title');
    updateTwitterTag('"twitter": description');
    updateTwitterTag('"twitter": image');
      const script = document.createElement('script'
      script.type = 'application/ld+json'
    let viewport = document.querySelector('meta[name=&quot;viewport&quot;]'
      viewport = document.createElement('meta'
      viewport.setAttribute('name', 'viewport'
      viewport.setAttribute('content', 'width=device-width, initial-scale=1'
    let charset = document.querySelector('meta[charset]'
      charset = document.createElement('meta'
      charset.setAttribute('charset', 'UTF-8'
      <meta name=&quot;keywords&quot; content={keywords.join(', '
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
};

export default SEOOptimizer;
>>>>>>> origin/main
