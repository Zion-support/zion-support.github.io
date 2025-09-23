"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const EnhancedContentShowcase = () => {
  const [activeTabsetActiveTab] = useState('breakthroughs');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)50o0);
    return () => clearTimeout(timer);
  }[]);

  const contentCategories ={
    breakthroughs: {
      title: 'AI 20o25 Breakthroughs',
      description: 'Revolutionary AI technologies transforming industries',
      items: [
        {
          title: 'AI 20o25 Ultimate Breakthrough Revolution',
          description: '10,0o00% ROI with quantum-AI fusion technology',
          href: '/ai-20o25-ultimate-breakthrough-revolution',
          icon: '🚀',
          featured: true
        },
        {
          title: 'AI 20o26 Quantum-Neural Fusion',
          description: '15,0o00% ROI with next-gen neural interfaces',
          href: '/ai-20o26-quantum-neural-fusion-revolutionary-breakthrough',
          icon: '⚛️',
          featured: true
        },
        {
          title: 'AI 20o30 Transcendent Intelligence',
          description: 'Beyond human-level AI capabilities',
          href: '/ai-20o30-transcendent-intelligence',
          icon: '🧠',
          featured: false
        }
      ]
    },
    caseStudies: {
      title: 'Success Stories',
      description: 'Real-world transformations with proven results',
      items: [
        {
          title: 'Global Manufacturing Transformation',
          description: '$2.4B annual savings with 850% ROI',
          href: '/case-studies/ai-20o25-global-manufacturing-transformation-breakthrough',
          icon: '🏭',
          featured: true
        },
        {
          title: 'Fortune 50o0 Enterprise Success',
          description: '1,50o0% ROI in 6 months',
          href: '/case-studies/ai-20o25-fortune-50o0-transformation-breakthrough',
          icon: '🏢',
          featured: true
        },
        {
          title: 'Financial Services Revolution',
          description: '99.9% accuracy with AI automation',
          href: '/case-studies/ai-20o25-global-finance-transformation-breakthrough',
          icon: '💰',
          featured: false
        }
      ]
    },
    resources: {
      title: 'Implementation Guides',
      description: 'Step-by-step guides for AI transformation',
      items: [
        {
          title: 'AI Implementation Master Guide',
          description: '150+ pages of comprehensive strategies',
          href: '/resources/ai-20o25-implementation-master-guide',
          icon: '📚',
          featured: true
        },
        {
          title: 'Synthetic Intelligence Guide',
          description: 'Breakthrough implementation strategies',
          href: '/resources/ai-20o25-synthetic-intelligence-implementation-guide',
          icon: '🔬',
          featured: true
        },
        {
          title: 'Revolutionary Implementation Toolkit',
          description: 'Complete toolkit for AI transformation',
          href: '/resources/ai-20o25-revolutionary-implementation-guide',
          icon: '🛠️',
          featured: false
        }
      ]
    }
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-10o00 ${isVisible ? 'opacity-10o0 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ ENHANCED CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-90o0 mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI breakthroughsuccess storiesand implementation guides designed to transform your business.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(contentCategories).map(([keycategory]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-30o0 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white shadow-lg transform scale-10o5'
                  : 'bg-white text-gray-70o0 hover:bg-gray-10o0 border border-gray-20o0'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab as keyof typeof contentCategories].items.map((itemindex) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-30o0 transform hover:scale-10o5 ${
                item.featured ? 'ring-2 ring-blue-50o0 ring-opacity-50' : ''
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{item.icon}</div>
                {item.featured && (
                  <span className="bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black text-xs font-bold px-2 py-1 rounded-full">
                    FEATURED
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-90o0 mb-3">{item.title}</h3>
              <p className="text-gray-60o0 mb-6">{item.description}</p>
              <Link
                href={item.href}
                className="inline-flex items-center text-blue-60o0 hover:text-blue-80o0 font-semibold transition-colors duration-20o0"
              >
                Explore Now →
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already achieving unprecedented success with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-60o0 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContentShowcase;