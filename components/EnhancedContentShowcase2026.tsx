import React from 'react';
import Link from 'next/link';

export default function EnhancedContentShowcase2026() {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2026: Advanced Autonomous Systems Revolution",
      description: "Explore the revolutionary advances in autonomous systems powered by AI in 2026. From self-driving vehicles to smart cities and industrial automation.",
      type: "Blog Post",
      category: "AI 2026",
      readTime: "15 min read",
      image: "🧠",
      href: "/blog/ai-2026-advanced-autonomous-systems",
      featured: true,
      stats: {
        views: "12.5K",
        likes: "890",
        shares: "234"
      }
    },
    {
      id: 2,
      title: "AI 2026 Enterprise Implementation Master Guide",
      description: "Complete guide to implementing AI solutions in enterprise environments in 2026. Comprehensive strategies, frameworks, and best practices.",
      type: "Master Guide",
      category: "Implementation",
      readTime: "45 min read",
      image: "📚",
      href: "/resources/ai-2026-enterprise-implementation-master-guide",
      featured: true,
      stats: {
        views: "8.7K",
        likes: "654",
        shares: "189"
      }
    },
    {
      id: 3,
      title: "Global Retail Transformation Success Case Study",
      description: "How a global retail giant achieved 60% revenue growth and 45% cost reduction through comprehensive AI transformation.",
      type: "Case Study",
      category: "Success Stories",
      readTime: "12 min read",
      image: "🏆",
      href: "/case-studies/ai-2026-global-retail-transformation-success",
      featured: true,
      stats: {
        views: "15.2K",
        likes: "1.2K",
        shares: "456"
      }
    }
  ];

  const trendingContent = [
    {
      id: 4,
      title: "AI 2026 Neural Interface Breakthrough",
      description: "Revolutionary advances in brain-computer interfaces and neural technology.",
      type: "Blog Post",
      category: "Neural AI",
      readTime: "10 min read",
      image: "🧬",
      href: "/blog/ai-2026-neural-interface-breakthrough",
      stats: {
        views: "9.8K",
        likes: "567",
        shares: "123"
      }
    },
    {
      id: 5,
      title: "Quantum AI Financial Optimization Breakthrough",
      description: "How quantum computing is revolutionizing financial services and optimization.",
      type: "Case Study",
      category: "Quantum AI",
      readTime: "18 min read",
      image: "⚛️",
      href: "/case-studies/quantum-ai-financial-optimization-breakthrough-2026",
      stats: {
        views: "7.3K",
        likes: "445",
        shares: "98"
      }
    },
    {
      id: 6,
      title: "AI 2026 Implementation Toolkit",
      description: "Complete toolkit with templates, checklists, and frameworks for AI implementation.",
      type: "Resource",
      category: "Toolkit",
      readTime: "30 min read",
      image: "🛠️",
      href: "/resources/ai-2026-implementation-toolkit",
      stats: {
        views: "11.4K",
        likes: "789",
        shares: "267"
      }
    }
  ];

  const latestContent = [
    {
      id: 7,
      title: "AI 2026 Future Predictions",
      description: "Comprehensive analysis of AI trends and predictions for 2026 and beyond.",
      type: "Blog Post",
      category: "Predictions",
      readTime: "20 min read",
      image: "🔮",
      href: "/blog/ai-2026-future-predictions",
      stats: {
        views: "6.2K",
        likes: "334",
        shares: "87"
      }
    },
    {
      id: 8,
      title: "AI Governance Blueprint 2026",
      description: "Comprehensive governance framework for responsible AI implementation.",
      type: "Resource",
      category: "Governance",
      readTime: "25 min read",
      image: "⚖️",
      href: "/resources/ai-governance-blueprint-2026",
      stats: {
        views: "5.8K",
        likes: "298",
        shares: "76"
      }
    },
    {
      id: 9,
      title: "Manufacturing AI Transformation Success",
      description: "How a manufacturing giant achieved 40% cost reduction through AI automation.",
      type: "Case Study",
      category: "Manufacturing",
      readTime: "14 min read",
      image: "🏭",
      href: "/case-studies/ai-manufacturing-automation-success-2025",
      stats: {
        views: "8.9K",
        likes: "512",
        shares: "134"
      }
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 NEW CONTENT 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI insights, implementation guides, and success stories that will transform your business in 2026
          </p>
        </div>

        {/* Featured Content */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Featured Content</h3>
            <Link 
              href="/mega-content-showcase-2026"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{item.image}</div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {item.type}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>👁️ {item.stats.views}</span>
                      <span>❤️ {item.stats.likes}</span>
                      <span>📤 {item.stats.shares}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={item.href}
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Content */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Trending Now</h3>
            <Link 
              href="/content-showcase"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {trendingContent.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{item.image}</div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500">{item.readTime}</span>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span>👁️ {item.stats.views}</span>
                      <span>❤️ {item.stats.likes}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Content */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Latest Content</h3>
            <Link 
              href="/blog"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {latestContent.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{item.image}</div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500">{item.readTime}</span>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span>👁️ {item.stats.views}</span>
                      <span>❤️ {item.stats.likes}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
          <p className="text-xl text-blue-100 mb-6">
            Get expert guidance and implementation support for your AI transformation journey
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}