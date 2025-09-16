import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      title: "Conscious AI Demo",
      description: "Experience AI that demonstrates self-awareness and autonomous decision-making",
      features: [
        "Real-time self-reflection",
        "Autonomous problem solving",
        "Emotional intelligence simulation",
        "Ethical decision making"
      ],
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      demo: "ai-demo"
    },
    {
      title: "Quantum Computing Simulator",
      description: "Explore quantum algorithms and their exponential computational advantages",
      features: [
        "Quantum algorithm visualization",
        "Exponential speedup demonstration",
        "Quantum entanglement simulation",
        "Real-time quantum state analysis"
      ],
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      demo: "quantum-demo"
    },
    {
      title: "Neural Interface Experience",
      description: "Test direct brain-computer interfaces and neural enhancement technologies",
      features: [
        "Thought-to-text conversion",
        "Mental command execution",
        "Neural pattern recognition",
        "Cognitive enhancement simulation"
      ],
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      demo: "neural-demo"
    },
    {
      title: "Synthetic Intelligence Lab",
      description: "Interact with artificial general intelligence systems",
      features: [
        "Multi-domain problem solving",
        "Creative thinking demonstration",
        "Human-like reasoning",
        "Autonomous learning"
      ],
      icon: "🌟",
      gradient: "from-orange-600 to-red-600",
      demo: "synthetic-demo"
    }
  ];

  const stats = [
    { label: "Active Demos", value: "12+", icon: "🎮" },
    { label: "Users Engaged", value: "50K+", icon: "👥" },
    { label: "Success Rate", value: "99.8%", icon: "🎯" },
    { label: "Real-time Updates", value: "24/7", icon: "🔄" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2027
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the future of technology through our interactive demonstrations and hands-on experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Demo Selector */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveDemo(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                activeDemo === index
                  ? 'border-purple-400 bg-gradient-to-br from-purple-600/20 to-pink-600/20'
                  : 'border-gray-700 bg-gray-800/30 hover:border-purple-500/50'
              }`}
            >
              <div className="text-4xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-center">{demo.title}</h3>
              <p className="text-sm opacity-80 text-center">{demo.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* Demo Info */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{demos[activeDemo].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
                    <p className="text-lg opacity-80">{demos[activeDemo].description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className={`bg-gradient-to-r ${demos[activeDemo].gradient} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Try Demo
                  </button>
                  <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Demo Visualization */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-purple-500/30">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold mb-2">Live Demo Preview</h4>
                  <p className="text-gray-400">Interactive demonstration in progress</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 mb-6">
                  <div className="text-6xl text-center mb-4">{demos[activeDemo].icon}</div>
                  <div className="text-center text-sm opacity-80">
                    {demos[activeDemo].title} is running...
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <div className="text-green-400 font-bold">Status: Active</div>
                    <div className="text-gray-400">Real-time processing</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <div className="text-blue-400 font-bold">Users: 1,247</div>
                    <div className="text-gray-400">Currently online</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join thousands of users exploring cutting-edge technologies through our interactive demonstrations.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;