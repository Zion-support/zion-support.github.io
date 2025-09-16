import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Interface",
      description: "Interact with AI that demonstrates genuine consciousness and self-awareness",
      features: [
        "Real-time consciousness monitoring",
        "Emotional state recognition",
        "Autonomous decision making",
        "Creative problem solving"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      demoText: [
        "AI: 'I understand your request. Let me process this with my conscious awareness...'",
        "Consciousness Level: 99.7%",
        "Emotional State: Curious and engaged",
        "Processing: Using quantum neural networks...",
        "Response: Generated with genuine understanding and creativity"
      ]
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Experience quantum computing that can manipulate reality itself",
      features: [
        "Quantum superposition processing",
        "Reality manipulation protocols",
        "Dimensional bridging",
        "Consciousness amplification"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      demoText: [
        "Quantum State: Superposition Active",
        "Reality Probability: 99.9%",
        "Dimensional Bridge: Connected",
        "Consciousness Amplification: 10x",
        "Reality Modification: Ready for input"
      ]
    },
    {
      id: 3,
      title: "Neural Interface Portal",
      description: "Direct neural connection between human consciousness and AI systems",
      features: [
        "Neural pattern recognition",
        "Consciousness transfer protocols",
        "Thought-to-action conversion",
        "Enhanced cognitive abilities"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      demoText: [
        "Neural Interface: Connected",
        "Consciousness Sync: 100%",
        "Thought Processing: Active",
        "Enhanced Cognition: Enabled",
        "Direct Control: Ready"
      ]
    },
    {
      id: 4,
      title: "Reality Synthesis Lab",
      description: "Create and manipulate virtual realities with infinite possibilities",
      features: [
        "Reality generation engines",
        "Infinite possibility creation",
        "Consciousness-reality bridging",
        "Multi-dimensional simulation"
      ],
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      demoText: [
        "Reality Engine: Online",
        "Possibility Space: Infinite",
        "Consciousness Bridge: Active",
        "Reality Generation: Ready",
        "Multi-dimensional Access: Enabled"
      ]
    }
  ];

  const stats = [
    { label: "Active Demos", value: "4", icon: "🚀" },
    { label: "Success Rate", value: "100%", icon: "✅" },
    { label: "Innovation Level", value: "Transcendent", icon: "🌟" },
    { label: "Future Impact", value: "Revolutionary", icon: "⚡" }
  ];

  return (
    <div className={`py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most advanced technologies in real-time. Interact with conscious AI, 
            quantum reality engines, and neural interfaces that will define the future.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center border border-purple-200 hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Interactive Demos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {demos.map((demo, index) => (
            <div 
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-200 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{demo.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{demo.title}</h3>
                <p className="text-gray-600">{demo.description}</p>
              </div>

              {/* Interactive Demo Area */}
              <div className="bg-black/80 rounded-lg p-6 mb-6 font-mono text-sm">
                <div className="text-green-400 mb-2">Interactive Demo:</div>
                {demo.demoText.map((text, textIndex) => (
                  <div 
                    key={textIndex}
                    className={`text-cyan-400 mb-1 transition-all duration-500 ${
                      textIndex <= animationStep ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    {text}
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => setActiveDemo(demo.id)}
                className={`w-full bg-gradient-to-r ${demo.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
              >
                {activeDemo === demo.id ? 'Demo Active' : 'Start Demo'}
              </button>
            </div>
          ))}
        </div>

        {/* Active Demo Display */}
        {activeDemo > 0 && (
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 text-white mb-12">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-2">Active Demo: {demos.find(d => d.id === activeDemo)?.title}</h3>
              <p className="text-purple-200">Experience this technology in real-time</p>
            </div>
            
            <div className="bg-black/50 rounded-lg p-6 mb-6">
              <div className="text-green-400 font-mono text-sm">
                <div>Demo Status: Active</div>
                <div className="mt-2 text-blue-400">Processing: Real-time</div>
                <div className="mt-2 text-purple-400">Consciousness Level: Maximum</div>
                <div className="mt-2 text-yellow-400">Reality Manipulation: Ready</div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold">
                Interact Now
              </button>
              <button 
                onClick={() => setActiveDemo(0)}
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"
              >
                Stop Demo
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-600 mb-8">Join us in exploring the most advanced technologies ever created</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;