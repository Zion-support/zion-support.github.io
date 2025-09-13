import React from 'react';
import Link from 'next/link';

export default function NewContent2025BreakthroughShowcase() {
  const newContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover the most transformative AI innovations of 2025 that are reshaping entire industries and delivering unprecedented returns on investment.",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      category: "Blog",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🚀",
      metrics: "2000%+ ROI"
    },
    {
      title: "Global Enterprise Transformation Success",
      description: "How a Fortune 500 company achieved 2000% ROI through our revolutionary AI transformation strategy in just 6 months.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "Case Study",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      icon: "🏆",
      metrics: "2000% ROI"
    },
    {
      title: "AI 2026 Future Predictions",
      description: "Exclusive predictions for AI breakthroughs in 2026 that will transform industries and create unprecedented opportunities.",
      href: "/blog/ai-2026-future-predictions-breakthrough",
      category: "Predictions",
      badge: "FUTURE",
      badgeColor: "bg-purple-500",
      icon: "🔮",
      metrics: "95% Probability"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "The most comprehensive AI implementation guide for 2025, featuring proven strategies, templates, and step-by-step instructions.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource",
      badge: "ESSENTIAL",
      badgeColor: "bg-blue-500",
      icon: "🛠️",
      metrics: "500+ Companies"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 New AI 2025 Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest revolutionary AI content that's helping companies achieve unprecedented success and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newContent.map((content, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{content.icon}</span>
                  <span className={`${content.badgeColor} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
                    {content.badge}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {content.category}
                  </span>
                  <span className="text-sm font-semibold text-green-600">
                    {content.metrics}
                  </span>
                </div>
                
                <Link 
                  href={content.href}
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve Breakthrough Results?
            </h3>
            <p className="text-gray-700 mb-6">
              Join 500+ companies already leveraging these revolutionary AI technologies to transform their operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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