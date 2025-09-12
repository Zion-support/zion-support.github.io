import React from 'react';
import Link from 'next/link';

export default function AI2026ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2026 Ultimate Showcase",
      description: "Discover revolutionary AI technologies and breakthrough innovations that will transform industries in 2026.",
      href: "/ai-2026-ultimate-showcase",
      category: "Technology Showcase",
      metrics: "5000% ROI",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🚀"
    },
    {
      title: "Space Exploration Breakthrough",
      description: "How AI 2026 technologies achieved 5000% ROI in space exploration with autonomous mission control.",
      href: "/case-studies/ai-2026-space-exploration-breakthrough",
      category: "Case Study",
      metrics: "5000% ROI",
      badge: "NEW",
      badgeColor: "bg-green-500",
      icon: "🌌"
    },
    {
      title: "Ultimate Implementation Guide",
      description: "Complete 500+ page guide covering strategy, technical implementation, and optimization for AI 2026.",
      href: "/resources/ai-2026-ultimate-implementation-master-guide",
      category: "Implementation Guide",
      metrics: "500+ Pages",
      badge: "ESSENTIAL",
      badgeColor: "bg-blue-500",
      icon: "📚"
    }
  ];

  const additionalContent = [
    {
      title: "Quantum AI Computing Solutions",
      description: "Harness quantum computing power for AI applications with 1000x faster processing.",
      href: "/quantum-computing-solutions",
      category: "Technology",
      metrics: "1000x Faster",
      icon: "⚛️"
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling seamless human-AI interaction.",
      href: "/blog/ai-2026-neural-interface-breakthrough",
      category: "Blog",
      metrics: "0.1ms Response",
      icon: "🧠"
    },
    {
      title: "Autonomous AI Systems",
      description: "Self-managing AI systems that learn, adapt, and optimize without human intervention.",
      href: "/blog/ai-2026-advanced-autonomous-systems",
      category: "Blog",
      metrics: "100% Autonomy",
      icon: "🤖"
    },
    {
      title: "Edge AI Computing",
      description: "Process AI workloads at the edge for ultra-low latency and real-time decisions.",
      href: "/blog/ai-2025-edge-computing-revolution",
      category: "Blog",
      metrics: "1ms Latency",
      icon: "🌐"
    },
    {
      title: "Multimodal AI Revolution",
      description: "AI systems that process multiple data types simultaneously for comprehensive insights.",
      href: "/blog/ai-2025-multimodal-revolution",
      category: "Blog",
      metrics: "98%+ Accuracy",
      icon: "🎯"
    },
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum algorithms to accelerate machine learning and optimization.",
      href: "/blog/ai-2025-quantum-machine-learning-breakthrough",
      category: "Blog",
      metrics: "Exponential Speed",
      icon: "⚛️"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2026 Content Library
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI 2026 content, featuring breakthrough 
            technologies, success stories, and implementation resources.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{item.category}</span>
                  <span className="text-sm font-semibold text-blue-600">{item.metrics}</span>
                </div>
                
                <Link 
                  href={item.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More AI 2026 Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <span className="text-sm text-gray-500">{item.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">{item.metrics}</span>
                  <Link 
                    href={item.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of companies already leveraging AI 2026 technologies 
              to achieve extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link 
                href="/ai-2026-ultimate-showcase" 
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}