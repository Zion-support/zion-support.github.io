import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Revolution 2025',
      description: 'Experience the most advanced artificial intelligence systems that are reshaping industries and creating new possibilities.',
      features: [
        'Conscious AI Systems with self-awareness',
        'Autonomous AI Agents for business automation',
        'Edge AI Computing for real-time processing',
        'Generative AI 2.0 for creative problem solving'
      ],
      metrics: {
        accuracy: '99.9%',
        efficiency: '500%',
        uptime: '24/7',
        innovations: '50+'
      }
    },
    quantum: {
      title: 'Quantum Computing Breakthrough',
      description: 'Revolutionary quantum computing that can solve problems previously thought impossible, enabling new frontiers in science and technology.',
      features: [
        'Quantum Reality Engine for reality simulation',
        'Multi-dimensional quantum processing',
        'Quantum cryptography for ultimate security',
        'Molecular simulation at quantum scale'
      ],
      metrics: {
        speed: '10^15x',
        security: 'Unbreakable',
        capacity: 'Infinite',
        applications: '100+'
      }
    },
    neural: {
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces that enable seamless communication between human consciousness and artificial intelligence systems.',
      features: [
        'Non-invasive brain-computer interfaces',
        'Thought-controlled computing systems',
        'Neural feedback for enhanced cognition',
        'Consciousness transfer capabilities'
      ],
      metrics: {
        accuracy: '99.9%',
        latency: '<1ms',
        compatibility: 'Universal',
        safety: '100%'
      }
    },
    interdimensional: {
      title: 'Interdimensional Technology',
      description: 'Breakthrough technologies that operate across multiple dimensions, accessing infinite computational resources and parallel realities.',
      features: [
        'Multi-dimensional processing capabilities',
        'Parallel reality access and manipulation',
        'Infinite computational power sources',
        'Reality simulation and testing'
      ],
      metrics: {
        dimensions: '∞',
        power: 'Infinite',
        scope: 'Universal',
        potential: 'Unlimited'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">Interactive Technology Showcase 2025</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technology solutions with interactive features and real-time demonstrations
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-blue-400/30">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold mb-6">{technologies[activeTab].title}</h3>
              <p className="text-xl opacity-90 mb-8">{technologies[activeTab].description}</p>
              
              <div className="space-y-4 mb-8">
                {technologies[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Try Demo →
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {Object.entries(technologies[activeTab].metrics).map(([key, value]) => (
                <div key={key} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{value}</div>
                  <div className="text-sm opacity-90 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Technology Comparison</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(technologies).map(([key, tech]) => (
              <div
                key={key}
                className={`bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border ${
                  activeTab === key ? 'border-blue-400' : 'border-blue-400/30'
                } hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveTab(key)}
              >
                <h4 className="text-xl font-bold mb-3">{tech.title}</h4>
                <p className="text-blue-100 text-sm mb-4">{tech.description.substring(0, 100)}...</p>
                <div className="text-center">
                  <span className="text-blue-400 font-semibold">
                    {activeTab === key ? 'Currently Active' : 'Click to Explore'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their businesses and shape the future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-xl">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;