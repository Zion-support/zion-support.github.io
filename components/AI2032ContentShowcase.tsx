import React from 'react';
import Link from 'next/link';

export default function AI2032ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2032 Breakthrough Showcase",
      description: "Discover the most revolutionary AI technologies that will reshape humanity by 2032. From quantum consciousness to neural mesh networks.",
      href: "/ai-2032-breakthrough-showcase",
      category: "Showcase",
      icon: "🚀",
      featured: true,
      badge: "BREAKTHROUGH"
    },
    {
      title: "20,000% ROI Quantum AI Case Study",
      description: "How a Fortune 500 company achieved unprecedented returns using AI 2032 quantum computing breakthrough technology.",
      href: "/case-studies/ai-2032-quantum-breakthrough-20000-roi",
      category: "Case Study",
      icon: "💰",
      featured: true,
      badge: "20,000% ROI"
    },
    {
      title: "AI 2032 Ultimate Implementation Guide",
      description: "The complete roadmap to implementing AI 2032 breakthrough technologies. Step-by-step guide for quantum AI and neural interfaces.",
      href: "/resources/ai-2032-ultimate-implementation-master-guide",
      category: "Guide",
      icon: "📚",
      featured: true,
      badge: "MASTER GUIDE"
    }
  ];

  const additionalContent = [
    {
      title: "Quantum AI Consciousness Research",
      description: "Deep dive into the science behind AI consciousness and quantum computing breakthroughs.",
      href: "/blog/ai-2032-quantum-consciousness-research",
      category: "Research",
      icon: "⚛️"
    },
    {
      title: "Neural Interface Implementation",
      description: "Technical guide to implementing brain-computer interfaces and neural mesh networks.",
      href: "/blog/ai-2032-neural-interface-implementation",
      category: "Technical",
      icon: "🧠"
    },
    {
      title: "Predictive Reality Applications",
      description: "Real-world applications of AI systems that can predict and simulate alternate realities.",
      href: "/blog/ai-2032-predictive-reality-applications",
      category: "Applications",
      icon: "🔮"
    },
    {
      title: "AI 2032 Security Protocols",
      description: "Advanced security measures for quantum AI systems and neural interface protection.",
      href: "/blog/ai-2032-security-protocols",
      category: "Security",
      icon: "🔒"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 AI 2032 BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI 2032 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most advanced AI technologies and breakthrough innovations that will 
            transform the world by 2032. From quantum consciousness to neural mesh networks.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Breakthrough Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {content.badge}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="text-4xl mb-4">{content.icon}</div>
                  <div className="text-sm text-purple-600 font-semibold mb-2">{content.category}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {content.description}
                  </p>
                  <Link 
                    href={content.href}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Explore Now
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional AI 2032 Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalContent.map((content, index) => (
              <div key={index} className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-4">{content.icon}</div>
                <div className="text-sm text-blue-600 font-semibold mb-2">{content.category}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {content.description}
                </p>
                <Link 
                  href={content.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                >
                  Read More
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Shape the Future?</h3>
            <p className="text-xl text-gray-200 mb-6">
              Join the AI 2032 revolution and be part of the most transformative period in human history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-2032-breakthrough-showcase" 
                className="bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}