import React from 'react';
import Link from 'next/link';

export default function AI2030ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2030: Revolutionary Future Predictions",
      description: "Discover quantum AI, neural interfaces, and breakthrough technologies that will transform every industry by 2030.",
      href: "/blog/ai-2030-future-predictions",
      type: "Blog Post",
      readTime: "15 min",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-purple-600",
      icon: "🔮"
    },
    {
      title: "5000% ROI Enterprise Transformation",
      description: "How a Fortune 100 company achieved unprecedented ROI through revolutionary AI 2030 technologies.",
      href: "/case-studies/ai-2030-enterprise-transformation-breakthrough",
      type: "Case Study",
      readTime: "12 min",
      badge: "5000% ROI",
      badgeColor: "bg-green-600",
      icon: "💰"
    },
    {
      title: "AI 2030 Implementation Master Guide",
      description: "Complete roadmap for implementing AI 2030 technologies including quantum AI and neural interfaces.",
      href: "/resources/ai-2030-implementation-master-guide",
      type: "Master Guide",
      readTime: "45 min",
      badge: "FREE",
      badgeColor: "bg-blue-600",
      icon: "📚"
    }
  ];

  const additionalContent = [
    {
      title: "Quantum AI Optimization Engine",
      description: "1000x faster processing with quantum computing integration",
      href: "/blog/ai-2030-quantum-ai-optimization",
      type: "Technical Deep Dive",
      readTime: "20 min",
      icon: "⚛️"
    },
    {
      title: "Neural Interface Implementation",
      description: "Direct brain-computer interfaces for manufacturing control",
      href: "/blog/ai-2030-neural-interface-implementation",
      type: "Implementation Guide",
      readTime: "18 min",
      icon: "🧠"
    },
    {
      title: "Autonomous Production Systems",
      description: "Self-improving manufacturing lines with 99.9% uptime",
      href: "/blog/ai-2030-autonomous-production",
      type: "Technology Overview",
      readTime: "16 min",
      icon: "🤖"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              AI 2030 CONTENT SHOWCASE
            </span>
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              NEW
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Revolutionary AI 2030 Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most advanced AI predictions, breakthrough case studies, and comprehensive 
            implementation guides for the technologies that will define the next decade.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ⭐ Featured Content
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-2 py-1 rounded">{item.type}</span>
                    <span>{item.readTime} read</span>
                  </div>
                  <Link 
                    href={item.href}
                    className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🔬 Technical Deep Dives
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                    {item.type}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {item.description}
                </p>
                <div className="text-sm text-gray-500">
                  {item.readTime} read
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business for AI 2030?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Get our comprehensive implementation roadmap and start building the future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/ai-2030-implementation-master-guide"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              📚 Download Master Guide
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              🚀 Schedule Consultation
            </Link>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join 500+ Fortune 500 companies already implementing AI 2030 technologies
          </p>
        </div>
      </div>
    </div>
  );
}