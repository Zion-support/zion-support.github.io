import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const techCategories = [
    {
      title: "Artificial Intelligence",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      description: "Advanced AI systems and machine learning solutions",
      features: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP"]
    },
    {
      title: "Quantum Computing",
      icon: "⚛️",
      color: "from-purple-500 to-pink-500",
      description: "Revolutionary quantum computing technologies",
      features: ["Quantum Algorithms", "Cryptography", "Optimization", "Simulation"]
    },
    {
      title: "Neural Interfaces",
      icon: "🧠",
      color: "from-green-500 to-teal-500",
      description: "Direct brain-computer interface systems",
      features: ["BCI Technology", "Neural Decoding", "Medical Applications", "AR Integration"]
    },
    {
      title: "Blockchain & Web3",
      icon: "⛓️",
      color: "from-orange-500 to-red-500",
      description: "Decentralized and Web3 technologies",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "DAOs"]
    }
  ];

  return (
    <div className={`py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 rounded-full text-sm font-bold mb-6">
            🚀 ULTIMATE TECH 2027
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            The Future is Here
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Experience the most advanced technology solutions that are reshaping industries and creating new possibilities for tomorrow.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-slate-700/50">
          <div className="text-center mb-8">
            <div className={`w-24 h-24 bg-gradient-to-r ${techCategories[activeTab].color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <span className="text-4xl">{techCategories[activeTab].icon}</span>
            </div>
            <h3 className="text-4xl font-bold mb-4 text-cyan-400">
              {techCategories[activeTab].title}
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {techCategories[activeTab].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories[activeTab].features.map((feature, index) => (
              <div key={index} className="bg-slate-700/30 rounded-xl p-6 text-center hover:bg-slate-600/30 transition-all duration-300">
                <div className="text-2xl mb-3">✨</div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">{feature}</h4>
                <p className="text-sm text-slate-400">Advanced implementation</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">1000+</div>
            <div className="text-slate-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-slate-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-slate-300">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-slate-300">Countries Served</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join the technology revolution and unlock the potential of tomorrow's innovations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2027;