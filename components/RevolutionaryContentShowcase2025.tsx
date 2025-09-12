import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcase2025() {
  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthrough Ecosystem",
      description: "The complete transformation guide to the most advanced AI ecosystem ever created. Discover how revolutionary breakthroughs are delivering 10,000% ROI across industries.",
      href: "/blog/ai-2025-revolutionary-breakthrough-ecosystem",
      category: "Blog",
      icon: "🚀",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      stats: "10,000% ROI"
    },
    {
      title: "Revolutionary Enterprise Transformation",
      description: "How a Fortune 500 manufacturing giant achieved 10,000% ROI in just 6 months using our revolutionary AI breakthrough ecosystem.",
      href: "/case-studies/ai-2025-revolutionary-enterprise-transformation",
      category: "Case Study",
      icon: "🏢",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      stats: "6 months ROI"
    },
    {
      title: "Revolutionary Implementation Master Guide",
      description: "The complete step-by-step blueprint for implementing the revolutionary AI breakthrough ecosystem. Everything you need to achieve 10,000% ROI.",
      href: "/resources/ai-2025-revolutionary-implementation-master-guide",
      category: "Resource",
      icon: "📚",
      badge: "MASTER GUIDE",
      badgeColor: "bg-blue-500",
      stats: "Complete Blueprint"
    }
  ];

  const additionalContent = [
    {
      title: "Quantum AI Integration Breakthrough",
      description: "Discover how quantum computing is revolutionizing AI algorithms and delivering unprecedented performance gains.",
      href: "/blog/ai-2025-quantum-machine-learning-breakthrough",
      category: "Blog",
      icon: "⚛️",
      badge: "QUANTUM",
      badgeColor: "bg-purple-500"
    },
    {
      title: "Autonomous Systems Revolution",
      description: "Self-managing AI agents that adapt production processes in real-time based on demand and quality metrics.",
      href: "/blog/ai-2025-autonomous-systems-mastery",
      category: "Blog",
      icon: "🤖",
      badge: "AUTONOMOUS",
      badgeColor: "bg-orange-500"
    },
    {
      title: "Neural Architecture Optimization",
      description: "Next-generation transformer models with 100x efficiency gains for predictive maintenance and quality control.",
      href: "/blog/ai-2025-advanced-neural-architectures",
      category: "Blog",
      icon: "🧠",
      badge: "NEURAL",
      badgeColor: "bg-indigo-500"
    },
    {
      title: "Manufacturing Automation Success",
      description: "How AI transformed production lines with 3,000% ROI and 99.9% uptime achievement.",
      href: "/case-studies/ai-2025-manufacturing-automation-breakthrough",
      category: "Case Study",
      icon: "🏭",
      badge: "MANUFACTURING",
      badgeColor: "bg-green-600"
    },
    {
      title: "Financial Services Revolution",
      description: "Quantum-enhanced trading algorithms and risk assessment systems delivering 7,500% ROI in banking.",
      href: "/case-studies/ai-2025-financial-services-breakthrough",
      category: "Case Study",
      icon: "💰",
      badge: "FINANCE",
      badgeColor: "bg-yellow-500"
    },
    {
      title: "Healthcare Diagnostic Breakthrough",
      description: "AI-powered diagnostic systems with 99.8% accuracy, reducing misdiagnosis by 95% and saving millions of lives.",
      href: "/case-studies/ai-2025-healthcare-diagnostic-revolution",
      category: "Case Study",
      icon: "🏥",
      badge: "HEALTHCARE",
      badgeColor: "bg-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content Showcase
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Explore our comprehensive collection of revolutionary AI content, case studies, and implementation guides. 
            Everything you need to transform your organization with cutting-edge AI technologies.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">⭐ Featured Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{content.icon}</div>
                      <div className={`${content.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                        {content.badge}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {content.category}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {content.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {content.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-green-600">
                        {content.stats}
                      </div>
                      <div className="text-purple-600 font-semibold group-hover:text-purple-700">
                        Read More →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">📚 Complete Content Library</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">{content.icon}</div>
                    <div className={`${content.badgeColor} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
                      {content.badge}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {content.category}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {content.description}
                  </p>
                  
                  <div className="text-purple-600 text-sm font-semibold group-hover:text-purple-700">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🏷️ Content Categories</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-6 text-center">
                <div className="text-3xl mb-3">📝</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Blog Posts</h4>
                <p className="text-sm text-gray-600 mb-3">Latest insights and breakthroughs</p>
                <div className="text-purple-600 text-sm font-semibold">50+ Articles</div>
              </div>
            </Link>
            
            <Link href="/case-studies" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-6 text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Case Studies</h4>
                <p className="text-sm text-gray-600 mb-3">Real success stories and results</p>
                <div className="text-purple-600 text-sm font-semibold">25+ Studies</div>
              </div>
            </Link>
            
            <Link href="/resources" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-6 text-center">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Resources</h4>
                <p className="text-sm text-gray-600 mb-3">Guides, toolkits, and templates</p>
                <div className="text-purple-600 text-sm font-semibold">30+ Resources</div>
              </div>
            </Link>
            
            <Link href="/webinars" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-6 text-center">
                <div className="text-3xl mb-3">🎥</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Webinars</h4>
                <p className="text-sm text-gray-600 mb-3">Live sessions and recordings</p>
                <div className="text-purple-600 text-sm font-semibold">15+ Sessions</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-12 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary AI solutions to achieve unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              💬 Get Started Today
            </Link>
            <Link
              href="/resources/ai-2025-revolutionary-implementation-master-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📚 Download Master Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}