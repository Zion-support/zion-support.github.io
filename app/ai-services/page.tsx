'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageCircle, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Cpu,
  Link as LinkIcon,
  Server,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Award,
  Globe,
  Database,
  Smartphone,
  Lock,
  Calendar,
  Code,
  Workflow,
  Monitor,
  Package,
  Wifi,
  MessageSquare,
  ShoppingCart,
  Rocket,
  Lightbulb,
  Gauge
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const aiServices = [
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing, sentiment analysis, and multi-channel support for customer service excellence.',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'CRM integration',
        'Real-time learning',
        'Voice integration',
        'Mobile app support',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 availability',
        'Instant responses',
        'Scalable solutions',
        'Multi-channel support',
        'Seamless CRM integration'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageCircle,
      rating: 4.9,
      users: '2,500+',
      freeTrial: '14 days',
      implementationTime: '2-4 weeks'
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, marketing materials, and technical documentation.',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing campaigns',
        'SEO optimization',
        'Brand voice customization',
        'Multi-language support',
        'Content templates',
        'Plagiarism detection'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing',
        'Professional quality output',
        'Cost-effective solution'
      ],
      category: 'Content',
      popular: true,
      icon: Brain,
      rating: 4.8,
      users: '3,200+',
      freeTrial: '7 days',
      implementationTime: '1-2 weeks'
    },
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms for data-driven decision making.',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models',
        'Data visualization',
        'API integration',
        'Mobile access'
      ],
      benefits: [
        'Data-driven insights',
        'Predictive forecasting',
        'Automated reporting',
        'ROI optimization',
        'Real-time monitoring',
        'Custom dashboards'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart,
      rating: 4.9,
      users: '1,800+',
      freeTrial: '14 days',
      implementationTime: '3-6 weeks'
    },
    {
      id: 'ai-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, automation, and medical imaging applications.',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing',
        'Medical image analysis',
        'Security monitoring',
        'Custom model training'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Real-time monitoring',
        'Cost reduction',
        'Improved accuracy',
        'Scalable solutions'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Eye,
      rating: 4.7,
      users: '1,200+',
      freeTrial: '14 days',
      implementationTime: '4-8 weeks'
    },
    {
      id: 'ai-voice',
      name: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions, accessibility, and automation.',
      price: '$249/month',
      marketPrice: '$400-1800/month',
      features: [
        'Speech-to-text conversion',
        'Voice synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support',
        'Real-time processing',
        'Voice commands',
        'Audio transcription'
      ],
      benefits: [
        'Improved accessibility',
        'Voice automation',
        'Call quality insights',
        'Multi-language support',
        'Enhanced user experience',
        'Cost-effective solution'
      ],
      category: 'Voice AI',
      popular: false,
      icon: Mic,
      rating: 4.6,
      users: '1,500+',
      freeTrial: '14 days',
      implementationTime: '2-4 weeks'
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency and cost savings.',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring',
        'Custom workflows',
        'Integration hub',
        'User management'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation',
        'Real-time monitoring',
        'Custom solutions'
      ],
      category: 'Automation',
      popular: true,
      icon: Zap,
      rating: 4.8,
      users: '2,100+',
      freeTrial: '14 days',
      implementationTime: '3-6 weeks'
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time across multiple channels.',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Risk scoring algorithms',
        'Anomaly detection',
        'Automated alert systems',
        'Multi-channel monitoring',
        'Machine learning models',
        'Compliance reporting'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time protection',
        'False positive reduction',
        'Compliance ready',
        'Scalable solution',
        'Cost-effective protection'
      ],
      category: 'Security',
      popular: true,
      icon: Shield,
      rating: 4.9,
      users: '1,400+',
      freeTrial: '30 days',
      implementationTime: '4-8 weeks'
    },
    {
      id: 'ai-personalization',
      name: 'AI Personalization Engine',
      description: 'Advanced recommendation systems and personalization algorithms for enhanced customer experience and increased conversions.',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Real-time recommendations',
        'Customer segmentation',
        'Behavioral analysis',
        'A/B testing automation',
        'Cross-platform personalization',
        'Machine learning models',
        'Content optimization',
        'Performance analytics'
      ],
      benefits: [
        'Increase conversions by 40%',
        'Improve customer engagement',
        'Higher customer lifetime value',
        'Automated optimization',
        'Real-time personalization',
        'ROI optimization'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target,
      rating: 4.8,
      users: '1,900+',
      freeTrial: '14 days',
      implementationTime: '3-6 weeks'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Medical AI solutions including diagnostic imaging, drug discovery, patient monitoring, and clinical decision support.',
      price: '$1,999/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Medical image analysis',
        'Drug discovery algorithms',
        'Patient monitoring',
        'Clinical decision support',
        'Electronic health records',
        'Predictive diagnostics',
        'Treatment recommendations',
        'Compliance management'
      ],
      benefits: [
        'Improved diagnostic accuracy',
        'Faster drug discovery',
        'Better patient outcomes',
        'Reduced medical errors',
        'Cost-effective healthcare',
        'Scalable solutions'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Heart,
      rating: 4.9,
      users: '800+',
      freeTrial: '30 days',
      implementationTime: '6-12 weeks'
    },
    {
      id: 'ai-financial',
      name: 'AI Financial Services',
      description: 'Revolutionary AI-powered financial services including trading algorithms, risk management, and fraud detection.',
      price: '$1,499/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Algorithmic trading',
        'Risk assessment',
        'Fraud detection',
        'Credit scoring',
        'Portfolio optimization',
        'Market analysis',
        'Regulatory compliance',
        'Real-time monitoring'
      ],
      benefits: [
        'Improved trading performance',
        'Risk reduction',
        'Fraud prevention',
        'Better credit decisions',
        'Portfolio optimization',
        'Compliance assurance'
      ],
      category: 'Finance',
      popular: true,
      icon: DollarSign,
      rating: 4.8,
      users: '1,100+',
      freeTrial: '30 days',
      implementationTime: '4-8 weeks'
    },
    {
      id: 'ai-hr',
      name: 'AI HR Solutions',
      description: 'Intelligent human resources management with AI-powered recruitment, employee analytics, and performance optimization.',
      price: '$599/month',
      marketPrice: '$1000-3000/month',
      features: [
        'AI recruitment',
        'Employee analytics',
        'Performance optimization',
        'Talent management',
        'Predictive analytics',
        'Workforce planning',
        'Employee engagement',
        'Compliance management'
      ],
      benefits: [
        'Faster recruitment',
        'Better talent matching',
        'Improved performance',
        'Reduced bias',
        'Cost savings',
        'Data-driven decisions'
      ],
      category: 'Human Resources',
      popular: false,
      icon: Users,
      rating: 4.7,
      users: '1,300+',
      freeTrial: '14 days',
      implementationTime: '3-6 weeks'
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Intelligence',
      description: 'Optimize supply chain operations with AI-powered demand forecasting, inventory management, and logistics optimization.',
      price: '$899/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Logistics planning',
        'Supplier management',
        'Risk assessment',
        'Cost optimization',
        'Real-time tracking',
        'Predictive analytics'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve demand accuracy',
        'Optimize logistics',
        'Risk mitigation',
        'Cost reduction',
        'Better supplier relationships'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Box,
      rating: 4.8,
      users: '900+',
      freeTrial: '30 days',
      implementationTime: '6-10 weeks'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: aiServices.length },
    { id: 'Customer Service', name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length },
    { id: 'Content', name: 'Content', count: aiServices.filter(s => s.category === 'Content').length },
    { id: 'Analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
    { id: 'Voice AI', name: 'Voice AI', count: aiServices.filter(s => s.category === 'Voice AI').length },
    { id: 'Automation', name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
    { id: 'Security', name: 'Security', count: aiServices.filter(s => s.category === 'Security').length },
    { id: 'Marketing', name: 'Marketing', count: aiServices.filter(s => s.category === 'Marketing').length },
    { id: 'Healthcare', name: 'Healthcare', count: aiServices.filter(s => s.category === 'Healthcare').length },
    { id: 'Finance', name: 'Finance', count: aiServices.filter(s => s.category === 'Finance').length },
    { id: 'Human Resources', name: 'Human Resources', count: aiServices.filter(s => s.category === 'Human Resources').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: aiServices.filter(s => s.category === 'Supply Chain').length }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace('$', '').replace('/month', '')) - parseInt(b.price.replace('$', '').replace('/month', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '').replace('/month', '')) - parseInt(a.price.replace('$', '').replace('/month', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'users':
        return parseInt(b.users.replace(',', '').replace('+', '')) - parseInt(a.users.replace(',', '').replace('+', ''));
      default:
        return b.popular ? 1 : -1;
    }
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, data analytics, computer vision, AI automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. From chatbots to computer vision, 
              we deliver AI that drives real results and measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
                <div className="text-gray-300 text-sm">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15K+</div>
                <div className="text-gray-300 text-sm">AI Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">4.8/5</div>
                <div className="text-gray-300 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="users">Most Users</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <div key={service.id} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {service.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                          </div>
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-sm text-gray-300">{service.users} users</span>
                        </div>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-cyan-400 text-sm font-medium">{service.freeTrial} free trial</span>
                      <div className="text-gray-400 text-xs">{service.implementationTime} setup</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">+{service.features.length - 4} more features</li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-green-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our AI Services */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="text-cyan-400">AI Services</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with proven expertise to deliver solutions that drive real business results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  Advanced AI Technology
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We use the latest machine learning models, neural networks, and AI algorithms to deliver state-of-the-art solutions.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  Proven Results
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our AI solutions have helped clients achieve 300% ROI, 80% efficiency gains, and millions in cost savings.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  Expert Team
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our team of AI specialists, data scientists, and engineers have decades of combined experience in AI implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 15,000+ businesses that have already transformed their operations with our AI solutions. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free consultation • ✓ No obligation • ✓ 30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiServicesPage;