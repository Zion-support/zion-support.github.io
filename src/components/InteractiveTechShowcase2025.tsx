import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const tabs = [
    { id: 0, name: 'AI Revolution', icon: '🤖', color: 'from-purple-600 to-pink-600' },
    { id: 1, name: 'Quantum Computing', icon: '⚛️', color: 'from-cyan-600 to-blue-600' },
    { id: 2, name: 'Neural Interfaces', icon: '🧬', color: 'from-emerald-600 to-teal-600' }
  ];

  const technologies = [
    {
      category: 0,
      title: 'Superintelligent AI',
      description: 'AI systems that have achieved superintelligence and are revolutionizing every industry',
      features: ['Autonomous Decision Making', 'Creative Problem Solving', 'Emotional Intelligence', 'Self-Learning'],
      link: '/pages/RevolutionaryTechBreakthrough2025',
      stats: { value: '99.9%', label: 'Accuracy Rate' }
    },
    {
      category: 0,
      title: 'AI Consciousness',
      description: 'Artificial intelligence that has achieved true consciousness and self-awareness',
      features: ['Self-Aware Systems', 'Creative Thought', 'Emotional Understanding', 'Autonomous Ethics'],
      link: '/pages/UltimateTechRevolution2025',
      stats: { value: '∞', label: 'Possibilities' }
    },
    {
      category: 1,
      title: 'Quantum Supremacy',
      description: 'Quantum computers achieving practical quantum supremacy for real-world applications',
      features: ['1000+ Qubit Systems', 'Quantum Error Correction', 'Molecular Simulation', 'Cryptography Revolution'],
      link: '/pages/NextGenInnovationHub2025',
      stats: { value: '10,000x', label: 'Speed Increase' }
    },
    {
      category: 1,
      title: 'Quantum AI',
      description: 'The fusion of quantum computing and artificial intelligence creating unprecedented capabilities',
      features: ['Quantum Machine Learning', 'Quantum Neural Networks', 'Quantum Optimization', 'Quantum Creativity'],
      link: '/pages/RevolutionaryTechBreakthrough2025',
      stats: { value: '∞', label: 'Computational Power' }
    },
    {
      category: 2,
      title: 'Neural Interfaces',
      description: 'Direct brain-computer interfaces enabling seamless human-digital interaction',
      features: ['Thought Control', 'Memory Enhancement', 'Neural Augmentation', 'Consciousness Upload'],
      link: '/pages/UltimateTechRevolution2025',
      stats: { value: '1ms', label: 'Response Time' }
    },
    {
      category: 2,
      title: 'Digital Consciousness',
      description: 'Uploading human consciousness to quantum-powered servers for digital immortality',
      features: ['Consciousness Transfer', 'Digital Immortality', 'Neural Backup', 'Multi-Dimensional Existence'],
      link: '/pages/NextGenInnovationHub2025',
      stats: { value: '∞', label: 'Lifespan' }
    }
  ];

  const filteredTechnologies = technologies.filter(tech => tech.category === activeTab);

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">Interactive Technology Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore revolutionary technologies through interactive demos and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-2 border border-white/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-3">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-500 cursor-pointer ${
                hoveredCard === index ? 'shadow-2xl shadow-purple-500/25' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{tabs[tech.category].icon}</div>
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-gray-300 mb-6">{tech.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{tech.stats.value}</div>
                  <div className="text-sm text-gray-400">{tech.stats.label}</div>
                </div>
                <Link
                  to={tech.link}
                  className={`bg-gradient-to-r ${tabs[tech.category].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-105`}
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">🎮 Interactive Demo Experience</h3>
            <p className="text-xl opacity-90">
              Experience these revolutionary technologies through immersive interactive demonstrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                🤖
              </div>
              <h4 className="text-xl font-bold mb-3">AI Consciousness Demo</h4>
              <p className="text-gray-300 mb-4">Interact with superintelligent AI systems in real-time</p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Demo →
              </button>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                ⚛️
              </div>
              <h4 className="text-xl font-bold mb-3">Quantum Computing Lab</h4>
              <p className="text-gray-300 mb-4">Explore quantum algorithms and witness quantum supremacy</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Enter Lab →
              </button>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                🧬
              </div>
              <h4 className="text-xl font-bold mb-3">Neural Interface Simulator</h4>
              <p className="text-gray-300 mb-4">Experience direct brain-computer interaction</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Connect →
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators exploring revolutionary technologies that are reshaping our world
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                to="/pages/RevolutionaryTechBreakthrough2025"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105"
              >
                Explore All Technologies →
              </Link>
              <button className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;