"use client";
import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const EnhancedContentShowcase = () => {
  const [activeTabsetActiveTab] = useState('breakthroughs');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)500);
    return () => clearTimeout(timer);
  }[]);

  const contentCategories = {
    breakthroughs: {
      title: 'AI 2025 Breakthroughs',
      description: 'Revolutionary AI technologies transforming industries',
      items: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: '10,000% ROI with quantum-AI fusion technology',
          href: '/ai-2025-ultimate-breakthrough-revolution',
          icon: '🚀',
          featured: true
        },
        {
          title: 'AI 2026 Quantum-Neural Fusion',
          description: '15,000% ROI with next-gen neural interfaces',
          href: '/ai-2026-quantum-neural-fusion-revolutionary-breakthrough',
          icon: '⚛️',
          featured: true
        },
        {
          title: 'AI 2030 Transcendent Intelligence',
          description: 'Beyond human-level AI capabilities',
          href: '/ai-2030-transcendent-intelligence',
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
          href: '/case-studies/ai-2025-global-manufacturing-transformation-breakthrough',
          icon: '🏭',
          featured: true
        },
        {
          title: 'Fortune 500 Enterprise Success',
          description: '1,500% ROI in 6 months',
          href: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
          icon: '🏢',
          featured: true
        },
        {
          title: 'Financial Services Revolution',
          description: '99.9% accuracy with AI automation',
          href: '/case-studies/ai-2025-global-finance-transformation-breakthrough',
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
          href: '/resources/ai-2025-implementation-master-guide',
          icon: '📚',
          featured: true
        },
        {
          title: 'Synthetic Intelligence Guide',
          description: 'Breakthrough implementation strategies',
          href: '/resources/ai-2025-synthetic-intelligence-implementation-guide',
          icon: '🔬',
          featured: true
        },
        {
          title: 'Revolutionary Implementation Toolkit',
          description: 'Complete toolkit for AI transformation',
          href: '/resources/ai-2025-revolutionary-implementation-guide',
          icon: '🛠️',
          featured: false
        }
      ]
    }
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ ENHANCED CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI breakthroughsuccess storiesand implementation guides designed to transform your business.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(contentCategories).map(([keycategory]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
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
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{item.icon}</div>
                {item.featured && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    FEATURED
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <Link
                href={item.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
              >
                Explore Now →
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already achieving unprecedented success with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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