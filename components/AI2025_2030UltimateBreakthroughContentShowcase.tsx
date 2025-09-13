import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  Rocket,
  Target,
  Lightbulb
} from 'lucide-react';

const AI2025_2030UltimateBreakthroughContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai-2025');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const breakthroughContent = {
    'ai-2025': {
      title: 'AI 2025 Revolutionary Breakthroughs',
      subtitle: 'The Ultimate Content Revolution Begins',
      description: 'Discover the most advanced AI solutions that will transform your business in 2025',
      features: [
        {
          icon: Brain,
          title: 'Neural Synthesis Technology',
          description: 'Advanced AI that can synthesize complex neural patterns for unprecedented problem-solving',
          impact: '10,000x faster processing',
          color: 'from-blue-500 to-purple-600'
        },
        {
          icon: Zap,
          title: 'Quantum-AI Fusion',
          description: 'Revolutionary fusion of quantum computing and artificial intelligence',
          impact: '99.9% accuracy rate',
          color: 'from-purple-500 to-pink-600'
        },
        {
          icon: Cpu,
          title: 'Autonomous Decision Systems',
          description: 'Self-evolving AI systems that make complex decisions without human intervention',
          impact: '2,500% ROI increase',
          color: 'from-green-500 to-teal-600'
        },
        {
          icon: Database,
          title: 'Predictive Intelligence',
          description: 'AI that predicts future trends and market changes with unprecedented accuracy',
          impact: '95% prediction accuracy',
          color: 'from-orange-500 to-red-600'
        }
      ]
    },
    'quantum-2026': {
      title: 'Quantum Computing 2026 Breakthroughs',
      subtitle: 'Quantum Supremacy Achieved',
      description: 'Experience the power of error-corrected quantum computers and quantum internet',
      features: [
        {
          icon: Shield,
          title: 'Error-Corrected Quantum Computers',
          description: 'Breakthrough quantum computers with error correction for practical applications',
          impact: '1 million qubits',
          color: 'from-cyan-500 to-blue-600'
        },
        {
          icon: Globe,
          title: 'Quantum Internet',
          description: 'Ultra-secure quantum communication network spanning the globe',
          impact: '100% secure communication',
          color: 'from-indigo-500 to-purple-600'
        },
        {
          icon: Target,
          title: 'Quantum Machine Learning',
          description: 'Machine learning algorithms running on quantum hardware',
          impact: 'Exponential speedup',
          color: 'from-violet-500 to-pink-600'
        },
        {
          icon: Rocket,
          title: 'Quantum-AI Optimization',
          description: 'AI systems optimized using quantum algorithms for maximum efficiency',
          impact: 'Unlimited scalability',
          color: 'from-emerald-500 to-cyan-600'
        }
      ]
    },
    'automation-2027': {
      title: 'Advanced Automation 2027',
      subtitle: 'Intelligent Process Automation Revolution',
      description: 'Transform your business with self-evolving automation systems',
      features: [
        {
          icon: Users,
          title: 'Autonomous Business Operations',
          description: 'Complete business processes running autonomously with minimal human oversight',
          impact: '90% cost reduction',
          color: 'from-rose-500 to-pink-600'
        },
        {
          icon: TrendingUp,
          title: 'Smart Resource Management',
          description: 'AI-powered resource allocation and optimization across all business functions',
          impact: '300% efficiency gain',
          color: 'from-amber-500 to-orange-600'
        },
        {
          icon: Lightbulb,
          title: 'Self-Evolving Systems',
          description: 'Automation systems that learn and improve themselves continuously',
          impact: 'Continuous optimization',
          color: 'from-lime-500 to-green-600'
        },
        {
          icon: CheckCircle,
          title: 'Predictive Maintenance AI',
          description: 'AI that predicts and prevents equipment failures before they occur',
          impact: '99.9% uptime',
          color: 'from-sky-500 to-blue-600'
        }
      ]
    }
  };

  const tabs = [
    { id: 'ai-2025', label: 'AI 2025', icon: Brain },
    { id: 'quantum-2026', label: 'Quantum 2026', icon: Zap },
    { id: 'automation-2027', label: 'Automation 2027', icon: Cpu }
  ];

  const currentContent = breakthroughContent[activeTab as keyof typeof breakthroughContent];

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            ULTIMATE BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {currentContent.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {currentContent.description}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {currentContent.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Impact Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    {feature.impact}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of companies already experiencing the revolutionary power of our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                View Success Stories
                <Star className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimateBreakthroughContentShowcase;