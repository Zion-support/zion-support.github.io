'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
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
  BarChart3,
  Smartphone,
  Cloud,
  Lock,
  Code,
  Palette,
  Headphones,
  Mail,
  MapPin,
  DollarSign,
  Server,
  Network,
  Monitor
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      id: 1,
      title: 'AI-Powered Chatbots & Virtual Assistants',
      description: 'Advanced conversational AI that provides 24/7 customer support, lead qualification, and intelligent assistance.',
      icon: Bot,
      category: 'Customer Service',
      features: [
        'GPT-4 powered natural language processing',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and emotion detection',
        'Integration with CRM and helpdesk systems',
        'Voice and text conversation capabilities',
        'Custom training on your business data',
        'Analytics and conversation insights',
        'Live agent handoff with context preservation'
      ],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      id: 2,
      title: 'AI Content Generation & Marketing',
      description: 'Automated content creation using advanced language models for blogs, social media, email campaigns, and marketing materials.',
      icon: FileText,
      category: 'Content',
      features: [
        'Blog post and article generation',
        'Social media content creation',
        'Email marketing campaign automation',
        'SEO-optimized content with keyword research',
        'Brand voice customization and consistency',
        'Multi-platform content distribution',
        'A/B testing and optimization',
        'Content calendar and scheduling'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      link: 'https://ziontechgroup.com/ai-content-writer'
    },
    {
      id: 3,
      title: 'AI Data Analytics & Business Intelligence',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms for predictive insights and decision making.',
      icon: BarChart3,
      category: 'Analytics',
      features: [
        'Predictive analytics and forecasting',
        'Real-time dashboards and reporting',
        'Automated anomaly detection',
        'Custom data models and algorithms',
        'Natural language query interface',
        'Data visualization and storytelling',
        'ROI and performance optimization',
        'Integration with 100+ data sources'
      ],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      id: 4,
      title: 'AI Computer Vision & Image Processing',
      description: 'Image and video analysis solutions for quality control, security, automation, and visual content understanding.',
      icon: Eye,
      category: 'Computer Vision',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition and biometrics',
        'Video analytics and monitoring',
        'OCR and document scanning',
        'Medical imaging analysis',
        'Real-time processing capabilities',
        'Custom model training'
      ],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction'],
      link: 'https://ziontechgroup.com/ai-computer-vision'
    },
    {
      id: 5,
      title: 'AI Voice Processing & Speech Recognition',
      description: 'Advanced speech recognition, synthesis, and voice analytics for customer interactions and accessibility.',
      icon: Mic,
      category: 'Voice AI',
      features: [
        'Speech-to-text conversion (99% accuracy)',
        'Text-to-speech synthesis',
        'Voice biometrics and authentication',
        'Call analytics and sentiment analysis',
        'Multi-language voice support',
        'Real-time transcription',
        'Voice command processing',
        'Integration with phone systems'
      ],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['Improved accessibility', 'Voice automation', 'Call quality insights', 'Multi-language support'],
      link: 'https://ziontechgroup.com/ai-voice-processing'
    },
    {
      id: 6,
      title: 'AI Workflow Automation & RPA',
      description: 'Intelligent process automation that learns and optimizes business workflows, reducing manual tasks and errors.',
      icon: Workflow,
      category: 'Automation',
      features: [
        'Process mining and discovery',
        'Workflow optimization and redesign',
        'Task automation and scheduling',
        'Exception handling and escalation',
        'Performance monitoring and analytics',
        'Integration with existing systems',
        'Custom automation rules',
        'Human-in-the-loop workflows'
      ],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      id: 7,
      title: 'AI Cybersecurity & Threat Detection',
      description: 'Advanced threat detection and security monitoring using AI algorithms for proactive cybersecurity.',
      icon: Shield,
      category: 'Security',
      features: [
        'Real-time threat detection and response',
        'Behavioral analysis and anomaly detection',
        'Automated incident response',
        'Vulnerability assessment and scanning',
        'Compliance monitoring and reporting',
        'Dark web monitoring',
        'Security awareness training',
        '24/7 SOC (Security Operations Center)'
      ],
      price: 'Starting at $499/month',
      marketPrice: '$800-4000/month',
      benefits: ['Proactive security', 'Reduced false positives', 'Faster incident response', 'Compliance assurance'],
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      id: 8,
      title: 'AI Mobile Applications & Development',
      description: 'Custom mobile apps with integrated AI features for iOS and Android, including intelligent recommendations and automation.',
      icon: Smartphone,
      category: 'Mobile',
      features: [
        'AI-powered mobile features',
        'Cross-platform development (iOS/Android)',
        'Offline AI capabilities',
        'Real-time processing and inference',
        'Custom AI model integration',
        'Push notifications and alerts',
        'App store optimization',
        'Maintenance and updates'
      ],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Enhanced user experience', 'Intelligent features', 'Competitive advantage', 'Future-proof solutions'],
      link: 'https://ziontechgroup.com/ai-mobile-development'
    },
    {
      id: 9,
      title: 'AI Cloud Infrastructure & Model Deployment',
      description: 'Scalable AI infrastructure and model deployment on cloud platforms with auto-scaling and optimization.',
      icon: Cloud,
      category: 'Infrastructure',
      features: [
        'Model deployment and serving',
        'Auto-scaling and load balancing',
        'GPU optimization and management',
        'Data pipeline automation',
        'Monitoring and logging',
        'A/B testing for models',
        'Cost optimization',
        'Disaster recovery'
      ],
      price: 'Starting at $699/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Scalable infrastructure', 'Cost optimization', 'High availability', 'Easy deployment'],
      link: 'https://ziontechgroup.com/ai-cloud-infrastructure'
    },
    {
      id: 10,
      title: 'AI Design Assistant & Creative Tools',
      description: 'AI-powered design tools for graphics, UI/UX, and creative content generation with brand consistency.',
      icon: Palette,
      category: 'Design',
      features: [
        'Automated design generation',
        'Brand consistency enforcement',
        'A/B testing optimization',
        'Color and layout suggestions',
        'Template customization',
        'Image enhancement and editing',
        'Logo and graphic design',
        'Design system generation'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1200/month',
      benefits: ['Faster design process', 'Consistent branding', 'Creative inspiration', 'Cost-effective solutions'],
      link: 'https://ziontechgroup.com/ai-design-studio'
    },
    {
      id: 11,
      title: 'AI Financial Analysis & Fraud Detection',
      description: 'Advanced financial analysis, fraud detection, and risk assessment using machine learning algorithms.',
      icon: DollarSign,
      category: 'Finance',
      features: [
        'Real-time fraud detection',
        'Credit risk assessment',
        'Investment analysis and recommendations',
        'Automated financial reporting',
        'Compliance monitoring',
        'Anomaly detection in transactions',
        'Predictive financial modeling',
        'Regulatory compliance reporting'
      ],
      price: 'Starting at $449/month',
      marketPrice: '$800-3000/month',
      benefits: ['Reduced fraud losses', 'Improved risk management', 'Automated compliance', 'Better financial insights'],
      link: 'https://ziontechgroup.com/ai-financial-analyzer'
    },
    {
      id: 12,
      title: 'AI Healthcare Solutions & Medical AI',
      description: 'AI-powered healthcare solutions including medical imaging, diagnosis assistance, and patient care optimization.',
      icon: Heart,
      category: 'Healthcare',
      features: [
        'Medical image analysis and diagnosis',
        'Patient data analysis and insights',
        'Drug discovery and development',
        'Treatment recommendation systems',
        'Electronic health record optimization',
        'Clinical trial optimization',
        'Telemedicine AI assistance',
        'Healthcare workflow automation'
      ],
      price: 'Starting at $1,299/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved diagnosis accuracy', 'Faster treatment decisions', 'Reduced medical errors', 'Enhanced patient care'],
      link: 'https://ziontechgroup.com/ai-healthcare'
    }
  ];

  const categories = ['all', 'Customer Service', 'Content', 'Analytics', 'Computer Vision', 'Voice AI', 'Automation', 'Security', 'Mobile', 'Infrastructure', 'Design', 'Finance', 'Healthcare'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: Brain, value: '500+', label: 'AI Models Deployed' },
    { icon: Zap, value: '99.9%', label: 'Accuracy Rate' },
    { icon: Shield, value: '24/7', label: 'AI Monitoring' },
    { icon: TrendingUp, value: '300%', label: 'Efficiency Gain' }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, data analytics, computer vision, AI automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. From chatbots to computer vision, 
              we deliver AI that drives real results and measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
              <a href="tel:+13024640950" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges and drive growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">Category: </span>
                    <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">Our Price:</span>
                      <span className="text-white font-bold">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Market Price:</span>
                      <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <a 
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-cyan-400 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Increase Efficiency by 60%</h3>
                <p className="text-gray-300">Our AI solutions automate repetitive tasks and optimize workflows, delivering measurable efficiency gains.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Reduce Costs by 40%</h3>
                <p className="text-gray-300">Automation and AI-driven optimization significantly reduce operational costs and resource requirements.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enhanced Decision Making</h3>
                <p className="text-gray-300">AI-powered insights and predictive analytics enable data-driven decision making at scale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our AI experts to discuss your requirements and get a customized solution that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </React.Fragment>
  );
};

export default AIServicesPage;