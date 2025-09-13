import React from 'react';
import Link from 'next/link';

export default function AI2025ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2025 Enterprise Automation Revolution",
      description: "Discover how AI is delivering 800% ROI improvements and revolutionizing enterprise operations.",
      href: "/blog/ai-2025-enterprise-automation-revolution",
      type: "Blog Post",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🚀"
    },
    {
      title: "Global Enterprise Transformation Breakthrough",
      description: "Case study: How a Fortune 500 company achieved 1200% ROI through AI transformation.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      type: "Case Study",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      icon: "🏆"
    },
    {
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "Complete guide to implementing AI solutions with proven strategies and best practices.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      type: "Resource",
      badge: "ESSENTIAL",
      badgeColor: "bg-blue-500",
      icon: "📚"
    },
    {
      title: "Quantum Computing Solutions Advanced",
      description: "Next-generation quantum computing solutions for enterprise applications and research.",
      href: "/quantum-computing-solutions-advanced",
      type: "Service",
      badge: "NEW",
      badgeColor: "bg-purple-500",
      icon: "⚛️"
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Featured AI 2025 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough content, case studies, and resources designed to help 
            you succeed with AI implementation in 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredContent.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`${item.badgeColor} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">{item.type}</span>
                  <Link 
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprises already achieving breakthrough results with our 
              AI solutions and implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/content-showcase"
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}