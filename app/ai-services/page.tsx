'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart3, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone,
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Database, 
  Users, 
  Settings,
  Cpu,
  Bot,
  Sparkles,
  Layers,
  Workflow,
  Smartphone,
  Cloud,
  Lock,
  Code,
  Palette,
  Headphones,
  Mail,
  MapPin,
  Filter,
  DollarSign,
  Monitor,
  BarChart,
  PieChart,
  LineChart
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface AIService {
  id: number;
  title: string;
  description: string;
  icon: any;
  category: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  demoUrl?: string;
  trialDays: number;
  popular: boolean;
  accuracy: string;
  processingTime: string;
}

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const aiServices: AIService[] = [
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that provides 24/7 customer support and engagement with advanced NLP and sentiment analysis.',
      icon: Bot,
      category: 'Customer Service',
      features: [
        'Natural language processing (50+ languages)',
        'Multi-language support',
        'Sentiment analysis and emotion detection',
        'Integration with CRM systems (Salesforce, HubSpot)',
        'Real-time learning capabilities',
        'Voice and text support',
        'Escalation to human agents',
        'Analytics and reporting',
        'Custom knowledge base',
        'API integration'
      ],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions', 'Improve customer satisfaction by 40%'],
      demoUrl: 'https://demo.ziontechgroup.com/chatbot',
      trialDays: 14,
      popular: true,
      accuracy: '95%',
      processingTime: '< 1 second'
    },
    {
      id: 2,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, marketing, and technical documentation.',
      icon: FileText,
      category: 'Content',
      features: [
        'Blog post generation (1000+ words)',
        'Social media content (all platforms)',
        'Email marketing campaigns',
        'SEO-optimized content',
        'Brand voice customization',
        'Multi-language support (50+ languages)',
        'Plagiarism detection',
        'Content optimization',
        'Image generation',
        'Video script writing'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing', 'Increase content output by 500%'],
      demoUrl: 'https://demo.ziontechgroup.com/content',
      trialDays: 14,
      popular: true,
      accuracy: '92%',
      processingTime: '2-5 minutes'
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms with predictive insights.',
      icon: BarChart3,
      category: 'Analytics',
      features: [
        'Predictive analytics and forecasting',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models',
        'Natural language queries',
        'Data visualization',
        'Trend analysis',
        'ROI optimization',
        'Multi-source data integration'
      ],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization', 'Reduce analysis time by 70%'],
      demoUrl: 'https://demo.ziontechgroup.com/analytics',
      trialDays: 14,
      popular: true,
      accuracy: '98%',
      processingTime: 'Real-time'
    },
    {
      id: 4,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, automation, and medical imaging.',
      icon: Eye,
      category: 'Computer Vision',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing',
        'Medical image analysis',
        'Defect detection',
        'Motion tracking',
        'OCR (Optical Character Recognition)',
        '3D object recognition'
      ],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction', 'Improve accuracy by 95%'],
      demoUrl: 'https://demo.ziontechgroup.com/vision',
      trialDays: 7,
      popular: false,
      accuracy: '99.2%',
      processingTime: '< 500ms'
    },
    {
      id: 5,
      title: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions and accessibility.',
      icon: Mic,
      category: 'Voice AI',
      features: [
        'Speech-to-text conversion (50+ languages)',
        'Voice synthesis (100+ voices)',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support',
        'Real-time transcription',
        'Voice commands',
        'Emotion detection',
        'Speaker identification',
        'Noise cancellation'
      ],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['Improved accessibility', 'Voice automation', 'Call quality insights', 'Multi-language support', 'Reduce transcription costs by 80%'],
      demoUrl: 'https://demo.ziontechgroup.com/voice',
      trialDays: 14,
      popular: false,
      accuracy: '97%',
      processingTime: 'Real-time'
    },
    {
      id: 6,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows with 500+ integrations.',
      icon: Workflow,
      category: 'Automation',
      features: [
        'Workflow automation',
        'AI-powered insights',
        'Task scheduling',
        '500+ integrations',
        'Custom AI models',
        'Process mining',
        'Exception handling',
        'Performance analytics',
        'Visual workflow builder',
        'API automation'
      ],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation', 'Increase productivity by 300%'],
      demoUrl: 'https://demo.ziontechgroup.com/automation',
      trialDays: 14,
      popular: true,
      accuracy: '96%',
      processingTime: 'Variable'
    },
    {
      id: 7,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security monitoring using AI algorithms with real-time response.',
      icon: Shield,
      category: 'Security',
      features: [
        'Threat detection and prevention',
        'Behavioral analysis',
        'Incident response automation',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Real-time alerts',
        'Malware detection',
        'Network security',
        'User behavior analytics',
        'Security orchestration'
      ],
      price: 'Starting at $499/month',
      marketPrice: '$800-4000/month',
      benefits: ['Proactive security', 'Reduced false positives', 'Faster incident response', 'Compliance assurance', 'Prevent 99.9% of threats'],
      demoUrl: 'https://demo.ziontechgroup.com/security',
      trialDays: 7,
      popular: false,
      accuracy: '99.5%',
      processingTime: 'Real-time'
    },
    {
      id: 8,
      title: 'AI Mobile Applications',
      description: 'Custom mobile apps with integrated AI features for iOS and Android with offline capabilities.',
      icon: Smartphone,
      category: 'Mobile',
      features: [
        'AI-powered features',
        'Cross-platform development',
        'Offline AI capabilities',
        'Real-time processing',
        'Custom integrations',
        'Push notifications',
        'Biometric authentication',
        'Image recognition',
        'Voice commands',
        'Personalization'
      ],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Enhanced user experience', 'Intelligent features', 'Competitive advantage', 'Future-proof solutions', 'Increase user engagement by 200%'],
      demoUrl: 'https://demo.ziontechgroup.com/mobile',
      trialDays: 30,
      popular: false,
      accuracy: '94%',
      processingTime: 'Variable'
    },
    {
      id: 9,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure and model deployment on cloud platforms with auto-scaling.',
      icon: Cloud,
      category: 'Infrastructure',
      features: [
        'Model deployment',
        'Auto-scaling',
        'GPU optimization',
        'Data pipeline management',
        'Monitoring and logging',
        'Load balancing',
        'Disaster recovery',
        'Security compliance',
        'Cost optimization',
        'Multi-cloud support'
      ],
      price: 'Starting at $699/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Scalable infrastructure', 'Cost optimization', 'High availability', 'Easy deployment', 'Reduce infrastructure costs by 40%'],
      demoUrl: 'https://demo.ziontechgroup.com/cloud',
      trialDays: 14,
      popular: false,
      accuracy: '99.9%',
      processingTime: 'Variable'
    },
    {
      id: 10,
      title: 'AI Design Assistant',
      description: 'AI-powered design tools for graphics, UI/UX, and creative content generation with brand consistency.',
      icon: Palette,
      category: 'Design',
      features: [
        'Automated design generation',
        'Brand consistency tools',
        'A/B testing optimization',
        'Color and layout suggestions',
        'Template customization',
        'Logo generation',
        'Social media graphics',
        'Print design tools',
        'Collaboration features',
        'Asset management'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1200/month',
      benefits: ['Faster design process', 'Consistent branding', 'Creative inspiration', 'Cost-effective solutions', 'Reduce design time by 70%'],
      demoUrl: 'https://demo.ziontechgroup.com/design',
      trialDays: 14,
      popular: false,
      accuracy: '91%',
      processingTime: '1-3 minutes'
    },
    {
      id: 11,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, and patient care optimization.',
      icon: Heart,
      category: 'Healthcare',
      features: [
        'Medical imaging analysis',
        'Drug discovery assistance',
        'Patient care optimization',
        'Diagnostic support',
        'HIPAA compliance',
        'Clinical decision support',
        'Treatment recommendations',
        'Risk assessment',
        'Electronic health records',
        'Telemedicine support'
      ],
      price: 'Starting at $1,999/month',
      marketPrice: '$5000-20000/month',
      benefits: ['Improve diagnosis accuracy', 'Reduce treatment costs', 'Enhance patient care', 'Compliance assurance', 'Save lives through early detection'],
      demoUrl: 'https://demo.ziontechgroup.com/healthcare',
      trialDays: 7,
      popular: false,
      accuracy: '98.5%',
      processingTime: '1-5 minutes'
    },
    {
      id: 12,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, algorithmic trading, and financial planning.',
      icon: DollarSign,
      category: 'Finance',
      features: [
        'Fraud detection and prevention',
        'Risk assessment',
        'Algorithmic trading',
        'Credit scoring',
        'Compliance monitoring',
        'Portfolio optimization',
        'Market analysis',
        'Loan processing',
        'Insurance underwriting',
        'Financial planning'
      ],
      price: 'Starting at $1,499/month',
      marketPrice: '$3000-15000/month',
      benefits: ['Reduce fraud by 95%', 'Improve risk assessment', 'Increase trading profits', 'Compliance assurance', 'Save millions in losses'],
      demoUrl: 'https://demo.ziontechgroup.com/finance',
      trialDays: 7,
      popular: false,
      accuracy: '99.1%',
      processingTime: 'Real-time'
    }
  ];

  const categories = [
    'all', 'Customer Service', 'Content', 'Analytics', 'Computer Vision', 
    'Voice AI', 'Automation', 'Security', 'Mobile', 'Infrastructure', 
    'Design', 'Healthcare', 'Finance'
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price-low':
        return parseInt(a.price.replace('Starting at $', '').replace('/month', '')) - parseInt(b.price.replace('Starting at $', '').replace('/month', ''));
      case 'price-high':
        return parseInt(b.price.replace('Starting at $', '').replace('/month', '')) - parseInt(a.price.replace('Starting at $', '').replace('/month', ''));
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const stats = [
    { icon: <Brain className="w-8 h-8 text-blue-500" />, value: '500+', label: 'AI Models Deployed' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '95%', label: 'Average Accuracy' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '99.9%', label: 'Uptime SLA' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '60%', label: 'Cost Reduction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, data analytics, computer vision, AI automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Services">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From chatbots to computer vision, we deliver AI that drives real results and measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <Zap className="w-5 h-5 mr-2 inline" />
                Get Started
              </Link>
              <Link
                to="/demo"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-center"
              >
                <Monitor className="w-5 h-5 mr-2 inline" />
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card p-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
                <div className="relative md:w-64">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors appearance-none">
                    <option value="all" className="bg-slate-800">All Categories</option>
                    {categories.slice(1).map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative md:w-48">
                  <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors appearance-none">
                    <option value="popular" className="bg-slate-800">Most Popular</option>
                    <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                    <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                    <option value="name" className="bg-slate-800">Name A-Z</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                {selectedCategory === 'all' ? 'All AI Services' : `${selectedCategory} Services`}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {sortedServices.length} service{sortedServices.length !== 1 ? 's' : ''} found. Choose the perfect AI solution for your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative cyber-card hologram-card p-8 ${
                    service.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                        <span className="text-lg text-gray-400 line-through ml-2">{service.marketPrice}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.trialDays}-day trial
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-cyan-400 font-bold">{service.accuracy}</div>
                        <div className="text-gray-400">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-bold">{service.processingTime}</div>
                        <div className="text-gray-400">Processing</div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 5 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 5} more features
                      </li>
                    )}
                  </ul>

                  <div className="space-y-3 mb-6">
                    <div className="text-sm">
                      <div className="text-gray-400 mb-2">Key Benefits:</div>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <div key={index} className="text-purple-400 text-sm">• {benefit}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to="/contact"
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 text-center"
                    >
                      <Zap className="w-5 h-5 mr-2 inline" />
                      Get Started
                    </Link>
                    <div className="flex gap-2">
                      <Link
                        to={service.demoUrl || '/demo'}
                        className="flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center text-sm"
                      >
                        <Monitor className="w-4 h-4 mr-1 inline" />
                        Demo
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center text-sm"
                      >
                        <MessageSquare className="w-4 h-4 mr-1 inline" />
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency with cutting-edge AI technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Increase Efficiency by 60%</h3>
                <p className="text-gray-300">Our AI solutions automate repetitive tasks and optimize workflows, delivering measurable efficiency gains.</p>
              </div>
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Reduce Costs by 40%</h3>
                <p className="text-gray-300">Automation and AI-driven optimization significantly reduce operational costs and resource requirements.</p>
              </div>
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enhanced Decision Making</h3>
                <p className="text-gray-300">AI-powered insights and predictive analytics enable data-driven decision making at scale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our AI experts to discuss your requirements and get a customized solution that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  <Zap className="w-5 h-5 mr-2 inline" />
                  Contact Us
                </Link>
                <Link
                  to="/consultation"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2 inline" />
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;