import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2025() {
  const featuredContent = [
    {
      title: "AI 2025: Ultimate Business Transformation Guide",
      description: "The complete roadmap for achieving 1,500% ROI through strategic AI implementation. Learn from Fortune 500 success stories.",
      href: "/blog/ai-2025-ultimate-business-transformation",
      category: "Master Guide",
      readTime: "25 min",
      views: "50,000+",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🎯"
    },
    {
      title: "Fortune 500 AI Transformation: 1,500% ROI Breakthrough",
      description: "How a global manufacturing leader achieved unprecedented results through strategic AI implementation across 75+ facilities.",
      href: "/case-studies/ai-2025-fortune-500-transformation-breakthrough",
      category: "Case Study",
      readTime: "20 min",
      views: "25,000+",
      badge: "NEW",
      badgeColor: "bg-green-500",
      icon: "🏆"
    },
    {
      title: "AI 2025 Ultimate Implementation Master Guide",
      description: "The most comprehensive AI implementation toolkit with frameworks, templates, and proven strategies for 300%+ ROI.",
      href: "/resources/ai-2025-ultimate-implementation-master-guide",
      category: "Resource",
      readTime: "45 min",
      views: "100,000+",
      badge: "ESSENTIAL",
      badgeColor: "bg-blue-500",
      icon: "📚"
    }
  ];

  const trendingContent = [
    {
      title: "AI 2025 Advanced AI Architecture",
      description: "Master the art of building scalable, resilient AI systems with microservices and edge computing.",
      href: "/blog/ai-2025-advanced-ai-architecture",
      category: "Architecture",
      readTime: "15 min",
      views: "30,000+",
      icon: "🏗️"
    },
    {
      title: "AI Automation Revolution 2025",
      description: "Discover how AI automation is transforming industries and creating new opportunities.",
      href: "/blog/ai-2025-automation-revolution",
      category: "Automation",
      readTime: "12 min",
      views: "28,000+",
      icon: "🤖"
    },
    {
      title: "Manufacturing AI Transformation Success",
      description: "Learn how AI automation achieved 30% efficiency gains in manufacturing operations.",
      href: "/case-studies/ai-manufacturing-transformation-2025",
      category: "Case Study",
      readTime: "18 min",
      views: "22,000+",
      icon: "🏭"
    },
    {
      title: "AI Implementation Master Checklist",
      description: "Complete checklist for successful AI implementation with 50+ actionable items.",
      href: "/resources/ai-implementation-master-checklist-2025",
      category: "Checklist",
      readTime: "10 min",
      views: "35,000+",
      icon: "✅"
    }
  ];

  const latestContent = [
    {
      title: "AI 2025 Cybersecurity Defense Strategies",
      description: "Advanced cybersecurity strategies for AI systems and data protection.",
      href: "/blog/ai-2025-cybersecurity-defense",
      category: "Security",
      readTime: "14 min",
      views: "15,000+",
      icon: "🔒"
    },
    {
      title: "Quantum Computing AI Breakthrough",
      description: "How quantum computing is revolutionizing AI capabilities and performance.",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      category: "Quantum AI",
      readTime: "16 min",
      views: "18,000+",
      icon: "⚛️"
    },
    {
      title: "Edge AI Implementation Guide",
      description: "Complete guide to implementing AI at the edge for real-time decision making.",
      href: "/resources/edge-ai-implementation-guide-2025",
      category: "Edge Computing",
      readTime: "22 min",
      views: "12,000+",
      icon: "🌐"
    },
    {
      title: "AI ROI Calculator 2025",
      description: "Interactive tool to calculate potential ROI from AI investments.",
      href: "/tools/ai-roi-calculator-2025",
      category: "Tool",
      readTime: "5 min",
      views: "40,000+",
      icon: "💰"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium text-indigo-800">🚀 ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Latest AI Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From comprehensive guides to real-world case studies, explore our collection of 
            cutting-edge AI content designed to accelerate your transformation journey.
          </p>
        </div>

        {/* Featured Content */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">⭐ Featured Content</h3>
            <Link 
              href="/content-showcase" 
              className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center"
            >
              View All <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div className="flex flex-col items-end">
                        <span className={`${item.badgeColor} text-white text-xs px-2 py-1 rounded-full font-semibold mb-2`}>
                          {item.badge}
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>{item.readTime} read</span>
                        <span>•</span>
                        <span>{item.views} views</span>
                      </div>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Content */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">📈 Trending Now</h3>
            <Link 
              href="/blog" 
              className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center"
            >
              View All <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Content */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">🆕 Latest Releases</h3>
            <Link 
              href="/resources" 
              className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center"
            >
              View All <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">{item.category}</span>
                    <span>{item.views} views</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join 10,000+ organizations that have successfully implemented AI using our proven frameworks and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2025-ultimate-implementation-master-guide"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Master Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}