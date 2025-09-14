import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2025() {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Innovation",
      description: "Revolutionary breakthroughs in artificial intelligence that are reshaping the future of business and technology.",
      href: "/ai-2025-ultimate-innovation",
      image: "🧠",
      category: "Artificial Intelligence",
      featured: true
    },
    {
      title: "Quantum Computing Revolution 2025",
      description: "Harness quantum computing power to solve problems that were previously impossible with classical computing.",
      href: "/quantum-computing-revolution-2025",
      image: "⚛️",
      category: "Quantum Computing",
      featured: true
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless interaction between human consciousness and AI systems.",
      href: "/neural-interface-revolution-2025",
      image: "🧬",
      category: "Neural Interfaces",
      featured: false
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing business processes that adapt, learn, and optimize operations without human intervention.",
      href: "/autonomous-business-systems-2026",
      image: "🤖",
      category: "Business Automation",
      featured: false
    },
    {
      title: "Advanced Neural Architectures",
      description: "Next-generation neural network architectures that process information with unprecedented speed and accuracy.",
      href: "/advanced-neural-architectures-2026",
      image: "⚡",
      category: "Neural Networks",
      featured: false
    },
    {
      title: "Synthetic Intelligence Solutions",
      description: "Artificial general intelligence systems that can reason, learn, and adapt across multiple domains.",
      href: "/synthetic-intelligence",
      image: "🎯",
      category: "AGI Systems",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6 font-semibold">
            <span className="mr-2">🚀</span>
            ULTIMATE CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of cutting-edge technology content, featuring the latest innovations in AI, quantum computing, and beyond.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contentItems.filter(item => item.featured).map((item, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-5xl">{item.image}</div>
                    <div className="flex-1">
                      <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                        {item.category}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      <Link
                        href={item.href}
                        className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-2 transform duration-200"
                      >
                        Explore Content →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{item.image}</div>
                    <div className="flex-1">
                      <div className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                        {item.category}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-800 transition-colors group-hover:translate-x-1 transform duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies already leveraging these revolutionary technologies to achieve unprecedented success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}