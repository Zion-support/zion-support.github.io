import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechnologyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
  applications: string[];
}

const EnhancedContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTech, setSelectedTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies: TechnologyItem[] = [
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence 2026',
      description: 'Revolutionary AI systems with self-evolving neural architectures',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      features: ['Self-Evolving Networks', 'Quantum Processing', 'Predictive Consciousness'],
      applications: ['Healthcare', 'Manufacturing', 'Research', 'Space Exploration']
    },
    {
      id: 'quantum-neural',
      title: 'Quantum-Neural Fusion',
      description: 'The convergence of quantum computing and neural networks',
      icon: '⚛️',
      gradient: 'from-cyan-600 to-blue-600',
      features: ['Quantum Supremacy', 'Neural Quantum States', 'Quantum Coherence'],
      applications: ['Drug Discovery', 'Cryptography', 'Climate Modeling', 'Financial Optimization']
    },
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2025',
      description: 'Transformative artificial intelligence reshaping industries',
      icon: '🤖',
      gradient: 'from-emerald-600 to-teal-600',
      features: ['Autonomous Agents', 'Edge AI Computing', 'Generative AI 2.0'],
      applications: ['Enterprise Automation', 'Content Creation', 'Predictive Analytics', 'Smart Cities']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces revolutionizing human-computer interaction',
      icon: '🧬',
      gradient: 'from-orange-600 to-red-600',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback'],
      applications: ['Medical Rehabilitation', 'Gaming', 'Communication', 'Education']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTech((prev) => (prev + 1) % technologies.length);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🌟' },
    { id: 'technologies', label: 'Technologies', icon: '🔬' },
    { id: 'applications', label: 'Applications', icon: '🚀' },
    { id: 'future', label: 'Future Vision', icon: '🔮' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🚀 IMMERSIVE TECHNOLOGY EXPERIENCE • 2026
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl font-bold text-white mb-6"
            >
              Enhanced Technology Showcase
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            >
              Experience the future of technology through our immersive interactive showcase featuring cutting-edge innovations
            </motion.p>
          </div>

          {/* Interactive Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">🌟 Revolutionary Technology Overview</h2>
                  <p className="text-xl text-gray-300">Discover the technologies that will define the next decade</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-gradient-to-br ${tech.gradient}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                      onClick={() => setSelectedTech(index)}
                    >
                      <div className="text-4xl mb-3 text-center">{tech.icon}</div>
                      <h3 className="text-lg font-bold mb-2 text-center text-white">{tech.title}</h3>
                      <p className="text-gray-300 text-sm text-center">{tech.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'technologies' && (
              <motion.div
                key="technologies"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">🔬 Advanced Technologies</h2>
                  <p className="text-xl text-gray-300">Deep dive into our cutting-edge innovations</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <h4 className="text-xl font-semibold text-white mb-3">🧠 Synthetic Neural Networks</h4>
                      <p className="text-gray-300">
                        Self-evolving artificial neural networks that can modify their own architecture based on learning requirements and environmental changes.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <h4 className="text-xl font-semibold text-white mb-3">⚛️ Quantum-Neural Processing</h4>
                      <p className="text-gray-300">
                        Integration of quantum computing principles with neural networks for exponential computational power and parallel processing capabilities.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <h4 className="text-xl font-semibold text-white mb-3">🧬 Neural Interface Systems</h4>
                      <p className="text-gray-300">
                        Non-invasive brain-computer interfaces that enable direct neural communication and thought-based control systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <h4 className="text-xl font-semibold text-white mb-3">🔮 Predictive AI Models</h4>
                      <p className="text-gray-300">
                        Advanced artificial intelligence systems that can anticipate future scenarios and make proactive decisions.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <h4 className="text-xl font-semibold text-white mb-3">🌐 Distributed Consciousness</h4>
                      <p className="text-gray-300">
                        AI systems that operate across multiple nodes while maintaining coherent decision-making processes and shared knowledge.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <h4 className="text-xl font-semibold text-white mb-3">🚀 Autonomous Evolution</h4>
                      <p className="text-gray-300">
                        Self-improving systems that can enhance their own capabilities and optimize their performance without human intervention.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'applications' && (
              <motion.div
                key="applications"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">🚀 Real-World Applications</h2>
                  <p className="text-xl text-gray-300">Transforming industries with revolutionary technology</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: '🏥', title: 'Healthcare Revolution', desc: 'Personalized medicine and predictive diagnostics' },
                    { icon: '🏭', title: 'Industrial Automation', desc: 'Self-optimizing manufacturing systems' },
                    { icon: '🌱', title: 'Environmental Solutions', desc: 'Climate modeling and sustainability planning' },
                    { icon: '🚀', title: 'Space Exploration', desc: 'Autonomous missions and resource management' },
                    { icon: '🏦', title: 'Financial Services', desc: 'Risk assessment and portfolio optimization' },
                    { icon: '🎓', title: 'Education', desc: 'Personalized learning and skill development' }
                  ].map((app, index) => (
                    <motion.div
                      key={app.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
                    >
                      <div className="text-4xl mb-3 text-center">{app.icon}</div>
                      <h3 className="text-lg font-bold mb-2 text-center text-white">{app.title}</h3>
                      <p className="text-gray-300 text-sm text-center">{app.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'future' && (
              <motion.div
                key="future"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">🔮 Future Vision</h2>
                  <p className="text-xl text-gray-300">Envisioning the technological landscape of tomorrow</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
                      <h4 className="text-xl font-semibold text-white mb-3">🌟 2026-2030: The Age of Synthetic Intelligence</h4>
                      <p className="text-purple-200">
                        AI systems will achieve human-level reasoning capabilities while maintaining the ability to process information at superhuman speeds.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30">
                      <h4 className="text-xl font-semibold text-white mb-3">⚛️ 2030-2035: Quantum Supremacy</h4>
                      <p className="text-cyan-200">
                        Quantum computers will solve problems that are currently impossible, revolutionizing cryptography, drug discovery, and climate modeling.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30">
                      <h4 className="text-xl font-semibold text-white mb-3">🧬 2035-2040: Neural Interface Revolution</h4>
                      <p className="text-emerald-200">
                        Direct brain-computer interfaces will become mainstream, enabling seamless communication between human consciousness and AI systems.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-lg p-6 border border-orange-400/30">
                      <h4 className="text-xl font-semibold text-white mb-3">🚀 2040+: Post-Human Intelligence</h4>
                      <p className="text-orange-200">
                        The convergence of all technologies will create a post-human intelligence era where the boundaries between human and artificial consciousness blur.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Shape the Future?</h2>
              <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
                Join us in building the next generation of technology that will transform how we live, work, and interact with the world.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  🚀 Start Your Journey
                </button>
                <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                  📞 Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;