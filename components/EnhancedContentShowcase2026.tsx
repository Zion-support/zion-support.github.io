import React from 'react';
import Link from 'next/link';

export default function EnhancedContentShowcase2026() {
  const featuredContent = [
    {
      title: "AI 2026: The Enterprise Automation Revolution",
      description: "Discover how AI automation is revolutionizing enterprise operations with 340% average ROI and unprecedented efficiency gains.",
      type: "Blog Post",
      category: "Enterprise AI",
      readTime: "15 min read",
      href: "/blog/ai-2026-enterprise-automation-revolution",
      image: "🚀",
      featured: true,
      stats: "340% ROI"
    },
    {
      title: "Global Retail Transformation: 600% ROI Success Story",
      description: "Learn how a Fortune 50 retailer achieved 600% ROI through comprehensive AI transformation across 2,500+ stores.",
      type: "Case Study",
      category: "Success Story",
      readTime: "12 min read",
      href: "/case-studies/ai-2026-global-retail-transformation-success",
      image: "🏪",
      featured: true,
      stats: "600% ROI"
    },
    {
      title: "AI 2026 Implementation Master Guide",
      description: "The complete blueprint for AI implementation in 2026. Everything you need for successful transformation.",
      type: "Master Guide",
      category: "Implementation",
      readTime: "25 min read",
      href: "/resources/ai-2026-implementation-master-guide",
      image: "📚",
      featured: true,
      stats: "Complete Blueprint"
    }
  ];

  const additionalContent = [
    {
      title: "AI 2026 Neural Interface Breakthrough",
      description: "Exploring the latest advances in brain-computer interfaces and their enterprise applications.",
      type: "Blog Post",
      category: "Emerging Tech",
      readTime: "10 min read",
      href: "/blog/ai-2026-neural-interface-breakthrough",
      image: "🧠"
    },
    {
      title: "Quantum AI Financial Optimization",
      description: "How quantum computing is revolutionizing financial services through advanced AI algorithms.",
      type: "Case Study",
      category: "Quantum AI",
      readTime: "8 min read",
      href: "/case-studies/quantum-ai-financial-optimization-breakthrough-2026",
      image: "⚛️"
    },
    {
      title: "AI 2026 Implementation Toolkit",
      description: "Practical tools, templates, and checklists for successful AI implementation.",
      type: "Resource",
      category: "Tools",
      readTime: "5 min read",
      href: "/resources/ai-2026-implementation-toolkit",
      image: "🛠️"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🎯 Featured AI 2026 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, success stories, and implementation guides that are transforming 
            how organizations approach AI in 2026.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ⭐ Featured Content
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{content.image}</span>
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {content.type}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {content.stats}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{content.category}</span>
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                  </div>
                  
                  <Link 
                    href={content.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:underline"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            📚 More AI 2026 Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((content, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 group">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{content.image}</span>
                  <div className="flex items-center space-x-2">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      {content.type}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      {content.category}
                    </span>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{content.readTime}</span>
                  <Link 
                    href={content.href}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm group-hover:underline"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Organization with AI?
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Get expert guidance and implementation support for your AI transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Help
            </Link>
            <Link 
              href="/mega-content-showcase-2026"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}