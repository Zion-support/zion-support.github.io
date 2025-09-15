import React from 'react';

const NewContentShowcase2026: React.FC = () => {
  const newContent = [
    {
      title: "Advanced Blockchain Solutions",
      description: "Revolutionary blockchain technology with DeFi protocols, smart contracts, and Web3 infrastructure",
      icon: "🔗",
      link: "/pages/AdvancedBlockchainSolutions2026",
      category: "Blockchain",
      featured: true
    },
    {
      title: "Advanced IoT Platform",
      description: "Intelligent Internet of Things with edge computing, AI analytics, and real-time monitoring",
      icon: "🌐",
      link: "/pages/AdvancedIoTPlatform2026",
      category: "IoT",
      featured: true
    },
    {
      title: "Advanced Cybersecurity",
      description: "Next-generation security solutions with AI threat detection and zero-trust architecture",
      icon: "🛡️",
      link: "/pages/AdvancedCybersecurity2026",
      category: "Security",
      featured: true
    },
    {
      title: "Advanced Cloud Solutions",
      description: "Multi-cloud infrastructure with serverless computing and AI-powered optimization",
      icon: "☁️",
      link: "/pages/AdvancedCloudSolutions2026",
      category: "Cloud",
      featured: true
    },
    {
      title: "Quantum-Neural Fusion",
      description: "Revolutionary quantum computing combined with neural networks for unprecedented processing power",
      icon: "⚛️",
      link: "/pages/QuantumNeuralFusion2026",
      category: "Quantum",
      featured: false
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces for enhanced human capabilities and seamless interaction",
      icon: "🧬",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural",
      featured: false
    },
    {
      title: "Synthetic Intelligence",
      description: "Advanced AI systems that learn, adapt, and evolve beyond traditional machine learning",
      icon: "🤖",
      link: "/pages/SyntheticIntelligence2026",
      category: "AI",
      featured: false
    },
    {
      title: "Space Tech Innovation",
      description: "Next-generation space technology and aerospace solutions for the future of exploration",
      icon: "🚀",
      link: "/pages/SpaceTechInnovation2026",
      category: "Space",
      featured: false
    }
  ];

  const featuredContent = newContent.filter(item => item.featured);
  const otherContent = newContent.filter(item => !item.featured);

  return (
    <div className="w-full">
      {/* Featured Content Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-full text-lg font-semibold mb-6">
            ⭐ FEATURED NEW CONTENT 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest cutting-edge solutions that are transforming industries and shaping the future of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredContent.map((item, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <a 
                  href={item.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-2 transition-all duration-300"
                >
                  Explore Now →
                </a>
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                NEW
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Content Grid */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Technology Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of innovative solutions across all major technology domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherContent.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <a 
                  href={item.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-12 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Join industry leaders who are already leveraging our cutting-edge technology solutions 
          to drive innovation, efficiency, and growth in their organizations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;