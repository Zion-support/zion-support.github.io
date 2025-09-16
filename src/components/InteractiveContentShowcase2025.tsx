import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveContentShowcase2025: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary AI Content 2025",
      description: "Experience the future of artificial intelligence with autonomous systems and consciousness computing",
      icon: "🤖",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryAIContent2025",
      features: ["Autonomous AI", "Consciousness Computing", "Self-Learning Systems"]
    },
    {
      id: 2,
      title: "Advanced Technology Showcase",
      description: "Interactive demos of cutting-edge technologies including quantum computing and neural interfaces",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/AdvancedTechnologyShowcase2025",
      features: ["Quantum Supremacy", "Neural Interfaces", "Space Technology"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication enabling thought-controlled devices and mind-machine integration",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceFuture",
      features: ["BCI Technology", "Thought Control", "Mind-Machine Integration"]
    },
    {
      id: 4,
      title: "Quantum Computing Breakthrough",
      description: "1000+ qubit quantum processors achieving quantum supremacy and exponential processing power",
      icon: "⚛️",
      gradient: "from-violet-600 to-indigo-600",
      link: "/pages/QuantumComputingBreakthrough",
      features: ["1000+ Qubits", "Quantum Supremacy", "Exponential Speed"]
    },
    {
      id: 5,
      title: "Space Technology 2025",
      description: "Advanced space exploration and colonization technologies for Mars and beyond",
      icon: "🚀",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/SpaceTechAI2025",
      features: ["Mars Colonization", "Space Manufacturing", "Asteroid Mining"]
    },
    {
      id: 6,
      title: "Biotech AI Revolution",
      description: "AI-powered biotechnology solutions for healthcare, genetics, and medical research",
      icon: "🧪",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/BiotechAIRevolution2025",
      features: ["Medical AI", "Genetic Research", "Drug Discovery"]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold mb-6">
            🌟 NEW CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our revolutionary new content featuring the most advanced technologies of 2025. 
            Hover over each card to discover interactive features and detailed information.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(item.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-white relative overflow-hidden h-80`}
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90 mb-6 flex-1">{item.description}</p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredCard === item.id ? 1 : 0,
                      y: hoveredCard === item.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 mb-6"
                  >
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                  
                  <a
                    href={item.link}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center block"
                  >
                    Explore Content →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Discover all our revolutionary content and experience the most advanced technologies of 2025
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                View All Content →
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;