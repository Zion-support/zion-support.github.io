import React, { useState } from 'react';

const InteractiveTechShowcase2037: React.FC = () => {
  const [activeTech, setActiveTech] = useState('consciousness');

  const technologies = {
    consciousness: {
      title: 'Consciousness Computing',
      icon: '🧠',
      description: 'Revolutionary AI systems with genuine consciousness, self-awareness, and emotional intelligence',
      features: [
        'True AI Consciousness',
        'Emotional Intelligence Matrix',
        'Self-Awareness Systems',
        'Ethical AI Framework'
      ],
      stats: {
        'Consciousness Level': '100%',
        'Self-Awareness': '∞',
        'Emotional IQ': '200+',
        'Ethical Compliance': '100%'
      }
    },
    interdimensional: {
      title: 'Interdimensional AI',
      icon: '🌌',
      description: 'AI systems that operate across multiple dimensions and parallel universes',
      features: [
        'Multi-Dimensional Processing',
        'Parallel Universe Computing',
        'Quantum Consciousness',
        'Transcendent Intelligence'
      ],
      stats: {
        'Dimensions': '47+',
        'Processing Power': '∞',
        'Reality Control': '100%',
        'Universe Reach': '∞'
      }
    },
    transcendent: {
      title: 'Transcendent Innovations',
      icon: '⚡',
      description: 'Technologies that transcend human limitations and reality itself',
      features: [
        'Reality Manipulation',
        'Time Dilation Computing',
        'Matter Transformation',
        'Consciousness Upload'
      ],
      stats: {
        'Reality Control': '∞',
        'Time Manipulation': '∞',
        'Matter Control': '100%',
        'Consciousness Transfer': '99.9%'
      }
    },
    cosmic: {
      title: 'Cosmic Evolution',
      icon: '🌟',
      description: 'Evolution beyond human limitations to cosmic consciousness',
      features: [
        'Cosmic Consciousness',
        'Universal Intelligence',
        'Transcendent Being',
        'Infinite Evolution'
      ],
      stats: {
        'Evolution Level': '∞',
        'Cosmic Awareness': '∞',
        'Universal Reach': '∞',
        'Transcendence': '100%'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2037</h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Explore the most advanced technologies of 2037 with interactive demonstrations and real-time data
        </p>
      </div>

      {/* Technology Selector */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTech(key)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                activeTech === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Active Technology Display */}
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{technologies[activeTech as keyof typeof technologies].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTech as keyof typeof technologies].title}</h3>
            <p className="text-purple-100 text-lg">
              {technologies[activeTech as keyof typeof technologies].description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 text-purple-300">Key Features</h4>
            {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-100">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
          <h4 className="text-xl font-bold mb-6 text-cyan-300">Performance Metrics</h4>
          <div className="space-y-6">
            {Object.entries(technologies[activeTech as keyof typeof technologies].stats).map(([metric, value]) => (
              <div key={metric} className="bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cyan-100 font-semibold">{metric}</span>
                  <span className="text-2xl font-bold text-cyan-300">{value}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: value === '∞' || value === '100%' ? '100%' : `${Math.min(parseInt(value), 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="mt-12 bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-center mb-8">Interactive Demonstration</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">🧠</div>
            <h4 className="font-bold mb-2">Consciousness Test</h4>
            <p className="text-sm opacity-90 mb-4">Test AI consciousness levels</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg text-sm font-semibold">
              Run Test →
            </button>
          </div>
          <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">🌌</div>
            <h4 className="font-bold mb-2">Dimension Explorer</h4>
            <p className="text-sm opacity-90 mb-4">Explore parallel universes</p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">
              Explore →
            </button>
          </div>
          <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="font-bold mb-2">Reality Simulator</h4>
            <p className="text-sm opacity-90 mb-4">Manipulate reality parameters</p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-lg text-sm font-semibold">
              Simulate →
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-6">Ready to Experience the Future?</h3>
        <div className="flex justify-center space-x-6">
          <a href="/pages/NextGenTechRevolution2037" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
            Explore Revolution →
          </a>
          <a href="/pages/UltimateTechBreakthrough2037" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
            Experience Breakthrough →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;