'use client';

import React{ useState } from 'react';
import Link from 'next/link';

const ContentNavigation2025 = () => {
  const [activeTabsetActiveTab] = useState('all');

  const contentCategories = [
    {
      id: 'all',
      name: 'All Content',
      icon: '📚'
    },
    {
      id: 'blog',
      name: 'Blog Posts',
      icon: '📝'
    },
    {
      id: 'case-studies',
      name: 'Case Studies',
      icon: '🏆'
    },
    {
      id: 'resources',
      name: 'Resources',
      icon: '📋'
    },
    {
      id: 'guides',
      name: 'Implementation Guides',
      icon: '🎯'
    }
  ];

  const featuredContent = [
    {
      title: "AI 2025-2026 Ultimate Business Transformation Guide",
      description: "Complete guide to achieving 10,000% ROI through AI transformation",
      category: "blog",
      readTime: "15 min",
      featured: true,
      new: true,
      link: "/blog/ai-2025-2026-ultimate-business-transformation-revolution-ultimate-guide"
    },
    {
      title: "5,000% ROI Success Story: Fortune 100 Case Study",
      description: "How a Fortune 100 company achieved unprecedented success in 18 months",
      category: "case-studies",
      readTime: "12 min",
      featured: true,
      new: true,
      link: "/case-studies/ai-2025-2026-ultimate-transformation-5000-roi-success-story"
    },
    {
      title: "10,000% ROI Implementation Master Guide",
      description: "Step-by-step framework for implementing AI transformation initiatives",
      category: "resources",
      readTime: "20 min",
      featured: true,
      new: true,
      link: "/resources/ai-2025-2026-implementation-ultimate-master-guide-10000-roi"
    },
    {
      title: "Advanced Neural Architectures 2026",
      description: "Next-generation AI architectures for enterprise transformation",
      category: "blog",
      readTime: "18 min",
      featured: true,
      new: false,
      link: "/blog/ai-2025-advanced-neural-architectures-revolution"
    },
    {
      title: "Quantum AI Business Revolution",
      description: "How quantum computing is revolutionizing AI applications",
      category: "blog",
      readTime: "14 min",
      featured: true,
      new: false,
      link: "/blog/ai-2025-quantum-ai-business-revolution-ultimate-guide"
    },
    {
      title: "Fortune 500 AI Transformation Success",
      description: "Real-world case study of Fortune 500 AI implementation",
      category: "case-studies",
      readTime: "10 min",
      featured: true,
      new: false,
      link: "/case-studies/fortune-500-ai-transformation-ultimate-success-story"
    }
  ];

  const filteredContent = activeTab === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Content Library
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive guidesuccess storiesand implementation resources 
            to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((contentindex) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {contentCategories.find(cat => cat.id === content.category)?.name}
                  </span>
                  <div className="flex items-center gap-2">
                    {content.new && (
                      <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        NEW
                      </span>
                    )}
                    {content.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{content.readTime} read</span>
                  <Link
                    href={content.link}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get personalized AI transformation guidance and implementation support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentNavigation2025;