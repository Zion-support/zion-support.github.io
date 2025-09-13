import React from 'react';
import Link from 'next/link';

export default function FeaturedContentShowcase2026() {
  const featuredContent = [
    {
      title: "AI 2026 Breakthrough Innovations",
      description: "Revolutionary AI technologies transforming industries with quantum-enhanced systems, neural interfaces, and autonomous technologies.",
      href: "/blog/ai-2026-breakthrough-innovations",
      category: "Innovation",
      readTime: "12 min read",
      date: "Jan 20, 2026",
      icon: "🚀",
      gradient: "from-blue-500 to-purple-600",
      stats: "2,500% ROI"
    },
    {
      title: "Global Tech Giant Transformation",
      description: "How a Fortune 100 company achieved 2,500% ROI through comprehensive AI transformation using breakthrough technologies.",
      href: "/case-studies/ai-2026-global-tech-giant-transformation",
      category: "Case Study",
      readTime: "15 min read",
      date: "Jan 18, 2026",
      icon: "🏆",
      gradient: "from-green-500 to-blue-600",
      stats: "$2.5B Savings"
    },
    {
      title: "Comprehensive Implementation Guide",
      description: "Complete blueprint for implementing AI 2026 technologies with step-by-step instructions and proven strategies.",
      href: "/resources/ai-2026-comprehensive-implementation-master-guide",
      category: "Guide",
      readTime: "45 min read",
      date: "Jan 15, 2026",
      icon: "📚",
      gradient: "from-purple-500 to-pink-600",
      stats: "Proven Framework"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">✨ FEATURED CONTENT - JANUARY 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Breakthrough AI 2026 Content
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring revolutionary AI technologies, 
            real-world success stories, and comprehensive implementation guides.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${content.gradient} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{content.icon}</div>
                    <span className="bg-white bg-opacity-20 text-xs font-medium px-3 py-1 rounded-full">
                      {content.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gray-100 transition-colors">
                    {content.title}
                  </h3>
                  <div className="text-sm opacity-90 font-semibold">
                    {content.stats}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {content.description}
                  </p>
                  
                  {/* Meta info */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <span>{content.readTime}</span>
                      <span>•</span>
                      <span>{content.date}</span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                      <span className="font-medium">Read More</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Featured Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            More Breakthrough Content
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-2026-future-predictions" className="group">
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">🔮</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                  AI 2026 Predictions
                </h4>
                <p className="text-xs text-gray-600">Future trends</p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-2026-fortune-500-transformation-breakthrough" className="group">
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">🏢</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                  Fortune 500 Success
                </h4>
                <p className="text-xs text-gray-600">1,800% ROI</p>
              </div>
            </Link>
            
            <Link href="/resources/ai-2026-implementation-toolkit" className="group">
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">🛠️</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                  Implementation Toolkit
                </h4>
                <p className="text-xs text-gray-600">Practical tools</p>
              </div>
            </Link>
            
            <Link href="/quantum-computing-solutions-breakthrough-2026" className="group">
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">⚛️</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                  Quantum Solutions
                </h4>
                <p className="text-xs text-gray-600">Breakthrough tech</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            🎯 Explore All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}