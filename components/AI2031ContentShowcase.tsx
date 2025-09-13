import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2031ContentShowcase() {
  const ai2031Content = [
    {
      title: "AI 2031 Future Predictions: Revolutionary Breakthrough Technologies",
      description: "Discover the most revolutionary AI breakthroughs predicted for 2031: Quantum AI supremacy, brain-computer interfaces, autonomous space exploration, and transformative enterprise solutions.",
      href: "/blog/ai-2031-future-predictions-breakthrough",
      type: "Blog Post",
      icon: "🔮",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      readTime: "15 min",
      category: "Future Predictions"
    },
    {
      title: "AI 2031 Enterprise Transformation: 10,000% ROI Breakthrough Case Study",
      description: "How a Fortune 500 company achieved unprecedented success through revolutionary AI 2031 technologies: Quantum AI optimization, brain-computer interfaces, and fully autonomous operations.",
      href: "/case-studies/ai-2031-enterprise-transformation-breakthrough",
      type: "Case Study",
      icon: "🏆",
      badge: "10,000% ROI",
      badgeColor: "bg-green-500",
      readTime: "20 min",
      category: "Enterprise Success"
    },
    {
      title: "AI 2031 Implementation Master Guide: Complete Blueprint for Revolutionary Transformation",
      description: "The definitive guide to implementing AI 2031 technologies in your organization. Learn how to deploy Quantum AI, brain-computer interfaces, autonomous systems, and achieve breakthrough business transformation.",
      href: "/resources/ai-2031-implementation-master-guide",
      type: "Implementation Guide",
      icon: "📚",
      badge: "MASTER GUIDE",
      badgeColor: "bg-purple-500",
      readTime: "6-18 months",
      category: "Implementation"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔮 AI 2031 BREAKTHROUGH CONTENT</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI 2031 Content Library
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore the most advanced AI content available today. Our AI 2031 collection features 
            breakthrough predictions, revolutionary case studies, and comprehensive implementation guides 
            that will transform your understanding of artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
          {ai2031Content.map((content, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{content.icon}</div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${content.badgeColor}`}>
                          {content.badge}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                          {content.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {content.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">{content.category}</div>
                    <div className="text-sm text-gray-400">⏱️ {content.readTime}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link
                    href={content.href}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    <span>Explore Content</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Featured
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Trending
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Ready to Transform Your Organization?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already implementing AI 2031 technologies. 
              Get expert guidance and achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-colors shadow-md hover:shadow-lg"
              >
                💼 Get Expert Consultation
              </Link>
              <Link
                href="/resources/ai-2031-implementation-master-guide"
                className="border-2 border-violet-600 text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-violet-600 hover:text-white transition-colors"
              >
                📚 Download Master Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Related AI 2031 Content
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog/ai-2030-future-predictions-breakthrough"
              className="text-violet-600 hover:text-violet-700 text-sm font-medium hover:underline"
            >
              AI 2030 Predictions
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/case-studies/ai-2030-enterprise-transformation-breakthrough"
              className="text-violet-600 hover:text-violet-700 text-sm font-medium hover:underline"
            >
              AI 2030 Case Studies
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/resources/ai-2030-implementation-master-guide"
              className="text-violet-600 hover:text-violet-700 text-sm font-medium hover:underline"
            >
              AI 2030 Implementation
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/blog/ai-2029-future-predictions"
              className="text-violet-600 hover:text-violet-700 text-sm font-medium hover:underline"
            >
              AI 2029 Predictions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}