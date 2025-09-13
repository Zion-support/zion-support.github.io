import React from 'react';
import Link from 'next/link';

export default function AI2026ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2026 Revolutionary Breakthrough Predictions",
      description: "Discover the 5 revolutionary AI breakthroughs that will reshape industries and create unprecedented opportunities in 2026.",
      href: "/blog/ai-2026-revolutionary-breakthrough-predictions",
      category: "Predictions",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-red-500",
      stats: "95% Accuracy Rate",
      icon: "🚀"
    },
    {
      title: "Enterprise Transformation Case Study",
      description: "How Fortune 500 companies achieved unprecedented 5000% ROI through revolutionary AI transformation strategies.",
      href: "/case-studies/ai-2026-enterprise-transformation-breakthrough",
      category: "Case Study",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-green-500",
      stats: "5000% ROI",
      icon: "🏆"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete step-by-step guide to implementing revolutionary AI 2026 breakthrough technologies in your organization.",
      href: "/resources/ai-2026-ultimate-implementation-toolkit",
      category: "Implementation",
      badge: "ESSENTIAL",
      badgeColor: "bg-blue-500",
      stats: "500+ Pages",
      icon: "🛠️"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-4">
            🎯 FEATURED CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI 2026 Revolutionary Content Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access the most comprehensive collection of AI 2026 breakthrough insights, 
            implementation guides, and real-world success stories.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{content.icon}</span>
                    <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {content.category}
                    </span>
                  </div>
                  <span className={`${content.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse`}>
                    {content.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-green-600">
                    {content.stats}
                  </div>
                  <Link 
                    href={content.href}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Content Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog Articles</h3>
            <p className="text-gray-600 text-sm mb-4">In-depth analysis and insights on AI trends and breakthrough technologies.</p>
            <Link href="/blog" className="text-blue-500 font-semibold hover:text-blue-600">
              Read Articles →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Studies</h3>
            <p className="text-gray-600 text-sm mb-4">Real-world success stories and implementation results from leading enterprises.</p>
            <Link href="/case-studies" className="text-green-500 font-semibold hover:text-green-600">
              View Cases →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Resources</h3>
            <p className="text-gray-600 text-sm mb-4">Comprehensive toolkits, guides, and templates for AI implementation.</p>
            <Link href="/resources" className="text-purple-500 font-semibold hover:text-purple-600">
              Get Resources →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Webinars</h3>
            <p className="text-gray-600 text-sm mb-4">Expert-led sessions on AI trends, implementation strategies, and best practices.</p>
            <Link href="/webinars" className="text-orange-500 font-semibold hover:text-orange-600">
              Join Webinars →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Lead the AI 2026 Revolution?</h3>
          <p className="text-lg mb-6 opacity-90">
            Don't get left behind. Start your AI transformation journey today and be among the first to leverage these revolutionary breakthroughs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/resources/ai-2026-ultimate-implementation-toolkit" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-500 transition-colors"
            >
              Download Toolkit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}