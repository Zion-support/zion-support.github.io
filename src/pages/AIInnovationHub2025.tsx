import React from 'react';
import { motion } from 'framer-motion';

const AIInnovationHub2025: React.FC = () => {
  const innovations = [
    {
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that operate independently across multiple domains",
      features: ["Self-healing capabilities", "Cross-platform integration", "Real-time learning"],
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Quantum-Neural Fusion",
      description: "Revolutionary combination of quantum computing with neural networks",
      features: ["Exponential processing power", "Quantum entanglement learning", "Neural quantum states"],
      icon: "⚛️",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Conscious AI Systems",
      description: "AI that exhibits self-awareness and emotional intelligence",
      features: ["Emotional recognition", "Ethical decision making", "Creative problem solving"],
      icon: "🧠",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions for infinite processing capacity",
      features: ["Multi-dimensional processing", "Reality simulation", "Infinite scalability"],
      icon: "🌌",
      gradient: "from-indigo-500 to-cyan-600"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Success Rate", icon: "📊" },
    { number: "50+", label: "Active Innovations", icon: "🚀" },
    { number: "24/7", label: "AI Monitoring", icon: "⏰" },
    { number: "∞", label: "Possibilities", icon: "✨" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH AI INNOVATION • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover the most revolutionary AI technologies that are reshaping our world and creating infinite possibilities for the future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Innovations Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Revolutionary AI Innovations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the cutting-edge AI technologies that are transforming industries and creating new possibilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{innovation.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{innovation.title}</h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${innovation.gradient} rounded-full`}></div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {innovation.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {innovation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full bg-gradient-to-r ${innovation.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-5xl font-bold mb-6">Interactive AI Demo</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Experience our AI innovations in real-time with interactive demonstrations
            </p>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">AI Targeting</h3>
                  <p className="text-gray-300">Precision AI targeting with 99.9% accuracy</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
                  <p className="text-gray-300">Instant AI responses and decision making</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔮</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
                  <p className="text-gray-300">Future prediction with quantum accuracy</p>
                </div>
              </div>
              
              <div className="mt-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Start Interactive Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of organizations already using our revolutionary AI technologies to achieve unprecedented success
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationHub2025;