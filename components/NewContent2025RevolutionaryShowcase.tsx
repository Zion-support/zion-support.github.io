import React from 'react';
import Link from 'next/link';

export default function NewContent2025RevolutionaryShowcase() {
  const featuredContent = [
    {
      title: "AI 2025 Enterprise Revolution",
      description: "The complete guide to transforming your enterprise with cutting-edge AI technologies, proven implementation strategies, and real-world success stories.",
      href: "/blog/ai-2025-enterprise-ai-revolution",
      category: "Blog Post",
      icon: "🏢",
      readTime: "15 min read",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      stats: "300% avg productivity gain"
    },
    {
      title: "Fortune 500 AI Transformation Success",
      description: "How a Fortune 500 manufacturing company achieved 1500% ROI through strategic AI implementation. Learn the exact strategies and processes.",
      href: "/case-studies/ai-2025-fortune-500-transformation-success",
      category: "Case Study",
      icon: "🏆",
      readTime: "12 min read",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      stats: "1500% ROI achieved"
    },
    {
      title: "Ultimate Business Transformation Guide",
      description: "The most comprehensive blueprint for transforming your business with AI in 2025. Includes proven strategies, implementation frameworks, and ROI calculators.",
      href: "/resources/ai-2025-ultimate-business-transformation-guide",
      category: "Resource Guide",
      icon: "📚",
      readTime: "200+ pages",
      badge: "ULTIMATE GUIDE",
      badgeColor: "bg-purple-500",
      stats: "25+ implementation tools"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium text-indigo-800">🔥 REVOLUTIONARY CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚀 Latest Breakthrough Content
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our newest content pieces that are revolutionizing how businesses approach AI transformation. 
            From enterprise strategies to proven success stories, get everything you need to succeed.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`${content.badgeColor} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                    {content.badge}
                  </span>
                  <span className="text-gray-500 text-sm">{content.readTime}</span>
                </div>

                {/* Icon and Category */}
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{content.icon}</div>
                  <div>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                      {content.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {content.description}
                </p>

                {/* Stats */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-3 rounded-lg mb-4">
                  <div className="text-sm font-semibold text-gray-900">{content.stats}</div>
                </div>

                {/* CTA */}
                <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700">
                  <span>Explore Content</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Content Highlights */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🎯 Why This Content Matters
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-600 text-sm">
                Based on real-world implementations with measurable ROI and success metrics
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Practical Tools</h4>
              <p className="text-gray-600 text-sm">
                Ready-to-use templates, frameworks, and calculators for immediate implementation
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Future-Ready</h4>
              <p className="text-gray-600 text-sm">
                Strategies and approaches that will keep you ahead of the competition
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Don't let your competitors get ahead. Start your AI transformation journey today with our proven content and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/ai-2025-ultimate-business-transformation-guide"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📚 Get Ultimate Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                💬 Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}