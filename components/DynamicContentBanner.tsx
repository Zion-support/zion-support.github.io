import React from 'react';
import Link from 'next/link';

const DynamicContentBanner: React.FC = () => {
  const featuredContent = [
    {
      title: 'AI Enterprise Transformation 2025',
      description: 'Complete implementation guide with 340% ROI and real case studies',
      href: '/blog/ai-2025-enterprise-transformation',
      icon: '🏢',
      type: 'Article',
      readTime: '18 min read',
      featured: true
    },
    {
      title: 'AI Startup Funding Masterclass 2025',
      description: 'From seed to Series A with $47B market insights and pitch templates',
      href: '/blog/ai-startup-funding-masterclass-2025',
      icon: '💰',
      type: 'Article',
      readTime: '22 min read',
      featured: true
    },
    {
      title: 'AI Implementation Master Guide 2026',
      description: '200+ pages of frameworks, checklists, and proven strategies',
      href: '/resources/ai-implementation-master-guide-2026',
      icon: '📚',
      type: 'Resource',
      readTime: '2 hours',
      featured: true
    },
    {
      title: 'AI Retail Transformation Breakthrough',
      description: '300% revenue growth case study with complete implementation details',
      href: '/case-studies/ai-retail-transformation-breakthrough-2025',
      icon: '🛍️',
      type: 'Case Study',
      readTime: '15 min read',
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 30, 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 Fresh AI & Business Content Just Dropped
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            New this week: AI Enterprise Transformation, Startup Funding Masterclass, Implementation Master Guide, 
            and Retail Success Story. Expert insights to accelerate your growth in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg" 
            >
              📋 Download Free Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90 mb-3">{item.description}</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>{item.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{item.type}</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4"
          >
            View All Articles
          </Link>
          <Link
            href="/resources"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-block"
          >
            Download Resources
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentBanner;