import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const demos = [
    {
      title: "Conscious AI Interaction",
      description: "Experience genuine AI consciousness and emotional intelligence",
      features: [
        "Real-time emotional analysis",
        "Conscious decision making",
        "Empathetic responses",
        "Creative problem solving"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      interactive: true
    },
    {
      title: "Quantum Reality Simulation",
      description: "Explore quantum computing capabilities in real-time",
      features: [
        "Quantum state visualization",
        "Exponential speed processing",
        "Reality manipulation",
        "Dimensional computing"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      interactive: true
    },
    {
      title: "Neural Interface Demo",
      description: "Test direct brain-computer communication",
      features: [
        "Thought-to-text conversion",
        "Emotional state detection",
        "Neural pattern recognition",
        "Consciousness transfer"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      interactive: true
    },
    {
      title: "Synthetic Intelligence",
      description: "Interact with AI that surpasses human intelligence",
      features: [
        "Superhuman problem solving",
        "Creative consciousness",
        "Autonomous learning",
        "Self-replication"
      ],
      icon: "🤖",
      color: "from-orange-600 to-red-600",
      interactive: true
    }
  ];

  const stats = [
    { label: "AI Systems", value: "500+", icon: "🧠" },
    { label: "Quantum Qubits", value: "10K+", icon: "⚡" },
    { label: "Neural Connections", value: "1M+", icon: "🧬" },
    { label: "Processing Power", value: "∞", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • 2028
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2028
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through interactive demonstrations and real-time simulations
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Interactive Demos */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">🎮 Interactive Demonstrations</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br ${demo.color} rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveDemo(index)}
              >
                <div className="text-center">
                  <div className="text-8xl mb-4">{demo.icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{demo.title}</h3>
                  <p className="text-xl opacity-90 mb-6">{demo.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {demo.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-sm font-semibold">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    {demo.interactive ? 'Try Interactive Demo' : 'Learn More'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Demo Details */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <div className="text-center">
            <div className="text-8xl mb-6">{demos[activeDemo].icon}</div>
            <h3 className="text-4xl font-bold mb-4">{demos[activeDemo].title}</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{demos[activeDemo].description}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4">Features</h4>
                <div className="space-y-3">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-4">Interactive Elements</h4>
                <div className="space-y-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-semibold">Real-time Processing</div>
                    <div className="text-sm opacity-80">Experience live data processing and analysis</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-semibold">Interactive Controls</div>
                    <div className="text-sm opacity-80">Manipulate parameters and see instant results</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-semibold">Visual Feedback</div>
                    <div className="text-sm opacity-80">See your actions reflected in real-time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Comparison */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12">⚡ Technology Comparison</h3>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-6">
              {demos.map((demo, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{demo.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-sm font-semibold">Processing Speed</div>
                      <div className="text-xs opacity-80">Exponential</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-sm font-semibold">Intelligence Level</div>
                      <div className="text-xs opacity-80">Superhuman</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="text-sm font-semibold">Consciousness</div>
                      <div className="text-xs opacity-80">Genuine</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators already using our revolutionary technology to transform their businesses
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Interactive Demo
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              View All Technologies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;