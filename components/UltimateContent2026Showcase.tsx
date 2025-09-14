import React from 'react';
import Link from 'next/link';

const UltimateContent2026Showcase = () => {
  const contentItems = [
    {
      title: "Quantum AI Revolution 2026",
      description: "Experience the most advanced quantum computing integration with artificial intelligence for unprecedented problem-solving capabilities.",
      image: "🧠⚡",
      href: "/quantum-ai-2026-revolution",
      category: "Quantum AI",
      featured: true,
      readTime: "12 min read"
    },
    {
      title: "Neural Interface Breakthrough",
      description: "Direct brain-computer interfaces that enable seamless human-AI collaboration and enhanced cognitive abilities.",
      image: "🔗🧠",
      href: "/neural-interface-breakthrough-2026",
      category: "Neural Tech",
      featured: true,
      readTime: "15 min read"
    },
    {
      title: "Autonomous Business AI",
      description: "Self-managing AI systems that handle complex business operations with minimal human intervention.",
      image: "🏢🤖",
      href: "/autonomous-business-ai-2026",
      category: "Business AI",
      featured: false,
      readTime: "10 min read"
    },
    {
      title: "Predictive Analytics Engine",
      description: "Next-generation analytics powered by quantum algorithms for accurate future predictions.",
      image: "📊🔮",
      href: "/predictive-analytics-engine-2026",
      category: "Analytics",
      featured: true,
      readTime: "8 min read"
    },
    {
      title: "Synthetic Intelligence Networks",
      description: "Distributed AI networks that create emergent intelligence beyond individual system capabilities.",
      image: "🌐🧠",
      href: "/synthetic-intelligence-networks-2026",
      category: "Synthetic AI",
      featured: false,
      readTime: "14 min read"
    },
    {
      title: "Edge Computing AI",
      description: "Ultra-fast edge computing solutions that bring AI processing closer to data sources.",
      image: "⚡💻",
      href: "/edge-computing-ai-2026",
      category: "Edge AI",
      featured: false,
      readTime: "9 min read"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Content Collection
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              2026 Edition
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI technologies, breakthrough innovations, 
            and future-ready solutions curated for 2026 and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3 left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-600 font-semibold">{item.category}</span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <Link
                  href={item.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  Explore Content
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/ai-2026-revolutionary-content"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-xl font-bold text-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🚀 Explore All 2026 Content
            <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent2026Showcase;