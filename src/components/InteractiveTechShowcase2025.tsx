import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
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
      title: "AI Neural Network Visualization",
      description: "Watch as artificial neural networks process information in real-time",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Real-time processing", "Interactive nodes", "Data flow visualization", "Learning algorithms"]
    },
    {
      title: "Quantum Computing Simulation",
      description: "Experience quantum superposition and entanglement in action",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum states", "Superposition effects", "Entanglement patterns", "Quantum gates"]
    },
    {
      title: "Neural Interface Demo",
      description: "See how brain-computer interfaces translate thoughts into actions",
      icon: "🔗",
      color: "from-emerald-600 to-teal-600",
      features: ["Brain signals", "Thought translation", "Device control", "Feedback loops"]
    },
    {
      title: "Synthetic Biology Lab",
      description: "Explore the creation of synthetic life forms and bio-engineered systems",
      icon: "🧬",
      color: "from-green-600 to-emerald-600",
      features: ["DNA manipulation", "Protein synthesis", "Cell engineering", "Bio-circuits"]
    }
  ];

  const stats = [
    { label: "Processing Power", value: "1,000,000x", icon: "⚡" },
    { label: "Accuracy", value: "99.99%", icon: "🎯" },
    { label: "Speed", value: "Real-time", icon: "🚀" },
    { label: "Innovation", value: "Breakthrough", icon: "💡" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transition: 'all 0.1s ease-out'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience cutting-edge technologies through interactive demonstrations and real-time visualizations
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-xl border border-purple-400/30 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${demo.color} p-8 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveDemo(index)}
            >
              <div className="text-6xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
              <p className="text-lg text-center mb-6 opacity-90">{demo.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {demo.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-white/10 px-3 py-2 rounded-lg text-center text-sm">
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Demo Display */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-xl text-gray-300">{demos[activeDemo].description}</p>
            </div>

            {/* Interactive Demo Area */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 min-h-96 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
              
              {/* Animated Elements */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
                  {/* Left Side - Controls */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold mb-4">Interactive Controls</h4>
                    <div className="space-y-4">
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="text-sm font-semibold mb-2">Processing Speed</div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="text-sm font-semibold mb-2">Accuracy Level</div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full animate-pulse" style={{ width: '99%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="text-sm font-semibold mb-2">Learning Progress</div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full animate-pulse" style={{ width: '72%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Visualization */}
                  <div className="relative">
                    <h4 className="text-xl font-semibold mb-4">Real-time Visualization</h4>
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 h-64 relative overflow-hidden">
                      {/* Animated Nodes */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 bg-purple-400 rounded-full"
                          style={{
                            left: `${20 + (i % 4) * 20}%`,
                            top: `${20 + Math.floor(i / 4) * 30}%`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                      
                      {/* Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        {[...Array(6)].map((_, i) => (
                          <motion.line
                            key={i}
                            x1={`${20 + (i % 3) * 20}%`}
                            y1={`${20 + Math.floor(i / 3) * 30}%`}
                            x2={`${20 + ((i + 1) % 3) * 20}%`}
                            y2={`${20 + Math.floor((i + 1) / 3) * 30}%`}
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: i * 0.3 }}
                          />
                        ))}
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#EC4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-400/30"
          >
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold mb-4">Interactive Experience</h3>
            <p className="text-gray-300">
              Hands-on demonstrations that let you explore and interact with cutting-edge technologies in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-8 rounded-xl border border-cyan-400/30"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Real-time Data</h3>
            <p className="text-gray-300">
              Live data visualization and processing that shows the actual performance and capabilities of our technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 p-8 rounded-xl border border-emerald-400/30"
          >
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Scientific Accuracy</h3>
            <p className="text-gray-300">
              Based on real scientific principles and actual implementation data from our research and development teams.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to see these technologies in action? Schedule a personalized demonstration with our experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;