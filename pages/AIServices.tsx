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

const AIServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain },
    { id: 'machine-learning', name: 'Machine Learning', icon: Cpu },
    { id: 'computer-vision', name: 'Computer Vision', icon: Eye },
    { id: 'nlp', name: 'Natural Language Processing', icon: MessageSquare },
    { id: 'analytics', name: 'AI Analytics', icon: BarChart3 },
    { id: 'automation', name: 'AI Automation', icon: Bot },
    { id: 'security', name: 'AI Security', icon: Shield }
  ];

  const aiServices = [
    {
      id: 'ai-drug-discovery',
      title: 'AI-Powered Drug Discovery Platform',
      description: 'Revolutionary AI platform accelerating pharmaceutical research and drug development through advanced molecular modeling and predictive analytics.',
      icon: Heart,
      category: 'machine-learning',
      features: [
        'Molecular structure prediction',
        'Drug-target interaction analysis',
        'Side effect prediction',
        'Clinical trial optimization',
        'Patent landscape analysis'
      ],
      pricing: 'Starting at $15,000/month',
      marketPrice: '$15,000 - $50,000/month',
      setupTime: '8-16 weeks',
      targetUsers: 'Pharmaceutical Companies, Research Institutions, Biotech Startups',
      benefits: [
        'Reduce drug development time by 60%',
        'Lower research costs significantly',
        'Improve success rates in clinical trials',
        'Accelerate time-to-market for new drugs'
      ],
      link: 'https://ziontechgroup.com/ai-drug-discovery'
    },
    {
      id: 'quantum-ai-optimization',
      title: 'Quantum AI Optimization Engine',
      description: 'Cutting-edge quantum-enhanced AI system for solving complex optimization problems across industries.',
      icon: Cpu,
      category: 'machine-learning',
      features: [
        'Quantum machine learning algorithms',
        'Complex optimization solving',
        'Real-time decision making',
        'Scalable quantum computing integration',
        'Advanced pattern recognition'
      ],
      pricing: 'Starting at $12,000/month',
      marketPrice: '$12,000 - $40,000/month',
      setupTime: '12-20 weeks',
      targetUsers: 'Financial Services, Logistics Companies, Manufacturing, Research Labs',
      benefits: [
        'Solve previously impossible optimization problems',
        'Achieve 10x faster computation speeds',
        'Reduce operational costs by 30-50%',
        'Enable breakthrough innovations'
      ],
      link: 'https://ziontechgroup.com/quantum-ai-optimization'
    },
    {
      id: 'ai-climate-modeling',
      title: 'AI-Powered Climate Change Modeling',
      description: 'Advanced AI system for climate prediction, environmental monitoring, and sustainability planning.',
      icon: Globe,
      category: 'analytics',
      features: [
        'Climate pattern prediction',
        'Environmental impact assessment',
        'Carbon footprint optimization',
        'Renewable energy forecasting',
        'Disaster risk analysis'
      ],
      pricing: 'Starting at $8,000/month',
      marketPrice: '$8,000 - $25,000/month',
      setupTime: '6-12 weeks',
      targetUsers: 'Government Agencies, Environmental Organizations, Energy Companies, Urban Planners',
      benefits: [
        'Accurate long-term climate predictions',
        'Optimize environmental policies',
        'Reduce carbon emissions effectively',
        'Prepare for climate-related challenges'
      ],
      link: 'https://ziontechgroup.com/ai-climate-modeling'
    },
    {
      id: 'autonomous-trading-system',
      title: 'Autonomous AI Trading System',
      description: 'Self-learning AI trading platform that adapts to market conditions and executes trades autonomously.',
      icon: TrendingUp,
      category: 'automation',
      features: [
        'Real-time market analysis',
        'Automated trade execution',
        'Risk management algorithms',
        'Portfolio optimization',
        'Market sentiment analysis'
      ],
      pricing: 'Starting at $20,000/month',
      marketPrice: '$20,000 - $100,000/month',
      setupTime: '4-8 weeks',
      targetUsers: 'Hedge Funds, Investment Banks, Trading Firms, Wealth Management',
      benefits: [
        '24/7 automated trading',
        'Consistent performance in all market conditions',
        'Reduced human error and emotion',
        'Optimized portfolio returns'
      ],
      link: 'https://ziontechgroup.com/autonomous-trading'
    },
    {
      id: 'ai-space-mission-planning',
      title: 'AI-Powered Space Mission Planning',
      description: 'Advanced AI system for planning and optimizing space missions, satellite operations, and space exploration.',
      icon: Rocket,
      category: 'machine-learning',
      features: [
        'Mission trajectory optimization',
        'Resource allocation planning',
        'Risk assessment and mitigation',
        'Satellite constellation management',
        'Space debris avoidance'
      ],
      pricing: 'Starting at $25,000/month',
      marketPrice: '$25,000 - $75,000/month',
      setupTime: '12-24 weeks',
      targetUsers: 'Space Agencies, Satellite Companies, Aerospace Contractors, Research Institutions',
      benefits: [
        'Optimize mission success rates',
        'Reduce mission costs by 40%',
        'Minimize risks and failures',
        'Enable complex multi-satellite operations'
      ],
      link: 'https://ziontechgroup.com/ai-space-mission-planning'
    },
    {
      id: 'ai-legal-analysis',
      title: 'AI-Powered Legal Document Analysis',
      description: 'Intelligent legal document review and analysis system for contracts, case law, and regulatory compliance.',
      icon: FileText,
      category: 'nlp',
      features: [
        'Contract analysis and review',
        'Legal precedent research',
        'Compliance checking',
        'Risk assessment',
        'Document summarization'
      ],
      pricing: 'Starting at $5,000/month',
      marketPrice: '$5,000 - $15,000/month',
      setupTime: '4-8 weeks',
      targetUsers: 'Law Firms, Corporate Legal Departments, Government Agencies, Legal Tech Companies',
      benefits: [
        'Reduce document review time by 80%',
        'Improve accuracy and consistency',
        'Lower legal costs significantly',
        'Enhance compliance monitoring'
      ],
      link: 'https://ziontechgroup.com/ai-legal-analysis'
    },
    {
      id: 'ai-agricultural-intelligence',
      title: 'AI-Powered Agricultural Intelligence',
      description: 'Smart farming solution using AI for crop monitoring, yield optimization, and sustainable agriculture.',
      icon: Sprout,
      category: 'computer-vision',
      features: [
        'Crop health monitoring',
        'Yield prediction',
        'Pest and disease detection',
        'Irrigation optimization',
        'Soil analysis'
      ],
      pricing: 'Starting at $3,500/month',
      marketPrice: '$3,500 - $12,000/month',
      setupTime: '6-10 weeks',
      targetUsers: 'Farmers, Agricultural Companies, Food Producers, AgTech Startups',
      benefits: [
        'Increase crop yields by 25-40%',
        'Reduce water and fertilizer usage',
        'Minimize crop losses',
        'Enable precision farming'
      ],
      link: 'https://ziontechgroup.com/ai-agricultural-intelligence'
    },
    {
      id: 'ai-cybersecurity-intelligence',
      title: 'AI-Powered Cybersecurity Intelligence',
      description: 'Advanced AI system for threat detection, incident response, and proactive cybersecurity defense.',
      icon: Shield,
      category: 'security',
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Behavioral analysis',
        'Vulnerability assessment',
        'Security orchestration'
      ],
      pricing: 'Starting at $7,500/month',
      marketPrice: '$7,500 - $25,000/month',
      setupTime: '6-12 weeks',
      targetUsers: 'Enterprises, Government Agencies, Financial Institutions, Healthcare Organizations',
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 90%',
        'Automate incident response',
        'Enhance overall security posture'
      ],
      link: 'https://ziontechgroup.com/ai-cybersecurity-intelligence'
    },
    {
      id: 'ai-smart-city-management',
      title: 'AI-Powered Smart City Management',
      description: 'Comprehensive AI platform for managing urban infrastructure, traffic, utilities, and citizen services.',
      icon: Building,
      category: 'analytics',
      features: [
        'Traffic flow optimization',
        'Energy consumption management',
        'Waste management optimization',
        'Public safety monitoring',
        'Citizen service automation'
      ],
      pricing: 'Starting at $10,000/month',
      marketPrice: '$10,000 - $30,000/month',
      setupTime: '8-16 weeks',
      targetUsers: 'City Governments, Urban Planners, Infrastructure Companies, Smart City Consultants',
      benefits: [
        'Improve city efficiency by 35%',
        'Reduce energy consumption by 25%',
        'Enhance citizen satisfaction',
        'Optimize resource allocation'
      ],
      link: 'https://ziontechgroup.com/ai-smart-city-management'
    },
    {
      id: 'ai-personal-health-assistant',
      title: 'AI-Powered Personal Health Assistant',
      description: 'Intelligent health monitoring and wellness management system for personalized healthcare.',
      icon: Heart,
      category: 'machine-learning',
      features: [
        'Health data analysis',
        'Symptom assessment',
        'Medication reminders',
        'Lifestyle recommendations',
        'Emergency alert system'
      ],
      pricing: 'Starting at $2,000/month',
      marketPrice: '$2,000 - $8,000/month',
      setupTime: '4-8 weeks',
      targetUsers: 'Healthcare Providers, Wellness Companies, Insurance Companies, Individuals',
      benefits: [
        'Improve health outcomes',
        'Reduce healthcare costs',
        'Enable preventive care',
        'Personalize treatment plans'
      ],
      link: 'https://ziontechgroup.com/ai-personal-health-assistant'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <Layout 
      title="AI Services - Zion Tech Group" 
      description="Cutting-edge AI services including machine learning, computer vision, NLP, and automation solutions for modern businesses."
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
                  AI Services & Solutions
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  Harness the power of artificial intelligence with our comprehensive suite of AI services, 
                  from machine learning to computer vision and natural language processing.
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
                      {service.setupTime}
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI services can help you achieve your business goals and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/it-services" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Explore IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIServicesPage;