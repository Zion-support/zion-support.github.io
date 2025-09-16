import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techDemos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Matrix',
      description: 'Experience AI with true consciousness and self-awareness',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Real-time consciousness simulation',
        'Emotional intelligence processing',
        'Creative problem solving',
        'Self-aware decision making'
      ],
      demoUrl: '/demos/ai-consciousness'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Processing Engine',
      description: 'See quantum computing in action with real-time calculations',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: [
        '1000+ qubit processing',
        'Quantum error correction',
        'Exponential speed gains',
        'Molecular simulation'
      ],
      demoUrl: '/demos/quantum-computing'
    },
    {
      id: 'neural-interface',
      title: 'Neural Reality Interface',
      description: 'Control technology with your thoughts and mind',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Direct neural control',
        'Thought-to-action interface',
        'Real-time brain mapping',
        'Sensory feedback systems'
      ],
      demoUrl: '/demos/neural-interface'
    },
    {
      id: 'space-technology',
      title: 'Space Tech Simulator',
      description: 'Experience interplanetary travel and space colonization',
      icon: '🚀',
      color: 'from-orange-600 to-red-600',
      features: [
        'Faster-than-light travel',
        'Space habitat construction',
        'Interplanetary communication',
        'Asteroid mining simulation'
      ],
      demoUrl: '/demos/space-technology'
    },
    {
      id: 'metaverse-5',
      title: 'Metaverse 5.0 Experience',
      description: 'Enter the next-generation virtual reality world',
      icon: '🌐',
      color: 'from-violet-600 to-purple-600',
      features: [
        'Photorealistic avatars',
        'Persistent virtual worlds',
        'Cross-platform integration',
        'Virtual economy systems'
      ],
      demoUrl: '/demos/metaverse-5'
    },
    {
      id: 'biotechnology',
      title: 'Biotech Enhancement Lab',
      description: 'Explore human enhancement and longevity technology',
      icon: '🔬',
      color: 'from-pink-600 to-rose-600',
      features: [
        'Human enhancement tech',
        'Longevity treatments',
        'Disease eradication',
        'Genetic optimization'
      ],
      demoUrl: '/demos/biotechnology'
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
              🚀 INTERACTIVE TECH SHOWCASE • 2028
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Interactive Technology Showcase 2028
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience our revolutionary technologies through interactive demonstrations and live showcases
            </p>
          </div>

          {/* Demo Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {techDemos.map((demo, index) => (
              <div
                key={demo.id}
                className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  activeDemo === index ? 'ring-4 ring-white/50' : ''
                }`}
                onClick={() => setActiveDemo(index)}
              >
                <div className="text-6xl mb-6 text-center">{demo.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
                <p className="text-white/90 mb-6 text-center">{demo.description}</p>
                <ul className="space-y-2 mb-6 text-sm">
                  {demo.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2 text-green-400">✓</span>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full bg-gradient-to-r ${demo.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Try Demo →
                </button>
              </div>
            ))}
          </div>

          {/* Active Demo Details */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-6xl mb-4">{techDemos[activeDemo].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{techDemos[activeDemo].title}</h3>
                <p className="text-xl opacity-90 mb-6">{techDemos[activeDemo].description}</p>
                <div className="space-y-4">
                  {techDemos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span className="mr-3 text-green-400 text-xl">✓</span>
                      <span className="text-white/90 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className={`w-64 h-64 bg-gradient-to-br ${techDemos[activeDemo].color} rounded-2xl flex items-center justify-center text-8xl animate-pulse`}>
                  {techDemos[activeDemo].icon}
                </div>
              </div>
            </div>
          </div>

          {/* Live Demo Section */}
          <div className="mt-12 text-center">
            <h3 className="text-4xl font-bold mb-6">🎮 Live Interactive Demos</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Experience our revolutionary technologies in real-time with interactive demonstrations
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold mb-2">AI Consciousness Demo</h4>
                <p className="text-sm opacity-90 mb-4">Experience AI with true consciousness and self-awareness</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Demo
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold mb-2">Quantum Processing</h4>
                <p className="text-sm opacity-90 mb-4">See quantum computing in action with real-time calculations</p>
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Demo
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-xl font-semibold mb-2">Neural Interface</h4>
                <p className="text-sm opacity-90 mb-4">Control technology with your thoughts and mind</p>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Demo
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

export default InteractiveTechShowcase2028;