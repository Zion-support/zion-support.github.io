import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bot,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  Cpu,
  Network,
  Settings,
  BarChart3,
  Clock,
  CheckCircle,
  Play,
  Download,
  BookOpen,
  MessageSquare,
  Workflow,
  Target,
  Database,
  Cloud,
  Brain,
  Lock,
  Eye,
  BarChart,
  PieChart,
  Activity,
  X
} from 'lucide-react';

export default function AutonomousBusinessOperationsPlatform() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedUseCase, setSelectedUseCase] = useState(null);

  const features = [
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'AI-powered automation that learns from your business processes and continuously improves efficiency.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Workflow,
      title: 'Process Orchestration',
      description: 'Seamlessly orchestrate complex business workflows across multiple systems and departments.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Dynamic optimization of business operations based on real-time data and market conditions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Secure Operations',
      description: 'Enterprise-grade security with role-based access control and audit trails for all operations.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Brain,
      title: 'AI Decision Making',
      description: 'Advanced AI algorithms that make intelligent decisions and recommendations for business operations.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Built on modern cloud infrastructure for scalability, reliability, and global accessibility.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const useCases = [
    {
      title: 'Supply Chain Management',
      description: 'Automated inventory management, demand forecasting, and supplier coordination.',
      icon: Network,
      benefits: [
        'Real-time inventory tracking',
        'Predictive demand forecasting',
        'Automated supplier management',
        'Logistics optimization'
      ]
    },
    {
      title: 'Customer Service',
      description: 'Intelligent chatbots, ticket routing, and automated customer support workflows.',
      icon: Users,
      benefits: [
        '24/7 customer support',
        'Intelligent ticket routing',
        'Automated responses',
        'Customer satisfaction tracking'
      ]
    },
    {
      title: 'Financial Operations',
      description: 'Automated invoicing, expense management, and financial reporting.',
      icon: BarChart3,
      benefits: [
        'Automated invoicing',
        'Expense categorization',
        'Real-time financial reporting',
        'Compliance monitoring'
      ]
    },
    {
      title: 'HR & Recruitment',
      description: 'Automated candidate screening, onboarding processes, and performance management.',
      icon: Users,
      benefits: [
        'AI-powered candidate screening',
        'Automated onboarding',
        'Performance tracking',
        'Talent analytics'
      ]
    },
    {
      title: 'Manufacturing Operations',
      description: 'Production planning, quality control, and predictive maintenance automation.',
      icon: Settings,
      benefits: [
        'Production optimization',
        'Quality control automation',
        'Predictive maintenance',
        'Resource allocation'
      ]
    },
    {
      title: 'Marketing & Sales',
      description: 'Lead scoring, campaign automation, and sales pipeline management.',
      icon: TrendingUp,
      benefits: [
        'Automated lead scoring',
        'Campaign optimization',
        'Sales pipeline tracking',
        'ROI analytics'
      ]
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Improve process efficiency by 60%',
    'Eliminate manual errors and delays',
    '24/7 automated operations',
    'Scalable infrastructure for growth',
    'Real-time monitoring and analytics'
  ];

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Finance',
    'Retail',
    'Logistics',
    'Technology',
    'Energy',
    'Education'
  ];

  const metrics = [
    { label: "Cost Reduction", value: "40%", icon: TrendingUp, color: "text-green-500" },
    { label: "Efficiency Gain", value: "60%", icon: Zap, color: "text-blue-500" },
    { label: "Error Reduction", value: "95%", icon: CheckCircle, color: "text-purple-500" },
    { label: "Uptime", value: "99.9%", icon: Clock, color: "text-yellow-500" }
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            {/* Features Grid */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 hover:border-zinc-600/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3 text-center">{feature.title}</h3>
                    <p className="text-zion-slate-light text-sm text-center">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Performance</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`${metric.color} mb-2 flex justify-center`}>
                      <metric.icon className="w-8 h-8" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-zion-slate-light text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'use-cases':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases & Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 hover:border-zinc-600/50 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedUseCase(useCase)}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-2">{useCase.title}</h3>
                      <p className="text-zion-slate-light text-sm mb-3">{useCase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {useCase.benefits.slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'industries':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 text-center hover:border-zinc-600/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-full">
                <Bot className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Business Operations</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with AI-powered automation that orchestrates operations, optimizes processes, and drives efficiency across all departments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Get Started
              </Link>
              <Link to="/demo" className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-colors">
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'overview', name: 'Overview', icon: Eye },
              { id: 'use-cases', name: 'Use Cases', icon: Workflow },
              { id: 'industries', name: 'Industries', icon: Globe }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {renderContent()}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the future of business operations with our autonomous platform. Get in touch to learn how we can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Contact Sales
              </Link>
              <Link to="/pricing" className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-colors">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Case Modal */}
      {selectedUseCase && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-zinc-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedUseCase.title}</h3>
                <button
                  onClick={() => setSelectedUseCase(null)}
                  className="text-zion-slate-light hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-zion-slate-light mb-6">{selectedUseCase.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {selectedUseCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Link to="/contact" className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-lg text-center hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                  Learn More
                </Link>
                <button
                  onClick={() => setSelectedUseCase(null)}
                  className="flex-1 border border-zinc-600 text-zion-slate-light py-3 px-6 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}