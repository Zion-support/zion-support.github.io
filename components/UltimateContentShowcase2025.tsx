import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const contentSections = {
    featured: {
      title: "Featured Content",
      items: [
        {
          id: 1,
          title: "AI 2025 Ultimate Automation Revolution",
          type: "blog",
          category: "AI Automation",
          excerpt: "Discover the revolutionary AI automation strategies achieving 50,000% ROI. Learn how Fortune 500 companies are transforming their operations.",
          readTime: "8 min read",
          featured: true,
          image: "/images/ai-automation-2025.jpg",
          stats: { views: "25K", shares: "1.2K", comments: "340" }
        },
        {
          id: 2,
          title: "Quantum-Neural Fusion 2026",
          type: "blog",
          category: "Quantum Computing",
          excerpt: "Explore the revolutionary convergence of quantum computing and neural networks that's redefining artificial intelligence.",
          readTime: "12 min read",
          featured: true,
          image: "/images/quantum-neural-fusion.jpg",
          stats: { views: "18K", shares: "890", comments: "156" }
        },
        {
          id: 3,
          title: "Fortune 500 AI Transformation",
          type: "case-study",
          category: "Case Study",
          excerpt: "How a Fortune 500 manufacturing company achieved 800% ROI in just 6 months through comprehensive AI transformation.",
          readTime: "15 min read",
          featured: true,
          image: "/images/fortune-500-transformation.jpg",
          stats: { views: "32K", shares: "2.1K", comments: "445" }
        }
      ]
    },
    latest: {
      title: "Latest Content",
      items: [
        {
          id: 4,
          title: "Neural Interface Revolution 2025",
          type: "blog",
          category: "Neural Interfaces",
          excerpt: "The future of human-computer interaction through advanced neural interface technology.",
          readTime: "10 min read",
          featured: false,
          image: "/images/neural-interfaces.jpg",
          stats: { views: "12K", shares: "456", comments: "89" }
        },
        {
          id: 5,
          title: "Autonomous Business Operations",
          type: "blog",
          category: "Automation",
          excerpt: "How businesses are achieving full autonomy through AI-powered operational systems.",
          readTime: "9 min read",
          featured: false,
          image: "/images/autonomous-operations.jpg",
          stats: { views: "15K", shares: "678", comments: "123" }
        },
        {
          id: 6,
          title: "Synthetic Intelligence Breakthrough",
          type: "blog",
          category: "AI Research",
          excerpt: "The latest breakthroughs in synthetic intelligence and their implications for business.",
          readTime: "11 min read",
          featured: false,
          image: "/images/synthetic-intelligence.jpg",
          stats: { views: "8K", shares: "234", comments: "67" }
        }
      ]
    },
    popular: {
      title: "Most Popular",
      items: [
        {
          id: 7,
          title: "AI ROI Calculator Guide",
          type: "tool",
          category: "Tools",
          excerpt: "Calculate your potential ROI from AI implementation with our comprehensive calculator.",
          readTime: "5 min read",
          featured: false,
          image: "/images/roi-calculator.jpg",
          stats: { views: "45K", shares: "3.2K", comments: "567" }
        },
        {
          id: 8,
          title: "Enterprise AI Implementation",
          type: "guide",
          category: "Implementation",
          excerpt: "Complete guide to implementing AI solutions in enterprise environments.",
          readTime: "20 min read",
          featured: false,
          image: "/images/enterprise-ai.jpg",
          stats: { views: "38K", shares: "2.8K", comments: "423" }
        },
        {
          id: 9,
          title: "AI Security Best Practices",
          type: "guide",
          category: "Security",
          excerpt: "Essential security practices for AI implementations in enterprise environments.",
          readTime: "14 min read",
          featured: false,
          image: "/images/ai-security.jpg",
          stats: { views: "28K", shares: "1.9K", comments: "234" }
        }
      ]
    }
  };

  const getContentUrl = (item) => {
    if (item.type === 'case-study') {
      return `/case-studies/${item.title.toLowerCase().replace(/\s+/g, '-')}`;
    } else if (item.type === 'tool') {
      return `/tools/${item.title.toLowerCase().replace(/\s+/g, '-')}`;
    } else if (item.type === 'guide') {
      return `/guides/${item.title.toLowerCase().replace(/\s+/g, '-')}`;
    }
    return `/blog/${item.title.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const currentContent = contentSections[activeTab];

  return (
    <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-4 text-sm font-semibold text-white">
            <span className="mr-2">📚</span>
            ULTIMATE CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Our Best Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated collection of cutting-edge insights, case studies, and breakthrough technologies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {Object.entries(contentSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.items.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${
                item.featured ? 'border-purple-200 ring-2 ring-purple-100' : 'border-gray-200'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  FEATURED
                </div>
              )}
              
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-t-xl flex items-center justify-center">
                <div className="text-4xl">
                  {item.category === 'AI Automation' && '🤖'}
                  {item.category === 'Quantum Computing' && '⚛️'}
                  {item.category === 'Case Study' && '📊'}
                  {item.category === 'Neural Interfaces' && '🧠'}
                  {item.category === 'Automation' && '⚙️'}
                  {item.category === 'AI Research' && '🔬'}
                  {item.category === 'Tools' && '🛠️'}
                  {item.category === 'Implementation' && '🚀'}
                  {item.category === 'Security' && '🔒'}
                </div>
              </div>
              
              <div className="p-6">
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.readTime}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {item.stats.views}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      {item.stats.shares}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {item.stats.comments}
                    </span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Link
                  href={getContentUrl(item)}
                  className="inline-flex items-center w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  {item.type === 'tool' ? 'Use Tool' : 'Read More'}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;