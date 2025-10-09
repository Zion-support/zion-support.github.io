import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, Cpu, Eye, MessageSquare, BarChart, Zap, Shield, Globe, 
  ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Clock,
  TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone,
  Settings, FileText, Search, Bot, Palette, Camera, Music, Video,
  Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane,
  Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase,
  Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar,
  Clock3, Compass, PieChart, TrendingDown, Activity
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = useMemo(() => [
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot',
      description: 'Intelligent conversational AI for customer support and engagement',
      category: 'conversational',
      price: { starting: 99, period: 'month' },
      rating: 4.8,
      reviews: 1247,
      features: ['Natural language processing', 'Multi-language support', '24/7 availability', 'Custom training'],
      icon: MessageSquare,
      popular: true
    },
    {
      id: 'ai-analytics',
      name: 'AI Analytics Dashboard',
      description: 'Advanced analytics powered by machine learning for business insights',
      category: 'analytics',
      price: { starting: 199, period: 'month' },
      rating: 4.7,
      reviews: 892,
      features: ['Predictive analytics', 'Real-time insights', 'Custom reports', 'Data visualization'],
      icon: BarChart,
      popular: true
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generator',
      description: 'Automated content creation for blogs, social media, and marketing',
      category: 'content',
      price: { starting: 149, period: 'month' },
      rating: 4.6,
      reviews: 654,
      features: ['Blog post generation', 'Social media content', 'SEO optimization', 'Brand voice training'],
      icon: FileText,
      popular: false
    },
    {
      id: 'ai-image-recognition',
      name: 'AI Image Recognition',
      description: 'Computer vision solutions for image analysis and classification',
      category: 'vision',
      price: { starting: 299, period: 'month' },
      rating: 4.9,
      reviews: 423,
      features: ['Object detection', 'Facial recognition', 'Quality assessment', 'Custom model training'],
      icon: Eye,
      popular: true
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain },
    { id: 'conversational', name: 'Conversational AI', icon: MessageSquare },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'content', name: 'Content Generation', icon: FileText },
    { id: 'vision', name: 'Computer Vision', icon: Eye },
    { id: 'automation', name: 'Automation', icon: Zap }
  ];

  const filteredServices = useMemo(() => {
    let filtered = aiServices;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [aiServices, selectedCategory, searchTerm]);

  const formatPrice = (price: typeof aiServices[0]['price']) => {
    return `$${price.starting}/${price.period === 'month' ? 'mo' : 'yr'}`;
  };

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services to transform your business with artificial intelligence solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI services designed to automate, optimize, and innovate.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-400 text-slate-900'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg">
                          <Icon className="w-6 h-6 text-slate-900" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(service.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-400'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">
                              {service.rating} ({service.reviews} reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-2 py-1 rounded-full text-xs font-bold">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {formatPrice(service.price)}
                      </div>
                      <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Quote
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = useMemo(() => [
    {
      id: 'ai-enterprise-solutions',
      name: 'AI Enterprise Solutions',
      category: 'enterprise',
      description: 'Comprehensive AI transformation for large enterprises with custom ML models, data pipelines, and intelligent automation.',
      features: [
        'Custom Machine Learning Models',
        'Enterprise Data Integration',
        'Intelligent Process Automation',
        'Real-time Analytics Dashboard',
        'Scalable Cloud Infrastructure',
        '24/7 AI Monitoring & Support'
      ],
      pricing: {
        starter: { price: '$50,000', period: 'month', description: 'Basic AI implementation' },
        professional: { price: '$150,000', period: 'month', description: 'Advanced AI solutions' },
        enterprise: { price: '$500,000', period: 'month', description: 'Full AI transformation' }
      },
      benefits: [
        '300% average ROI within 12 months',
        '70% reduction in operational costs',
        '90% improvement in process efficiency',
        'Real-time decision making capabilities'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      link: '/ai-enterprise-solutions'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      category: 'customer-service',
      description: 'Intelligent 24/7 customer support with natural language processing, sentiment analysis, and automated ticket resolution.',
      features: [
        'Natural Language Processing',
        'Sentiment Analysis & Response',
        'Automated Ticket Resolution',
        'Multi-language Support',
        'Integration with CRM Systems',
        'Real-time Performance Analytics'
      ],
      pricing: {
        starter: { price: '$2,500', period: 'month', description: 'Up to 1,000 conversations' },
        professional: { price: '$7,500', period: 'month', description: 'Up to 10,000 conversations' },
        enterprise: { price: '$25,000', period: 'month', description: 'Unlimited conversations' }
      },
      benefits: [
        '95% customer satisfaction rate',
        '80% reduction in response time',
        '60% decrease in support costs',
        '24/7 availability'
      ],
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      link: '/ai-customer-support'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      category: 'analytics',
      description: 'Advanced AI-powered data analytics with predictive modeling, real-time insights, and automated reporting.',
      features: [
        'Predictive Analytics & Forecasting',
        'Real-time Data Processing',
        'Automated Report Generation',
        'Interactive Dashboards',
        'Data Visualization Tools',
        'Custom ML Model Training'
      ],
      pricing: {
        starter: { price: '$3,000', period: 'month', description: 'Up to 1M data points' },
        professional: { price: '$8,000', period: 'month', description: 'Up to 10M data points' },
        enterprise: { price: '$20,000', period: 'month', description: 'Unlimited data processing' }
      },
      benefits: [
        '85% improvement in decision accuracy',
        '50% faster data processing',
        'Real-time business insights',
        'Automated anomaly detection'
      ],
      icon: BarChart,
      color: 'from-green-500 to-emerald-500',
      popular: true,
      link: '/ai-data-analytics'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      category: 'content',
      description: 'Intelligent content creation with natural language generation, SEO optimization, and multi-format output.',
      features: [
        'Natural Language Generation',
        'SEO-Optimized Content',
        'Multi-format Output (Blog, Social, Email)',
        'Brand Voice Consistency',
        'Content Performance Analytics',
        'Automated Content Scheduling'
      ],
      pricing: {
        starter: { price: '$1,500', period: 'month', description: 'Up to 100 articles' },
        professional: { price: '$4,000', period: 'month', description: 'Up to 500 articles' },
        enterprise: { price: '$10,000', period: 'month', description: 'Unlimited content' }
      },
      benefits: [
        '90% reduction in content creation time',
        '300% increase in content output',
        'Consistent brand voice across all content',
        'SEO-optimized for better rankings'
      ],
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      popular: false,
      link: '/ai-content-generation'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      category: 'security',
      description: 'Advanced AI-powered cybersecurity with threat detection, automated response, and behavioral analysis.',
      features: [
        'Real-time Threat Detection',
        'Behavioral Analysis & Anomaly Detection',
        'Automated Incident Response',
        'Predictive Security Analytics',
        'Zero-trust Architecture',
        'Compliance Monitoring'
      ],
      pricing: {
        starter: { price: '$5,000', period: 'month', description: 'Up to 100 endpoints' },
        professional: { price: '$15,000', period: 'month', description: 'Up to 1,000 endpoints' },
        enterprise: { price: '$50,000', period: 'month', description: 'Unlimited endpoints' }
      },
      benefits: [
        '99.9% threat detection accuracy',
        '90% reduction in false positives',
        'Real-time security monitoring',
        'Automated incident response'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      popular: true,
      link: '/ai-cybersecurity'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'automation',
      description: 'Intelligent workflow automation with process optimization, smart routing, and adaptive learning.',
      features: [
        'Process Discovery & Mapping',
        'Intelligent Task Routing',
        'Adaptive Learning Algorithms',
        'Integration with 500+ Tools',
        'Real-time Process Monitoring',
        'Performance Optimization'
      ],
      pricing: {
        starter: { price: '$2,000', period: 'month', description: 'Up to 10 workflows' },
        professional: { price: '$6,000', period: 'month', description: 'Up to 50 workflows' },
        enterprise: { price: '$18,000', period: 'month', description: 'Unlimited workflows' }
      },
      benefits: [
        '75% reduction in manual tasks',
        '60% improvement in process efficiency',
        'Real-time process optimization',
        'Seamless tool integration'
      ],
      icon: Workflow,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      link: '/ai-workflow-automation'
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      category: 'sales',
      description: 'Intelligent sales automation with lead scoring, predictive analytics, and automated follow-up.',
      features: [
        'Intelligent Lead Scoring',
        'Predictive Sales Analytics',
        'Automated Follow-up Sequences',
        'CRM Integration & Sync',
        'Sales Performance Analytics',
        'Custom Sales Workflows'
      ],
      pricing: {
        starter: { price: '$3,500', period: 'month', description: 'Up to 1,000 leads' },
        professional: { price: '$9,000', period: 'month', description: 'Up to 10,000 leads' },
        enterprise: { price: '$25,000', period: 'month', description: 'Unlimited leads' }
      },
      benefits: [
        '40% increase in conversion rates',
        '50% reduction in sales cycle time',
        'Automated lead qualification',
        'Predictive sales forecasting'
      ],
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      popular: true,
      link: '/ai-sales-automation'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      category: 'healthcare',
      description: 'Advanced AI solutions for healthcare with medical imaging, diagnosis assistance, and patient monitoring.',
      features: [
        'Medical Image Analysis',
        'Diagnosis Assistance & Support',
        'Patient Risk Assessment',
        'Drug Interaction Analysis',
        'Telemedicine Integration',
        'HIPAA Compliant Infrastructure'
      ],
      pricing: {
        starter: { price: '$10,000', period: 'month', description: 'Basic medical imaging' },
        professional: { price: '$25,000', period: 'month', description: 'Advanced diagnostics' },
        enterprise: { price: '$75,000', period: 'month', description: 'Full healthcare AI suite' }
      },
      benefits: [
        '95% accuracy in medical imaging',
        '60% faster diagnosis time',
        'Reduced medical errors',
        'Improved patient outcomes'
      ],
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      popular: false,
      link: '/ai-healthcare'
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech Solutions',
      category: 'fintech',
      description: 'Intelligent financial technology solutions with fraud detection, risk assessment, and automated trading.',
      features: [
        'Real-time Fraud Detection',
        'Risk Assessment & Scoring',
        'Automated Trading Algorithms',
        'Regulatory Compliance Monitoring',
        'Financial Data Analysis',
        'Blockchain Integration'
      ],
      pricing: {
        starter: { price: '$8,000', period: 'month', description: 'Basic fraud detection' },
        professional: { price: '$20,000', period: 'month', description: 'Advanced risk management' },
        enterprise: { price: '$60,000', period: 'month', description: 'Full fintech AI platform' }
      },
      benefits: [
        '99.5% fraud detection accuracy',
        '80% reduction in false positives',
        'Real-time risk assessment',
        'Automated compliance reporting'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-teal-500',
      popular: true,
      link: '/ai-fintech'
    },
    {
      id: 'ai-mobile-apps',
      name: 'AI Mobile App Development',
      category: 'mobile',
      description: 'Intelligent mobile applications with AI-powered features, personalization, and smart recommendations.',
      features: [
        'AI-Powered Personalization',
        'Smart Recommendation Engine',
        'Natural Language Processing',
        'Computer Vision Integration',
        'Real-time Analytics',
        'Cross-platform Compatibility'
      ],
      pricing: {
        starter: { price: '$15,000', period: 'one-time', description: 'Basic AI mobile app' },
        professional: { price: '$35,000', period: 'one-time', description: 'Advanced AI features' },
        enterprise: { price: '$75,000', period: 'one-time', description: 'Full AI mobile platform' }
      },
      benefits: [
        'Enhanced user engagement',
        'Personalized user experience',
        'Intelligent app behavior',
        'Real-time user insights'
      ],
      icon: Smartphone,
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      link: '/ai-mobile-apps'
    },
    {
      id: 'ai-ecommerce',
      name: 'AI E-commerce Solutions',
      category: 'ecommerce',
      description: 'Intelligent e-commerce platform with personalized shopping, inventory optimization, and smart pricing.',
      features: [
        'Personalized Product Recommendations',
        'Dynamic Pricing Optimization',
        'Inventory Management AI',
        'Customer Behavior Analysis',
        'Automated Customer Service',
        'Sales Forecasting'
      ],
      pricing: {
        starter: { price: '$4,000', period: 'month', description: 'Up to 1,000 products' },
        professional: { price: '$12,000', period: 'month', description: 'Up to 10,000 products' },
        enterprise: { price: '$30,000', period: 'month', description: 'Unlimited products' }
      },
      benefits: [
        '35% increase in conversion rates',
        '25% improvement in average order value',
        'Automated inventory optimization',
        'Personalized shopping experience'
      ],
      icon: ShoppingCart,
      color: 'from-purple-500 to-indigo-500',
      popular: true,
      link: '/ai-ecommerce'
    },
    {
      id: 'ai-voice-processing',
      name: 'AI Voice Processing',
      category: 'voice',
      description: 'Advanced voice AI with speech recognition, natural language understanding, and voice synthesis.',
      features: [
        'Speech-to-Text Recognition',
        'Natural Language Understanding',
        'Voice Synthesis & Cloning',
        'Multi-language Support',
        'Real-time Processing',
        'Voice Analytics'
      ],
      pricing: {
        starter: { price: '$2,000', period: 'month', description: 'Up to 1,000 hours' },
        professional: { price: '$6,000', period: 'month', description: 'Up to 10,000 hours' },
        enterprise: { price: '$18,000', period: 'month', description: 'Unlimited processing' }
      },
      benefits: [
        '98% speech recognition accuracy',
        'Real-time voice processing',
        'Multi-language capabilities',
        'Natural voice synthesis'
      ],
      icon: Mic,
      color: 'from-violet-500 to-purple-500',
      popular: false,
      link: '/ai-voice-processing'
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3 },
    { id: 'enterprise', name: 'Enterprise', icon: Building },
    { id: 'customer-service', name: 'Customer Service', icon: MessageSquare },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'automation', name: 'Automation', icon: Workflow },
    { id: 'sales', name: 'Sales', icon: TrendingUp },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'fintech', name: 'Fintech', icon: DollarSign },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'voice', name: 'Voice', icon: Mic }
  ];

  const filteredServices = useMemo(() => {
    return aiServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [aiServices, selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including enterprise solutions, customer support, data analytics, cybersecurity, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, enterprise AI, customer support AI, data analytics AI, cybersecurity AI" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services. From enterprise solutions to customer support, we deliver cutting-edge AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From enterprise automation to intelligent customer support, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([tier, pricing]) => (
                      <div key={tier} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 capitalize">{tier}:</span>
                        <span className="text-white font-semibold">
                          {pricing.price}/{pricing.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    className="flex-1 cyber-button text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI experts are ready to help you implement the perfect solution for your business needs. 
            Get a free consultation and see how AI can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default function AIServicesPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const aiServices = [
    {
      category: 'AI Automation & Workflow',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      services: [
        {
          name: 'AI Workflow Automation',
          description: 'Automate complex business processes with intelligent workflows and decision trees',
          features: ['Process Optimization', 'Error Reduction', 'Cost Savings', 'Scalability', 'Custom Logic', 'Integration APIs'],
          pricing: 'Starting at $5,000/month',
          roi: '200-400% ROI',
          timeline: '4-8 weeks',
          popular: true
        },
        {
          name: 'AI Customer Support',
          description: '24/7 intelligent customer support with natural language processing and sentiment analysis',
          features: ['24/7 Availability', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management', 'Knowledge Base', 'Voice Integration'],
          pricing: 'Starting at $3,000/month',
          roi: '150-300% ROI',
          timeline: '2-4 weeks',
          popular: true
        },
        {
          name: 'AI Sales Automation',
          description: 'Intelligent sales processes with predictive analytics and automated lead nurturing',
          features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'CRM Integration', 'Pipeline Management', 'Performance Analytics'],
          pricing: 'Starting at $4,000/month',
          roi: '250-500% ROI',
          timeline: '3-6 weeks',
          popular: true
        },
        {
          name: 'AI Document Processing',
          description: 'Intelligent document analysis, extraction, and automated processing workflows',
          features: ['OCR Technology', 'Data Extraction', 'Classification', 'Validation', 'Workflow Automation', 'Compliance Tracking'],
          pricing: 'Starting at $2,500/month',
          roi: '300-600% ROI',
          timeline: '2-4 weeks',
          popular: false
        },
        {
          name: 'AI Email Automation',
          description: 'Smart email campaigns with personalization, timing optimization, and performance tracking',
          features: ['Personalization', 'Send Time Optimization', 'A/B Testing', 'Performance Analytics', 'Segmentation', 'Drip Campaigns'],
          pricing: 'Starting at $1,500/month',
          roi: '200-400% ROI',
          timeline: '1-2 weeks',
          popular: false
        }
      ]
    },
    {
      category: 'AI Analytics & Intelligence',
      icon: BarChart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'AI Data Analytics',
          description: 'Advanced analytics and insights from your data with machine learning algorithms',
          features: ['Predictive Analytics', 'Real-time Insights', 'Data Visualization', 'Custom Dashboards', 'Anomaly Detection', 'Trend Analysis'],
          pricing: 'Starting at $6,000/month',
          roi: '300-600% ROI',
          timeline: '6-10 weeks',
          popular: true
        },
        {
          name: 'AI Business Intelligence',
          description: 'Transform data into actionable business insights with AI-powered recommendations',
          features: ['KPI Tracking', 'Trend Analysis', 'Performance Metrics', 'Strategic Planning', 'Competitive Analysis', 'ROI Optimization'],
          pricing: 'Starting at $7,000/month',
          roi: '400-700% ROI',
          timeline: '8-12 weeks',
          popular: true
        },
        {
          name: 'AI Predictive Analytics',
          description: 'Forecast future trends and outcomes with advanced machine learning models',
          features: ['Demand Forecasting', 'Risk Assessment', 'Market Analysis', 'Scenario Planning', 'Customer Lifetime Value', 'Churn Prediction'],
          pricing: 'Starting at $8,000/month',
          roi: '500-800% ROI',
          timeline: '10-16 weeks',
          popular: true
        },
        {
          name: 'AI Real-time Monitoring',
          description: 'Continuous monitoring and alerting with intelligent anomaly detection',
          features: ['Real-time Alerts', 'Anomaly Detection', 'Performance Monitoring', 'Predictive Maintenance', 'Custom Thresholds', 'Automated Responses'],
          pricing: 'Starting at $4,000/month',
          roi: '250-500% ROI',
          timeline: '4-6 weeks',
          popular: false
        },
        {
          name: 'AI Market Intelligence',
          description: 'Comprehensive market analysis and competitive intelligence powered by AI',
          features: ['Competitor Analysis', 'Market Trends', 'Price Optimization', 'Customer Sentiment', 'Brand Monitoring', 'Opportunity Identification'],
          pricing: 'Starting at $5,500/month',
          roi: '350-650% ROI',
          timeline: '6-8 weeks',
          popular: false
        }
      ]
    },
    {
      category: 'AI Content & Marketing',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Content Generation',
          description: 'Create high-quality content at scale with advanced language models',
          features: ['Blog Posts', 'Social Media', 'Email Campaigns', 'Product Descriptions', 'Video Scripts', 'Ad Copy'],
          pricing: 'Starting at $2,000/month',
          roi: '100-300% ROI',
          timeline: '2-4 weeks',
          popular: true
        },
        {
          name: 'AI Email Marketing',
          description: 'Intelligent email campaigns with advanced personalization and automation',
          features: ['Personalization', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'Segmentation', 'Drip Campaigns'],
          pricing: 'Starting at $3,500/month',
          roi: '200-400% ROI',
          timeline: '3-5 weeks',
          popular: true
        },
        {
          name: 'AI SEO Optimization',
          description: 'Automated SEO analysis and optimization with machine learning',
          features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis', 'Link Building', 'Rank Tracking'],
          pricing: 'Starting at $4,500/month',
          roi: '250-500% ROI',
          timeline: '4-6 weeks',
          popular: true
        },
        {
          name: 'AI Social Media Management',
          description: 'Automated social media posting, engagement, and analytics',
          features: ['Content Scheduling', 'Engagement Automation', 'Analytics Dashboard', 'Hashtag Optimization', 'Influencer Identification', 'Crisis Management'],
          pricing: 'Starting at $2,500/month',
          roi: '200-400% ROI',
          timeline: '2-3 weeks',
          popular: false
        },
        {
          name: 'AI Video Marketing',
          description: 'AI-powered video creation, editing, and optimization for marketing campaigns',
          features: ['Video Generation', 'Auto-editing', 'Thumbnail Creation', 'Caption Generation', 'Performance Analytics', 'A/B Testing'],
          pricing: 'Starting at $3,000/month',
          roi: '250-500% ROI',
          timeline: '4-6 weeks',
          popular: false
        }
      ]
    },
    {
      category: 'AI Industry Solutions',
      icon: Target,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Healthcare Solutions',
          description: 'AI-powered healthcare and medical solutions with advanced diagnostics',
          features: ['Medical Imaging', 'Diagnosis Support', 'Patient Monitoring', 'Drug Discovery', 'Treatment Planning', 'Clinical Trials'],
          pricing: 'Starting at $15,000/month',
          roi: '400-800% ROI',
          timeline: '12-20 weeks',
          popular: true
        },
        {
          name: 'AI Fintech Solutions',
          description: 'Financial technology and banking AI solutions with fraud prevention',
          features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Regulatory Compliance', 'Anti-Money Laundering'],
          pricing: 'Starting at $12,000/month',
          roi: '300-600% ROI',
          timeline: '10-16 weeks',
          popular: true
        },
        {
          name: 'AI E-commerce Solutions',
          description: 'E-commerce optimization and personalization with advanced recommendation engines',
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'Dynamic Pricing', 'Supply Chain Optimization'],
          pricing: 'Starting at $5,000/month',
          roi: '200-500% ROI',
          timeline: '6-10 weeks',
          popular: true
        },
        {
          name: 'AI Manufacturing Solutions',
          description: 'Smart manufacturing with predictive maintenance and quality control',
          features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Energy Management', 'Safety Monitoring', 'Process Optimization'],
          pricing: 'Starting at $8,000/month',
          roi: '300-700% ROI',
          timeline: '8-14 weeks',
          popular: false
        },
        {
          name: 'AI Retail Solutions',
          description: 'Retail intelligence with customer behavior analysis and inventory optimization',
          features: ['Customer Behavior Analysis', 'Inventory Optimization', 'Demand Forecasting', 'Price Optimization', 'Store Layout Optimization', 'Staff Scheduling'],
          pricing: 'Starting at $6,000/month',
          roi: '250-550% ROI',
          timeline: '6-12 weeks',
          popular: false
        }
      ]
    },
    {
      category: 'AI Innovation & Emerging Tech',
      icon: Sparkles,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'AI Computer Vision',
          description: 'Advanced computer vision solutions for image and video analysis',
          features: ['Object Detection', 'Facial Recognition', 'Quality Inspection', 'Motion Analysis', '3D Reconstruction', 'Augmented Reality'],
          pricing: 'Starting at $7,000/month',
          roi: '400-800% ROI',
          timeline: '8-16 weeks',
          popular: false
        },
        {
          name: 'AI Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis and language understanding',
          features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
          pricing: 'Starting at $5,500/month',
          roi: '300-600% ROI',
          timeline: '6-12 weeks',
          popular: false
        },
        {
          name: 'AI Robotics & Automation',
          description: 'Intelligent robotics solutions for industrial and service applications',
          features: ['Autonomous Navigation', 'Object Manipulation', 'Human-Robot Interaction', 'Predictive Maintenance', 'Safety Systems', 'Integration APIs'],
          pricing: 'Starting at $20,000/month',
          roi: '500-1000% ROI',
          timeline: '16-24 weeks',
          popular: false
        },
        {
          name: 'AI Edge Computing',
          description: 'AI solutions optimized for edge devices and real-time processing',
          features: ['Real-time Processing', 'Low Latency', 'Offline Capability', 'Resource Optimization', 'Security', 'Scalability'],
          pricing: 'Starting at $6,500/month',
          roi: '350-700% ROI',
          timeline: '10-18 weeks',
          popular: false
        },
        {
          name: 'AI Quantum Computing',
          description: 'Quantum-enhanced AI solutions for complex optimization problems',
          features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Machine Learning', 'Research Support'],
          pricing: 'Starting at $25,000/month',
          roi: '600-1200% ROI',
          timeline: '20-32 weeks',
          popular: false
        }
      ]
    },
    {
      category: 'AI Security & Compliance',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'AI Cybersecurity Suite',
          description: 'Advanced AI-powered cybersecurity solutions for threat detection and prevention',
          features: ['Threat Detection', 'Incident Response', 'Vulnerability Assessment', 'Behavioral Analysis', 'Compliance Monitoring', 'Security Analytics'],
          pricing: 'Starting at $10,000/month',
          roi: '400-800% ROI',
          timeline: '8-14 weeks',
          popular: true
        },
        {
          name: 'AI Privacy Protection',
          description: 'AI solutions for data privacy, anonymization, and compliance management',
          features: ['Data Anonymization', 'Privacy Compliance', 'Consent Management', 'Data Discovery', 'Risk Assessment', 'Audit Support'],
          pricing: 'Starting at $8,000/month',
          roi: '300-600% ROI',
          timeline: '6-12 weeks',
          popular: false
        },
        {
          name: 'AI Regulatory Compliance',
          description: 'Automated compliance monitoring and reporting for various regulations',
          features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'PCI DSS', 'Automated Reporting', 'Risk Management'],
          pricing: 'Starting at $12,000/month',
          roi: '350-700% ROI',
          timeline: '10-16 weeks',
          popular: false
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our clients see an average ROI of 300% within the first year',
      stat: '300%'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Reduce manual work by up to 90% with intelligent automation',
      stat: '90%'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Lower operational costs by 70% through process optimization',
      stat: '70%'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee',
      stat: '99.9%'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description: 'We analyze your business processes and identify AI opportunities',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy tailored to your needs',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Development & Integration',
      description: 'Build and integrate AI solutions into your existing systems',
      duration: '4-12 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '2-4 weeks'
    },
    {
      step: 5,
      title: 'Deployment & Support',
      description: 'Deploy solutions and provide ongoing support and monitoring',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'Manual data processing taking 40 hours per week',
      solution: 'AI-powered data processing automation',
      results: ['95% time reduction', '300% ROI', 'Zero errors'],
      image: '/images/case-studies/techcorp.jpg'
    },
    {
      company: 'HealthPlus Medical',
      industry: 'Healthcare',
      challenge: 'Patient diagnosis accuracy and speed',
      solution: 'AI diagnostic assistance system',
      results: ['40% faster diagnosis', '25% accuracy improvement', '200% ROI'],
      image: '/images/case-studies/healthplus.jpg'
    },
    {
      company: 'FinanceFlow Bank',
      industry: 'Banking',
      challenge: 'Fraud detection and risk assessment',
      solution: 'AI fraud detection and risk analysis',
      results: ['99.5% fraud detection', '60% false positive reduction', '400% ROI'],
      image: '/images/case-studies/financeflow.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From automation to analytics, 
              we deliver intelligent systems that drive real results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">300% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve real business challenges
            </p>
          </div>
          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 group relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 4 && (
                            <div className="text-xs text-gray-400 col-span-2">
                              +{service.features.length - 4} more features
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Expected ROI:</span>
                          <span className="text-sm font-medium text-green-400">{service.roi}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Timeline:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.timeline}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all text-sm">
                          Learn More
                        </button>
                        <button className="flex-1 border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all text-sm">
                          Demo
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIServicesPage;
