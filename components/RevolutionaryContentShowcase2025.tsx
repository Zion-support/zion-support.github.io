import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcase2025() {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Breakthrough",
      description: "The most revolutionary AI technology ever created with quantum-neural fusion systems.",
      image: "🚀",
      link: "/ai-2025-ultimate-breakthrough-announcement",
      category: "AI Revolution",
      featured: true,
      stats: "10,000%+ ROI"
    },
    {
      title: "Quantum AI Fusion 2025",
      description: "World's first integrated quantum computing and AI platform for unprecedented power.",
      image: "⚛️",
      link: "/quantum-ai-fusion-2025",
      category: "Quantum Computing",
      featured: true,
      stats: "1000+ Qubits"
    },
    {
      title: "Autonomous Business Operations",
      description: "Complete business automation with 99.9% accuracy and self-improving capabilities.",
      image: "🤖",
      link: "/services/autonomous-operations",
      category: "Automation",
      featured: false,
      stats: "99.9% Accuracy"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces for enhanced human-AI collaboration.",
      image: "🧠",
      link: "/services/neural-interfaces",
      category: "Neural Tech",
      featured: false,
      stats: "Real-time Processing"
    },
    {
      title: "Predictive Intelligence Platform",
      description: "Advanced predictive analytics with 95% accuracy for business outcomes.",
      image: "🔮",
      link: "/services/predictive-intelligence",
      category: "Analytics",
      featured: false,
      stats: "95% Accuracy"
    },
    {
      title: "Quantum Cybersecurity",
      description: "Unbreakable quantum encryption and advanced threat detection systems.",
      image: "🛡️",
      link: "/services/quantum-security",
      category: "Security",
      featured: false,
      stats: "100% Secure"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-bold text-lg mb-8">
            🌟 REVOLUTIONARY CONTENT 2025
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore the Future of
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking technologies and revolutionary solutions that are transforming 
            businesses worldwide. From quantum computing to autonomous systems, explore the future today.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Featured Breakthroughs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {contentItems.filter(item => item.featured).map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-6">
                    <div className="text-6xl">{item.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-full">
                          FEATURED
                        </span>
                        <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="text-yellow-400 font-bold text-lg mb-6">{item.stats}</div>
                      <Link 
                        href={item.link}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
                      >
                        Explore Now
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
          <h3 className="text-3xl font-bold text-white mb-8 text-center">All Revolutionary Solutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 h-full">
                  <div className="text-4xl mb-4">{item.image}</div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
                  <div className="text-cyan-400 font-bold mb-4">{item.stats}</div>
                  <Link 
                    href={item.link}
                    className="inline-block px-4 py-2 border border-white text-white text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already experiencing the AI 2025 revolution. 
            Get started with our revolutionary solutions today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Get Started Now
            </Link>
            <Link 
              href="/services"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}