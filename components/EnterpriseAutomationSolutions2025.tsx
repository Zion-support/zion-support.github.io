'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Users, 
  BarChart3, 
  Settings,
  ArrowRight,
  CheckCircle,
  Play,
  Download,
  Star,
  TrendingUp,
  Clock,
  Award,
  Target,
  Globe,
  Lock,
  RefreshCw,
  Sparkles
} from 'lucide-react';

interface AutomationSolution {
  id: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  icon: React.ReactNode;
  gradient: string;
  features: string[];
  benefits: {
    efficiency: number;
    costSavings: number;
    timeReduction: number;
    accuracy: number;
  };
  implementation: {
    duration: string;
    complexity: 'Low' | 'Medium' | 'High';
    teamSize: string;
  };
  pricing: {
    tier: 'Starter' | 'Professional' | 'Enterprise';
    price: string;
    features: string[];
  }[];
}

const EnterpriseAutomationSolutions2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSolution, setSelectedSolution] = useState<AutomationSolution | null>(null);
  const [hoveredSolution, setHoveredSolution] = useState<string | null>(null);

  const solutions: AutomationSolution[] = [
    {
      id: 'hr-automation',
      title: 'HR Process Automation Suite',
      description: 'Complete automation of recruitment, onboarding, performance management, and employee lifecycle processes.',
      category: 'Human Resources',
      industry: 'All Industries',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-blue-600 to-cyan-600',
      features: [
        'Automated resume screening',
        'AI-powered candidate matching',
        'Automated interview scheduling',
        'Performance review automation',
        'Employee onboarding workflows',
        'Compliance tracking'
      ],
      benefits: {
        efficiency: 85,
        costSavings: 60,
        timeReduction: 70,
        accuracy: 92
      },
      implementation: {
        duration: '4-6 weeks',
        complexity: 'Medium',
        teamSize: '3-5 people'
      },
      pricing: [
        {
          tier: 'Starter',
          price: '$2,999/month',
          features: ['Up to 100 employees', 'Basic automation', 'Email support']
        },
        {
          tier: 'Professional',
          price: '$7,999/month',
          features: ['Up to 500 employees', 'Advanced AI', 'Priority support']
        },
        {
          tier: 'Enterprise',
          price: 'Custom',
          features: ['Unlimited employees', 'Custom integrations', 'Dedicated support']
        }
      ]
    },
    {
      id: 'finance-automation',
      title: 'Financial Operations Automation',
      description: 'End-to-end automation of accounting, invoicing, expense management, and financial reporting processes.',
      category: 'Finance',
      industry: 'All Industries',
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: 'from-green-600 to-emerald-600',
      features: [
        'Automated invoice processing',
        'Expense categorization',
        'Financial report generation',
        'Budget tracking automation',
        'Tax compliance monitoring',
        'Payment processing automation'
      ],
      benefits: {
        efficiency: 90,
        costSavings: 45,
        timeReduction: 80,
        accuracy: 98
      },
      implementation: {
        duration: '6-8 weeks',
        complexity: 'High',
        teamSize: '5-8 people'
      },
      pricing: [
        {
          tier: 'Starter',
          price: '$1,999/month',
          features: ['Basic accounting', 'Invoice automation', 'Standard reports']
        },
        {
          tier: 'Professional',
          price: '$4,999/month',
          features: ['Advanced analytics', 'Multi-currency', 'API integrations']
        },
        {
          tier: 'Enterprise',
          price: 'Custom',
          features: ['Custom reporting', 'Dedicated support', 'SLA guarantees']
        }
      ]
    },
    {
      id: 'customer-service',
      title: 'Customer Service Automation',
      description: 'Intelligent customer support automation with AI chatbots, ticket routing, and sentiment analysis.',
      category: 'Customer Service',
      industry: 'Retail, E-commerce, SaaS',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-purple-600 to-pink-600',
      features: [
        'AI-powered chatbots',
        'Automated ticket routing',
        'Sentiment analysis',
        'Knowledge base automation',
        'Customer feedback processing',
        'Escalation management'
      ],
      benefits: {
        efficiency: 75,
        costSavings: 50,
        timeReduction: 65,
        accuracy: 88
      },
      implementation: {
        duration: '3-4 weeks',
        complexity: 'Medium',
        teamSize: '2-4 people'
      },
      pricing: [
        {
          tier: 'Starter',
          price: '$999/month',
          features: ['Basic chatbot', 'Email support', 'Standard templates']
        },
        {
          tier: 'Professional',
          price: '$2,999/month',
          features: ['Advanced AI', 'Multi-channel', 'Analytics dashboard']
        },
        {
          tier: 'Enterprise',
          price: 'Custom',
          features: ['Custom AI training', 'White-label', '24/7 support']
        }
      ]
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain Automation',
      description: 'Comprehensive supply chain optimization with demand forecasting, inventory management, and logistics automation.',
      category: 'Supply Chain',
      industry: 'Manufacturing, Retail, Logistics',
      icon: <Globe className="w-8 h-8" />,
      gradient: 'from-orange-600 to-red-600',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Supplier management',
        'Order processing automation',
        'Logistics tracking',
        'Quality control automation'
      ],
      benefits: {
        efficiency: 88,
        costSavings: 35,
        timeReduction: 55,
        accuracy: 94
      },
      implementation: {
        duration: '8-12 weeks',
        complexity: 'High',
        teamSize: '6-10 people'
      },
      pricing: [
        {
          tier: 'Starter',
          price: '$3,999/month',
          features: ['Basic forecasting', 'Inventory tracking', 'Standard reports']
        },
        {
          tier: 'Professional',
          price: '$8,999/month',
          features: ['Advanced analytics', 'Multi-warehouse', 'API integrations']
        },
        {
          tier: 'Enterprise',
          price: 'Custom',
          features: ['Custom algorithms', 'Global deployment', 'Dedicated team']
        }
      ]
    },
    {
      id: 'marketing-automation',
      title: 'Marketing Automation Platform',
      description: 'Complete marketing automation with lead generation, email campaigns, social media management, and analytics.',
      category: 'Marketing',
      industry: 'All Industries',
      icon: <Target className="w-8 h-8" />,
      gradient: 'from-indigo-600 to-purple-600',
      features: [
        'Lead generation automation',
        'Email campaign management',
        'Social media automation',
        'Content personalization',
        'Marketing analytics',
        'A/B testing automation'
      ],
      benefits: {
        efficiency: 82,
        costSavings: 40,
        timeReduction: 60,
        accuracy: 85
      },
      implementation: {
        duration: '4-6 weeks',
        complexity: 'Medium',
        teamSize: '3-5 people'
      },
      pricing: [
        {
          tier: 'Starter',
          price: '$1,499/month',
          features: ['Email automation', 'Basic analytics', 'Standard templates']
        },
        {
          tier: 'Professional',
          price: '$3,999/month',
          features: ['Multi-channel', 'Advanced analytics', 'Custom workflows']
        },
        {
          tier: 'Enterprise',
          price: 'Custom',
          features: ['Custom integrations', 'Dedicated support', 'White-label']
        }
      ]
    },
    {
      id: 'it-operations',
      title: 'IT Operations Automation',
      description: 'Comprehensive IT infrastructure automation with monitoring, incident management, and deployment automation.',
      category: 'IT Operations',
      industry: 'Technology, Finance, Healthcare',
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-cyan-600 to-blue-600',
      features: [
        'Infrastructure monitoring',
        'Automated incident response',
        'Deployment automation',
        'Security monitoring',
        'Performance optimization',
        'Backup automation'
      ],
      benefits: {
        efficiency: 92,
        costSavings: 55,
        timeReduction: 85,
        accuracy: 96
      },
      implementation: {
        duration: '6-10 weeks',
        complexity: 'High',
        teamSize: '5-8 people'
      },
      pricing: [
        {
          tier: 'Starter',
          price: '$2,499/month',
          features: ['Basic monitoring', 'Email alerts', 'Standard dashboards']
        },
        {
          tier: 'Professional',
          price: '$5,999/month',
          features: ['Advanced monitoring', 'Custom alerts', 'API access']
        },
        {
          tier: 'Enterprise',
          price: 'Custom',
          features: ['Custom integrations', 'Dedicated support', 'SLA guarantees']
        }
      ]
    }
  ];

  const categories = ['all', 'Human Resources', 'Finance', 'Customer Service', 'Supply Chain', 'Marketing', 'IT Operations'];

  const filteredSolutions = selectedCategory === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-12 h-12 text-yellow-400 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Enterprise Automation
            </h1>
            <Building2 className="w-12 h-12 text-yellow-400 ml-4" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solutions 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive automation solutions. 
            Increase efficiency, reduce costs, and scale your enterprise with AI-powered automation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category === 'all' ? 'All Solutions' : category}
            </button>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredSolutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedSolution(solution)}
              onMouseEnter={() => setHoveredSolution(solution.id)}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.gradient}`}>
                    {solution.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{solution.industry}</div>
                    <div className="text-sm font-semibold text-white">{solution.category}</div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {solution.description}
                </p>

                {/* Benefits Preview */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {solution.benefits.efficiency}%
                    </div>
                    <div className="text-xs text-gray-400">Efficiency</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      {solution.benefits.costSavings}%
                    </div>
                    <div className="text-xs text-gray-400">Cost Savings</div>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="space-y-2 mb-6">
                  {solution.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {solution.features.length > 3 && (
                    <div className="text-sm text-gray-400">
                      +{solution.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Implementation Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {solution.implementation.duration}
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs ${
                    solution.implementation.complexity === 'Low' 
                      ? 'bg-green-500/20 text-green-400'
                      : solution.implementation.complexity === 'Medium'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {solution.implementation.complexity}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Starting at {solution.pricing[0].price}</span>
                  <div className="flex items-center text-yellow-400 group-hover:text-white transition-colors">
                    <span className="text-sm font-semibold mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution Detail Modal */}
        <AnimatePresence>
          {selectedSolution && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
            >
              <motion.div
                className="bg-slate-900 rounded-2xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedSolution.gradient} mr-6`}>
                      {selectedSolution.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedSolution.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400">{selectedSolution.category}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{selectedSolution.industry}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSolution(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Description */}
                <p className="text-xl text-gray-300 mb-8">
                  {selectedSolution.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-6">Key Features</h4>
                    <div className="space-y-3">
                      {selectedSolution.features.map((feature, index) => (
                        <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-6">Expected Benefits</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-3xl font-bold text-green-400 mb-2">
                          {selectedSolution.benefits.efficiency}%
                        </div>
                        <div className="text-gray-300">Efficiency Gain</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-3xl font-bold text-blue-400 mb-2">
                          {selectedSolution.benefits.costSavings}%
                        </div>
                        <div className="text-gray-300">Cost Savings</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-3xl font-bold text-purple-400 mb-2">
                          {selectedSolution.benefits.timeReduction}%
                        </div>
                        <div className="text-gray-300">Time Reduction</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">
                          {selectedSolution.benefits.accuracy}%
                        </div>
                        <div className="text-gray-300">Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Implementation Details */}
                <div className="mt-8">
                  <h4 className="text-2xl font-bold text-white mb-6">Implementation Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white/5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Clock className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-white font-semibold">Duration</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-400">
                        {selectedSolution.implementation.duration}
                      </div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Settings className="w-5 h-5 text-purple-400 mr-2" />
                        <span className="text-white font-semibold">Complexity</span>
                      </div>
                      <div className={`text-2xl font-bold ${
                        selectedSolution.implementation.complexity === 'Low' 
                          ? 'text-green-400'
                          : selectedSolution.implementation.complexity === 'Medium'
                          ? 'text-yellow-400'
                          : 'text-red-400'
                      }`}>
                        {selectedSolution.implementation.complexity}
                      </div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Users className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-white font-semibold">Team Size</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">
                        {selectedSolution.implementation.teamSize}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mt-8">
                  <h4 className="text-2xl font-bold text-white mb-6">Pricing Plans</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedSolution.pricing.map((plan, index) => (
                      <div key={index} className={`p-6 rounded-lg border ${
                        plan.tier === 'Professional' 
                          ? 'border-purple-500 bg-purple-500/10' 
                          : 'border-white/20 bg-white/5'
                      }`}>
                        <div className="text-center mb-4">
                          <h5 className="text-xl font-bold text-white mb-2">{plan.tier}</h5>
                          <div className="text-3xl font-bold text-yellow-400">{plan.price}</div>
                        </div>
                        <div className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </button>
                  <button className="flex-1 bg-white/10 text-white py-4 px-8 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Enterprise?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 500+ enterprises already using our automation solutions to transform their operations and achieve unprecedented efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 px-8 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center">
              <Building2 className="w-5 h-5 mr-2" />
              Start Your Automation Journey
            </button>
            <button className="bg-white/10 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              Contact Sales Team
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseAutomationSolutions2025;