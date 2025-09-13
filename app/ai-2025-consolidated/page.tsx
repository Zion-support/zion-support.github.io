import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI 2025 Revolutionary Breakthroughs | Zion Tech Group',
  description: 'Discover the most advanced AI breakthroughs of 2025. Interactive demos, case studies, revolutionary technologies, and implementation guides transforming industries worldwide.',
  keywords: ['AI 2025', 'Breakthrough', 'Revolutionary AI', 'Interactive Demo', 'Case Studies', 'Technology Showcase', 'Implementation Guides', 'AI Solutions'],
  openGraph: {
    title: 'AI 2025 Revolutionary Breakthroughs - Zion Tech Group',
    description: 'Discover the most advanced AI breakthroughs of 2025. Interactive demos, case studies, and revolutionary technologies.',
    images: ['/og-ai-2025-showcase.png'],
  },
};

export default function AI2025ConsolidatedShowcase() {
  const contentCategories = [
    {
      title: '🚀 Breakthrough Technologies',
      description: 'Revolutionary AI technologies transforming industries in 2025',
      items: [
        {
          title: 'Quantum-Enhanced Neural Networks',
          description: 'Next-generation AI powered by quantum computing principles',
          link: '/case-studies/quantum-neural-breakthrough',
          metrics: '300% performance improvement'
        },
        {
          title: 'Autonomous AI Agents',
          description: 'Self-managing AI systems for enterprise operations',
          link: '/case-studies/autonomous-ai-agents',
          metrics: '95% automation rate'
        },
        {
          title: 'Predictive Analytics Engine',
          description: 'Advanced forecasting with 99.7% accuracy',
          link: '/case-studies/predictive-analytics',
          metrics: '99.7% accuracy rate'
        }
      ]
    },
    {
      title: '📊 Success Stories',
      description: 'Real-world implementations and measurable results',
      items: [
        {
          title: 'Fortune 500 Transformation',
          description: 'Complete digital transformation for global enterprise',
          link: '/case-studies/fortune-500-transformation',
          metrics: '$50M+ ROI achieved'
        },
        {
          title: 'Healthcare AI Revolution',
          description: 'AI-powered diagnostic systems saving lives',
          link: '/case-studies/healthcare-ai-revolution',
          metrics: '40% faster diagnosis'
        },
        {
          title: 'Manufacturing Optimization',
          description: 'Smart factory implementation with AI',
          link: '/case-studies/manufacturing-optimization',
          metrics: '60% efficiency gain'
        }
      ]
    },
    {
      title: '🛠️ Implementation Guides',
      description: 'Step-by-step guides for AI adoption',
      items: [
        {
          title: 'AI Strategy Development',
          description: 'Complete roadmap for AI implementation',
          link: '/resources/ai-strategy-guide',
          metrics: 'Comprehensive guide'
        },
        {
          title: 'Technical Architecture',
          description: 'Detailed technical implementation guide',
          link: '/resources/technical-architecture',
          metrics: 'Expert-level content'
        },
        {
          title: 'ROI Calculation Tools',
          description: 'Tools to measure AI implementation success',
          link: '/tools/roi-calculator',
          metrics: 'Interactive calculator'
        }
      ]
    }
  ];

  const features = [
    {
      title: 'Interactive Demos',
      description: 'Hands-on experience with cutting-edge AI technologies',
      icon: '🎮'
    },
    {
      title: 'Real-time Analytics',
      description: 'Live data visualization and performance metrics',
      icon: '📈'
    },
    {
      title: 'Expert Insights',
      description: 'Industry leaders sharing their AI transformation journeys',
      icon: '👥'
    },
    {
      title: 'Implementation Support',
      description: 'Complete support for your AI adoption journey',
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Breakthroughs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Discover the most advanced AI breakthroughs of 2025. Interactive demos, case studies, 
            and revolutionary technologies that are transforming industries worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/case-studies" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Case Studies
            </Link>
            <Link 
              href="/resources" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our AI 2025 Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Explore AI 2025 Content
          </h2>
          <div className="space-y-16">
            {contentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8">{category.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {item.metrics}
                        </span>
                        <Link 
                          href={item.link}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI 2025?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies already leveraging our revolutionary AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/webinars" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Attend Webinar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}