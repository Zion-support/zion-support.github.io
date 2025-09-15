import React, { useState } from 'react';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 'quantum-ai',
      title: 'Quantum AI Revolution',
      description: 'Experience the convergence of quantum computing and artificial intelligence',
      icon: '⚡',
      color: 'from-cyan-500 to-purple-500',
      bgColor: 'from-cyan-600/30 to-purple-600/30',
      borderColor: 'border-cyan-400/30',
      features: ['Quantum Supremacy AI', 'Neural Quantum Networks', 'Predictive Quantum AI'],
      link: '/pages/QuantumAIRevolution2026'
    },
    {
      id: 'metaverse-ai',
      title: 'Metaverse AI Integration',
      description: 'Step into AI-powered virtual worlds that blur reality and virtuality',
      icon: '🌐',
      color: 'from-violet-500 to-fuchsia-500',
      bgColor: 'from-violet-600/30 to-fuchsia-600/30',
      borderColor: 'border-violet-400/30',
      features: ['AI-Generated Worlds', 'Neural Interface VR', 'AI Companions'],
      link: '/pages/MetaverseAI2026'
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Systems',
      description: 'Fully autonomous systems that think, learn, and act independently',
      icon: '🤖',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-600/30 to-red-600/30',
      borderColor: 'border-orange-400/30',
      features: ['Self-Learning AI', 'Self-Healing Architecture', 'Distributed Intelligence'],
      link: '/pages/AutonomousSystems2026'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY 2026 • BREAKTHROUGH TECHNOLOGIES
          </div>
          <h2 className="text-5xl font-bold mb-6">Revolutionary Technology Showcase 2026</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking 2026 technology innovations that are reshaping industries
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {tech.icon} {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-8xl mb-6">{technologies[activeTab].icon}</div>
            <h3 className="text-4xl font-bold mb-4">{technologies[activeTab].title}</h3>
            <p className="text-xl text-gray-300 mb-8">{technologies[activeTab].description}</p>
            
            <div className="space-y-4 mb-8">
              {technologies[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTab].color} rounded-full`}></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href={technologies[activeTab].link}
                className={`bg-gradient-to-r ${technologies[activeTab].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                Explore Technology →
              </a>
              <button className="border-2 border-gray-400 text-gray-400 px-8 py-4 rounded-lg hover:bg-gray-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>

          <div className={`bg-gradient-to-br ${technologies[activeTab].bgColor} backdrop-blur-sm rounded-xl p-8 border ${technologies[activeTab].borderColor} hover:scale-105 transition-all duration-300`}>
            <h4 className="text-2xl font-bold text-white mb-6 text-center">Key Capabilities</h4>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">Exponential Performance</div>
                <div className="text-gray-200 text-sm">10x faster than current systems</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">Autonomous Operation</div>
                <div className="text-gray-200 text-sm">Self-managing and self-optimizing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">Future-Ready</div>
                <div className="text-gray-200 text-sm">Built for tomorrow's challenges</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">All Revolutionary Technologies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm rounded-xl p-6 border ${tech.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveTab(index)}
              >
                <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3 text-center">{tech.title}</h4>
                <p className="text-gray-200 text-sm text-center mb-4">{tech.description}</p>
                <a
                  href={tech.link}
                  className={`block w-full bg-gradient-to-r ${tech.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies already using our revolutionary 2026 technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;