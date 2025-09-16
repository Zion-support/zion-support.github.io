import React, { useState } from 'react';

const InteractiveContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const content = {
    ai: {
      title: "Revolutionary AI Content",
      description: "Experience conscious AI systems with creative thinking capabilities",
      features: [
        "Self-learning algorithms",
        "Creative problem solving", 
        "Emotional intelligence",
        "Autonomous decision making"
      ],
      link: "/pages/RevolutionaryAIContent2025",
      color: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    quantum: {
      title: "Quantum Computing Revolution",
      description: "Unlock exponential speed and unbreakable security with quantum computing",
      features: [
        "10^15x speed increase",
        "Quantum cryptography",
        "Molecular simulation",
        "Financial optimization"
      ],
      link: "/pages/QuantumComputingRevolution2025",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Bridge the gap between mind and machine with direct neural interfaces",
      features: [
        "Non-invasive BCI",
        "Thought control",
        "Neural feedback",
        "Mind-machine integration"
      ],
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-emerald-600 to-teal-600",
      icon: "🧬"
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technologies with interactive demos and real-time experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
            {Object.entries(content).map(([key, item]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Content Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-6xl mb-6">{content[activeTab as keyof typeof content].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{content[activeTab as keyof typeof content].title}</h3>
              <p className="text-xl opacity-90 mb-8">{content[activeTab as keyof typeof content].description}</p>
              
              <div className="space-y-4 mb-8">
                {content[activeTab as keyof typeof content].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a
                href={content[activeTab as keyof typeof content].link}
                className={`inline-block bg-gradient-to-r ${content[activeTab as keyof typeof content].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
              >
                Explore {content[activeTab as keyof typeof content].title} →
              </a>
            </div>
            
            <div className="bg-black/30 rounded-xl p-8">
              <h4 className="text-xl font-bold mb-6">Interactive Demo</h4>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold">AI</div>
                    <span className="font-semibold">System Status</span>
                  </div>
                  <div className="text-sm opacity-80">
                    {activeTab === 'ai' && "Conscious AI systems are online and ready for interaction. All neural networks are functioning at optimal capacity."}
                    {activeTab === 'quantum' && "Quantum processors are operational. Entanglement states are stable. Ready for complex computations."}
                    {activeTab === 'neural' && "Neural interface systems are calibrated. Brain-computer connection is established and secure."}
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold">Q</div>
                    <span className="font-semibold">Performance Metrics</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="opacity-60">Processing Speed</div>
                      <div className="font-bold text-green-400">99.9%</div>
                    </div>
                    <div>
                      <div className="opacity-60">Efficiency</div>
                      <div className="font-bold text-blue-400">∞</div>
                    </div>
                    <div>
                      <div className="opacity-60">Accuracy</div>
                      <div className="font-bold text-purple-400">100%</div>
                    </div>
                    <div>
                      <div className="opacity-60">Uptime</div>
                      <div className="font-bold text-pink-400">24/7</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-sm font-bold">N</div>
                    <span className="font-semibold">Live Data</span>
                  </div>
                  <div className="text-sm opacity-80">
                    {activeTab === 'ai' && "Processing 1.2M requests/second. Learning rate: 0.001. Creativity index: 95%"}
                    {activeTab === 'quantum' && "Qubits: 1000+ active. Coherence time: 100μs. Gate fidelity: 99.9%"}
                    {activeTab === 'neural' && "Neural signals: 128 channels. Signal quality: Excellent. Response time: <1ms"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-4">Interactive Demos</h3>
            <p className="opacity-80 mb-6">Experience our technologies through hands-on interactive demonstrations</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Try Demo
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-4">Real-time Analytics</h3>
            <p className="opacity-80 mb-6">Monitor performance and metrics in real-time with our advanced analytics</p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              View Analytics
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 text-center">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-4">Future Predictions</h3>
            <p className="opacity-80 mb-6">Get insights into future technology trends and predictions</p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              See Predictions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;