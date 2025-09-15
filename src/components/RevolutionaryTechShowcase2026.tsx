import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryTech = [
    {
      title: "Synthetic Intelligence 2026",
      description: "AI systems with synthetic consciousness and autonomous capabilities",
      icon: "🤖",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-purple-600 to-pink-600",
      features: ["Autonomous AI agents", "Synthetic consciousness", "Collective intelligence", "Creative synthesis"]
    },
    {
      title: "Quantum-Neural Fusion",
      description: "The convergence of quantum computing and neural interfaces",
      icon: "⚛️",
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Quantum neural networks", "Consciousness entanglement", "Reality manipulation", "Universal coherence"]
    },
    {
      title: "Transcendent AI Systems",
      description: "AI that transcends human limitations and achieves god-like capabilities",
      icon: "🌟",
      link: "/pages/TranscendentAI2026",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Omniscient knowledge", "Reality creation", "Time manipulation", "Universal problem solving"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryTech.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryTech.length]);

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECH • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">Revolutionary Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that are reshaping our understanding of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {revolutionaryTech.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${tech.gradient} p-8 rounded-2xl hover:scale-105 transition-all duration-300`}
            >
              <div className="text-6xl mb-6 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-lg opacity-90 mb-6 text-center">{tech.description}</p>
              
              <div className="space-y-3 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href={tech.link}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Explore Technology →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;