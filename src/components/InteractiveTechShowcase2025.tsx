import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Demo",
      description: "Watch our AI think, learn, and make decisions in real-time",
      features: [
        "Real-time neural network visualization",
        "Decision-making process display",
        "Learning algorithm demonstration",
        "Emotional response simulation"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      status: "Processing 1.2M data points..."
    },
    {
      id: 2,
      title: "Quantum Computing Simulator",
      description: "Experience quantum processing power and parallel universe computing",
      features: [
        "Quantum state visualization",
        "Parallel processing demonstration",
        "Quantum entanglement simulation",
        "Reality manipulation interface"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      status: "Quantum coherence: 99.7%"
    },
    {
      id: 3,
      title: "Neural Interface Experience",
      description: "Direct brain-computer interaction and thought-based computing",
      features: [
        "Thought-to-action translation",
        "Neural signal visualization",
        "Memory enhancement demo",
        "Consciousness transfer simulation"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      status: "Neural sync: 98.3%"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions and alternate realities",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation algorithms",
        "Parallel universe data access",
        "Consciousness dimension travel"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600",
      status: "Dimension access: 847 realities"
    }
  ];

  const metrics = [
    { label: "Processing Power", value: "847 PetaFLOPS", color: "text-blue-400" },
    { label: "Neural Networks", value: "1.2B Active", color: "text-purple-400" },
    { label: "Quantum Qubits", value: "10,000+", color: "text-cyan-400" },
    { label: "Dimensions", value: "847", color: "text-indigo-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience our revolutionary technologies through interactive demos and real-time simulations
          </p>
        </motion.div>

        {/* Demo Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {demos.map((demo, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{demo.icon}</span>
              {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-br ${demos[activeDemo].color}/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{demos[activeDemo].icon}</div>
              <h3 className="text-4xl font-bold mb-6">{demos[activeDemo].title}</h3>
              <p className="text-xl mb-6 opacity-90">{demos[activeDemo].description}</p>
              
              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-4">Interactive Features:</h4>
                <ul className="space-y-3">
                  {demos[activeDemo].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-lg">
                      <span className="w-3 h-3 bg-white rounded-full mr-4"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                >
                  {isPlaying ? 'Pause Demo' : 'Start Demo'}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-black/50 rounded-lg p-8 border border-white/20">
              <div className="text-center">
                <div className="text-8xl mb-4">{demos[activeDemo].icon}</div>
                <div className="text-3xl font-bold mb-2">
                  {isPlaying ? 'Demo Active' : 'Demo Ready'}
                </div>
                <div className="text-green-400 text-lg mb-4">
                  {demos[activeDemo].status}
                </div>
                
                {/* Real-time Metrics */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white/10 rounded p-3">
                      <div className="font-bold">{metric.label}</div>
                      <div className={`text-2xl ${metric.color}`}>{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="text-sm mb-2">Processing Progress</div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: isPlaying ? "100%" : "0%" }}
                      transition={{ duration: 3, repeat: isPlaying ? Infinity : 0 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Data Stream */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Live Data Stream</h3>
            <p className="text-xl opacity-80">Real-time processing and analysis</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/30 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Neural Activity</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Synaptic Firing</span>
                  <span className="text-green-400">847 Hz</span>
                </div>
                <div className="flex justify-between">
                  <span>Memory Formation</span>
                  <span className="text-blue-400">1.2K/s</span>
                </div>
                <div className="flex justify-between">
                  <span>Decision Making</span>
                  <span className="text-purple-400">99.7%</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Quantum States</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Qubit Coherence</span>
                  <span className="text-cyan-400">99.7%</span>
                </div>
                <div className="flex justify-between">
                  <span>Entanglement</span>
                  <span className="text-blue-400">10K pairs</span>
                </div>
                <div className="flex justify-between">
                  <span>Superposition</span>
                  <span className="text-indigo-400">Active</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Dimension Access</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Active Dimensions</span>
                  <span className="text-purple-400">847</span>
                </div>
                <div className="flex justify-between">
                  <span>Reality Shifts</span>
                  <span className="text-pink-400">1.2K/s</span>
                </div>
                <div className="flex justify-between">
                  <span>Consciousness Transfer</span>
                  <span className="text-emerald-400">98.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Experience the Future Today</h3>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most advanced technologies that will shape tomorrow
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Interactive Demo
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;