import React from 'react';
import Link from 'next/link';

export default function InteractiveContentShowcase2025() {
  const featuredContent = [
    {
      id: 1,
      title: "Quantum Computing Revolution 2025",
      description: "Experience the future of computing with 1000-qubit quantum processors",
      category: "Quantum Computing",
      icon: "⚛️",
      link: "/quantum-computing-revolution-2025",
      stats: "1000x faster processing",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 2,
      title: "Autonomous Business Systems 2025",
      description: "Transform your business into a fully autonomous enterprise",
      category: "Business Automation",
      icon: "🤖",
      link: "/autonomous-business-systems-2025",
      stats: "99.9% efficiency",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      title: "Space Technology Solutions 2025",
      description: "Revolutionary satellite systems and space-based AI platforms",
      category: "Space Technology",
      icon: "🚀",
      link: "/space-technology-solutions-2025",
      stats: "Global coverage",
      gradient: "from-slate-500 to-blue-500"
    },
    {
      id: 4,
      title: "Enterprise AI Transformation 2025",
      description: "Complete business revolution with AI-powered systems",
      category: "Enterprise AI",
      icon: "🏢",
      link: "/enterprise-ai-transformation-2025",
      stats: "2000% ROI",
      gradient: "from-slate-500 to-gray-500"
    },
    {
      id: 5,
      title: "AI 2025 Breakthrough Showcase",
      description: "Interactive demos and revolutionary AI technologies",
      category: "AI Showcase",
      icon: "🧠",
      link: "/ai-2025-breakthrough-content-showcase",
      stats: "Interactive demos",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 6,
      title: "Neural Interface Future 2035",
      description: "Next-generation brain-computer interfaces",
      category: "Neural Technology",
      icon: "🧬",
      link: "/neural-interface-future-2035",
      stats: "Direct brain control",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
            🎯 FEATURED CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most advanced technology solutions and interactive demonstrations. 
            Experience the future of AI, quantum computing, and autonomous systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content) => (
            <Link 
              key={content.id}
              href={content.link}
              className="group block"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content.gradient} text-white`}>
                    {content.category}
                  </span>
                  <div className="text-2xl group-hover:scale-110 transition-transform">
                    {content.icon}
                  </div>
                </div>

                {/* Content Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>

                {/* Content Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>

                {/* Stats */}
                <div className="bg-gray-50 rounded-lg p-3 mb-6">
                  <div className="text-sm text-gray-500 mb-1">Key Achievement</div>
                  <div className="font-semibold text-gray-900">{content.stats}</div>
                </div>

                {/* Interactive Elements */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Interactive Demo Available
                  </div>
                  <div className="text-blue-600 font-semibold group-hover:underline">
                    Explore →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already transforming their business with our revolutionary technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                href="/case-studies" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}