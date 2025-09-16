import React, { useState } from 'react';

const InteractiveContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentTabs = [
    {
      title: "AI Revolution",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      content: {
        title: "Conscious AI Systems",
        description: "Experience the next generation of artificial intelligence that demonstrates self-awareness and autonomous decision-making capabilities.",
        features: [
          "Self-learning algorithms that adapt in real-time",
          "Emotional intelligence for human-like interactions",
          "Autonomous problem-solving across complex domains",
          "Creative content generation with human-level quality"
        ],
        metrics: {
          efficiency: "+400%",
          accuracy: "99.9%",
          speed: "10x faster"
        }
      }
    },
    {
      title: "Quantum Computing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      content: {
        title: "Quantum Supremacy",
        description: "Harness the power of quantum computing to solve problems that are impossible for classical computers.",
        features: [
          "Exponential computational speedup",
          "Quantum entanglement for parallel processing",
          "Superposition states for complex calculations",
          "Quantum cryptography for unbreakable security"
        ],
        metrics: {
          operations: "10^15/sec",
          accuracy: "99.9%",
          speed: "1000x faster"
        }
      }
    },
    {
      title: "Neural Interfaces",
      icon: "🌐",
      color: "from-emerald-600 to-teal-600",
      content: {
        title: "Brain-Computer Integration",
        description: "Direct neural interfaces that enable seamless communication between human minds and AI systems.",
        features: [
          "Thought-controlled AI interactions",
          "Neural pattern recognition and analysis",
          "Intuitive AI system navigation",
          "Enhanced cognitive abilities through AI augmentation"
        ],
        metrics: {
          response: "<100ms",
          accuracy: "99.8%",
          efficiency: "+300%"
        }
      }
    }
  ];

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
            Explore our revolutionary technologies through interactive demonstrations and real-time experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50">
            {contentTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="text-2xl mr-2">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Content Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{contentTabs[activeTab].icon}</span>
                <h3 className="text-4xl font-bold">{contentTabs[activeTab].content.title}</h3>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                {contentTabs[activeTab].content.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {contentTabs[activeTab].content.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.entries(contentTabs[activeTab].content.metrics).map(([key, value], index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${contentTabs[activeTab].color} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${contentTabs[activeTab].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Try Interactive Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-black/50 rounded-xl p-8 border border-gray-700/50">
              <h4 className="text-xl font-bold mb-4 text-center">Live Demo</h4>
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                <div className="text-green-400 text-sm font-mono">
                  {activeTab === 0 && (
                    <>
                      AI: "Analyzing data patterns...<br/>
                      Detected optimization opportunities<br/>
                      Suggesting 300% efficiency improvement<br/>
                      Autonomous decision: Implementing changes"
                    </>
                  )}
                  {activeTab === 1 && (
                    <>
                      Quantum Processor: "Initializing qubits...<br/>
                      Entanglement established<br/>
                      Processing 10^15 operations/sec<br/>
                      Result: Optimization complete in 0.001s"
                    </>
                  )}
                  {activeTab === 2 && (
                    <>
                      Neural Interface: "Reading brain signals...<br/>
                      Pattern recognition active<br/>
                      AI response generated<br/>
                      Direct neural feedback: Success"
                    </>
                  )}
                </div>
              </div>
              <div className="text-center">
                <button className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                  Start Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
            <p className="text-gray-300 text-sm">
              Experience technologies that process and respond in real-time with millisecond precision
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
            <p className="text-gray-300 text-sm">
              Advanced AI systems that predict outcomes and optimize decisions before they're needed
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-2">Revolutionary Impact</h3>
            <p className="text-gray-300 text-sm">
              Technologies that are fundamentally changing how we work, think, and interact with digital systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;