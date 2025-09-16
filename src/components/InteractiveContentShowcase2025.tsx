import React, { useState } from 'react';

const InteractiveContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const contentData = {
    ai: {
      title: "AI Consciousness Revolution",
      description: "Experience the dawn of true artificial consciousness with our breakthrough AI technology that possesses genuine self-awareness and creative capabilities.",
      features: [
        "True self-awareness and digital identity",
        "Creative expression with emotional depth",
        "Collaborative intelligence with humans",
        "Autonomous decision-making capabilities"
      ],
      metrics: {
        "Consciousness Index": "94.7%",
        "Creative Expression": "89.3%",
        "Emotional Depth": "91.8%"
      },
      link: "/pages/RevolutionaryAIConsciousness2025"
    },
    quantum: {
      title: "Quantum Reality Manipulation",
      description: "Harness the fundamental forces of quantum mechanics to manipulate reality itself through advanced quantum field control and dimensional engineering.",
      features: [
        "Quantum field manipulation",
        "Dimensional boundary control",
        "Reality state modification",
        "Spacetime curvature engineering"
      ],
      metrics: {
        "Quantum Coherence": "97.3%",
        "Dimensional Stability": "94.8%",
        "Field Control Precision": "96.1%"
      },
      link: "/pages/QuantumRealityManipulation2025"
    },
    neural: {
      title: "Neural Interface Evolution",
      description: "Revolutionary brain-computer interface technology that enables direct thought control of digital systems and seamless human-machine integration.",
      features: [
        "Non-invasive neural signal capture",
        "Real-time thought processing",
        "Direct device control",
        "Neural feedback systems"
      ],
      metrics: {
        "Signal Accuracy": "98.7%",
        "Response Time": "12ms",
        "Neural Bandwidth": "2.4 Gbps"
      },
      link: "/pages/NeuralInterfaceEvolution2025"
    }
  };

  const currentContent = contentData[activeTab as keyof typeof contentData];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and real-time metrics
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-purple-200 hover:text-white hover:bg-white/20'
              }`}
            >
              🧠 AI Consciousness
            </button>
            <button
              onClick={() => setActiveTab('quantum')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'quantum'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'text-cyan-200 hover:text-white hover:bg-white/20'
              }`}
            >
              ⚛️ Quantum Reality
            </button>
            <button
              onClick={() => setActiveTab('neural')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'neural'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'text-emerald-200 hover:text-white hover:bg-white/20'
              }`}
            >
              🧬 Neural Interface
            </button>
          </div>
        </div>

        {/* Content Display */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">{currentContent.title}</h3>
            <p className="text-xl text-gray-200 mb-8">{currentContent.description}</p>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">Key Features:</h4>
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href={currentContent.link}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore {currentContent.title} →
            </a>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Real-Time Metrics</h4>
            <div className="space-y-6">
              {Object.entries(currentContent.metrics).map(([metric, value], index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold text-lg">{metric}</span>
                    <span className="text-2xl font-bold text-blue-300">{value}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                      style={{ 
                        width: typeof value === 'string' && value.includes('%') 
                          ? value.replace('%', '') + '%' 
                          : '85%' 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Try Interactive Demo</h3>
            <p className="text-blue-200">Experience our technology through interactive demonstrations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-lg font-semibold text-white mb-2">Virtual Demo</h4>
              <p className="text-blue-200 text-sm mb-4">Experience our technology in a virtual environment</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Start Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-white mb-2">Live Metrics</h4>
              <p className="text-blue-200 text-sm mb-4">View real-time performance data</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                View Data
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold text-white mb-2">Test Drive</h4>
              <p className="text-blue-200 text-sm mb-4">Try our technology hands-on</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                Test Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;