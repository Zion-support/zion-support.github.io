import React from 'react';
import Link from 'next/link';

export default function AI2027ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2027: Revolutionary Future Trends & Predictions",
      description: "Discover the groundbreaking AI trends and predictions for 2027. Explore quantum AI, neural interfaces, autonomous systems, and the future of artificial intelligence.",
      href: "/blog/ai-2027-future-trends-predictions",
      type: "Blog Post",
      category: "Future Trends",
      readTime: "15 min read",
      badge: "NEW 2027",
      badgeColor: "bg-purple-500",
      image: "🔮"
    },
    {
      title: "AI 2027 Financial Services Revolution: 2000% ROI Case Study",
      description: "Discover how a major financial institution achieved 2000% ROI through revolutionary AI implementation. Learn about quantum AI, neural interfaces, and autonomous trading systems.",
      href: "/case-studies/ai-2027-financial-services-revolution",
      type: "Case Study",
      category: "Financial Services",
      readTime: "12 min read",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-green-500",
      image: "💰"
    },
    {
      title: "AI 2027 Ultimate Implementation Master Guide",
      description: "Complete guide to implementing cutting-edge AI technologies in 2027. Learn about quantum AI, neural interfaces, autonomous systems, and achieve breakthrough results.",
      href: "/resources/ai-2027-ultimate-implementation-master-guide",
      type: "Master Guide",
      category: "Implementation",
      readTime: "25 min read",
      badge: "ULTIMATE GUIDE",
      badgeColor: "bg-blue-500",
      image: "📚"
    }
  ];

  const additionalContent = [
    {
      title: "Quantum AI Financial Optimization Breakthrough 2026",
      description: "Explore quantum AI applications in financial optimization and trading with proven results.",
      href: "/case-studies/quantum-ai-financial-optimization-breakthrough-2026",
      type: "Case Study",
      category: "Quantum AI",
      readTime: "10 min read",
      badge: "QUANTUM",
      badgeColor: "bg-indigo-500",
      image: "⚛️"
    },
    {
      title: "AI 2026 Ultimate Trends & Predictions",
      description: "Explore the revolutionary AI trends that will shape 2026 and beyond.",
      href: "/blog/ai-2026-ultimate-trends-predictions",
      type: "Blog Post",
      category: "Trends",
      readTime: "18 min read",
      badge: "TRENDING",
      badgeColor: "bg-orange-500",
      image: "📈"
    },
    {
      title: "Global Enterprise Transformation Breakthrough",
      description: "Learn how a global enterprise achieved 1200% ROI through AI transformation.",
      href: "/case-studies/ai-2026-global-enterprise-transformation-breakthrough",
      type: "Case Study",
      category: "Enterprise",
      readTime: "14 min read",
      badge: "SUCCESS",
      badgeColor: "bg-emerald-500",
      image: "🏢"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              NEW 2027 CONTENT
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              BREAKTHROUGH RESULTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content for 2027
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI insights, proven case studies, and comprehensive implementation 
            guides that will transform your business in 2027 and beyond.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured 2027 Content
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:border-purple-300">
                  {/* Image/Icon */}
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 text-center">
                    <div className="text-6xl mb-4">{content.image}</div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className={`${content.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {content.badge}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {content.type}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {content.category}
                      </span>
                      <span className="text-gray-500 text-sm">{content.readTime}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {content.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {content.description}
                    </p>
                    
                    <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700">
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Related High-Value Content
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group-hover:border-blue-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{content.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`${content.badgeColor} text-white px-2 py-1 rounded text-xs font-bold`}>
                          {content.badge}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {content.type}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {content.title}
                      </h4>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {content.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">{content.readTime}</span>
                        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                          Read More
                          <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business with AI 2027?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of organizations already achieving breakthrough results with 
            cutting-edge AI technologies. Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/resources/ai-2027-ultimate-implementation-master-guide"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Download Master Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}