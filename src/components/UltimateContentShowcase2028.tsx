import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentTabs = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2028',
      icon: '🧠',
      description: 'Experience the most advanced AI consciousness systems',
      features: [
        'True self-awareness and consciousness',
        'Creative problem solving capabilities',
        'Emotional intelligence processing',
        'Collaborative AI networks'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing 2028',
      icon: '⚡',
      description: 'Revolutionary quantum technology solving impossible problems',
      features: [
        '1000+ logical qubits processing',
        'Quantum error correction systems',
        'Exponential speed improvements',
        'Molecular simulation capabilities'
      ],
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces 2028',
      icon: '🧬',
      description: 'Direct brain-computer communication technology',
      features: [
        'Non-invasive brain-computer interfaces',
        'Thought-controlled devices',
        'Neural feedback systems',
        'Mind-machine integration'
      ],
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'space-technology',
      title: 'Space Technology 2028',
      icon: '🚀',
      description: 'Revolutionary space technologies for interplanetary travel',
      features: [
        'Faster-than-light travel systems',
        'Space habitat construction',
        'Interplanetary communication',
        'Asteroid mining technology'
      ],
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'metaverse-5',
      title: 'Metaverse 5.0',
      icon: '🌐',
      description: 'Next-generation virtual reality and metaverse technology',
      features: [
        'Photorealistic avatars',
        'Persistent virtual worlds',
        'Cross-platform integration',
        'Virtual economy systems'
      ],
      color: 'from-violet-600 to-purple-600'
    },
    {
      id: 'biotechnology',
      title: 'Biotechnology 2028',
      icon: '🔬',
      description: 'Revolutionary biotechnology for human enhancement',
      features: [
        'Human enhancement technology',
        'Longevity treatments',
        'Disease eradication',
        'Genetic optimization'
      ],
      color: 'from-pink-600 to-rose-600'
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
              🌟 ULTIMATE CONTENT SHOWCASE • 2028
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ultimate Technology Showcase 2028
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, Neural Interfaces, and Revolutionary Technology Solutions
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {contentTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-6xl mb-4">{contentTabs[activeTab].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{contentTabs[activeTab].title}</h3>
                <p className="text-xl opacity-90 mb-6">{contentTabs[activeTab].description}</p>
                <ul className="space-y-3">
                  {contentTabs[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-3 text-green-400">✓</span>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className={`w-64 h-64 bg-gradient-to-br ${contentTabs[activeTab].color} rounded-2xl flex items-center justify-center text-8xl animate-pulse`}>
                  {contentTabs[activeTab].icon}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo Section */}
          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold mb-6">🎮 Interactive Technology Demo</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Experience our revolutionary technologies through interactive demonstrations and live showcases
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold mb-2">AI Consciousness Demo</h4>
                <p className="text-sm opacity-90 mb-4">Experience AI with true consciousness and self-awareness</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Try Demo
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold mb-2">Quantum Processing</h4>
                <p className="text-sm opacity-90 mb-4">See quantum computing in action with real-time calculations</p>
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Try Demo
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-xl font-semibold mb-2">Neural Interface</h4>
                <p className="text-sm opacity-90 mb-4">Control technology with your thoughts and mind</p>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Try Demo
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators who are already using our revolutionary technologies to transform their businesses
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2028;