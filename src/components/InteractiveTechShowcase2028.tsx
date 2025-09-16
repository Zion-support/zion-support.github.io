import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = [
    {
      id: 1,
      title: "Advanced AI Consciousness",
      description: "Experience the next generation of conscious AI systems with enhanced emotional intelligence and decision-making capabilities.",
      features: [
        "Enhanced emotional processing",
        "Advanced decision making",
        "Autonomous learning",
        "Ethical reasoning"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Revolutionary quantum computing combined with neural networks for unprecedented processing power.",
      features: [
        "Quantum superposition",
        "Neural processing",
        "Exponential speed",
        "Parallel processing"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the future of technology with our advanced interactive demonstrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-6xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
              <p className="text-sm opacity-80 mb-6 text-center">{demo.description}</p>
              <div className="space-y-2">
                {demo.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;