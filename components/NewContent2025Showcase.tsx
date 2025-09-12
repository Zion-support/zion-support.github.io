import React from 'react';
import { Link } from 'react-router-dom';

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
    },
    {
      title: "AI 2025: Ultimate Trends & Predictions",
      description: "Discover the most revolutionary AI trends and predictions for 2025. From quantum AI to autonomous systems, explore the future of artificial intelligence.",
      href: "/blog/ai-2025-ultimate-trends-predictions",
      type: "Blog Post",
      icon: "🔮",
      readTime: "15 min read",
      date: "Jan 17, 2025",
      category: "Trends & Predictions",
      featured: false
    },
    {
      title: "AI 2025 Global Enterprise Transformation: 1200% ROI Success Story",
      description: "How a global enterprise achieved 1200% ROI through comprehensive AI transformation. Real-world case study with actionable insights.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      type: "Case Study",
      icon: "🏆",
      readTime: "20 min read",
      date: "Jan 17, 2025",
      category: "Success Stories",
      featured: false
    },
    {
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "The complete toolkit for implementing AI in your organization. Includes checklists, templates, and step-by-step guides.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      type: "Resource Guide",
      icon: "🛠️",
      readTime: "30 min read",
      date: "Jan 17, 2025",
      category: "Implementation",
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI 2025 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our newest content featuring revolutionary AI trends, success stories, and implementation guides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newContent.map((content, index) => (
            <Link
              key={index}
              to={content.href}
              className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                content.featured ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{content.icon}</div>
                  {content.featured && (
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {content.type}
                  </span>
                  <span>{content.readTime}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{content.category}</span>
                    <span>{content.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/content-showcase"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}