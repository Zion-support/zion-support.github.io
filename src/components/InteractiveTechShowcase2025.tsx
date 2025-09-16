import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Artificial Intelligence",
      icon: "🤖",
      description: "Revolutionary AI systems that think, learn, and adapt",
      features: [
        "Autonomous Decision Making",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Machine Learning",
        "Deep Learning"
      ],
      demo: "Experience real-time AI processing and decision making"
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚛️",
      description: "Quantum-powered computing that solves impossible problems",
      features: [
        "Quantum Supremacy",
        "Quantum Cryptography",
        "Molecular Simulation",
        "Optimization Problems",
        "Quantum Machine Learning",
        "Quantum Networking"
      ],
      demo: "Watch quantum algorithms solve complex problems in real-time"
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧠",
      description: "Direct brain-computer interfaces for seamless interaction",
      features: [
        "Thought-to-Text",
        "Mental Command Control",
        "Enhanced Cognition",
        "Neural Feedback",
        "Brain-Computer Integration",
        "Cognitive Enhancement"
      ],
      demo: "Control devices with your thoughts using neural interfaces"
    },
    blockchain: {
      title: "Blockchain Technology",
      icon: "🔗",
      description: "Decentralized, secure, and transparent systems",
      features: [
        "Smart Contracts",
        "Decentralized Finance",
        "NFT Technology",
        "Supply Chain Tracking",
        "Digital Identity",
        "Cryptocurrency"
      ],
      demo: "Explore decentralized applications and smart contracts"
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the future of technology with our interactive demonstrations and cutting-edge innovations
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`m-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-3xl font-bold mb-4">
              {technologies[activeTab as keyof typeof technologies].title}
            </h3>
            <p className="text-lg opacity-90 mb-6">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold">{feature}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try Interactive Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h4 className="text-2xl font-bold mb-4 text-center">Interactive Demo</h4>
            <div className="bg-black/50 rounded-lg p-6 mb-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🎮</div>
                <p className="text-lg mb-4">
                  {technologies[activeTab as keyof typeof technologies].demo}
                </p>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full mb-4">
                  <div className="bg-white h-2 rounded-full w-3/4 animate-pulse"></div>
                </div>
                <p className="text-sm opacity-75">Processing in real-time...</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-sm font-semibold">Real-time</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl mb-1">🔒</div>
                <div className="text-sm font-semibold">Secure</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl mb-1">🌐</div>
                <div className="text-sm font-semibold">Global</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10,000+</div>
            <div className="text-lg opacity-90">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-lg opacity-90">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-lg opacity-90">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;