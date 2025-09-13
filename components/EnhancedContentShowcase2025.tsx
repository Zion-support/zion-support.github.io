import React from 'react';
import Link from 'next/link';

export default function EnhancedContentShowcase2025() {
  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover groundbreaking AI innovations transforming industries worldwide with proven 2000% ROI",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      category: "Article",
      readTime: "25 min read",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🚀",
      featured: true
    },
    {
      title: "Global Enterprise Transformation: 2000% ROI Success",
      description: "How a Fortune 500 company achieved unprecedented results with AI implementation",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "Case Study",
      readTime: "15 min read",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      icon: "🏆",
      featured: true
    },
    {
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "Complete 200+ page resource with proven strategies, templates, and ROI calculator",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource",
      readTime: "200+ pages",
      badge: "FREE DOWNLOAD",
      badgeColor: "bg-blue-500",
      icon: "🛠️",
      featured: true
    }
  ];

  const additionalContent = [
    {
      title: "Quantum-AI Fusion Revolution",
      description: "Next-generation AI processing with quantum computing integration",
      href: "/blog/quantum-ai-fusion-revolution-2025",
      category: "Article",
      readTime: "20 min read",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-purple-500",
      icon: "⚛️"
    },
    {
      title: "Neural Interface Breakthrough",
      description: "Direct brain-computer interfaces enabling seamless AI-human collaboration",
      href: "/blog/neural-interface-breakthrough-2025",
      category: "Article",
      readTime: "18 min read",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-blue-500",
      icon: "🧠"
    },
    {
      title: "Autonomous Systems Revolution",
      description: "Fully autonomous AI systems transforming manufacturing and operations",
      href: "/blog/autonomous-systems-revolution-2025",
      category: "Article",
      readTime: "22 min read",
      badge: "NEW",
      badgeColor: "bg-green-500",
      icon: "🤖"
    },
    {
      title: "Fortune 500 AI Transformation",
      description: "1500% ROI achieved in 12 months with comprehensive AI strategy",
      href: "/case-studies/ai-2025-fortune-500-transformation-breakthrough",
      category: "Case Study",
      readTime: "12 min read",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      icon: "🏢"
    },
    {
      title: "Global Retail AI Success",
      description: "600% ROI in retail operations with AI optimization across 500+ stores",
      href: "/case-studies/ai-2025-global-retail-transformation-success",
      category: "Case Study",
      readTime: "10 min read",
      badge: "SUCCESS STORY",
      badgeColor: "bg-orange-500",
      icon: "🏪"
    },
    {
      title: "AI ROI Calculator 2025",
      description: "Interactive tool to calculate your potential ROI with AI implementation",
      href: "/tools/ai-2025-roi-calculator",
      category: "Tool",
      readTime: "Interactive",
      badge: "FREE TOOL",
      badgeColor: "bg-indigo-500",
      icon: "🧮"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse">
              BREAKTHROUGH
            </span>
            <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
              NEW
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🚀 AI 2025 Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most groundbreaking AI innovations, success stories, and implementation guides 
            that are transforming industries worldwide with proven ROI metrics.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">⭐ Featured Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                  {/* Header with badge */}
                  <div className="relative p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {content.icon}
                      </div>
                      <span className={`${content.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {content.badge}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {content.title}
                    </h4>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {content.description}
                    </p>
                  </div>
                  
                  {/* Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="font-medium">{content.category}</span>
                      <div className="flex items-center gap-4">
                        <span>{content.readTime}</span>
                        <span className="text-blue-600 font-medium group-hover:underline">
                          {content.category === 'Resource' ? 'Download →' : 'Read →'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">📚 More Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                  {/* Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-3xl group-hover:scale-110 transition-transform">
                        {content.icon}
                      </div>
                      <span className={`${content.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                        {content.badge}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {content.title}
                    </h4>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {content.description}
                    </p>
                  </div>
                  
                  {/* Footer */}
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="font-medium">{content.category}</span>
                      <div className="flex items-center gap-3">
                        <span>{content.readTime}</span>
                        <span className="text-blue-600 font-medium group-hover:underline">
                          {content.category === 'Tool' ? 'Try →' : content.category === 'Resource' ? 'Download →' : 'Read →'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of companies already achieving breakthrough results with AI 2025 innovations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Download Free Toolkit
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthroughs" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Join Live Webinar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}