import React from 'react';
import Link from 'next/link';

export default function NewContent2025Showcase() {
  const newContent = [
    {
      title: "AI 2025 Revolutionary Trends Breakthrough",
      description: "Discover the revolutionary AI trends that will transform industries in 2025. From quantum computing to neural interfaces, explore breakthrough technologies.",
      href: "/blog/ai-2025-revolutionary-trends-breakthrough",
      type: "Blog Post",
      icon: "🔮",
      readTime: "25 min read",
      date: "Jan 17, 2025",
      category: "Trends & Predictions",
      featured: true
    },
    {
      title: "Energy Sector Transformation Breakthrough",
      description: "How a Fortune 500 energy company achieved 2000% ROI through revolutionary AI implementation, transforming their entire operations.",
      href: "/case-studies/ai-2025-energy-sector-transformation-breakthrough",
      type: "Case Study",
      icon: "⚡",
      readTime: "18 min read",
      date: "Jan 17, 2025",
      category: "Success Stories",
      featured: true
    },
    {
      title: "Comprehensive Implementation Master Guide",
      description: "The complete blueprint for successfully implementing AI in your organization. Step-by-step instructions and proven strategies.",
      href: "/resources/ai-2025-comprehensive-implementation-master-guide",
      type: "Resource Guide",
      icon: "📚",
      readTime: "45 min read",
      date: "Jan 17, 2025",
      category: "Implementation",
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            ✨ NEW CONTENT SHOWCASE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI Content & Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fresh insights, breakthrough case studies, and comprehensive guides 
            to help you succeed with AI in 2025 and beyond.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{content.icon}</div>
                  <div className="flex flex-col items-end">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mb-2">
                      {content.type}
                    </span>
                    {content.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Category */}
                <div className="mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    {content.category}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <span>{content.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{content.date}</span>
                  </div>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors text-lg shadow-lg hover:shadow-xl"
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