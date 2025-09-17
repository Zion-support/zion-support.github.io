import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Quantum-Neural Fusion AI",
      description: "Revolutionary AI that combines quantum computing with neural networks for unprecedented processing power and consciousness-like reasoning.",
      icon: "🧠⚛️",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      features: [
        "Quantum-Enhanced Learning",
        "Consciousness Simulation",
        "Real-time Adaptation",
        "Multi-dimensional Processing"
      ],
      applications: [
        "Scientific Discovery",
        "Medical Diagnosis",
        "Financial Modeling",
        "Space Exploration"
      ]
    },
    {
      id: 2,
      title: "Synthetic Intelligence Platform",
      description: "Next-generation synthetic intelligence that transcends traditional AI limitations with self-evolving capabilities and ethical reasoning.",
      icon: "🤖✨",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      features: [
        "Self-Evolution",
        "Ethical Reasoning",
        "Creative Problem Solving",
        "Emotional Intelligence"
      ],
      applications: [
        "Creative Industries",
        "Education",
        "Therapy & Counseling",
        "Art & Design"
      ]
    },
    {
      id: 3,
      title: "Cyber-Physical Integration",
      description: "Seamless integration of digital and physical worlds through advanced IoT, edge computing, and real-time synchronization.",
      icon: "🌐🔗",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      features: [
        "Real-time Synchronization",
        "Edge Intelligence",
        "Predictive Maintenance",
        "Autonomous Coordination"
      ],
      applications: [
        "Smart Cities",
        "Manufacturing",
        "Transportation",
        "Healthcare"
      ]
    },
    {
      id: 4,
      title: "Advanced Biotechnology",
      description: "Cutting-edge biotech solutions merging biology and technology for medical breakthroughs and human enhancement.",
      icon: "🧬🔬",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      features: [
        "Gene Editing",
        "Neural Enhancement",
        "Regenerative Medicine",
        "Bio-Interfaces"
      ],
      applications: [
        "Personalized Medicine",
        "Human Augmentation",
        "Disease Prevention",
        "Longevity Research"
      ]
    }
  ];

  const tabs = [
    { name: "Overview", icon: "🌟" },
    { name: "Features", icon: "⚡" },
    { name: "Applications", icon: "🚀" },
    { name: "Future", icon: "🔮" }
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 ULTIMATE TECHNOLOGY SHOWCASE 2026
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            Revolutionary Technology Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto"
          >
            Experience the future of technology with our most advanced innovations that are reshaping industries and transforming human potential
          </motion.p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {tech.title}
                </h3>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              {/* Interactive Tabs */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {tabs.map((tab, tabIndex) => (
                    <button
                      key={tabIndex}
                      onClick={() => setActiveTab(tabIndex)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        activeTab === tabIndex
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-white/20 text-purple-200 hover:bg-white/30'
                      }`}
                    >
                      {tab.icon} {tab.name}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[120px]"
                  >
                    {activeTab === 0 && (
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {tech.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-purple-200">
                              <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {activeTab === 1 && (
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white mb-3">Advanced Features</h4>
                        <div className="space-y-2">
                          {tech.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                              <span className="text-purple-400">⚡</span>
                              <span className="text-purple-200">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {activeTab === 2 && (
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white mb-3">Real-World Applications</h4>
                        <div className="space-y-2">
                          {tech.applications.map((app, idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 rounded-lg">
                              <span className="text-cyan-400">🚀</span>
                              <span className="text-purple-200">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {activeTab === 3 && (
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white mb-3">Future Vision</h4>
                        <p className="text-purple-200 text-sm leading-relaxed">
                          This technology represents the next evolution in human-machine collaboration, 
                          promising to unlock new possibilities in every field of human endeavor. 
                          The future is here, and it's more exciting than we ever imagined.
                        </p>
                        <div className="flex items-center space-x-2 text-yellow-400 text-sm">
                          <span>🔮</span>
                          <span>Revolutionary Impact Expected by 2030</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105">
                  Explore Technology →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
              Join us in exploring these revolutionary technologies and discover how they can transform your business and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg">
                🚀 Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                📚 Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;