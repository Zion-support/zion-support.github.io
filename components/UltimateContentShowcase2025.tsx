import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2025() {
  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover the cutting-edge AI innovations transforming industries in 2025",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      category: "Blog",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🚀",
      stats: "15 min read"
    },
    {
      title: "Fortune 500 AI Transformation: 1500% ROI",
      description: "How a global manufacturing giant achieved unprecedented results",
      href: "/case-studies/ai-2025-fortune-500-transformation-breakthrough",
      category: "Case Study",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      icon: "🏆",
      stats: "12 min read"
    },
    {
      title: "AI 2025 Ultimate Implementation Master Guide",
      description: "Complete blueprint for successful AI implementation in 2025",
      href: "/resources/ai-2025-ultimate-implementation-master-guide",
      category: "Resource",
      badge: "MASTER GUIDE",
      badgeColor: "bg-purple-500",
      icon: "📚",
      stats: "45 min read"
    }
  ];

  const additionalContent = [
    {
      title: "AI 2025 Enterprise Automation Mastery",
      description: "Transform your business with advanced automation strategies",
      href: "/blog/ai-2025-enterprise-automation-mastery",
      category: "Blog",
      icon: "🤖",
      stats: "10 min read"
    },
    {
      title: "Global Enterprise Transformation Success",
      description: "1200% ROI achieved through strategic AI implementation",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "Case Study",
      icon: "📈",
      stats: "8 min read"
    },
    {
      title: "Ultimate Implementation Toolkit 2025",
      description: "Complete toolkit with templates, checklists, and guides",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource",
      icon: "🛠️",
      stats: "30 min read"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-bold">
              NEW
            </span>
            <span className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-full font-bold">
              BREAKTHROUGH
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs, success stories, and implementation guides 
            that are transforming how organizations approach AI in 2025.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ⭐ Featured Content
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 font-medium">{item.category}</span>
                    <span className={`${item.badgeColor} text-white text-xs px-2 py-1 rounded-full font-bold`}>
                      {item.badge}
                    </span>
                  </div>
                  
                  <div className="text-3xl mb-3">{item.icon}</div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.stats}</span>
                    <Link 
                      href={item.href}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📚 More Essential Content
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500 font-medium">{item.category}</span>
                      <span className="text-sm text-gray-500">{item.stats}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.description}
                    </p>
                    <Link 
                      href={item.href}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Organization with AI?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Don't get left behind in the AI revolution. Our expert team can help you 
            implement these breakthrough technologies and achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link 
              href="/resources"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}