export default function ContentHubPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Content Hub</h1>
      <p className="text-gray-600">Curated articles, case studies, and resources from Zion Tech Group.</p>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Content Hub - Zion Tech Group',
  description: 'Access our comprehensive library of AI resources, guides, whitepapers, and implementation blueprints for enterprise transformation.',
  keywords: 'AI resources, enterprise guides, whitepapers, implementation blueprints, AI documentation',
};

export default function ContentHubPage() {
  const resourceCategories = [
    {
      title: 'AI Implementation Guides',
      description: 'Step-by-step guides for implementing AI solutions in your enterprise',
      icon: '📚',
      resources: [
        {
          title: 'AI 2026 Implementation Roadmap',
          description: 'Comprehensive roadmap for AI transformation in 2026',
          type: 'Guide',
          link: '/guides/ai-2026-implementation-roadmap'
        },
        {
          title: 'AI 2027 Implementation Roadmap',
          description: 'Advanced AI implementation strategies for 2027',
          type: 'Guide',
          link: '/guides/ai-2027-implementation-roadmap'
        },
        {
          title: 'Autonomous Business Processes Implementation Guide',
          description: 'Complete guide to implementing autonomous business processes',
          type: 'Guide',
          link: '/guides/autonomous-business-processes-implementation-guide-2026'
        }
      ]
    },
    {
      title: 'Case Studies & Success Stories',
      description: 'Real-world examples of successful AI transformations',
      icon: '📊',
      resources: [
        {
          title: 'AI 2026 November Quantum Superintelligence Success',
          description: '$500B ROI achieved through quantum AI implementation',
          type: 'Case Study',
          link: '/case-studies/ai-2026-november-quantum-superintelligence-500-billion-success'
        },
        {
          title: 'AI 2026 August Quantum Consciousness Revolution',
          description: '$50B success with autonomous operations transformation',
          type: 'Case Study',
          link: '/case-studies/ai-2026-august-breakthrough-8-5-billion-success'
        },
        {
          title: 'Supply Chain Transformation 2026',
          description: 'AI-powered supply chain optimization case study',
          type: 'Case Study',
          link: '/case-studies/supply-chain-transformation-2026'
        }
      ]
    },
    {
      title: 'Technical Documentation',
      description: 'In-depth technical resources and API documentation',
      icon: '⚙️',
      resources: [
        {
          title: 'AI Services API Documentation',
          description: 'Complete API reference for our AI services',
          type: 'Documentation',
          link: '/api-documentation'
        },
        {
          title: 'AI Security Best Practices',
          description: 'Comprehensive security guidelines for AI implementations',
          type: 'Whitepaper',
          link: '/security'
        },
        {
          title: 'AI Performance Optimization Guide',
          description: 'Best practices for optimizing AI system performance',
          type: 'Guide',
          link: '/guides/ai-performance-optimization'
        }
      ]
    },
    {
      title: 'Industry Insights',
      description: 'Latest trends and insights across different industries',
      icon: '🔍',
      resources: [
        {
          title: 'AI Trends 2026 Predictions',
          description: 'Comprehensive analysis of AI trends for 2026',
          type: 'Report',
          link: '/blog/ai-2026-future-trends-mega-predictions'
        },
        {
          title: 'Enterprise AI Transformation Report',
          description: 'State of enterprise AI transformation in 2026',
          type: 'Report',
          link: '/blog/ai-2026-enterprise-automation-revolution'
        },
        {
          title: 'Quantum Computing Breakthrough Analysis',
          description: 'Analysis of quantum computing breakthroughs and implications',
          type: 'Analysis',
          link: '/blog/ai-2026-quantum-computing-breakthrough'
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'AI 2026 Implementation Roadmap',
      description: 'Comprehensive roadmap for AI transformation in 2026',
      type: 'Guide',
      category: 'Implementation',
      link: '/guides/ai-2026-implementation-roadmap',
      featured: true
    },
    {
      title: 'AI 2026 November Quantum Superintelligence Success',
      description: '$500B ROI achieved through quantum AI implementation',
      type: 'Case Study',
      category: 'Success Story',
      link: '/case-studies/ai-2026-november-quantum-superintelligence-500-billion-success',
      featured: true
    },
    {
      title: 'AI Services API Documentation',
      description: 'Complete API reference for our AI services',
      type: 'Documentation',
      category: 'Technical',
      link: '/api-documentation',
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access our comprehensive library of AI resources, guides, and implementation blueprints
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-blue-600 px-4 py-2 rounded-full">
                <span className="font-semibold">500+</span> Resources Available
              </div>
              <div className="bg-green-600 px-4 py-2 rounded-full">
                <span className="font-semibold">50+</span> Implementation Guides
              </div>
              <div className="bg-purple-600 px-4 py-2 rounded-full">
                <span className="font-semibold">100+</span> Case Studies
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and impactful resources for AI transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {resource.category}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <Link to={resource.link}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                  >
                    Access Resource
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resource Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our organized collection of AI resources and documentation
            </p>
          </div>

          <div className="space-y-12">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                            {resource.type}
                          </span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          {resource.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {resource.description}
                        </p>
                        <Link to={resource.link}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                        >
                          Access Resource
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Popular resources and quick links for immediate access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/guides"
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">Implementation Guides</h3>
              <p className="text-gray-600 text-sm">Step-by-step AI implementation guides</p>
            </Link>
            
            <Link to="/case-studies"
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-gray-600 text-sm">Real-world success stories and ROI examples</p>
            </Link>
            
            <Link to="/blog"
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold text-gray-900 mb-2">Blog & Insights</h3>
              <p className="text-gray-600 text-sm">Latest AI trends and breakthrough insights</p>
            </Link>
            
            <Link to="/services"
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="font-bold text-gray-900 mb-2">Services</h3>
              <p className="text-gray-600 text-sm">Explore our AI and IT services</p>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Resources?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us for custom implementation guides, technical documentation, or specialized resources for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Request Custom Resources
            </Link>
            <Link to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}