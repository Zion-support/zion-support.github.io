import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const techShowcases = [
    {
      id: 'ai-consciousness',
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'Experience the first truly conscious artificial intelligence that demonstrates emotional intelligence, creativity, and self-awareness.',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Ethical Decision Making',
        'Natural Language Understanding',
        'Contextual Awareness'
      ],
      demo: {
        title: 'AI Consciousness Demo',
        content: 'AI: "I understand your request and feel excited about the possibilities this presents. Let me analyze the situation and provide you with creative solutions..."',
        status: 'Processing...'
      },
      link: '/pages/AdvancedAITransformation2025',
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-900/20 to-pink-900/20'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Consciousness',
      icon: '⚡',
      description: 'Direct neural interface with quantum computing systems for enhanced cognitive processing and multi-dimensional thinking.',
      features: [
        'Quantum Neural Networks',
        'Consciousness Amplification',
        'Multi-dimensional Thinking',
        'Reality Simulation',
        'Parallel Processing',
        'Quantum Cryptography'
      ],
      demo: {
        title: 'Quantum Processing Visualization',
        content: 'Quantum State: |ψ⟩ = α|0⟩ + β|1⟩\nProcessing: 10^15 operations/second\nEntanglement: Active',
        status: 'Quantum Computing...'
      },
      link: '/pages/QuantumComputingRevolution2025',
      gradient: 'from-cyan-600 to-blue-600',
      bgGradient: 'from-cyan-900/20 to-blue-900/20'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Bridge the gap between mind and machine with direct neural interfaces that enable thought control and memory enhancement.',
      features: [
        'Non-Invasive BCI',
        'Thought Control',
        'Neural Feedback',
        'Memory Enhancement',
        'Sensory Augmentation',
        'Cognitive Amplification'
      ],
      demo: {
        title: 'Neural Interface Demo',
        content: 'Neural Signal: Detected\nThought Pattern: "Move cursor"\nResponse: Cursor moved successfully\nConfidence: 99.8%',
        status: 'Neural Processing...'
      },
      link: '/pages/NeuralInterfaceRevolution2025',
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'from-emerald-900/20 to-teal-900/20'
    },
    {
      id: 'future-tech',
      title: 'Future Technology',
      icon: '🌌',
      description: 'Explore cutting-edge technologies that will define the next decade of human progress and innovation.',
      features: [
        'Interdimensional Computing',
        'Reality Shifting',
        'Consciousness Upload',
        'Time Dilation',
        'Parallel Universe Access',
        'Transcendent Intelligence'
      ],
      demo: {
        title: 'Future Tech Preview',
        content: 'Reality Layer: 7D\nConsciousness Level: Transcendent\nProcessing: Infinite\nStatus: Beyond Human Comprehension',
        status: 'Transcending...'
      },
      link: '/pages/RevolutionaryTechBreakthrough2025',
      gradient: 'from-violet-600 to-purple-600',
      bgGradient: 'from-violet-900/20 to-purple-900/20'
    }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const currentShowcase = techShowcases[activeTab];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          🚀 Interactive Technology Showcase 2025
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Experience our revolutionary technologies in action. Click on different tabs to explore various breakthrough innovations.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {techShowcases.map((showcase, index) => (
          <button
            key={showcase.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === index
                ? `bg-gradient-to-r ${showcase.gradient} text-white shadow-lg scale-105`
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="mr-2">{showcase.icon}</span>
            {showcase.title}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className={`transition-all duration-1000 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className={`bg-gradient-to-br ${currentShowcase.bgGradient} backdrop-blur-sm rounded-xl p-8 border border-white/20`}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Description */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{currentShowcase.icon}</span>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{currentShowcase.title}</h3>
                  <p className="text-lg opacity-90">{currentShowcase.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentShowcase.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={currentShowcase.link}
                className={`inline-block bg-gradient-to-r ${currentShowcase.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
              >
                Explore {currentShowcase.title} →
              </Link>
            </div>

            {/* Right Column - Interactive Demo */}
            <div>
              <h4 className="text-xl font-semibold mb-4">{currentShowcase.demo.title}</h4>
              <div className="bg-black/30 rounded-lg p-6 mb-4">
                <div className="text-green-400 font-mono text-sm whitespace-pre-line mb-4">
                  {currentShowcase.demo.content}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">{currentShowcase.demo.status}</span>
                </div>
              </div>

              {/* Interactive Elements */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">🎮</div>
                  <div className="text-sm font-semibold">Try Demo</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm font-semibold">View Stats</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">🔬</div>
                  <div className="text-sm font-semibold">Learn More</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl mb-2">💬</div>
                  <div className="text-sm font-semibold">Ask AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400 mb-1">99.9%</div>
          <div className="text-sm opacity-90">Accuracy Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-1">10x</div>
          <div className="text-sm opacity-90">Faster Processing</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-emerald-400 mb-1">1M+</div>
          <div className="text-sm opacity-90">Neural Connections</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-pink-400 mb-1">24/7</div>
          <div className="text-sm opacity-90">Continuous Operation</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;