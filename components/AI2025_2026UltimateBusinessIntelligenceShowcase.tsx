import React from 'react';
import Link from 'next/link';

const AI2025_2026UltimateBusinessIntelligenceShowcase = () => {
  const contentItems = [
    {
      type: 'Blog Post',
      title: 'AI 2025-2026 Ultimate Business Intelligence Revolution: Ultimate Breakthrough',
      description: 'Discover the ultimate business intelligence revolution powered by advanced AI technologies that are transforming how enterprises make data-driven decisions.',
      href: '/blog/ai-2025-2026-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      image: '🧠',
      featured: true,
      stats: {
        readTime: '15 min read',
        category: 'AI Revolution',
        date: 'Jan 15, 2025'
      }
    },
    {
      type: 'Case Study',
      title: 'AI 2025-2026 Ultimate Business Intelligence Revolution: 3,000% ROI Success Story',
      description: 'How a Fortune 500 manufacturing company achieved 3,000% ROI through AI-powered business intelligence transformation.',
      href: '/case-studies/ai-2025-2026-ultimate-business-intelligence-revolution-3000-roi-success-story',
      image: '📊',
      featured: true,
      stats: {
        readTime: '12 min read',
        category: 'Success Story',
        date: 'Jan 15, 2025'
      }
    },
    {
      type: 'Resource',
      title: 'AI 2025-2026 Ultimate Business Intelligence Implementation Master Guide',
      description: 'Complete master guide for implementing AI-powered business intelligence solutions in 2025-2026.',
      href: '/resources/ai-2025-2026-ultimate-business-intelligence-implementation-master-guide',
      image: '📚',
      featured: true,
      stats: {
        readTime: '25 min read',
        category: 'Implementation Guide',
        date: 'Jan 15, 2025'
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW ULTIMATE BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025-2026 Ultimate Business Intelligence
            <span className="block text-blue-600">Revolution Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI business intelligence content, 
            featuring breakthrough insights, success stories, and implementation guides.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  FEATURED
                </div>
              )}
              
              <div className="p-8">
                {/* Type Badge */}
                <div className="inline-flex items-center bg-gray-100 text-gray-700 rounded-full px-3 py-1 mb-4 text-sm font-medium">
                  {item.type}
                </div>
                
                {/* Image */}
                <div className="text-6xl mb-6 text-center">
                  {item.image}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>{item.stats.readTime}</span>
                  <span>{item.stats.category}</span>
                  <span>{item.stats.date}</span>
                </div>
                
                {/* CTA Button */}
                <Link
                  href={item.href}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Preview */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business Intelligence?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join 500+ organizations that have already achieved 1,000%+ ROI with our AI solutions.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">3,000%</div>
                <div className="text-sm opacity-90">Maximum ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-sm opacity-90">Data Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">Real-time</div>
                <div className="text-sm opacity-90">Analytics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">$150M</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Related AI Business Intelligence Content
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'AI 2025 Advanced Analytics Revolution',
                href: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
                image: '📈'
              },
              {
                title: 'Fortune 500 AI Transformation Success',
                href: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
                image: '🏆'
              },
              {
                title: 'AI Implementation Master Guide 2025',
                href: '/resources/ai-implementation-master-guide-2025',
                image: '📖'
              },
              {
                title: 'Quantum AI Business Breakthrough',
                href: '/blog/quantum-ai-business-revolution-ultimate-guide',
                image: '⚡'
              }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{item.image}</div>
                <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">
                  {item.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2026UltimateBusinessIntelligenceShowcase;