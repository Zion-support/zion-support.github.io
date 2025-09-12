import React from 'react';
import Link from 'next/link';

export default function TrendingContentCarousel() {
  const trendingContent = [
    {
      title: "Advanced AI Agents Implementation Guide",
      description: "Complete enterprise implementation with 340% ROI and autonomous systems",
      href: "/blog/ai-2025-advanced-ai-agents",
      category: "AI Implementation",
      readTime: "15 min",
      icon: "🤖",
      badge: "HOT",
      badgeColor: "bg-red-500"
    },
    {
      title: "AI Cybersecurity Revolution",
      description: "94% threat detection accuracy and zero-day attack prevention",
      href: "/blog/ai-2025-cybersecurity-revolution",
      category: "Cybersecurity",
      readTime: "18 min",
      icon: "🛡️",
      badge: "NEW",
      badgeColor: "bg-blue-500"
    },
    {
      title: "$2.1B Manufacturing Transformation",
      description: "Global manufacturing giant achieves 340% ROI across 47 facilities",
      href: "/case-studies/ai-2025-global-manufacturing-ai-transformation-success",
      category: "Case Study",
      readTime: "12 min",
      icon: "🏭",
      badge: "SUCCESS",
      badgeColor: "bg-green-500"
    },
    {
      title: "Healthcare AI Diagnosis Revolution",
      description: "94% accuracy in cancer detection and 67% faster diagnosis times",
      href: "/blog/ai-2025-healthcare-diagnosis-revolution",
      category: "Healthcare AI",
      readTime: "14 min",
      icon: "🏥",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-purple-500"
    },
    {
      title: "Enterprise AI Automation Masterclass",
      description: "Complete automation transformation delivering 340% ROI",
      href: "/blog/ai-2025-enterprise-automation-revolution",
      category: "Automation",
      readTime: "16 min",
      icon: "⚡",
      badge: "TRENDING",
      badgeColor: "bg-orange-500"
    },
    {
      title: "Quantum AI Computing Breakthrough",
      description: "Next-generation quantum AI systems transforming enterprise computing",
      href: "/blog/ai-2025-quantum-ai-breakthrough",
      category: "Quantum AI",
      readTime: "20 min",
      icon: "⚛️",
      badge: "FUTURE",
      badgeColor: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🔥 Trending Content This Week
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most popular and impactful AI content that's transforming businesses worldwide. 
            Expert insights, real-world success stories, and implementation guides.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {trendingContent.slice(0, 6).map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-300">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4 group-hover:scale-110 transition-transform">{content.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`text-xs font-medium text-white px-2 py-1 rounded-full ${content.badgeColor} mr-2`}>
                        {content.badge}
                      </span>
                      <span className="text-xs text-gray-500">{content.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {content.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{content.readTime} read</span>
                  <span className="text-blue-600 text-sm font-medium group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {trendingContent.map((content, index) => (
              <Link key={index} href={content.href} className="group flex-shrink-0 w-80">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-300">
                  <div className="flex items-start mb-4">
                    <div className="text-3xl mr-4 group-hover:scale-110 transition-transform">{content.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`text-xs font-medium text-white px-2 py-1 rounded-full ${content.badgeColor} mr-2`}>
                          {content.badge}
                        </span>
                        <span className="text-xs text-gray-500">{content.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {content.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{content.readTime} read</span>
                    <span className="text-blue-600 text-sm font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Trending Content
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}