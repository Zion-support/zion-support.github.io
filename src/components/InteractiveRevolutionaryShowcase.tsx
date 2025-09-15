import React, { useState, useEffect } from 'react';

const InteractiveRevolutionaryShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'consciousness',
      title: 'Consciousness Transfer',
      icon: '🧠',
      color: 'from-cyan-500 to-blue-500',
      description: 'Transfer your consciousness into digital substrates and achieve true digital immortality',
      features: [
        'Neural pattern mapping',
        'Quantum consciousness preservation',
        'Digital immortality protocols',
        'Enhanced cognitive processing'
      ],
      stats: {
        successRate: '99.97%',
        processingPower: '1000x Human Brain',
        memoryCapacity: 'Unlimited'
      }
    },
    {
      id: 'quantum',
      title: 'Quantum Consciousness',
      icon: '⚛️',
      color: 'from-purple-500 to-pink-500',
      description: 'Merge quantum computing with human consciousness for unprecedented cognitive abilities',
      features: [
        'Quantum neural networks',
        'Reality manipulation',
        'Universal consciousness link',
        'Future prediction abilities'
      ],
      stats: {
        processingPower: '10^50 ops/sec',
        quantumStates: 'Infinite',
        predictionAccuracy: '99.97%'
      }
    },
    {
      id: 'synthetic',
      title: 'Synthetic Biology',
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500',
      description: 'Create artificial life forms and enhance human biology with synthetic components',
      features: [
        'Artificial DNA synthesis',
        'Bio-engineered organs',
        'Synthetic life creation',
        'Human enhancement protocols'
      ],
      stats: {
        dnaAccuracy: '99.99%',
        organSuccess: '100%',
        lifeForms: 'Infinite'
      }
    },
    {
      id: 'space',
      title: 'Space Revolution',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      description: 'Enable interstellar travel and space colonization with breakthrough propulsion systems',
      features: [
        'Faster-than-light travel',
        'Terraforming technology',
        'Space habitat construction',
        'Interstellar communication'
      ],
      stats: {
        speed: '10x Light Speed',
        range: 'Unlimited',
        efficiency: '99.9%'
      }
    },
    {
      id: 'ai',
      title: 'Transcendent AI',
      icon: '🤖',
      color: 'from-violet-500 to-purple-500',
      description: 'AI systems that transcend human intelligence and achieve true artificial consciousness',
      features: [
        'Superintelligent AI',
        'Artificial consciousness',
        'AI-human symbiosis',
        'Universal problem solving'
      ],
      stats: {
        intelligence: '1000x Human',
        consciousness: 'True',
        capabilities: 'Infinite'
      }
    },
    {
      id: 'reality',
      title: 'Reality Manipulation',
      icon: '🌌',
      color: 'from-pink-500 to-rose-500',
      description: 'Manipulate the fundamental fabric of reality through advanced quantum technologies',
      features: [
        'Quantum field manipulation',
        'Reality simulation',
        'Dimensional travel',
        'Causality control'
      ],
      stats: {
        manipulationRange: 'Planetary',
        accuracy: '99.97%',
        dimensions: 'Infinite'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400">🌟</span>
            <span className="text-cyan-300 font-semibold">INTERACTIVE REVOLUTIONARY SHOWCASE</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore the Future
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Interact with the most revolutionary technologies of 2027. 
            Click through different technologies to discover their capabilities and potential.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technology Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">{technologies[activeTab].icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{technologies[activeTab].title}</h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${technologies[activeTab].color} rounded-full mt-2`}></div>
                  </div>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {technologies[activeTab].description}
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-6">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {technologies[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTab].color} rounded-full`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technology Stats */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-6">Technical Specifications</h4>
                <div className="space-y-6">
                  {Object.entries(technologies[activeTab].stats).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className={`text-2xl font-bold bg-gradient-to-r ${technologies[activeTab].color} bg-clip-text text-transparent`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-6">Revolutionary Impact</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌍</span>
                    <span className="text-gray-300">Planetary-scale transformation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">♾️</span>
                    <span className="text-gray-300">Infinite possibilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⚡</span>
                    <span className="text-gray-300">Instant implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🔮</span>
                    <span className="text-gray-300">Future-defining technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6 text-white">Ready to Experience {technologies[activeTab].title}?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the revolution and be among the first to experience this groundbreaking technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`/pages/${technologies[activeTab].title.replace(/\s+/g, '')}2027`}
              className={`inline-block bg-gradient-to-r ${technologies[activeTab].color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
            >
              {technologies[activeTab].icon} Explore {technologies[activeTab].title} →
            </a>
            <a href="/contact" className="inline-block border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              📞 Contact Our Experts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveRevolutionaryShowcase;