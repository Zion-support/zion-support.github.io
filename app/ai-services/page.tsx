'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
  Filter,
  Award,
  Rocket,
  DollarSign,
  Calendar,
  Monitor,
  Server,
  Network,
  Wifi,
  HardDrive,
  Cpu as CpuIcon,
  MemoryStick,
  HardDrive as StorageIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  category: string;
  features: string[];
  price: string;
  originalPrice?: string;
  marketPrice: string;
  benefits: string[];
  useCases: string[];
  integrations: string[];
  setupTime: string;
  freeTrial: string;
  support: string;
  popular: boolean;
  enterprise: boolean;
}

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const aiServices: AIService[] = [
    {
      id: '1',
      icon: Bot,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that provides 24/7 customer support and engagement with advanced NLP and sentiment analysis',
      category: 'Customer Service',
      features: [
        'GPT-4 powered conversational AI with custom training',
        'Natural language processing and understanding',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and emotion detection',
        'Integration with CRM systems',
        'Real-time learning capabilities',
        'Voice and text chat support',
        'Advanced analytics and insights',
        'Custom knowledge base management',
        'Escalation to human agents'
      ],
      price: 'Starting at $299/month',
      originalPrice: '$499/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions', 'Improve customer satisfaction'],
      useCases: ['Customer support', 'Lead qualification', 'FAQ automation', 'Order tracking', 'Technical support', 'Sales assistance'],
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook Messenger', 'Salesforce'],
      setupTime: '2-3 days',
      freeTrial: '30 days',
      support: '24/7 phone & chat',
      popular: true,
      enterprise: false
    },
    {
      id: '2',
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, marketing, and technical documentation',
      category: 'Content',
      features: [
        'GPT-4 powered content generation',
        'Blog post and article creation',
        'Social media content generation',
        'Email marketing campaigns',
        'SEO-optimized content',
        'Brand voice customization',
        'Multi-language content creation',
        'Content optimization suggestions',
        'Plagiarism detection and prevention',
        'Content calendar management'
      ],
      price: 'Starting at $199/month',
      originalPrice: '$349/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing', 'Cost-effective content'],
      useCases: ['Blog writing', 'Social media posts', 'Email campaigns', 'Product descriptions', 'Technical documentation', 'Marketing copy'],
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Google Docs', 'Notion', 'Slack'],
      setupTime: '1 day',
      freeTrial: '14 days',
      support: '24/7 email & chat',
      popular: true,
      enterprise: false
    },
    {
      id: '3',
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms with predictive insights and automated reporting',
      category: 'Analytics',
      features: [
        'Predictive analytics and forecasting',
        'Real-time dashboards and visualization',
        'Automated report generation',
        'Anomaly detection and alerting',
        'Custom data models and algorithms',
        'Natural language query interface',
        'Advanced statistical analysis',
        'Data quality assessment',
        'Automated insights generation',
        'Integration with major data sources'
      ],
      price: 'Starting at $399/month',
      originalPrice: '$599/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization', 'Better decision making'],
      useCases: ['Business intelligence', 'Sales forecasting', 'Customer analytics', 'Financial analysis', 'Marketing attribution', 'Risk assessment'],
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Stripe', 'Shopify', 'MySQL', 'PostgreSQL', 'MongoDB'],
      setupTime: '3-5 days',
      freeTrial: '14 days',
      support: '24/7 phone & email',
      popular: true,
      enterprise: true
    },
    {
      id: '4',
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, automation, and visual content understanding',
      category: 'Computer Vision',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics and monitoring',
        'Real-time image processing',
        'OCR and document scanning',
        'Medical image analysis',
        'Autonomous vehicle vision',
        'Augmented reality features',
        'Custom model training'
      ],
      price: 'Starting at $599/month',
      originalPrice: '$899/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction', 'Improved accuracy'],
      useCases: ['Quality inspection', 'Security monitoring', 'Medical imaging', 'Autonomous vehicles', 'Retail analytics', 'Document processing'],
      integrations: ['AWS Rekognition', 'Google Vision', 'Azure Computer Vision', 'OpenCV', 'TensorFlow', 'PyTorch', 'CUDA', 'NVIDIA'],
      setupTime: '1-2 weeks',
      freeTrial: '7 days',
      support: '24/7 phone & email',
      popular: false,
      enterprise: true
    },
    {
      id: '5',
      icon: Mic,
      title: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions, accessibility, and voice automation',
      category: 'Voice AI',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice biometrics and authentication',
        'Call analytics and insights',
        'Multi-language support',
        'Real-time transcription',
        'Voice command processing',
        'Emotion detection in voice',
        'Custom voice model training',
        'Integration with phone systems'
      ],
      price: 'Starting at $249/month',
      originalPrice: '$399/month',
      marketPrice: '$400-1800/month',
      benefits: ['Improved accessibility', 'Voice automation', 'Call quality insights', 'Multi-language support', 'Enhanced user experience'],
      useCases: ['Call centers', 'Voice assistants', 'Accessibility tools', 'Voice commands', 'Transcription services', 'Voice analytics'],
      integrations: ['Twilio', 'Vonage', 'Asterisk', 'WebRTC', 'Google Speech', 'Azure Speech', 'AWS Polly', 'IBM Watson'],
      setupTime: '2-3 days',
      freeTrial: '14 days',
      support: '24/7 email & chat',
      popular: false,
      enterprise: false
    },
    {
      id: '6',
      icon: Workflow,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows with minimal human intervention',
      category: 'Automation',
      features: [
        'Process mining and discovery',
        'Workflow optimization',
        'Task automation and scheduling',
        'Exception handling and routing',
        'Performance monitoring',
        'Integration with business systems',
        'Custom automation rules',
        'Machine learning optimization',
        'Real-time process insights',
        'Compliance and audit trails'
      ],
      price: 'Starting at $349/month',
      originalPrice: '$549/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation', 'Better compliance'],
      useCases: ['HR processes', 'Finance workflows', 'Customer onboarding', 'Order processing', 'Document approval', 'Inventory management'],
      integrations: ['Salesforce', 'HubSpot', 'Zapier', 'Microsoft Power Automate', 'UiPath', 'Automation Anywhere', 'Slack', 'Teams'],
      setupTime: '1-2 weeks',
      freeTrial: '21 days',
      support: '24/7 phone & email',
      popular: true,
      enterprise: true
    },
    {
      id: '7',
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security monitoring using AI algorithms for proactive security management',
      category: 'Security',
      features: [
        'AI-powered threat detection',
        'Behavioral analysis and monitoring',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance monitoring and reporting',
        'Real-time security alerts',
        'Anomaly detection',
        'Threat intelligence integration',
        'Security orchestration',
        'Forensic analysis tools'
      ],
      price: 'Starting at $499/month',
      originalPrice: '$799/month',
      marketPrice: '$800-4000/month',
      benefits: ['Proactive security', 'Reduced false positives', 'Faster incident response', 'Compliance assurance', 'Better threat detection'],
      useCases: ['Threat monitoring', 'Incident response', 'Compliance management', 'Security analytics', 'Risk assessment', 'Forensic analysis'],
      integrations: ['SIEM systems', 'Firewalls', 'EDR solutions', 'Active Directory', 'Okta', 'AWS Security', 'Azure Security', 'Splunk'],
      setupTime: '1-2 weeks',
      freeTrial: '7 days',
      support: '24/7 phone & email',
      popular: false,
      enterprise: true
    },
    {
      id: '8',
      icon: Smartphone,
      title: 'AI Mobile Applications',
      description: 'Custom mobile apps with integrated AI features for iOS and Android with advanced machine learning capabilities',
      category: 'Mobile',
      features: [
        'AI-powered mobile features',
        'Cross-platform development',
        'Offline AI capabilities',
        'Real-time processing',
        'Custom integrations',
        'Push notifications with AI',
        'Image recognition in apps',
        'Voice commands and processing',
        'Personalization engines',
        'Advanced analytics integration'
      ],
      price: 'Starting at $8,000/project',
      originalPrice: '$12,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Enhanced user experience', 'Intelligent features', 'Competitive advantage', 'Future-proof solutions', 'Better engagement'],
      useCases: ['E-commerce apps', 'Healthcare apps', 'Finance apps', 'Education apps', 'Productivity apps', 'Entertainment apps'],
      integrations: ['iOS SDK', 'Android SDK', 'React Native', 'Flutter', 'TensorFlow Lite', 'Core ML', 'Firebase', 'AWS Mobile'],
      setupTime: '2-4 months',
      freeTrial: 'N/A',
      support: 'Project-based support',
      popular: false,
      enterprise: true
    },
    {
      id: '9',
      icon: Cloud,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure and model deployment on cloud platforms with auto-scaling and optimization',
      category: 'Infrastructure',
      features: [
        'AI model deployment and hosting',
        'Auto-scaling infrastructure',
        'GPU optimization and management',
        'Data pipeline management',
        'Monitoring and logging',
        'Model versioning and management',
        'A/B testing for models',
        'Cost optimization',
        'Security and compliance',
        'Multi-cloud deployment'
      ],
      price: 'Starting at $699/month',
      originalPrice: '$999/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Scalable infrastructure', 'Cost optimization', 'High availability', 'Easy deployment', 'Better performance'],
      useCases: ['Model hosting', 'Data processing', 'Training infrastructure', 'Inference services', 'MLOps', 'Data pipelines'],
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'TensorFlow Serving', 'PyTorch Serve', 'MLflow'],
      setupTime: '1-2 weeks',
      freeTrial: '14 days',
      support: '24/7 phone & email',
      popular: false,
      enterprise: true
    },
    {
      id: '10',
      icon: Palette,
      title: 'AI Design Assistant',
      description: 'AI-powered design tools for graphics, UI/UX, and creative content generation with automated design optimization',
      category: 'Design',
      features: [
        'Automated design generation',
        'Brand consistency checking',
        'A/B testing optimization',
        'Color and layout suggestions',
        'Template customization',
        'Image enhancement and editing',
        'Logo and graphic generation',
        'UI/UX design assistance',
        'Design trend analysis',
        'Collaborative design tools'
      ],
      price: 'Starting at $199/month',
      originalPrice: '$299/month',
      marketPrice: '$300-1200/month',
      benefits: ['Faster design process', 'Consistent branding', 'Creative inspiration', 'Cost-effective solutions', 'Better design quality'],
      useCases: ['Graphic design', 'UI/UX design', 'Marketing materials', 'Logo design', 'Web design', 'Social media graphics'],
      integrations: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Canva', 'Photoshop', 'Illustrator', 'InDesign', 'After Effects'],
      setupTime: '1 day',
      freeTrial: '14 days',
      support: '24/7 email & chat',
      popular: false,
      enterprise: false
    },
    {
      id: '11',
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to identify opportunities, plan AI transformation, and implement AI solutions',
      category: 'Consulting',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and planning',
        'Vendor evaluation and selection',
        'Implementation planning',
        'Change management support',
        'Training and education',
        'Ongoing optimization',
        'Compliance and governance',
        'Performance monitoring'
      ],
      price: 'Starting at $5,000/month',
      originalPrice: '$7,500/month',
      marketPrice: '$8000-25000/month',
      benefits: ['Strategic guidance', 'Technology expertise', 'Cost optimization', 'Digital transformation', 'Competitive advantage'],
      useCases: ['AI strategy', 'Digital transformation', 'Technology planning', 'Vendor selection', 'Implementation guidance', 'Training programs'],
      integrations: ['All major AI platforms', 'Cloud providers', 'Data platforms', 'Business systems', 'Analytics tools', 'ML platforms'],
      setupTime: '1-2 months',
      freeTrial: 'N/A',
      support: 'Dedicated consultant',
      popular: false,
      enterprise: true
    },
    {
      id: '12',
      icon: Cpu,
      title: 'AI Model Development',
      description: 'Custom AI model development and training for specific business needs with end-to-end support',
      category: 'Development',
      features: [
        'Custom model development',
        'Data preparation and cleaning',
        'Model training and optimization',
        'Performance testing and validation',
        'API development and integration',
        'Model deployment and hosting',
        'Continuous learning and updates',
        'Monitoring and maintenance',
        'Documentation and training',
        'Support and maintenance'
      ],
      price: 'Starting at $15,000/project',
      originalPrice: '$25,000/project',
      marketPrice: '$30000-150000/project',
      benefits: ['Custom solutions', 'Business-specific models', 'Competitive advantage', 'Scalable development', 'Expert support'],
      useCases: ['Custom AI models', 'Business-specific solutions', 'Research and development', 'Proof of concepts', 'Pilot projects', 'Production systems'],
      integrations: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'AWS SageMaker', 'Azure ML', 'Google AI Platform', 'Kubernetes', 'Docker'],
      setupTime: '2-6 months',
      freeTrial: 'N/A',
      support: 'Project-based support',
      popular: false,
      enterprise: true
    }
  ];

  const categories = ['All', 'Customer Service', 'Content', 'Analytics', 'Computer Vision', 'Voice AI', 'Automation', 'Security', 'Mobile', 'Infrastructure', 'Design', 'Consulting', 'Development'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price-low':
        const aPrice = parseInt(a.price.replace(/[^0-9]/g, ''));
        const bPrice = parseInt(b.price.replace(/[^0-9]/g, ''));
        return aPrice - bPrice;
      case 'price-high':
        const aPriceHigh = parseInt(a.price.replace(/[^0-9]/g, ''));
        const bPriceHigh = parseInt(b.price.replace(/[^0-9]/g, ''));
        return bPriceHigh - aPriceHigh;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const stats = [
    { icon: <Brain className="w-8 h-8 text-cyan-500" />, value: '95%', label: 'Accuracy Rate' },
    { icon: <Zap className="w-8 h-8 text-green-500" />, value: '10x', label: 'Faster Processing' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <TrendingUp className="w-8 h-8 text-orange-500" />, value: '300%', label: 'Efficiency Gain' }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology',
    '24/7 AI-powered support and monitoring',
    'Custom solutions tailored to your business',
    'Expert AI consulting and implementation'
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. From chatbots to computer vision, 
              we deliver AI that drives real results and measurable business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
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
              <div className="flex gap-4">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    <option value="popular" className="bg-slate-800">Most Popular</option>
                    <option value="price-low" className="bg-slate-800">Price: Low to High</option>
                    <option value="price-high" className="bg-slate-800">Price: High to Low</option>
                    <option value="name" className="bg-slate-800">Name A-Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges and drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative cyber-card group hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25' : 'border-white/20'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                        {service.enterprise && (
                          <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">Enterprise</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-semibold">Our Price:</span>
                        <div className="text-right">
                          <span className="text-white font-bold text-lg">{service.price}</span>
                          {service.originalPrice && (
                            <span className="text-gray-400 text-sm line-through ml-2">{service.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-gray-300">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-cyan-400 font-medium">{service.setupTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Free Trial:</span>
                        <span className="text-green-400 font-medium">{service.freeTrial}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-cyan-400 text-sm font-medium">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>

                    <div className="space-y-3">
                      <Link
                        to="/contact"
                        className="w-full cyber-button text-center py-3 block"
                      >
                        Get Quote
                      </Link>
                      <Link
                        to={`/ai-services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-3 rounded-lg font-semibold transition-all duration-300 text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency with cutting-edge AI technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can help you achieve your business goals and drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/consultation"
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📞 Call: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                </p>
                <p className="text-gray-300 text-sm mb-2">
                  📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a>
                </p>
                <p className="text-gray-300 text-sm">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </React.Fragment>
  );
};

export default AIServicesPage;