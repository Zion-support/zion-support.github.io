import React from 'react';
import Link from 'next/link';

export default function FeaturedContentShowcase2026() {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2026: Enterprise Automation Revolution",
      description: "Discover how cutting-edge AI technologies are transforming enterprise operations with 40-60% efficiency gains.",
      type: "Blog Post",
      readTime: "15 min read",
      href: "/blog/ai-2026-enterprise-automation-revolution",
      image: "🤖",
      category: "Enterprise AI",
      featured: true
    },
    {
      id: 2,
      title: "Global Retail Transformation Success",
      description: "How a Fortune 100 retail giant achieved $2.3B in additional revenue through comprehensive AI transformation.",
      type: "Case Study",
      readTime: "12 min read",
      href: "/case-studies/ai-2026-global-retail-transformation-success",
      image: "🏪",
      category: "Success Story",
      featured: true
    },
    {
      id: 3,
      title: "AI 2026 Implementation Master Guide",
      description: "The complete enterprise toolkit for successful AI implementation with frameworks, templates, and strategies.",
      type: "Resource",
      readTime: "25 min read",
      href: "/resources/ai-2026-implementation-master-guide",
      image: "📚",
      category: "Master Guide",
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🌟 Featured Content 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest insights, success stories, and comprehensive guides 
            that are transforming how organizations implement AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content) => (
            <div 
              key={content.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{content.image}</div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {content.type}
                    </span>
                    {content.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                    {content.category}
                  </span>
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/content-showcase"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}