'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: object;
  children: React.ReactNode;
}

const AdvancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Professional AI and IT solutions for your business. Advanced technology, expert support, and proven results.',
  keywords = 'AI solutions, IT consulting, technology services, digital transformation, artificial intelligence',
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  twitterCard = 'summary_large_image',
  structuredData,
  children
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": canonicalUrl || (typeof window !== 'undefined' ? window.location.origin : ''),
    "logo": ogImage,
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData)}
        </script>
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Helmet>
      
      {children}
    </>
  );
};

// SEO Optimizer Page Component
const AdvancedSEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Advanced SEO Analysis',
      description: 'Comprehensive SEO analysis and optimization recommendations.',
      benefits: ['Keyword research', 'Content optimization', 'Technical SEO', 'Performance insights']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific keywords and audiences with precision.',
      benefits: ['Keyword targeting', 'Audience analysis', 'Competitor research', 'Market insights']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your website for maximum growth and visibility.',
      benefits: ['Growth strategies', 'Traffic optimization', 'Conversion tracking', 'ROI analysis']
    }
  ];

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Improve search rankings with AI-powered insights',
    'Optimize content for better visibility',
    'Track performance with detailed analytics',
    'Stay ahead of SEO trends and updates'
  ];

  return (
    <AdvancedSEOOptimizer
      title="Advanced SEO Optimizer - Zion Tech Group"
      description="Optimize your website's SEO with our advanced AI-powered tools. Increase organic traffic, improve rankings, and boost your online visibility."
      keywords="SEO optimization, search engine optimization, organic traffic, keyword research, content optimization"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Advanced SEO Optimizer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Boost your website's visibility and organic traffic with our AI-powered SEO optimization tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Optimizing
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Powerful SEO Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our SEO Optimizer?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Boost Your SEO?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start optimizing your website today and see the results in weeks, not months.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Now
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </AdvancedSEOOptimizer>
  );
};

export default AdvancedSEOOptimizer;
export { AdvancedSEOOptimizerPage };