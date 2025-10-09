import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  Settings, 
  Database, 
  Globe, 
  Smartphone, 
  Monitor, 
  Server, 
  Lock, 
  BarChart3, 
  Cpu, 
  Wifi, 
  Layers, 
  Target, 
  TrendingUp, 
  FileText, 
  Headphones, 
  MessageSquare, 
  Calendar, 
  Star, 
  Award, 
  CheckCircle,
  Bot,
  Microscope,
  DollarSign,
  PieChart,
  Activity,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Workflow
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [emergingTechOpen, setEmergingTechOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setEmergingTechOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  // AI Services with detailed features and pricing
  const aiServices = [
    { 
      name: 'AI Consulting & Strategy', 
      href: '/ai-services', 
      icon: Brain, 
      description: 'Strategic AI implementation planning',
      price: 'Starting at $2,500/month',
      features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis']
    },
    { 
      name: 'Machine Learning Solutions', 
      href: '/ai-services', 
      icon: Cpu, 
      description: 'Custom ML models and algorithms',
      price: 'Starting at $1,500/month',
      features: ['Predictive Models', 'Data Processing', 'Model Training']
    },
    { 
      name: 'Natural Language Processing', 
      href: '/ai-services', 
      icon: MessageSquare, 
      description: 'Advanced text analysis and generation',
      price: 'Starting at $999/month',
      features: ['Chatbots', 'Sentiment Analysis', 'Text Generation']
    },
    { 
      name: 'Computer Vision', 
      href: '/ai-services', 
      icon: Monitor, 
      description: 'Image and video analysis solutions',
      price: 'Starting at $1,299/month',
      features: ['Object Detection', 'Facial Recognition', 'Quality Control']
    },
    { 
      name: 'AI Marketing Automation', 
      href: '/ai-marketing', 
      icon: Target, 
      description: 'Intelligent marketing campaigns',
      price: 'Starting at $199/month',
      features: ['Ad Optimization', 'Content Generation', 'Customer Segmentation']
    },
    { 
      name: 'AI Healthcare Solutions', 
      href: '/ai-healthcare', 
      icon: Microscope, 
      description: 'Medical AI and diagnostics',
      price: 'Starting at $1,999/month',
      features: ['Medical Imaging', 'Drug Discovery', 'Patient Monitoring']
    },
    { 
      name: 'AI Financial Services', 
      href: '/ai-fintech', 
      icon: DollarSign, 
      description: 'Fintech AI solutions',
      price: 'Starting at $1,499/month',
      features: ['Fraud Detection', 'Algorithmic Trading', 'Risk Assessment']
    },
    { 
      name: 'AI Workflow Automation', 
      href: '/ai-workflow-automation', 
      icon: Workflow, 
      description: 'Intelligent process automation',
      price: 'Starting at $399/month',
      features: ['Process Optimization', 'Decision Making', 'Exception Handling']
    }
  ];

  // IT Services with comprehensive offerings
  const itServices = [
    { 
      name: 'Cloud Infrastructure', 
      href: '/ai-cloud-infrastructure', 
      icon: Cloud, 
      description: 'Scalable cloud solutions',
      price: 'Starting at $800/month',
      features: ['AWS/Azure/GCP', 'Auto-scaling', '24/7 Monitoring']
    },
    { 
      name: 'Cybersecurity Services', 
      href: '/ai-cybersecurity', 
      icon: ShieldCheck, 
      description: 'Advanced security solutions',
      price: 'Starting at $1,200/month',
      features: ['Threat Detection', 'Penetration Testing', 'Compliance']
    },
    { 
      name: 'Data Analytics & BI', 
      href: '/ai-data-analytics', 
      icon: BarChart3, 
      description: 'Business intelligence solutions',
      price: 'Starting at $1,000/month',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards']
    },
    { 
      name: 'Mobile App Development', 
      href: '/ai-mobile-app-development', 
      icon: Smartphone, 
      description: 'Native and cross-platform apps',
      price: 'Starting at $2,500/project',
      features: ['iOS/Android', 'React Native', 'Flutter']
    },
    { 
      name: 'E-commerce Solutions', 
      href: '/ai-ecommerce-solutions', 
      icon: Globe, 
      description: 'AI-powered e-commerce platforms',
      price: 'Starting at $1,800/month',
      features: ['Personalization', 'Inventory Management', 'Payment Integration']
    },
    { 
      name: 'DevOps & CI/CD', 
      href: '/it-services', 
      icon: Settings, 
      description: 'Development and deployment automation',
      price: 'Starting at $1,500/month',
      features: ['Docker/Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code']
    }
  ];

  // Micro SAAS Services - Real, useful, innovative solutions
  const microSaasServices = [
    {
      name: 'AI Content Generator',
      href: '/micro-saas/ai-content-generator',
      icon: FileText,
      description: 'AI-powered content creation for blogs, social media, and marketing',
      price: '$29/month',
      features: ['Blog Post Generation', 'Social Media Content', 'SEO Optimization', 'Multi-language Support'],
      marketPrice: '$50-200/month',
      benefits: ['Save 10+ hours/week', 'Increase content output by 300%', 'Improve SEO rankings']
    },
    {
      name: 'Smart Analytics Dashboard',
      href: '/micro-saas/smart-analytics',
      icon: PieChart,
      description: 'Real-time business analytics with AI insights and predictions',
      price: '$49/month',
      features: ['Real-time Dashboards', 'AI Predictions', 'Custom Reports', 'Data Integration'],
      marketPrice: '$100-500/month',
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Reduce manual reporting']
    },
    {
      name: 'AI Customer Support Bot',
      href: '/micro-saas/ai-support-bot',
      icon: Bot,
      description: 'Intelligent customer support automation with human handoff',
      price: '$79/month',
      features: ['24/7 Support', 'Multi-language', 'Ticket Management', 'Human Handoff'],
      marketPrice: '$200-1000/month',
      benefits: ['Reduce support costs by 60%', 'Improve response time', 'Scale support operations']
    },
    {
      name: 'Smart Email Marketing',
      href: '/micro-saas/smart-email-marketing',
      icon: Mail,
      description: 'AI-powered email campaigns with personalization and optimization',
      price: '$39/month',
      features: ['AI Personalization', 'A/B Testing', 'Automation', 'Analytics'],
      marketPrice: '$50-300/month',
      benefits: ['Increase open rates by 40%', 'Automate campaigns', 'Better customer engagement']
    },
    {
      name: 'AI Project Management',
      href: '/micro-saas/ai-project-management',
      icon: Calendar,
      description: 'Intelligent project tracking with resource optimization and risk prediction',
      price: '$59/month',
      features: ['Smart Scheduling', 'Risk Prediction', 'Resource Optimization', 'Progress Tracking'],
      marketPrice: '$100-500/month',
      benefits: ['Complete projects 25% faster', 'Reduce project risks', 'Optimize team productivity']
    },
    {
      name: 'AI Social Media Manager',
      href: '/micro-saas/ai-social-manager',
      icon: MessageSquare,
      description: 'Automated social media posting, engagement, and analytics',
      price: '$69/month',
      features: ['Auto Posting', 'Engagement Analysis', 'Content Calendar', 'Performance Tracking'],
      marketPrice: '$150-800/month',
      benefits: ['Save 15+ hours/week', 'Increase engagement by 50%', 'Consistent brand presence']
    },
    {
      name: 'Smart Invoice Generator',
      href: '/micro-saas/smart-invoice',
      icon: FileText,
      description: 'AI-powered invoice creation with automated follow-ups and payment tracking',
      price: '$19/month',
      features: ['Auto Invoice Generation', 'Payment Tracking', 'Automated Reminders', 'Multi-currency'],
      marketPrice: '$30-150/month',
      benefits: ['Reduce billing errors', 'Faster payments', 'Professional invoices']
    },
    {
      name: 'AI Lead Scoring System',
      href: '/micro-saas/ai-lead-scoring',
      icon: Target,
      description: 'Intelligent lead qualification and scoring for better conversion rates',
      price: '$89/month',
      features: ['Lead Scoring', 'Behavioral Analysis', 'CRM Integration', 'Conversion Tracking'],
      marketPrice: '$200-1000/month',
      benefits: ['Increase conversion by 35%', 'Focus on high-value leads', 'Improve sales efficiency']
    },
    {
      name: 'Smart Document Processor',
      href: '/micro-saas/smart-document-processor',
      icon: FileText,
      description: 'AI-powered document analysis, extraction, and organization',
      price: '$99/month',
      features: ['Document OCR', 'Data Extraction', 'Classification', 'Search & Retrieval'],
      marketPrice: '$300-2000/month',
      benefits: ['Process documents 10x faster', 'Reduce manual data entry', 'Improve accuracy']
    },
    {
      name: 'AI Website Optimizer',
      href: '/micro-saas/ai-website-optimizer',
      icon: Globe,
      description: 'Automated website performance optimization and SEO improvements',
      price: '$79/month',
      features: ['Performance Monitoring', 'SEO Optimization', 'A/B Testing', 'Speed Enhancement'],
      marketPrice: '$200-1000/month',
      benefits: ['Improve page speed by 50%', 'Better SEO rankings', 'Higher conversion rates']
    }
  ];

  // Emerging Technologies
  const emergingTech = [
    { 
      name: 'Quantum Computing', 
      href: '/quantum-computing', 
      icon: Zap, 
      description: 'Next-generation quantum solutions',
      price: 'Custom Pricing',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography']
    },
    { 
      name: 'Autonomous Systems', 
      href: '/autonomous-systems', 
      icon: Bot, 
      description: 'Self-operating intelligent systems',
      price: 'Starting at $5,000/month',
      features: ['Robotic Process Automation', 'Autonomous Vehicles', 'Smart Infrastructure']
    },
    { 
      name: 'Blockchain & Web3', 
      href: '/blockchain-web3', 
      icon: Shield, 
      description: 'Decentralized applications and solutions',
      price: 'Starting at $2,000/month',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms']
    },
    { 
      name: 'IoT & Edge Computing', 
      href: '/iot-edge-computing', 
      icon: Wifi, 
      description: 'Connected devices and edge processing',
      price: 'Starting at $1,500/month',
      features: ['Device Management', 'Real-time Processing', 'Data Analytics']
    },
    { 
      name: 'Business Intelligence', 
      href: '/business-intelligence', 
      icon: TrendingUp, 
      description: 'Advanced analytics and reporting',
      price: 'Starting at $1,200/month',
      features: ['Data Warehousing', 'Predictive Analytics', 'Executive Dashboards']
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {aiServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-4 z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-start space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-cyan-600 transition-colors duration-200"
                    >
                      <service.icon className="w-5 h-5 mt-0.5 text-cyan-500" />
                      <div className="flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                        <div className="text-sm font-semibold text-cyan-600">{service.price}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                <Code className="w-4 h-4" />
                <span>IT Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {itServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-4 z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-start space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-cyan-600 transition-colors duration-200"
                    >
                      <service.icon className="w-5 h-5 mt-0.5 text-blue-500" />
                      <div className="flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                        <div className="text-sm font-semibold text-blue-600">{service.price}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setMicroSaasOpen(true)}
                onMouseLeave={() => setMicroSaasOpen(false)}
              >
                <Settings className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {microSaasOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl py-4 z-50 max-h-96 overflow-y-auto"
                  onMouseEnter={() => setMicroSaasOpen(true)}
                  onMouseLeave={() => setMicroSaasOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Popular Micro SAAS Solutions</h3>
                    <p className="text-sm text-gray-500">Real, useful, innovative tools for your business</p>
                  </div>
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-start space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors duration-200"
                    >
                      <service.icon className="w-5 h-5 mt-0.5 text-green-500" />
                      <div className="flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm font-semibold text-green-600">{service.price}</span>
                          <span className="text-xs text-gray-400">vs {service.marketPrice}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Emerging Tech Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setEmergingTechOpen(true)}
                onMouseLeave={() => setEmergingTechOpen(false)}
              >
                <Zap className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {emergingTechOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-4 z-50"
                  onMouseEnter={() => setEmergingTechOpen(true)}
                  onMouseLeave={() => setEmergingTechOpen(false)}
                >
                  {emergingTech.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-start space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-purple-600 transition-colors duration-200"
                    >
                      <service.icon className="w-5 h-5 mt-0.5 text-purple-500" />
                      <div className="flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                        <div className="text-sm font-semibold text-purple-600">{service.price}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                >
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="ml-4 space-y-2 mt-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                >
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4" />
                    <span>IT Solutions</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="ml-4 space-y-2 mt-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                  onClick={() => setMicroSaasOpen(!microSaasOpen)}
                >
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="ml-4 space-y-2 mt-2">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Emerging Tech */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                  onClick={() => setEmergingTechOpen(!emergingTechOpen)}
                >
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Emerging Tech</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${emergingTechOpen ? 'rotate-180' : ''}`} />
                </button>
                {emergingTechOpen && (
                  <div className="ml-4 space-y-2 mt-2">
                    {emergingTech.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
