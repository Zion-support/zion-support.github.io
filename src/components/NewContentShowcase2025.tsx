import React, { useState } from 'react';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

  const contentItems = [
    {
      id: 1,
      title: "Advanced Tech Revolution 2025",
      description: "Experience the most revolutionary technological breakthroughs reshaping our world",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedTechRevolution2025",
      features: ["AI Consciousness", "Quantum Internet", "Neural Interfaces", "Space Technology"]
    },
    {
      id: 2,
      title: "Quantum Breakthrough 2025",
      description: "Witness the quantum revolution solving impossible problems and unlocking infinite possibilities",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumBreakthrough2025",
      features: ["Quantum Computing", "Quantum AI", "Quantum Cryptography", "Quantum Sensors"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2025",
      description: "Bridge the gap between mind and machine with revolutionary neural interface technology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2025",
      features: ["Non-Invasive BCI", "Neural Implants", "Memory Enhancement", "Neural Gaming"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary New Content
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest cutting-edge technology content that's reshaping the future
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
            {contentItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-2">{item.icon}</span>
                {item.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Info */}
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">{contentItems[activeTab].icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{contentItems[activeTab].title}</h3>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${contentItems[activeTab].color} rounded-full text-sm font-semibold`}>
                      NEW RELEASE
                    </div>
                  </div>
                </div>
                
                <p className="text-xl opacity-90 mb-8">
                  {contentItems[activeTab].description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {contentItems[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${contentItems[activeTab].color} rounded-full mr-3`}></div>
                        <span className="text-sm opacity-90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {item.industry && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {item.industry}
                      </span>
                    )}
                    {item.category && (
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                        {item.category}
                      </span>
                    )}
                    {item.type && (
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                        {item.type}
                      </span>
                    )}
                    {item.readTime && (
                      <span className="text-gray-500 text-xs">
                        {item.readTime}
                      </span>
                    )}
                  </div>
                  <a
                    href={item.link}
                    className="text-purple-600 hover:text-purple-800 font-semibold text-sm group-hover:underline"
                  >
                    Explore →
                  </a>
                </div>
              </div>

              {/* Visual Preview */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${contentItems[activeTab].color} rounded-2xl p-8 text-center`}>
                  <div className="text-8xl mb-6">{contentItems[activeTab].icon}</div>
                  <h4 className="text-2xl font-bold mb-4">Interactive Preview</h4>
                  <p className="text-lg opacity-90 mb-6">
                    Experience the future of technology with our immersive content
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-sm font-semibold">Lightning Fast</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="text-sm font-semibold">Precision</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl mb-2">🔒</div>
                      <div className="text-sm font-semibold">Secure</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl mb-2">🚀</div>
                      <div className="text-sm font-semibold">Innovative</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Content Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">All New Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {contentItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveTab(index)}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-sm opacity-90 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of companies already seeing incredible results with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025;