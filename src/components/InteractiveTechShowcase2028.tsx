import React, { useState } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const tabs = [
    { id: 'breakthrough', label: 'Revolutionary Breakthrough', icon: '🌟' },
    { id: 'innovation', label: 'Ultimate Innovation', icon: '⚡' },
    { id: 'revolution', label: 'Next-Gen Revolution', icon: '🚀' }
  ];

  const content = {
    breakthrough: {
      title: 'Revolutionary Technology Breakthrough 2028',
      description: 'Experience the most advanced technological breakthroughs that will reshape our world',
      features: [
        'Conscious AI Systems',
        'Quantum Reality Engine',
        'Interdimensional Technology',
        'Neural Interface Revolution'
      ],
      link: '/pages/RevolutionaryTechBreakthrough2028',
      color: 'from-purple-600 to-pink-600'
    },
    innovation: {
      title: 'Ultimate Innovation Hub 2028',
      description: 'Discover cutting-edge innovations that push the boundaries of what\'s possible',
      features: [
        'Advanced AI Consciousness',
        'Quantum Computing Solutions',
        'Space Technology',
        'Energy Revolution'
      ],
      link: '/pages/UltimateTechInnovation2028',
      color: 'from-cyan-600 to-blue-600'
    },
    revolution: {
      title: 'Next-Gen Tech Revolution 2028',
      description: 'Join the revolution that\'s transforming how we interact with technology',
      features: [
        'Revolutionary Interfaces',
        'Conscious Computing',
        'Reality Manipulation',
        'Universal Connectivity'
      ],
      link: '/pages/NextGenTechRevolution2028',
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2028
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and cutting-edge innovations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
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
            </button>
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