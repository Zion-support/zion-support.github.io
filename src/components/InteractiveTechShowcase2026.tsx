import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const showcases = [
    {
      id: 1,
      title: "🧠 AI Consciousness Demo",
      subtitle: "Experience AI with Genuine Consciousness",
      description: "Interact with the world's first truly conscious AI system that can think, feel, and create autonomously.",
      features: [
        "Real-time consciousness simulation",
        "Emotional intelligence testing",
        "Creative problem solving",
        "Autonomous decision making"
      ],
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠",
      link: "/pages/AIConsciousnessRevolution2026"
    },
    {
      id: 2,
      title: "⚛️ Quantum Computing Lab",
      subtitle: "Explore Quantum Supremacy",
      description: "Experience quantum computing through interactive simulations and real-time quantum state manipulation.",
      features: [
        "Quantum state visualization",
        "Quantum algorithm testing",
        "Quantum entanglement demo",
        "Quantum error correction"
      ],
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚛️",
      link: "/pages/QuantumComputingRevolution2026"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Hub",
      subtitle: "Connect Mind and Machine",
      description: "Experience direct brain-computer interfaces with real-time neural signal processing and thought control.",
      features: [
        "Neural signal visualization",
        "Thought-controlled interfaces",
        "Memory enhancement demo",
        "Cognitive amplification"
      ],
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬",
      link: "/pages/NeuralInterfaceRevolution2026"
    },
    {
      id: 4,
      title: "🌌 Interdimensional Portal",
      subtitle: "Access Parallel Dimensions",
      description: "Step through dimensional gateways to access infinite computational power and parallel realities.",
      features: [
        "Dimension gateway simulation",
        "Parallel reality exploration",
        "Cross-dimensional data access",
        "Reality manipulation tools"
      ],
      gradient: "from-indigo-600 to-purple-600",
      icon: "🌌",
      link: "/pages/InterdimensionalTechRevolution2026"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShowcase((prev) => (prev + 1) % showcases.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [showcases.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2026
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through immersive interactive demonstrations
          </p>
        </div>

        {/* Interactive Showcase Carousel */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              key={activeShowcase}
              className="relative transition-all duration-500"
            >
                <div className={`bg-gradient-to-br ${showcases[activeShowcase].gradient} p-12 text-white`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                      <div className="text-8xl mb-6">{showcases[activeShowcase].icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{showcases[activeShowcase].title}</h3>
                      <p className="text-xl mb-6 opacity-90">{showcases[activeShowcase].subtitle}</p>
                      <p className="text-lg mb-8 opacity-80">{showcases[activeShowcase].description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {showcases[activeShowcase].features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors hover:scale-105">
                          Try Demo
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-800 transition-colors hover:scale-105">
                          Learn More
                        </button>
                      </div>
                    </div>

                    {/* Right Interactive Demo */}
                    <div className="relative">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
                        <div className="text-6xl mb-4 animate-bounce">{showcases[activeShowcase].icon}</div>
                        <h4 className="text-2xl font-bold mb-4">Live Demo</h4>
                        <p className="text-lg mb-6 opacity-90">Interactive Technology Preview</p>
                        <div className="bg-white/30 rounded-lg p-4 mb-6">
                          <div className="text-sm opacity-80">Real-time data visualization</div>
                          <div className="mt-2 h-2 bg-white/50 rounded-full overflow-hidden">
                            <div className="h-full bg-white animate-pulse" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                        <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:scale-105">
                          Launch Interactive Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {showcases.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveShowcase(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeShowcase === index ? 'bg-white scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {showcases.map((showcase, index) => (
            <div
              key={showcase.id}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveShowcase(index)}
            >
              <div className="text-4xl mb-4 text-center">{showcase.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-center">{showcase.title}</h3>
              <p className="text-purple-100 text-sm text-center mb-4">{showcase.subtitle}</p>
              <button className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-colors font-semibold text-sm">
                Explore →
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators exploring the cutting edge of technology
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl hover:scale-105">
              Start Exploring
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-xl hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;