'use client'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart, 
  MessageCircle, 
  Eye, 
  Mic, 
  Workflow, 
  Heart, 
  DollarSign, 
  Shield, 
  Cpu, 
  Globe, 
  Users, 
  FileText, 
  Target, 
  Zap,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Award,
  Rocket,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Database,
  Settings,
  Code,
  Lock,
  Monitor,
  Package,
  Calendar,
  CheckSquare,
  Wifi,
  Printer,
  Router,
  Box,
  Layers,
  BarChart3,
  MessageSquare,
  Headphones,
  HardDrive,
  Link as LinkIcon,
  Server
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Comprehensive AI Services with real capabilities and pricing
  const aiServices = [
    {
      id: 'ai-chatbots-nlp',
      name: 'AI Chatbots & NLP',
      description: 'Advanced conversational AI with natural language processing, sentiment analysis, and multi-language support',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Natural language processing',
        'Multi-language support (50+ languages)',
        'Sentiment analysis',
        'Intent recognition',
        'Context awareness',
        'CRM integration',
        'Voice integration',
        'Real-time learning'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer availability',
        'Instant response times',
        'Improve customer satisfaction by 40%'
      ],
      category: 'Conversational AI',
      icon: MessageCircle,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'Microsoft Teams'],
      useCases: ['Customer Support', 'Sales Automation', 'Lead Qualification', 'FAQ Automation']
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, marketing, and documentation',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing campaigns',
        'SEO optimization',
        'Brand voice customization',
        'Multi-language content',
        'Content templates',
        'Plagiarism detection'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO-optimized content',
        'Increase engagement by 150%'
      ],
      category: 'Content AI',
      icon: FileText,
      popular: true,
      trialDays: 7,
      setupFee: 0,
      integrations: ['WordPress', 'HubSpot', 'Hootsuite', 'Buffer', 'Mailchimp'],
      useCases: ['Content Marketing', 'Social Media', 'Email Campaigns', 'Documentation']
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms for predictive insights',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models',
        'Data visualization',
        'Statistical analysis',
        'ROI optimization'
      ],
      benefits: [
        'Data-driven insights',
        'Predictive forecasting',
        'Automated reporting',
        'Increase ROI by 35%'
      ],
      category: 'Analytics AI',
      icon: BarChart,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify'],
      useCases: ['Business Intelligence', 'Sales Forecasting', 'Customer Analytics', 'Performance Monitoring']
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, automation, and medical diagnostics',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing',
        'Medical image analysis',
        'Autonomous vehicle vision',
        'Industrial inspection'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Real-time monitoring',
        'Reduce inspection costs by 70%'
      ],
      category: 'Computer Vision',
      icon: Eye,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['AWS Rekognition', 'Google Vision', 'Azure Computer Vision', 'OpenCV', 'TensorFlow'],
      useCases: ['Quality Control', 'Security Systems', 'Medical Imaging', 'Autonomous Vehicles']
    },
    {
      id: 'ai-voice-solutions',
      name: 'AI Voice Solutions',
      description: 'Advanced speech recognition, synthesis, and voice analytics for customer interactions and accessibility',
      price: '$249/month',
      marketPrice: '$400-1800/month',
      features: [
        'Speech-to-text conversion',
        'Voice synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support',
        'Real-time transcription',
        'Voice emotion analysis',
        'Automated call routing'
      ],
      benefits: [
        'Improved accessibility',
        'Voice automation',
        'Call quality insights',
        'Reduce call handling time by 50%'
      ],
      category: 'Voice AI',
      icon: Mic,
      popular: false,
      trialDays: 7,
      setupFee: 0,
      integrations: ['Twilio', 'Vonage', 'Amazon Polly', 'Google Speech', 'Azure Speech'],
      useCases: ['Call Centers', 'Accessibility', 'Voice Assistants', 'Transcription Services']
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows with minimal human intervention',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring',
        'RPA integration',
        'Custom triggers',
        'Error recovery'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction by 90%',
        'Cost savings',
        'Scalable automation'
      ],
      category: 'Process Automation',
      icon: Workflow,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Zapier', 'Microsoft Power Automate', 'UiPath', 'Automation Anywhere', 'Blue Prism'],
      useCases: ['Business Process Automation', 'Data Entry', 'Invoice Processing', 'Customer Onboarding']
    },
    {
      id: 'ai-healthcare-solutions',
      name: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis assistance, drug discovery, patient care optimization, and clinical decision support',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Medical image analysis',
        'Drug discovery algorithms',
        'Patient risk assessment',
        'Treatment recommendations',
        'Clinical trial optimization',
        'Diagnostic assistance',
        'Patient monitoring',
        'Drug interaction checking'
      ],
      benefits: [
        'Improved diagnosis accuracy',
        'Faster drug development',
        'Better patient outcomes',
        'Reduce medical errors by 60%'
      ],
      category: 'Healthcare AI',
      icon: Heart,
      popular: false,
      trialDays: 30,
      setupFee: 0,
      integrations: ['Epic', 'Cerner', 'Allscripts', 'DICOM', 'HL7'],
      useCases: ['Medical Diagnosis', 'Drug Discovery', 'Patient Monitoring', 'Clinical Research']
    },
    {
      id: 'ai-financial-services',
      name: 'AI Financial Services',
      description: 'Advanced AI for fraud detection, algorithmic trading, risk management, and financial analysis',
      price: '$699/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Fraud detection algorithms',
        'Algorithmic trading systems',
        'Credit risk assessment',
        'Market prediction models',
        'Regulatory compliance',
        'Investment portfolio optimization',
        'Real-time fraud detection',
        'Risk management'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Better trading performance',
        'Risk mitigation',
        'Compliance automation'
      ],
      category: 'FinTech AI',
      icon: DollarSign,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Stripe', 'PayPal', 'Bloomberg', 'Reuters', 'Banking APIs'],
      useCases: ['Fraud Detection', 'Algorithmic Trading', 'Credit Scoring', 'Risk Management']
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions for threat detection, prevention, and automated incident response',
      price: '$599/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Behavioral anomaly detection',
        'Threat intelligence analysis',
        'Automated incident response',
        'Vulnerability assessment',
        'Security orchestration',
        'Real-time threat monitoring',
        'AI-powered risk scoring',
        'Automated security patching'
      ],
      benefits: [
        'Proactive threat detection',
        'Faster incident response',
        'Reduce security risks by 90%',
        'Compliance automation'
      ],
      category: 'Cybersecurity AI',
      icon: Shield,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Microsoft 365', 'Google Workspace', 'AWS', 'Azure', 'Slack'],
      useCases: ['Threat Detection', 'Incident Response', 'Vulnerability Management', 'Compliance Monitoring']
    },
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing',
      description: 'Distributed AI processing for real-time decision making at the edge with ultra-low latency',
      price: '$549/month',
      marketPrice: '$900-2500/month',
      features: [
        'Edge AI model deployment',
        'Real-time processing',
        'Low-latency inference',
        'Offline capability',
        'Resource optimization',
        'IoT device integration',
        'Predictive maintenance',
        'Energy efficiency optimization'
      ],
      benefits: [
        'Ultra-low latency',
        'Offline operation',
        'Reduced bandwidth usage',
        'Real-time decisions'
      ],
      category: 'Edge AI',
      icon: Cpu,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'NVIDIA Jetson', 'Intel Edge'],
      useCases: ['IoT Analytics', 'Autonomous Vehicles', 'Smart Manufacturing', 'Real-time Monitoring']
    },
    {
      id: 'ai-ecommerce-solutions',
      name: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce optimization with personalized recommendations, pricing, and supply chain management',
      price: '$449/month',
      marketPrice: '$800-2500/month',
      features: [
        'Personalized recommendations',
        'Dynamic pricing optimization',
        'Inventory management',
        'Customer behavior analysis',
        'Conversion optimization',
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization'
      ],
      benefits: [
        'Increase sales by 40%',
        'Better customer experience',
        'Optimized pricing',
        'Reduce inventory costs by 25%'
      ],
      category: 'E-commerce AI',
      icon: Globe,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Shopify', 'WooCommerce', 'Magento', 'Amazon', 'eBay'],
      useCases: ['Product Recommendations', 'Dynamic Pricing', 'Inventory Management', 'Customer Analytics']
    },
    {
      id: 'ai-hr-solutions',
      name: 'AI HR Solutions',
      description: 'Intelligent human resources management with AI-powered recruitment, analytics, and employee engagement',
      price: '$299/month',
      marketPrice: '$500-1500/month',
      features: [
        'AI-powered resume screening',
        'Candidate matching algorithms',
        'Employee performance analytics',
        'Predictive attrition modeling',
        'Skills gap analysis',
        'Automated interview scheduling',
        'Employee sentiment analysis',
        'Workforce planning'
      ],
      benefits: [
        'Faster hiring process',
        'Better candidate matching',
        'Reduce HR workload by 60%',
        'Data-driven insights'
      ],
      category: 'HR AI',
      icon: Users,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['LinkedIn', 'Indeed', 'Workday', 'BambooHR', 'ADP'],
      useCases: ['Recruitment', 'Performance Management', 'Employee Engagement', 'Workforce Planning']
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and processing with OCR, NLP, and automated workflows',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'OCR and text extraction',
        'Document classification',
        'Data extraction and validation',
        'Contract analysis',
        'Invoice processing',
        'Compliance checking',
        'Multi-language support',
        'Automated workflows'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce manual errors by 95%',
        'Automated data entry',
        'Better compliance'
      ],
      category: 'Document AI',
      icon: FileText,
      popular: true,
      trialDays: 7,
      setupFee: 0,
      integrations: ['SharePoint', 'Google Drive', 'Dropbox', 'Salesforce', 'Custom APIs'],
      useCases: ['Invoice Processing', 'Contract Analysis', 'Data Extraction', 'Compliance Management']
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      description: 'Advanced predictive modeling and forecasting for business intelligence and decision support',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Predictive modeling',
        'Time series forecasting',
        'Anomaly detection',
        'Customer lifetime value prediction',
        'Churn prediction',
        'Sales forecasting',
        'Risk assessment',
        'Performance optimization'
      ],
      benefits: [
        'Data-driven decisions',
        'Predictive insights',
        'Risk mitigation',
        'Performance optimization'
      ],
      category: 'Predictive AI',
      icon: BarChart3,
      popular: true,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Mixpanel', 'Amplitude'],
      useCases: ['Sales Forecasting', 'Customer Churn Prediction', 'Risk Assessment', 'Performance Optimization']
    },
    {
      id: 'ai-quantum-computing',
      name: 'AI Quantum Computing Solutions',
      description: 'Quantum-enhanced AI algorithms for complex optimization and machine learning problems',
      price: '$2,999/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Quantum machine learning algorithms',
        'Optimization problem solving',
        'Cryptographic security enhancement',
        'Drug discovery acceleration',
        'Financial modeling optimization',
        'Climate simulation and analysis',
        'Quantum neural networks',
        'Hybrid classical-quantum processing'
      ],
      benefits: [
        'Exponential speed improvements',
        'Breakthrough problem solving',
        'Future-proof technology',
        'Competitive advantage'
      ],
      category: 'Quantum AI',
      icon: Brain,
      popular: false,
      trialDays: 30,
      setupFee: 0,
      integrations: ['IBM Quantum', 'Google Quantum', 'Microsoft Azure Quantum', 'Rigetti', 'IonQ'],
      useCases: ['Drug Discovery', 'Financial Modeling', 'Climate Research', 'Cryptography']
    },
    {
      id: 'ai-autonomous-systems',
      name: 'AI Autonomous Systems',
      description: 'Self-operating AI systems for robotics, vehicles, and industrial automation',
      price: '$1,499/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Autonomous vehicle AI',
        'Robotic process automation',
        'Smart manufacturing systems',
        'Predictive maintenance AI',
        'Autonomous drone operations',
        'Smart city infrastructure',
        'Industrial IoT integration',
        'Real-time decision making'
      ],
      benefits: [
        '24/7 autonomous operation',
        'Reduced human intervention',
        'Improved efficiency',
        'Cost optimization'
      ],
      category: 'Autonomous AI',
      icon: Cpu,
      popular: false,
      trialDays: 30,
      setupFee: 0,
      integrations: ['ROS', 'Gazebo', 'Unity', 'Unreal Engine', 'Custom Hardware'],
      useCases: ['Autonomous Vehicles', 'Industrial Automation', 'Smart Cities', 'Robotics']
    },
    {
      id: 'ai-blockchain-solutions',
      name: 'AI Blockchain Solutions',
      description: 'Decentralized AI applications with blockchain integration for secure, transparent operations',
      price: '$899/month',
      marketPrice: '$1500-6000/month',
      features: [
        'Decentralized AI model training',
        'Blockchain-based data verification',
        'Smart contract AI integration',
        'Cryptocurrency trading algorithms',
        'NFT generation and analysis',
        'DeFi protocol optimization',
        'Supply chain transparency',
        'Secure multi-party computation'
      ],
      benefits: [
        'Enhanced security',
        'Transparent operations',
        'Decentralized control',
        'Innovation leadership'
      ],
      category: 'Blockchain AI',
      icon: LinkIcon,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Ethereum', 'Polygon', 'Binance Smart Chain', 'Solana', 'Polkadot'],
      useCases: ['DeFi', 'NFTs', 'Supply Chain', 'Cryptocurrency Trading']
    },
    {
      id: 'ai-3d-generation',
      name: 'AI 3D Generation',
      description: 'AI-powered 3D content creation for gaming, architecture, and virtual reality applications',
      price: '$399/month',
      marketPrice: '$800-2000/month',
      features: [
        '3D model generation',
        'Texture synthesis',
        'Animation creation',
        'Virtual environment design',
        'Character generation',
        'Architectural visualization',
        'VR/AR content creation',
        'Real-time rendering'
      ],
      benefits: [
        'Create 3D content 10x faster',
        'Professional quality output',
        'Cost-effective production',
        'Scalable content creation'
      ],
      category: '3D AI',
      icon: Box,
      popular: false,
      trialDays: 14,
      setupFee: 0,
      integrations: ['Unity', 'Unreal Engine', 'Blender', 'Maya', '3ds Max'],
      useCases: ['Game Development', 'Architecture', 'VR/AR', 'Product Visualization']
    },
    {
      id: 'ai-holographic-workspace',
      name: 'AI Holographic Workspace',
      description: 'Immersive holographic work environments with AI-powered collaboration and visualization',
      price: '$1,299/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Holographic displays',
        '3D data visualization',
        'Virtual collaboration',
        'Gesture recognition',
        'Spatial computing',
        'Mixed reality interfaces',
        'AI-powered insights',
        'Real-time rendering'
      ],
      benefits: [
        'Immersive collaboration',
        'Better data visualization',
        'Enhanced productivity',
        'Future-ready workspace'
      ],
      category: 'Holographic AI',
      icon: Monitor,
      popular: false,
      trialDays: 30,
      setupFee: 0,
      integrations: ['Microsoft HoloLens', 'Magic Leap', 'Oculus', 'HTC Vive', 'Custom Hardware'],
      useCases: ['Data Visualization', 'Remote Collaboration', 'Training', 'Design Review']
    },
    {
      id: 'ai-5g-implementation',
      name: 'AI 5G Implementation',
      description: 'AI-optimized 5G network deployment and management for ultra-fast, intelligent connectivity',
      price: '$1,999/month',
      marketPrice: '$4000-15000/month',
      features: [
        '5G network optimization',
        'AI-powered traffic management',
        'Edge computing integration',
        'Network slicing',
        'Predictive maintenance',
        'Quality of service optimization',
        'Real-time monitoring',
        'Automated configuration'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Intelligent network management',
        'Reduced latency',
        'Better coverage'
      ],
      category: '5G AI',
      icon: Wifi,
      popular: false,
      trialDays: 30,
      setupFee: 0,
      integrations: ['Ericsson', 'Nokia', 'Huawei', 'Samsung', 'Qualcomm'],
      useCases: ['Smart Cities', 'IoT Networks', 'Autonomous Vehicles', 'Industrial IoT']
    }
  ];

  const categories = [
    'All',
    'Conversational AI',
    'Content AI',
    'Analytics AI',
    'Computer Vision',
    'Voice AI',
    'Process Automation',
    'Healthcare AI',
    'FinTech AI',
    'Cybersecurity AI',
    'Edge AI',
    'E-commerce AI',
    'HR AI',
    'Document AI',
    'Predictive AI',
    'Quantum AI',
    'Autonomous AI',
    'Blockchain AI',
    '3D AI',
    'Holographic AI',
    '5G AI'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Cutting-edge artificial intelligence solutions that transform your business operations. 
              From machine learning to quantum computing, we deliver the future of AI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
                  Search AI Services
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search for AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="lg:w-64">
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                  Filter by Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                  service.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}

                {/* Service Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-cyan-400">{service.category}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-gray-400 ml-2">/month</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Market price: {service.marketPrice}</span>
                    <span className="ml-2 text-green-400 font-semibold">
                      Save {Math.round((1 - parseInt(service.price.replace('$', '').replace('/month', '')) / parseInt(service.marketPrice.split('-')[0].replace('$', ''))) * 100)}%
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 3).map((useCase, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded"
                      >
                        {useCase}
                      </span>
                    ))}
                    {service.useCases.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-xs text-gray-400 rounded">
                        +{service.useCases.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Trial and Setup Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.trialDays}-day free trial
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {service.setupFee === 0 ? 'No setup fee' : `$${service.setupFee} setup`}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    to={`/contact?service=${service.id}`}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    to={`/demo?service=${service.id}`}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    View Demo
                  </Link>
                </div>

                {/* Integrations */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Integrations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.integrations.slice(0, 4).map((integration, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded"
                      >
                        {integration}
                      </span>
                    ))}
                    {service.integrations.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-xs text-gray-400 rounded">
                        +{service.integrations.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with cutting-edge AI solutions. 
            Start your free trial today and experience the future of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;