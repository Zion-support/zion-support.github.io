#!/bin/bash

echo "Fixing all remaining corrupted components..."

# Fix EnhancedSEOOptimizer.tsx
cat > /workspace/app/components/EnhancedSEOOptimizer.tsx << 'COMPONENT_EOF'
import React from 'react';
import { Search, TrendingUp, BarChart3 } from 'lucide-react';

interface SEOOptimizerProps {
  className?: string;
  showMetrics?: boolean;
}

export default function EnhancedSEOOptimizer({ 
  className = '',
  showMetrics = true 
}: SEOOptimizerProps) {
  const seoMetrics = [
    { label: 'Page Speed', value: 95, status: 'excellent' },
    { label: 'SEO Score', value: 88, status: 'good' },
    { label: 'Mobile Friendly', value: 100, status: 'excellent' },
    { label: 'Accessibility', value: 92, status: 'excellent' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-yellow-400';
      case 'needs-work': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className={`bg-gray-800 rounded-xl p-6 border border-gray-700 ${className}`}>
      <div className="flex items-center mb-6">
        <Search className="w-6 h-6 text-cyan-400 mr-3" />
        <h3 className="text-xl font-semibold text-white">SEO Optimizer</h3>
      </div>

      {showMetrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {seoMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
              <div className={`text-2xl font-bold ${getStatusColor(metric.status)} mb-1`}>
                {metric.value}%
              </div>
              <div className="text-gray-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 text-green-400 mr-3" />
            <span className="text-white">Page Title Optimization</span>
          </div>
          <span className="text-green-400 text-sm">Optimized</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center">
            <BarChart3 className="w-5 h-5 text-yellow-400 mr-3" />
            <span className="text-white">Meta Description</span>
          </div>
          <span className="text-yellow-400 text-sm">Needs Review</span>
        </div>
      </div>
    </div>
  );
}
COMPONENT_EOF

# Fix EnhancedServicesShowcase.tsx
cat > /workspace/app/components/EnhancedServicesShowcase.tsx << 'COMPONENT_EOF'
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  link: string;
}

interface EnhancedServicesShowcaseProps {
  className?: string;
  services?: Service[];
}

export default function EnhancedServicesShowcase({ 
  className = '',
  services = [
    {
      id: '1',
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services for business automation and optimization.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      icon: <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">AI</div>,
      link: '/ai-solutions'
    },
    {
      id: '2',
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime.',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud', 'Hybrid Solutions'],
      icon: <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">☁</div>,
      link: '/cloud-migration'
    },
    {
      id: '3',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance'],
      icon: <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">🔒</div>,
      link: '/cybersecurity'
    }
  ]
}: EnhancedServicesShowcaseProps) {
  return (
    <div className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={service.link}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
COMPONENT_EOF

echo "All remaining components fixed!"
