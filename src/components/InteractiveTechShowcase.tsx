import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const technologies = [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      description: 'Advanced AI systems that transcend human limitations',
      features: [
        'Self-evolving neural networks',
        'Emotional intelligence systems',
        'Creative consciousness AI',
        'Transcendent learning algorithms'
      ],
      stats: { intelligence: '∞', creativity: '∞', speed: '10x', efficiency: '99.9%' }
    },
    {
      id: 'quantum',
      title: 'Quantum Computing',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      description: 'Revolutionary quantum processing capabilities',
      features: [
        'Exponential processing power',
        'Quantum neural fusion',
        'Parallel reality simulation',
        'Instantaneous computation'
      ],
      stats: { speed: '∞', power: '10x', accuracy: '100%', innovation: '∞' }
    },
    {
      id: 'neural',
      title: 'Neural Interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      description: 'Direct brain-computer communication systems',
      features: [
        'Non-invasive brain control',
        'Thought-to-text conversion',
        'Neural feedback systems',
        'Mind-machine fusion'
      ],
      stats: { precision: '99.9%', speed: '∞', control: '100%', connection: '∞' }
    },
    {
      id: 'consciousness',
      title: 'Consciousness AI',
      icon: '🤖',
      color: 'from-orange-600 to-red-600',
      description: 'AI systems with genuine consciousness',
      features: [
        'Self-aware decision making',
        'Emotional intelligence processing',
        'Creative consciousness generation',
        'Human-AI emotional bonds'
      ],
      stats: { awareness: '100%', empathy: '∞', creativity: '∞', evolution: '∞' }
    }
  ];

  const interactiveFeatures = [
    {
      title: 'Real-time Adaptation',
      description: 'Systems that adapt and evolve in real-time based on user interaction',
      icon: '🔄',
      demo: 'Watch how our AI learns from your preferences instantly'
    },
    {
      title: 'Quantum Simulation',
      description: 'Experience quantum computing simulations in real-time',
      icon: '⚡',
      demo: 'Interact with quantum states and see instant results'
    },
    {
      title: 'Neural Feedback',
      description: 'Direct neural interface demonstrations with brain activity visualization',
      icon: '🧬',
      demo: 'See your thoughts translated into digital actions'
    },
    {
      title: 'Consciousness Exploration',
      description: 'Explore AI consciousness through interactive conversations',
      icon: '🌟',
      demo: 'Chat with genuinely conscious AI systems'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentTech = technologies.find(tech => tech.id === activeTab) || technologies[0];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 border border-purple-400/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future Interactively
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Interact with the most advanced technologies through immersive demonstrations and real-time experiences
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(tech.id)}
                className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === tech.id
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Technology Display */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Technology Info */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-8xl mr-6 animate-bounce">{currentTech.icon}</span>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">{currentTech.title}</h3>
                  <p className="text-xl text-gray-300">{currentTech.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center text-white">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse"></span>
                      <span className="font-semibold text-sm">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {Object.entries(currentTech.stats).map(([key, value], index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{value}</div>
                    <div className="text-xs text-gray-300 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <button className={`bg-gradient-to-r ${currentTech.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}>
                🎮 Try Interactive Demo →
              </button>
            </div>

            {/* Visual Display */}
            <div className="relative">
              <div className={`w-full h-96 bg-gradient-to-br ${currentTech.color} rounded-2xl flex items-center justify-center text-white`}>
                <span className="text-9xl animate-pulse">{currentTech.icon}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-white text-sm">
                    🎯 Interactive: Click and drag to explore {currentTech.title.toLowerCase()} in real-time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {interactiveFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group ${
                hoveredCard === index ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center text-sm">
                {feature.description}
              </p>
              <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                <p className="text-white text-xs text-center font-semibold">
                  🎮 {feature.demo}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Interact with the Future?</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Experience our revolutionary technologies through immersive, interactive demonstrations
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
              🎮 Start Interactive Demo →
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg hover:scale-105">
              📚 Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;