import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud,
  ArrowRight,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const contentSections = [
    {
      id: 'ai-breakthroughs',
      title: 'AI Breakthroughs 2026',
      description: 'Revolutionary AI technologies transforming industries',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'Quantum Neural Networks',
          description: 'Next-generation AI combining quantum computing with neural networks for unprecedented processing power.',
          link: '/ai-2026-quantum-neural-fusion',
          featured: true
        },
        {
          title: 'Synthetic Intelligence Platforms',
          description: 'Advanced AI systems that can think, learn, and adapt like human intelligence.',
          link: '/ai-2025-synthetic-intelligence',
          featured: true
        },
        {
          title: 'Autonomous Business Systems',
          description: 'Self-managing AI systems that run entire business operations without human intervention.',
          link: '/ai-2025-autonomous-operations',
          featured: false
        },
        {
          title: 'Consciousness-Level AI',
          description: 'AI systems approaching human-level consciousness and decision-making capabilities.',
          link: '/ai-2025-consciousness-evolution',
          featured: false
        }
      ]
    },
    {
      id: 'automation-solutions',
      title: 'Advanced Automation',
      description: 'Cutting-edge automation solutions for enterprise transformation',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          title: 'Hyper-Automation Platforms',
          description: 'End-to-end automation solutions that transform entire business processes.',
          link: '/advanced-automation-solutions-2026',
          featured: true
        },
        {
          title: 'Intelligent Process Mining',
          description: 'AI-powered analysis and optimization of business processes.',
          link: '/automation-solutions-2025',
          featured: true
        },
        {
          title: 'Autonomous Workflows',
          description: 'Self-executing workflows that adapt and optimize in real-time.',
          link: '/automation-solutions-2026',
          featured: false
        },
        {
          title: 'Cognitive Automation',
          description: 'AI systems that understand context and make intelligent decisions.',
          link: '/advanced-automation-solutions-2025',
          featured: false
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Revolutionary quantum technologies for the future',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      content: [
        {
          title: 'Quantum Supremacy Solutions',
          description: 'Quantum computers that outperform classical computers in specific tasks.',
          link: '/quantum-computing-2026',
          featured: true
        },
        {
          title: 'Quantum Machine Learning',
          description: 'ML algorithms running on quantum computers for exponential speedups.',
          link: '/quantum-computing-breakthrough-2026',
          featured: true
        },
        {
          title: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum principles.',
          link: '/quantum-computing-solutions-2026',
          featured: false
        },
        {
          title: 'Quantum Neural Interfaces',
          description: 'Direct brain-computer interfaces using quantum technology.',
          link: '/neural-interface-revolution-2026',
          featured: false
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Next-generation cloud solutions and architectures',
      icon: Cloud,
      color: 'from-green-500 to-teal-500',
      content: [
        {
          title: 'Edge Computing Networks',
          description: 'Distributed computing infrastructure bringing processing closer to users.',
          link: '/cloud-infrastructure-solutions-2025',
          featured: true
        },
        {
          title: 'Quantum Cloud Platforms',
          description: 'Cloud services powered by quantum computing technology.',
          link: '/quantum-computing-solutions-2025',
          featured: true
        },
        {
          title: 'Autonomous Cloud Management',
          description: 'Self-managing cloud infrastructure that optimizes itself.',
          link: '/advanced-automation-solutions-2025',
          featured: false
        },
        {
          title: 'Hybrid Quantum-Classical Clouds',
          description: 'Seamless integration of quantum and classical computing resources.',
          link: '/quantum-computing-2025',
          featured: false
        }
      ]
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '10,000+', icon: Brain },
    { label: 'Automation Projects', value: '5,000+', icon: Zap },
    { label: 'Quantum Qubits', value: '1M+', icon: Cpu },
    { label: 'Cloud Instances', value: '100K+', icon: Cloud }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-blue-200 font-medium">2026 Ultimate Content Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Content Hub
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore the most advanced AI, automation, quantum computing, and cloud infrastructure solutions 
            that are reshaping the future of technology and business.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-4">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-20">
          {contentSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="relative"
            >
              {/* Section Header */}
              <div className="flex items-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${section.color} mr-6`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{section.title}</h3>
                  <p className="text-gray-300 text-lg">{section.description}</p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {section.content.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                    className={`group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 ${
                      item.featured ? 'ring-2 ring-blue-500/50' : ''
                    }`}
                  >
                    {item.featured && (
                      <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full">
                        Featured
                      </div>
                    )}
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <Link 
                      href={item.link}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Explore Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary technology solutions 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;