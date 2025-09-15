import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      title: "Advanced AI Transformation",
      description: "Revolutionary AI systems that learn, adapt, and optimize themselves",
      icon: "🤖",
      link: "/pages/AdvancedAITransformation2025",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Computing Revolution",
      description: "Exponential computing power that solves impossible problems",
      icon: "⚛️",
      link: "/pages/QuantumComputingRevolution2025",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer communication for enhanced capabilities",
      icon: "🧬",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, showcaseItems.length]);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Enhanced Content Showcase</h2>
          <p className="text-xl opacity-90">Discover our most advanced technology solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl hover:scale-105 transition-all duration-300`}
            >
              <div className="text-6xl mb-6 text-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
              <p className="text-lg opacity-90 mb-6 text-center">{item.description}</p>
              <div className="text-center">
                <a
                  href={item.link}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Explore Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;