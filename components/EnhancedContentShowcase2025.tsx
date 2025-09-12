import React from 'react';
import Link from 'next/link';

export default function EnhancedContentShowcase2025() {
  const featuredContent = [
    {
      title: "AI 2025: Enterprise Automation Mastery",
      description: "Master enterprise AI automation with our comprehensive 2025 guide. Learn advanced strategies, implementation frameworks, and real-world success patterns.",
      href: "/blog/ai-2025-enterprise-automation-mastery",
      type: "Blog Post",
      category: "AI Automation",
      readTime: "15 min read",
      isNew: true,
      badge: "MASTERY GUIDE"
    },
    {
      title: "Global Enterprise Transformation Breakthrough",
      description: "Discover how a global enterprise achieved 1200% ROI through comprehensive AI transformation. Learn the strategies and results that drove this breakthrough success.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      type: "Case Study",
      category: "Success Story",
      readTime: "12 min read",
      isNew: true,
      badge: "1200% ROI"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "The most comprehensive AI implementation toolkit for 2025. Get everything you need to successfully implement AI across your enterprise.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      type: "Resource",
      category: "Implementation",
      readTime: "Toolkit",
      isNew: true,
      badge: "ULTIMATE"
    }
  ];

  const trendingContent = [
    {
      title: "AI 2026: Revolutionary Breakthroughs",
      description: "Explore the revolutionary AI breakthroughs that will define 2026 and beyond.",
      href: "/blog/ai-2026-revolutionary-breakthroughs-future",
      type: "Blog Post",
      category: "Future Tech",
      readTime: "10 min read"
    },
    {
      title: "Fortune 500 AI Transformation",
      description: "Learn how Fortune 500 companies are achieving 900% ROI through strategic AI implementation.",
      href: "/case-studies/ai-2026-fortune-500-transformation-breakthrough",
      type: "Case Study",
      category: "Enterprise",
      readTime: "8 min read"
    },
    {
      title: "AI Implementation Master Guide",
      description: "Complete step-by-step guide for enterprise AI implementation with proven frameworks.",
      href: "/resources/ai-2026-ultimate-implementation-toolkit",
      type: "Resource",
      category: "Implementation",
      readTime: "Guide"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 New Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest AI content, case studies, and resources designed to help you master enterprise AI automation and achieve breakthrough results.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">⭐ Featured Content</h3>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              JUST RELEASED
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {content.type}
                    </span>
                    {content.isNew && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {content.badge}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{content.category}</span>
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                </div>
                
                <Link 
                  href={content.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:underline"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">🔥 Trending Content</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {trendingContent.map((content, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">
                    {content.type}
                  </span>
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {content.description}
                </p>
                
                <Link 
                  href={content.href}
                  className="text-blue-600 hover:text-blue-800 font-semibold text-sm group-hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Organization?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Get started with our comprehensive AI implementation toolkit and expert consultation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Toolkit
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl font-bold text-blue-600 mb-2">50+</h4>
            <p className="text-gray-600">Implementation Templates</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-green-600 mb-2">1200%</h4>
            <p className="text-gray-600">Average ROI Achieved</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-purple-600 mb-2">200+</h4>
            <p className="text-gray-600">Success Stories</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-orange-600 mb-2">47</h4>
            <p className="text-gray-600">Countries Served</p>
          </div>
        </div>
      </div>
    </div>
  );
}