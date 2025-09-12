import React from 'react';
import Link from 'next/link';

export default function LatestContent2025Showcase() {
  const latestContent = [
    {
      id: 1,
      title: "Advanced Neural Networks: The Future of AI Architecture",
      description: "Discover cutting-edge neural network architectures, transformer innovations, and advanced AI systems that are revolutionizing industries in 2025.",
      href: "/blog/ai-2025-advanced-neural-networks",
      category: "AI Architecture",
      readTime: "15 min read",
      icon: "🧠",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "AI 2025 Financial Services Revolution: 2000% ROI Success Story",
      description: "How a leading financial institution achieved 2000% ROI through AI implementation, transforming fraud detection, risk assessment, and customer experience.",
      href: "/case-studies/ai-2025-financial-services-revolution",
      category: "Case Study",
      readTime: "12 min read",
      icon: "💰",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "Complete toolkit for AI implementation in 2025. Includes frameworks, templates, checklists, and step-by-step guides for successful AI deployment.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource",
      readTime: "25 min read",
      icon: "🛠️",
      badge: "ESSENTIAL",
      badgeColor: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔥 LATEST CONTENT - JANUARY 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ✨ Revolutionary AI Content Just Released
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring advanced neural networks, 
            real-world success stories, and comprehensive implementation tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {latestContent.map((content) => (
            <Link key={content.id} href={content.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{content.icon}</div>
                  <div className="flex-1">
                    <span className={`${content.badgeColor} text-xs font-medium px-2 py-1 rounded-full`}>
                      {content.badge}
                    </span>
                    <div className="text-sm text-gray-500 mt-1">{content.readTime}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                    Read More →
                  </span>
                  <span className="text-xs text-gray-500">{content.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg"
          >
            🎯 View All Latest Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}