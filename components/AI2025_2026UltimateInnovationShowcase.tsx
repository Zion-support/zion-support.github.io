'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Rocket, 
  Target,
  TrendingUp,
  Users,
  Globe,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const AI2025_2026UltimateInnovationShowcase = () => {
  const [activeTab, setActiveTab] = useState('ai-breakthroughs');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const innovations = {
    'ai-breakthroughs': {
      title: 'AI Breakthroughs 2025-2026',
      subtitle: 'Revolutionary AI Technologies Transforming Industries',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      features: [
        {
          title: 'Quantum-Enhanced AI Processing',
          description: 'Leveraging quantum computing principles for exponentially faster AI computations',
          impact: '1000x faster processing',
          icon: Cpu
        },
        {
          title: 'Neural Interface Integration',
          description: 'Direct brain-computer interfaces for seamless human-AI collaboration',
          impact: '95% efficiency boost',
          icon: Brain
        },
        {
          title: 'Autonomous Decision Systems',
          description: 'Self-evolving AI systems that make complex decisions without human intervention',
          impact: '99.9% accuracy rate',
          icon: Target
        },
        {
          title: 'Emotional Intelligence AI',
          description: 'AI systems that understand and respond to human emotions with unprecedented accuracy',
          impact: '85% user satisfaction',
          icon: Users
        }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing Revolution',
      subtitle: 'Next-Generation Computing Power for Complex Problems',
      icon: Zap,
      color: 'from-cyan-600 to-teal-600',
      features: [
        {
          title: 'Quantum Supremacy Achieved',
          description: 'Breakthrough quantum algorithms solving previously impossible problems',
          impact: 'Exponential speedup',
          icon: Zap
        },
        {
          title: 'Quantum Machine Learning',
          description: 'Quantum-enhanced algorithms for pattern recognition and optimization',
          impact: '100x faster training',
          icon: Brain
        },
        {
          title: 'Quantum Cryptography',
          description: 'Unbreakable encryption methods using quantum principles',
          impact: '100% security guarantee',
          icon: Shield
        },
        {
          title: 'Quantum Simulation',
          description: 'Accurate simulation of complex molecular and atomic systems',
          impact: 'Revolutionary drug discovery',
          icon: Activity
        }
      ]
    },
    'automation-solutions': {
      title: 'Advanced Automation Solutions',
      subtitle: 'Intelligent Automation for Every Business Process',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      features: [
        {
          title: 'Hyper-Intelligent RPA',
          description: 'Robotic Process Automation with advanced AI decision-making capabilities',
          impact: '90% cost reduction',
          icon: Rocket
        },
        {
          title: 'Autonomous Business Operations',
          description: 'Self-managing business processes that adapt and optimize continuously',
          impact: '24/7 operations',
          icon: Globe
        },
        {
          title: 'Predictive Maintenance AI',
          description: 'AI systems that predict and prevent equipment failures before they occur',
          impact: '99% uptime achieved',
          icon: Shield
        },
        {
          title: 'Intelligent Resource Allocation',
          description: 'AI-driven optimization of resources across all business functions',
          impact: '40% efficiency gain',
          icon: BarChart3
        }
      ]
    },
    'data-intelligence': {
      title: 'Data Intelligence Platform',
      subtitle: 'Transform Raw Data into Strategic Insights',
      icon: Database,
      color: 'from-green-600 to-emerald-600',
      features: [
        {
          title: 'Real-Time Analytics Engine',
          description: 'Instant analysis of massive datasets with sub-second response times',
          impact: 'Real-time insights',
          icon: Activity
        },
        {
          title: 'Predictive Intelligence',
          description: 'Advanced forecasting models that predict future trends and outcomes',
          impact: '95% accuracy rate',
          icon: TrendingUp
        },
        {
          title: 'Automated Data Governance',
          description: 'AI-powered data quality management and compliance monitoring',
          impact: '100% compliance',
          icon: Shield
        },
        {
          title: 'Intelligent Data Visualization',
          description: 'Dynamic, interactive dashboards that adapt to user needs and preferences',
          impact: 'Enhanced decision making',
          icon: PieChart
        }
      ]
    }
  };

  const stats = [
    { label: 'AI Models Deployed', value: '10,000+', icon: Brain },
    { label: 'Quantum Qubits', value: '1M+', icon: Zap },
    { label: 'Automation Processes', value: '50,000+', icon: Rocket },
    { label: 'Data Points Processed', value: '1B+', icon: Database }
  ];

  const currentInnovation = innovations[activeTab as keyof typeof innovations];

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-purple-200 font-medium">2025-2026 Innovation Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ultimate AI Innovation
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Showcase 2025-2026
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the most revolutionary AI technologies, quantum computing breakthroughs, 
            and automation solutions that are reshaping the future of business and technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-4">
                <stat.icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(innovations).map(([key, innovation]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <innovation.icon className="w-5 h-5 inline mr-2" />
              {innovation.title}
            </button>
          ))}
        </motion.div>

        {/* Content Section */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
        >
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${currentInnovation.color} mb-6`}>
              <currentInnovation.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {currentInnovation.title}
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {currentInnovation.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentInnovation.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${currentInnovation.color} flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-purple-400 font-medium">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">{feature.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already leveraging these 
              revolutionary AI technologies to gain competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group">
                <Award className="w-5 h-5 mr-2" />
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center group">
                <Lightbulb className="w-5 h-5 mr-2" />
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AI2025_2026UltimateInnovationShowcase;