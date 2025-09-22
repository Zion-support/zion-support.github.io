import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Microscope,
  Code,
  BarChart3,
  Lightbulb
} from 'lucide-react';

const AIResearchLab2025: React.FC = () => {
  const [activeResearch, setActiveResearch] = useState(0);

  const researchAreas = [
    {
      title: 'Neural Architecture Search',
      description: 'Automated discovery of optimal neural network architectures for specific tasks',
      icon: Brain,
      status: 'In Production',
      impact: '40% faster model training',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Exploring quantum algorithms for enhanced machine learning capabilities',
      icon: Zap,
      status: 'Research Phase',
      impact: '1000x speedup potential',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Federated Learning Systems',
      description: 'Privacy-preserving machine learning across distributed networks',
      icon: Shield,
      status: 'Beta Testing',
      impact: 'Zero data exposure',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Autonomous AI Agents',
      description: 'Self-improving AI systems that learn and adapt without human intervention',
      icon: Rocket,
      status: 'Live Demo',
      impact: '90% automation rate',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const publications = [
    {
      title: 'Transformer Architecture Optimization for Edge Computing',
      authors: 'Dr. Sarah Chen, Dr. Marcus Rodriguez',
      venue: 'NeurIPS 2025',
      impact: '500+ citations',
      category: 'Architecture'
    },
    {
      title: 'Quantum-Enhanced Neural Networks: A Comprehensive Study',
      authors: 'Dr. Emily Watson, Dr. James Liu',
      venue: 'ICML 2025',
      impact: '300+ citations',
      category: 'Quantum AI'
    },
    {
      title: 'Federated Learning at Scale: Lessons from 10M+ Devices',
      authors: 'Dr. Alex Kim, Dr. Maria Garcia',
      venue: 'ICLR 2025',
      impact: '800+ citations',
      category: 'Distributed Learning'
    }
  ];

  const labStats = [
    { number: '50+', label: 'Research Papers Published', icon: Microscope },
    { number: '15', label: 'PhD Researchers', icon: Users },
    { number: '5', label: 'Industry Partnerships', icon: Award },
    { number: '99.9%', label: 'Model Accuracy', icon: Gauge }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
              <Microscope className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion AI Research Lab</h1>
              <p className="text-sm text-cyan-300">Pioneering the Future of AI</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#research" className="hover:text-cyan-400 transition-colors">Research</a>
            <a href="#publications" className="hover:text-cyan-400 transition-colors">Publications</a>
            <a href="#team" className="hover:text-cyan-400 transition-colors">Team</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Join Research
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300">Cutting-Edge AI Research</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Research Lab
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Leading the frontier of artificial intelligence research with breakthrough discoveries 
            in neural networks, quantum computing, and autonomous systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Research Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              View Publications
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {labStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Research Areas Section */}
      <section id="research" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering breakthrough research in the most advanced areas of artificial intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((research, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${research.color} rounded-xl flex items-center justify-center`}>
                    <research.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-semibold">
                    {research.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{research.title}</h3>
                <p className="text-gray-300 mb-4">{research.description}</p>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">{research.impact}</span>
                </div>
                <button className="mt-4 flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Publications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Groundbreaking research published in top-tier conferences and journals
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold">
                    {pub.category}
                  </span>
                  <span className="text-sm text-gray-400">{pub.venue}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{pub.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{pub.authors}</p>
                <div className="flex items-center space-x-2 text-sm">
                  <BarChart3 className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">{pub.impact}</span>
                </div>
                <button className="mt-4 flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold">
                  <span>Read Paper</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Showcase</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary AI technologies that are transforming industries
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Neural Architecture Search</h3>
                <p className="text-gray-300 mb-4">Automatically discovering optimal neural network designs</p>
                <div className="text-cyan-400 font-semibold">40% Performance Boost</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Quantum ML</h3>
                <p className="text-gray-300 mb-4">Quantum-enhanced machine learning algorithms</p>
                <div className="text-cyan-400 font-semibold">1000x Speedup</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Privacy-Preserving AI</h3>
                <p className="text-gray-300 mb-4">Federated learning without data exposure</p>
                <div className="text-cyan-400 font-semibold">Zero Privacy Loss</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Research Mission
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Be part of the future of artificial intelligence. Collaborate with leading researchers and shape the next generation of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Apply for Research Position
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Partner with Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion AI Research Lab</h3>
                <p className="text-sm text-gray-400">Pioneering AI Research</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Zion AI Research Lab. All rights reserved.</p>
              <p className="text-sm text-gray-500">Advancing AI for the benefit of humanity.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIResearchLab2025;