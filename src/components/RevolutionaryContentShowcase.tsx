import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: "Next-Gen AI Revolution 2026",
      description: "Experience the future of artificial intelligence with revolutionary autonomous systems and synthetic intelligence platforms.",
      image: "🧠",
      link: "/pages/NextGenAIRevolution2026",
      category: "Artificial Intelligence",
      color: "from-purple-600 to-pink-600",
      features: ["Autonomous AI Agents", "Quantum-Enhanced AI", "Synthetic Intelligence"]
    },
    {
      title: "Quantum Computing Revolution 2026",
      description: "Harness the power of quantum computing with processors that solve impossible problems in seconds.",
      image: "⚡",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum Computing",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum Supremacy", "Molecular Simulation", "Quantum Cryptography"]
    },
    {
      title: "Neural Interface Revolution 2026",
      description: "Bridge the gap between mind and machine with direct brain-computer communication technology.",
      image: "🧬",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Technology",
      color: "from-emerald-600 to-teal-600",
      features: ["Thought Control", "Memory Enhancement", "Precision Control"]
    },
    {
      title: "Revolutionary Tech Blog 2026",
      description: "Deep insights into cutting-edge technologies reshaping our world with expert analysis and research.",
      image: "📚",
      link: "/pages/RevolutionaryTechBlog2026",
      category: "Technology Insights",
      color: "from-violet-600 to-purple-600",
      features: ["Expert Analysis", "Research Papers", "Industry Trends"]
    },
    {
      title: "Comprehensive Tech Insights 2026",
      description: "Strategic analysis and market trends to help you navigate the future of technology innovation.",
      image: "🔍",
      link: "/pages/ComprehensiveTechInsights2026",
      category: "Strategic Analysis",
      color: "from-indigo-600 to-purple-600",
      features: ["Market Analysis", "Future Predictions", "Industry Impact"]
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse text-white">
              🚀 REVOLUTIONARY CONTENT • JANUARY 2026
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Technology Content
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Explore our groundbreaking content showcasing the latest technological innovations 
              that are reshaping industries and defining the future.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-5xl">{item.image}</div>
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-semibold mb-2`}>
                      {item.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={item.link}
                  className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                >
                  Explore Content →
                </a>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Explore the Future of Technology?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Dive deep into our comprehensive collection of revolutionary technology content 
              and stay ahead of the innovation curve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Browse All Content
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Get Updates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;