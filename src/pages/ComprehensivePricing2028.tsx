import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  Network, 
  PenTool, 
  Code, 
  Shield, 
  Cpu,
  TrendingUp,
  Users,
  BarChart3,
  Globe,
  Lock,
  Cloud,
  Server,
  Package,
  Truck,
  Warehouse,
  Route,
  BookOpen,
  Target,
  Lightbulb,
  Award,
  Rocket,
  Sparkles,
  ArrowRight,
  Info,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ComprehensivePricing2028 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'ai-research', name: 'AI & Research', icon: <Brain className="w-5 h-5" /> },
    { id: 'ai-operations', name: 'AI & Operations', icon: <Network className="w-5 h-5" /> },
    { id: 'ai-marketing', name: 'AI & Marketing', icon: <PenTool className="w-5 h-5" /> },
    { id: 'ai-development', name: 'AI & Development', icon: <Code className="w-5 h-5" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Technology', icon: <Cpu className="w-5 h-5" /> }
  ];

  const services = [
    {
      id: 'ai-autonomous-research-assistant',
      title: 'AI Autonomous Research Assistant',
      description: 'Transform your research process with AI that autonomously discovers, analyzes, and synthesizes information from thousands of sources in real-time.',
      category: 'AI & Research',
      pricing: {
        starter: { price: 99, period: 'month', features: ['AI-Powered Research', 'Multi-Source Analysis', 'Academic Integration', 'Trend Analysis', 'Real-time Updates', 'Data Security'] },
        professional: { price: 299, period: 'month', features: ['Advanced Research Tools', 'Custom AI Models', 'Priority Support', 'Advanced Analytics', 'API Access', 'White-label Solutions'] },
        enterprise: { price: 799, period: 'month', features: ['Full Research Suite', 'Custom AI Models', '24/7 Dedicated Support', 'Custom Analytics', 'White-label Solutions', 'On-premise Deployment'] }
      },
      benefits: ['Accelerate research by 10x', '90%+ accuracy in findings', 'Real-time market intelligence', 'Compliance with research ethics'],
      useCases: ['Academic Research', 'Market Intelligence', 'Product Development', 'Policy Research'],
      color: 'blue'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Transform your supply chain with AI that predicts, optimizes, and automates every aspect of your operations for maximum efficiency and cost savings.',
      category: 'AI & Operations',
      pricing: {
        starter: { price: 199, period: 'month', features: ['End-to-End Visibility', 'Predictive Analytics', 'Inventory Optimization', 'Route Optimization', 'Warehouse Management', 'Global Supply Chain'] },
        professional: { price: 499, period: 'month', features: ['Advanced Optimization', 'Custom AI Models', 'Priority Support', 'Advanced Analytics', 'API Access', 'White-label Solutions'] },
        enterprise: { price: 1299, period: 'month', features: ['Full Optimization Suite', 'Custom AI Models', '24/7 Dedicated Support', 'Custom Analytics', 'White-label Solutions', 'On-premise Deployment'] }
      },
      benefits: ['15-25% cost reduction', '30-40% lead time improvement', '20-35% efficiency gain', '50-70% risk mitigation'],
      useCases: ['Retail & E-commerce', 'Manufacturing', 'Logistics & Transportation', 'Healthcare & Pharmaceuticals'],
      color: 'green'
    },
    {
      id: 'ai-content-marketing-suite',
      title: 'AI Content Marketing Suite',
      description: 'Transform your content marketing with AI that creates, optimizes, and distributes engaging content across all channels. Boost engagement, drive conversions, and scale your content strategy effortlessly.',
      category: 'AI & Marketing',
      pricing: {
        starter: { price: 79, period: 'month', features: ['AI Content Creation', 'Audience Intelligence', 'Performance Optimization', 'Multi-Channel Distribution', 'Advanced Analytics', 'Automated Workflows'] },
        professional: { price: 199, period: 'month', features: ['Advanced Content Tools', 'Custom AI Models', 'Priority Support', 'Advanced Analytics', 'API Access', 'White-label Solutions'] },
        enterprise: { price: 499, period: 'month', features: ['Full Content Suite', 'Custom AI Models', '24/7 Dedicated Support', 'Custom Analytics', 'White-label Solutions', 'On-premise Deployment'] }
      },
      benefits: ['300%+ content ROI', '70% time savings', '150% engagement boost', '45% conversion rate improvement'],
      useCases: ['Blog Posts & Articles', 'Social Media Content', 'Email Marketing', 'Video & Multimedia'],
      color: 'purple'
    },
    {
      id: 'ai-quantum-hybrid-platform',
      title: 'AI Quantum Hybrid Platform',
      description: 'Experience the future of computing with our revolutionary AI Quantum Hybrid Platform. Combining quantum computing power with advanced AI algorithms for unprecedented computational capabilities.',
      category: 'Quantum Technology',
      pricing: {
        starter: { price: 1999, period: 'month', features: ['Basic Quantum Access', 'AI Processing', 'Standard Support', 'Basic Analytics'] },
        professional: { price: 4999, period: 'month', features: ['Advanced Quantum Access', 'Full AI Suite', 'Priority Support', 'Advanced Analytics', 'Custom Integrations'] },
        enterprise: { price: 12999, period: 'month', features: ['Full Quantum Access', 'Custom AI Models', '24/7 Dedicated Support', 'Custom Analytics', 'White-label Solutions'] }
      },
      benefits: ['1000x faster computation', '99.99% accuracy', '24/7 continuous operation', 'Global quantum access'],
      useCases: ['Financial Modeling', 'Drug Discovery', 'Climate Modeling', 'Logistics Optimization'],
      color: 'indigo'
    },
    {
      id: 'ai-cybersecurity-platform',
      title: 'AI Cybersecurity Platform',
      description: 'Protect your digital assets with the most advanced AI-powered cybersecurity platform. Our intelligent security system detects, prevents, and responds to threats in real-time.',
      category: 'Cybersecurity',
      pricing: {
        starter: { price: 299, period: 'month', features: ['Basic Threat Protection', 'AI Monitoring', 'Email Support', 'Basic Reports'] },
        professional: { price: 799, period: 'month', features: ['Advanced Threat Protection', 'Full AI Suite', 'Priority Support', 'Advanced Analytics', 'Custom Integrations'] },
        enterprise: { price: 1999, period: 'month', features: ['Complete Security Suite', 'Custom AI Models', '24/7 Dedicated Support', 'Custom Analytics', 'White-label Solutions'] }
      },
      benefits: ['99.99% threat detection', '24/7 protection', '<1s response time', 'Global threat coverage'],
      useCases: ['Enterprise Security', 'Remote Work Security', 'Cloud Security', 'Compliance Requirements'],
      color: 'red'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'from-blue-500 to-cyan-500',
      green: 'from-green-500 to-emerald-500',
      purple: 'from-purple-500 to-pink-500',
      cyan: 'from-cyan-500 to-blue-500',
      red: 'from-red-500 to-pink-500',
      indigo: 'from-indigo-500 to-purple-500'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  const getBorderColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'border-blue-500/30',
      green: 'border-green-500/30',
      purple: 'border-purple-500/30',
      cyan: 'border-cyan-500/30',
      red: 'border-red-500/30',
      indigo: 'border-indigo-500/30'
    };
    return colorMap[color] || 'border-gray-500/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Comprehensive Pricing 2028
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
                {" "}AI-Powered Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All our AI-powered micro SAAS services come with 
              flexible pricing options designed to scale with your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${getBorderColor(service.color)} transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-6">
                  {/* Icon will be added here based on service.icon */}
                  <span className="text-sm text-gray-400 bg-slate-700/50 px-3 py-1 rounded-full">
                    {service.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                {/* Pricing Plans */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Pricing Plans</h4>
                  <div className="space-y-4">
                    {Object.entries(service.pricing).map(([planName, plan]) => (
                      <div key={planName} className="bg-slate-700/30 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="text-lg font-semibold text-white">{planName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</h5>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">${plan.price}</div>
                            <div className="text-sm text-gray-400">{plan.period}</div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {plan.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {plan.features.length > 3 && (
                            <li className="text-sm text-gray-400 text-center">
                              +{plan.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Expandable Details */}
                <div className="border-t border-slate-700/50 pt-6">
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-lg font-semibold text-white">View Details</span>
                    {expandedService === service.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-4"
                    >
                      <div>
                        <h5 className="text-md font-semibold text-white mb-2">Key Features</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {/* Features will be added here based on service.features */}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-md font-semibold text-white mb-2">Key Benefits</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                              <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-md font-semibold text-white mb-2">Use Cases</h5>
                        <div className="flex flex-wrap gap-2">
                          {service.useCases.map((useCase, useCaseIndex) => (
                            <span
                              key={useCaseIndex}
                              className="text-xs text-gray-300 bg-slate-700/50 px-2 py-1 rounded-full"
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
                
                <div className="mt-6">
                  <Link
                    to={`/services/${service.id}`}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${getColorClasses(service.color)} text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-105`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our sales team to discuss custom pricing, enterprise solutions, and special requirements for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing2028;