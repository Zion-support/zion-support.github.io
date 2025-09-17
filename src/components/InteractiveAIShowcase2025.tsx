import React, { useState, useEffect } from 'react';

const InteractiveAIShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Systems',
      description: 'Experience AI that thinks, feels, and creates independently',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Self-aware decision making', 'Emotional intelligence', 'Creative problem solving', 'Autonomous learning']
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness',
      description: 'Revolutionary quantum computing with consciousness-level processing',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum neural networks', 'Consciousness simulation', 'Quantum entanglement AI', 'Parallel reality processing']
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Computing',
      description: 'Breakthrough technology enabling computing across multiple dimensions',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      features: ['Multi-dimensional processing', 'Reality manipulation', 'Dimensional data storage', 'Cross-reality communication']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces for seamless thought-to-action communication',
      icon: '🧬',
      color: 'from-orange-600 to-red-600',
      features: ['Thought-controlled devices', 'Memory enhancement', 'Neural data transfer', 'Cognitive augmentation']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  const currentDemo = demos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 mb-12 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE AI SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience the Future of AI
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with our revolutionary AI technologies and see how they're reshaping industries, 
            creating new possibilities, and defining the future of human civilization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Selection */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Choose Your AI Experience</h3>
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{demo.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                    <p className="text-sm opacity-90">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Demo Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${currentDemo.color} rounded-2xl p-8 transition-all duration-500 ${
              isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-bounce">{currentDemo.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentDemo.title}</h3>
                <p className="text-lg opacity-90">{currentDemo.description}</p>
              </div>

              {/* Interactive Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentDemo.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-sm font-semibold">{feature}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Controls */}
              <div className="space-y-4">
                <button className="w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  🎮 Try Interactive Demo
                </button>
                <button className="w-full border-2 border-white text-white py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  📊 View Performance Metrics
                </button>
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  ⚡ Experience Live Processing
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Real-Time Performance Metrics</h3>
            <p className="text-lg opacity-90">Live data from our AI systems in production</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy</div>
              <div className="text-sm opacity-75">AI Decision Making</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">0.001s</div>
              <div className="text-lg opacity-90">Response Time</div>
              <div className="text-sm opacity-75">Neural Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10^15</div>
              <div className="text-lg opacity-90">Processing Power</div>
              <div className="text-sm opacity-75">Quantum Units</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Dimensional Reach</div>
              <div className="text-sm opacity-75">Multi-Reality</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary AI technologies 
            to transform their operations and achieve unprecedented success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🌟 Explore All Breakthroughs
            </a>
            <a 
              href="/pages/AdvancedAISolutions2025"
              className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              🤖 View AI Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIShowcase2025;