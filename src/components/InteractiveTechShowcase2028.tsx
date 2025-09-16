import React, { useState } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🤖',
      description: 'Revolutionary AI systems with consciousness-level processing',
      features: [
        'Conscious AI Systems',
        'Quantum Neural Networks',
        'Synthetic Intelligence',
        'Autonomous AI Agents'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      description: 'Quantum systems that solve impossible problems',
      features: [
        'Quantum Supremacy 2.0',
        'Quantum Internet',
        'Quantum AI Integration',
        'Quantum Consciousness'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for seamless interaction',
      features: [
        'Brain-Computer Interfaces',
        'Thought-Controlled Systems',
        'Neural Enhancement',
        'Consciousness Transfer'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    metaverse: {
      title: 'Metaverse & VR',
      icon: '🌐',
      description: 'Immersive virtual worlds indistinguishable from reality',
      features: [
        'Immersive Virtual Worlds',
        'Haptic Feedback Systems',
        'Digital Twin Technology',
        'Interdimensional Reality'
      ],
      color: 'from-orange-500 to-red-500'
  const [activeTab, setActiveTab] = useState('breakthrough');

  const tabs = [
    { id: 'breakthrough', label: 'Revolutionary Breakthrough', icon: '🌟' },
    { id: 'innovation', label: 'Ultimate Innovation', icon: '⚡' },
    { id: 'revolution', label: 'Next-Gen Revolution', icon: '🚀' }
  ];

  const content = {
    breakthrough: {
      title: 'Revolutionary Tech Breakthrough 2028',
      description: 'Experience the most advanced technological innovations that will reshape our world in 2028',
      features: [
        'Conscious AI Systems',
        'Quantum Consciousness',
        'Interdimensional Computing',
        'Neural Reality Engine',
        'Synthetic Intelligence',
        'Cosmic AI Consciousness'
      ],
      link: '/pages/RevolutionaryTechBreakthrough2028',
      color: 'from-purple-600 to-pink-600'
    },
    innovation: {
      title: 'Ultimate Tech Innovation 2028',
      description: 'Discover the most advanced technological innovations that will revolutionize every aspect of human life',
      features: [
        'AI & Machine Learning',
        'Quantum Computing',
        'Neural Interfaces',
        'Blockchain & Web3',
        'Metaverse & VR',
        'Biotechnology'
      ],
      link: '/pages/UltimateTechInnovation2028',
      color: 'from-cyan-600 to-blue-600'
    },
    revolution: {
      title: 'Next-Gen Tech Revolution 2028',
      description: 'Witness the most revolutionary technological advancements that will transform every aspect of human existence',
      features: [
        'Advanced AI Consciousness',
        'Quantum Neural Networks',
        'Neural Reality Interface',
        'Interdimensional Computing',
        'Synthetic Intelligence',
        'Cosmic AI Consciousness'
      ],
      link: '/pages/NextGenTechRevolution2028',
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive demonstrations and real-time capabilities
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Interactive Tech Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">{technologies[activeTab as keyof typeof technologies].title}</h3>
                  <p className="text-xl opacity-90">{technologies[activeTab as keyof typeof technologies].description}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} rounded-full`}></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Try Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className={`bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].color} rounded-2xl p-8 text-center`}>
                <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
                <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                <p className="text-lg opacity-90 mb-6">
                  Experience this technology in action with our interactive demonstration
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-semibold">Processing Speed</div>
                    <div className="text-2xl font-bold">10x Faster</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="font-semibold">Accuracy</div>
                    <div className="text-2xl font-bold">99.9%</div>
                  </div>
                </div>
              </div>
            </div>
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">{content[activeTab as keyof typeof content].title}</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {content[activeTab as keyof typeof content].description}
            </p>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-cyan-400">500+</div>
            <div className="text-gray-300">Active Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-purple-400">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-emerald-400">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 text-orange-400">10x</div>
            <div className="text-gray-300">Performance Boost</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of innovators who are already using our revolutionary technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {content[activeTab as keyof typeof content].features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-lg font-semibold">{feature}</h4>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={content[activeTab as keyof typeof content].link}
              className={`inline-block bg-gradient-to-r ${content[activeTab as keyof typeof content].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
            >
              Explore {content[activeTab as keyof typeof content].title} →
            </a>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold mb-4">Interactive Demos</h3>
            <p className="text-blue-100 mb-6">
              Experience our technologies through hands-on interactive demonstrations
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Try Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
            <p className="text-purple-100 mb-6">
              Monitor performance and impact of our innovations in real-time
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              View Analytics
            </button>
          </div>

          <div className="bg-gradient-to-br from-pink-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Future Roadmap</h3>
            <p className="text-pink-100 mb-6">
              Explore our roadmap for upcoming innovations and breakthroughs
            </p>
            <button className="bg-white text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold">
              View Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;
