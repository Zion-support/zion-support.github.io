'use client';

import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Phone, Mail, Brain, BarChart, Search, Target } from 'lucide-react';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: object;
  children: React.ReactNode;
}

const EnhancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  twitterCard = 'summary_large_image',
  structuredData,
  children
}) => {
  const [_seoScore, setSeoScore] = useState(0);
  const [_recommendations, setRecommendations] = useState<string[]>([]);

  const analyzeSEO = useCallback(() => {
    if (typeof window === 'undefined') return;

    let score = 0;
    const newRecommendations: string[] = [];

    // Check title length
    if (title.length >= 30 && title.length <= 60) {
      score += 20;
    } else {
      newRecommendations.push('Title should be between 30-60 characters');
    }

    // Check description length
    if (description.length >= 120 && description.length <= 160) {
      score += 20;
    } else {
      newRecommendations.push('Description should be between 120-160 characters');
    }

    // Check for keywords
    if (keywords && keywords.length > 0) {
      score += 15;
    } else {
      newRecommendations.push('Add relevant keywords');
    }

    // Check for canonical URL
    if (canonicalUrl) {
      score += 15;
    } else {
      newRecommendations.push('Add canonical URL');
    }

    // Check for structured data
    if (structuredData) {
      score += 20;
    } else {
      newRecommendations.push('Add structured data for better search visibility');
    }

    // Check for OG image
    if (ogImage) {
      score += 10;
    } else {
      newRecommendations.push('Add Open Graph image');
    }

    setSeoScore(score);
    setRecommendations(newRecommendations);
  }, [title, description, keywords, canonicalUrl, structuredData, ogImage]);

  React.useEffect(() => {
    analyzeSEO();
  }, [analyzeSEO]);

  const features = [
    {
      icon: Search,
      title: 'SEO Analysis',
      description: 'Comprehensive SEO analysis and recommendations for better search visibility',
    },
    {
      icon: Target,
      title: 'Keyword Optimization',
      description: 'Advanced keyword research and optimization strategies',
    },
    {
      icon: BarChart,
      title: 'Performance Tracking',
      description: 'Monitor and track your SEO performance with detailed analytics',
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Leverage AI technology for intelligent SEO recommendations',
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Structured data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Enhanced SEO Optimizer
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your search visibility with our advanced SEO optimization solutions. 
                Powered by cutting-edge AI technology and industry expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our SEO Optimizer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our SEO optimization solutions deliver unmatched performance, visibility, and results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Contact our experts to discuss your SEO optimization needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {children}
      </div>
    </>
  );
};

export default EnhancedSEOOptimizer;