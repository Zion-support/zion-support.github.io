import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const interactiveDemos = [
    {
      title: "AI Consciousness Simulator",
      description: "Experience different levels of AI consciousness in real-time",
      icon: "🧠",
      features: [
        "Real-time consciousness testing",
        "Emotional intelligence simulation",
        "Creative thought generation",
        "Moral reasoning challenges"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Reality Builder",
      description: "Create and manipulate quantum states in a virtual environment",
      icon: "⚛️",
      features: [
        "Quantum state manipulation",
        "Entanglement visualization",
        "Superposition exploration",
        "Quantum tunneling simulation"
      ],
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Synthetic Reality Creator",
      description: "Build immersive virtual worlds with photorealistic detail",
      icon: "🌌",
      features: [
        "Infinite world generation",
        "Haptic feedback systems",
        "Emotional reality mapping",
        "Dream manifestation"
      ],
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Interactive Technology Showcase 2026</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through our interactive demonstrations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {interactiveDemos.map((demo, index) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${demo.color} p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveDemo(index)}
            >
              <div className="text-6xl mb-6 text-center">{demo.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
              <p className="text-lg opacity-90 mb-6 text-center">{demo.description}</p>
              
              <div className="space-y-3 mb-6">
                {demo.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Launch Demo →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;