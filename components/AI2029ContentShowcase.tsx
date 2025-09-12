import React from 'react';
import Link from 'next/link';

export default function AI2029ContentShowcase() {
  const contentItems = [
    {
      title: "AI 2029 Future Predictions",
      description: "Comprehensive analysis of quantum AI, neural interfaces, and autonomous systems that will define the next decade of artificial intelligence.",
      href: "/blog/ai-2029-future-predictions",
      category: "Blog Post",
      icon: "🔮",
      featured: true,
      metrics: {
        readTime: "15 min read",
        views: "50K+",
        rating: "4.9/5"
      }
    },
    {
      title: "Quantum AI Breakthrough Case Study",
      description: "How a Fortune 100 financial services company achieved 3,000% ROI using quantum AI for risk management and trading optimization.",
      href: "/case-studies/ai-2029-quantum-breakthrough",
      category: "Case Study",
      icon: "⚛️",
      featured: true,
      metrics: {
        readTime: "12 min read",
        views: "35K+",
        rating: "4.8/5"
      }
    },
    {
      title: "AI 2029 Implementation Master Guide",
      description: "Complete roadmap for implementing quantum AI, neural interfaces, and autonomous systems in your organization.",
      href: "/resources/ai-2029-implementation-master-guide",
      category: "Resource",
      icon: "📚",
      featured: true,
      metrics: {
        readTime: "25 min read",
        views: "40K+",
        rating: "4.9/5"
      }
    },
    {
      title: "Neural Interface Revolution",
      description: "Explore how brain-computer interfaces will transform human-AI collaboration and workplace productivity.",
      href: "/blog/ai-2029-neural-interface-revolution",
      category: "Blog Post",
      icon: "🧠",
      featured: false,
      metrics: {
        readTime: "10 min read",
        views: "25K+",
        rating: "4.7/5"
      }
    },
    {
      title: "Autonomous Systems Mastery",
      description: "Learn how to implement fully autonomous systems that operate without human intervention in complex environments.",
      href: "/resources/ai-2029-autonomous-systems-guide",
      category: "Resource",
      icon: "🤖",
      featured: false,
      metrics: {
        readTime: "20 min read",
        views: "30K+",
        rating: "4.8/5"
      }
    },
    {
      title: "Quantum Computing Integration",
      description: "Step-by-step guide to integrating quantum computing with classical AI systems for breakthrough performance.",
      href: "/resources/ai-2029-quantum-integration-guide",
      category: "Resource",
      icon: "⚡",
      featured: false,
      metrics: {
        readTime: "18 min read",
        views: "28K+",
        rating: "4.6/5"
      }
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            🔮 AI 2029 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Future of AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI 2029 content, featuring breakthrough 
            predictions, real-world case studies, and practical implementation guides.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {contentItems.filter(item => item.featured).map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{item.icon}</div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.metrics.readTime}</span>
                    <div className="flex items-center space-x-4">
                      <span>{item.metrics.views}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1">{item.metrics.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-8 pb-4">
                  <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All AI 2029 Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">{item.icon}</div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{item.metrics.readTime}</span>
                    <div className="flex items-center space-x-3">
                      <span>{item.metrics.views}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1">{item.metrics.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get started with our AI 2029 implementation guide and join the companies already 
            achieving breakthrough results with quantum AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/ai-2029-implementation-master-guide"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Implementation Guide
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}