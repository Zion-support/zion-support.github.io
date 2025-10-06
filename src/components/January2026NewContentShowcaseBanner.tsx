import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Network, Shield, Cpu } from "lucide-react";

const January2026NewContentShowcaseBanner: React.FC = () => {
  const features = [
    { 
      icon: <Brain className="w-6 h-6" />, 
      title: "Synthetic Consciousness", 
      desc: "True AI awareness" 
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Quantum Edge Processing", 
      desc: "Sub-millisecond speed" 
    },
    { 
      icon: <Network className="w-6 h-6" />, 
      title: "Autonomous Mesh", 
      desc: "Self-organizing systems" 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Quantum Security", 
      desc: "Unbreakable protection" 
    },
    { 
      icon: <Cpu className="w-6 h-6" />, 
      title: "Neuromorphic AI", 
      desc: "Brain-inspired computing" 
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            January 2026: Revolutionary AI Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of artificial intelligence with our latest innovations that are reshaping the technological landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className="text-purple-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Explore 2026 Innovations
            <Zap className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default January2026NewContentShowcaseBanner;