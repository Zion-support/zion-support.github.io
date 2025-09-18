import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Bot, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Clock,
  DollarSign,
  Award,
  Globe,
  Lock,
  Cpu,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Network,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  Mail,
  Search,
  Target,
  TrendingUp,
  Package,
  Calendar,
  BookOpen,
  ShoppingCart,
  Home,
  Trash2,
  Camera,
  HardDrive,
  Database,
  Phone,
  MapPin
} from 'lucide-react';

const MicroSAASPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain },
    { id: 'ai-powered', name: 'AI-Powered', icon: Bot },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'productivity', name: 'Productivity', icon: Target },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp }
  ];

  const microSAASServices = [
    {
      id: 'ai-code-review',
      title: 'AI-Powered Code Review Assistant',
      description: 'Intelligent code review tool that automatically detects bugs, suggests improvements, and enforces coding standards.',
      icon: Code,
      category: 'ai-powered',
      features: [
        'Automated bug detection',
        'Code quality scoring',
        'Security vulnerability scanning',
        'Performance optimization suggestions',
        'Integration with popular IDEs'
      ],
      pricing: '$89/month',
      marketPrice: '$89 - $299/month',
      timeline: '1-2 weeks',
      benefits: [
        'Reduce code review time by 70%',
        'Improve code quality consistently',
        'Catch bugs before deployment',
        'Enforce team coding standards'
      ],
      link: 'https://ziontechgroup.com/ai-code-review'
    },
    {
      id: 'smart-inventory-predictor',
      title: 'Smart Inventory Predictor',
      description: 'AI-driven inventory management system that predicts demand, optimizes stock levels, and prevents stockouts.',
      icon: Package,
      category: 'ai-powered',
      features: [
        'Demand forecasting',
        'Automated reorder points',
        'Seasonal trend analysis',
        'Supplier performance tracking',
        'Cost optimization recommendations'
      ],
      pricing: '$199/month',
      marketPrice: '$199 - $599/month',
      timeline: '2-3 weeks',
      benefits: [
        'Reduce inventory costs by 25%',
        'Eliminate stockouts and overstock',
        'Improve cash flow management',
        'Optimize supplier relationships'
      ],
      link: 'https://ziontechgroup.com/smart-inventory-predictor'
    },
    {
      id: 'voice-meeting-transcriber',
      title: 'Voice-to-Text Meeting Transcriber',
      description: 'Real-time meeting transcription with AI-powered speaker identification and action item extraction.',
      icon: Mic,
      category: 'ai-powered',
      features: [
        'Real-time transcription',
        'Speaker identification',
        'Action item extraction',
        'Meeting summaries',
        'Multi-language support'
      ],
      pricing: '$79/month',
      marketPrice: '$79 - $199/month',
      timeline: '1 week',
      benefits: [
        'Improve meeting productivity',
        'Never miss important details',
        'Automated follow-up generation',
        'Better meeting documentation'
      ],
      link: 'https://ziontechgroup.com/voice-meeting-transcriber'
    },
    {
      id: 'ai-sentiment-analyzer',
      title: 'AI Customer Sentiment Analyzer',
      description: 'Advanced sentiment analysis tool that monitors customer feedback across all channels and provides actionable insights.',
      icon: Heart,
      category: 'analytics',
      features: [
        'Multi-channel monitoring',
        'Real-time sentiment tracking',
        'Trend analysis and reporting',
        'Alert system for negative feedback',
        'Competitor sentiment comparison'
      ],
      pricing: '$149/month',
      marketPrice: '$149 - $399/month',
      timeline: '2 weeks',
      benefits: [
        'Improve customer satisfaction',
        'Identify issues before they escalate',
        'Track brand reputation',
        'Make data-driven decisions'
      ],
      link: 'https://ziontechgroup.com/ai-sentiment-analyzer'
    },
    {
      id: 'smart-contract-generator',
      title: 'Smart Contract Generator',
      description: 'AI-powered tool for creating, testing, and deploying smart contracts on various blockchain platforms.',
      icon: Shield,
      category: 'ai-powered',
      features: [
        'Natural language to code conversion',
        'Multi-blockchain support',
        'Automated testing and validation',
        'Security audit integration',
        'Deployment automation'
      ],
      pricing: '$299/month',
      marketPrice: '$299 - $999/month',
      timeline: '3-4 weeks',
      benefits: [
        'Reduce development time by 80%',
        'Ensure contract security',
        'Lower development costs',
        'Enable rapid prototyping'
      ],
      link: 'https://ziontechgroup.com/smart-contract-generator'
    },
    {
      id: 'ai-logo-designer',
      title: 'AI-Powered Logo Designer',
      description: 'Intelligent logo design tool that creates professional logos based on brand requirements and industry trends.',
      icon: Image,
      category: 'ai-powered',
      features: [
        'AI-generated logo concepts',
        'Industry-specific designs',
        'Color palette optimization',
        'Brand guideline generation',
        'Multiple format exports'
      ],
      pricing: '$49/month',
      marketPrice: '$49 - $149/month',
      timeline: '1 week',
      benefits: [
        'Professional logo creation',
        'Consistent brand identity',
        'Cost-effective design solution',
        'Quick turnaround times'
      ],
      link: 'https://ziontechgroup.com/ai-logo-designer'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  return (
    <Layout 
      title="Micro SAAS Services - Zion Tech Group" 
      description="Innovative micro SAAS solutions for modern businesses. AI-powered tools, automation, and productivity solutions."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Micro SAAS Services
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  Powerful, focused software solutions that solve specific business problems. 
                  From AI-powered tools to automation platforms, we build micro SAAS that delivers big results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="#services" 
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="h-5 w-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-gray-500">{service.marketPrice}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">
                      <Clock className="h-4 w-4 inline mr-1" />
                      {service.timeline}
                    </div>
                    <div className="text-sm text-gray-500">
                      <DollarSign className="h-4 w-4 inline mr-1" />
                      {service.pricing}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Micro SAAS?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your specific needs and create a custom micro SAAS solution 
                that perfectly fits your business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/ai-services" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Explore AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MicroSAASPage;