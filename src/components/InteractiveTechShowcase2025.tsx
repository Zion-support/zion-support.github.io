import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Shield, Globe, Play, Code, Settings, ArrowRight } from 'lucide-react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techCategories = [
    {
      id: 0,
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "Neural Networks", description: "Advanced deep learning models", status: "Live", performance: "99.2%" },
        { name: "Natural Language Processing", description: "Human-like text understanding", status: "Live", performance: "98.7%" },
        { name: "Computer Vision", description: "Advanced image recognition", status: "Live", performance: "97.8%" }
      ]
    },
    {
      id: 1,
      title: "Quantum Computing",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "Quantum Algorithms", description: "Exponential speed improvements", status: "Beta", performance: "1000x" },
        { name: "Quantum Cryptography", description: "Unbreakable encryption", status: "Live", performance: "100%" },
        { name: "Quantum Simulation", description: "Complex system modeling", status: "Beta", performance: "500x" }
      ]
    },
    {
      id: 2,
      title: "Cybersecurity",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Zero Trust Architecture", description: "Never trust, always verify", status: "Live", performance: "99.9%" },
        { name: "AI-Powered Threat Detection", description: "Real-time threat analysis", status: "Live", performance: "99.5%" },
        { name: "Quantum-Safe Encryption", description: "Future-proof security", status: "Beta", performance: "100%" }
      ]
    },
    {
      id: 3,
      title: "Cloud Infrastructure",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "Edge Computing", description: "Ultra-low latency processing", status: "Live", performance: "<1ms" },
        { name: "Serverless Architecture", description: "Auto-scaling infrastructure", status: "Live", performance: "99.99%" },
        { name: "Multi-Cloud Orchestration", description: "Seamless cloud management", status: "Live", performance: "99.8%" }
      ]
    }
  ];

  const currentCategory = techCategories[activeTab];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4" />
            Interactive Technology Showcase
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into our cutting-edge technologies and experience the future of computing, AI, and digital transformation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.title}
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
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <div className={`inline-flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r ${currentCategory.color} text-white mb-6`}>
                <currentCategory.icon className="w-8 h-8" />
                <h3 className="text-2xl font-bold">{currentCategory.title}</h3>
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Discover the latest breakthroughs in {currentCategory.title.toLowerCase()} and see how they're transforming industries worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tech.status === 'Live'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {tech.status}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white">{tech.name}</h4>
                    <p className="text-gray-300 leading-relaxed">{tech.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-sm text-gray-400">Performance</span>
                      <span className={`font-bold bg-gradient-to-r ${currentCategory.color} bg-clip-text text-transparent`}>
                        {tech.performance}
                      </span>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium transition-all duration-300">
                        <Play className="w-4 h-4" />
                        Demo
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-white/20 hover:border-white/40 rounded-lg text-white text-sm font-medium transition-all duration-300">
                        <Settings className="w-4 h-4" />
                        Configure
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className={`bg-gradient-to-r from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10`}>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Ready to Experience {currentCategory.title}?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of developers and enterprises already building the future with our cutting-edge technologies.
                </p>
                <button className={`group inline-flex items-center gap-3 bg-gradient-to-r ${currentCategory.color} text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300`}>
                  Start Building
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveTechShowcase2025;