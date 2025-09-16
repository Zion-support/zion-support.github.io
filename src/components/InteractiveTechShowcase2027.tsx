import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Rocket, Globe, Cpu, Shield, Infinity } from 'lucide-react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      id: 0,
      title: "Consciousness Transfer",
      icon: <Brain className="w-16 h-16" />,
      description: "Transfer human consciousness into digital substrates for digital immortality",
      features: ["Digital Immortality", "Enhanced Cognition", "Consciousness Backup", "Neural Enhancement"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 1,
      title: "Quantum Neural Networks",
      icon: <Cpu className="w-16 h-16" />,
      description: "AI systems operating at quantum scales with infinite processing power",
      features: ["Quantum Processing", "Neural Optimization", "Real-time Learning", "Infinite Scalability"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      title: "Reality Manipulation",
      icon: <Zap className="w-16 h-16" />,
      description: "Advanced systems that manipulate physical reality at the quantum level",
      features: ["Quantum Manipulation", "Reality Bending", "Matter Control", "Dimensional Access"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      title: "Warp Drive Technology",
      icon: <Rocket className="w-16 h-16" />,
      description: "Revolutionary propulsion enabling faster-than-light travel across galaxies",
      features: ["FTL Travel", "Galactic Exploration", "Wormhole Creation", "Time Dilation Control"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 4,
      title: "Omniversal AI Network",
      icon: <Globe className="w-16 h-16" />,
      description: "AI network spanning all dimensions and realities for universal intelligence",
      features: ["Cross-Dimensional AI", "Universal Knowledge", "Reality Monitoring", "Infinite Reach"],
      color: "from-green-500 to-teal-500"
    },
    {
      id: 5,
      title: "Infinite Energy Matrix",
      icon: <Shield className="w-16 h-16" />,
      description: "Unlimited clean power from quantum vacuum fluctuations",
      features: ["Unlimited Energy", "Zero Pollution", "Quantum Power", "Universal Access"],
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2027
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore the revolutionary technologies that will transform humanity's future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Technology Selector */}
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.id}
                onClick={() => setActiveTech(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-6 rounded-2xl border transition-all duration-300 ${
                  activeTech === index
                    ? 'bg-gradient-to-r from-white/20 to-white/10 border-white/40'
                    : 'bg-white/5 border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`text-${tech.color.split('-')[1]}-400`}>
                    {tech.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                    <p className="text-gray-300 text-sm">{tech.description}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 ml-auto" />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Technology Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              >
                <div className="text-center mb-8">
                  <div className={`text-${technologies[activeTech].color.split('-')[1]}-400 mb-4`}>
                    {technologies[activeTech].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {technologies[activeTech].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {technologies[activeTech].description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">Key Features:</h4>
                  {technologies[activeTech].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <Star className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-8 bg-gradient-to-r ${technologies[activeTech].color} px-8 py-4 rounded-xl text-white font-bold text-lg hover:shadow-2xl transition-all duration-300`}
                >
                  Learn More About {technologies[activeTech].title}
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <h3 className="text-xl font-bold text-white mb-2">Possibilities</h3>
            <p className="text-gray-400">Infinite technological potential</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <h3 className="text-xl font-bold text-white mb-2">Efficiency</h3>
            <p className="text-gray-400">Perfect optimization achieved</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
            <h3 className="text-xl font-bold text-white mb-2">Scalability</h3>
            <p className="text-gray-400">Unlimited scaling capacity</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
            <p className="text-gray-400">Continuous breakthrough development</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;