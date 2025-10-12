'use client';

import React, { useEffect } from 'react';
import { ArrowRight, Brain } from 'lucide-react';

interface SEOFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  status: 'implemented' | 'pending' | 'optimized';
}

interface EnhancedSEOProps {
  className?: string;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ className = '' }) => {
  const seoFeatures: SEOFeature[] = [
    {
      icon: Globe,
      title: 'Meta Tags Optimization',
      description: 'Comprehensive meta tags for better search engine visibility',
      status: 'implemented'
    },
    {
      icon: Brain,
      title: 'Structured Data',
      description: 'Rich snippets and structured data for enhanced search results',
      status: 'implemented'
    },
    {
      icon: Zap,
      title: 'Performance SEO',
      description: 'Core Web Vitals optimization for better search rankings',
      status: 'optimized'
    },
    {
      icon: Shield,
      title: 'Security Headers',
      description: 'HTTPS and security headers for SEO compliance',
      status: 'implemented'
    }
  ];

  useEffect(() => {
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "description": "Leading provider of AI-powered solutions, IT services, and digital transformation",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ziontechgroup.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'implemented':
        return 'text-green-400 bg-green-400/10';
      case 'optimized':
        return 'text-cyan-400 bg-cyan-400/10';
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'implemented':
        return 'Implemented';
      case 'optimized':
        return 'Optimized';
      case 'pending':
        return 'Pending';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">SEO Optimization</h3>
          <p className="text-gray-400 text-sm">Search engine optimization features</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {seoFeatures.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-4 h-4 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">{feature.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                      {getStatusText(feature.status)}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            SEO Score: <span className="text-green-400 font-semibold">95/100</span>
          </div>
          <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1">
            View Details
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSEO;