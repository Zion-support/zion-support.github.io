import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, MessageSquare, Eye, Bot, Share2, Mail as EmailIcon, BarChart3, Projector, Headphones } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning with AI-powered resource optimization', icon: '📊', popular: true, price: '$99/month' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media with AI-powered content creation', icon: '📱', popular: true, price: '$79/month' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'Transform data into actionable insights with AI', icon: '📈', popular: true, price: '$149/month' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'AI-powered email campaigns and automation', icon: '📧', popular: true, price: '$99/month' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 intelligent customer support chatbot', icon: '🤖', popular: true, price: '$149/month' },
        { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis and optimization', icon: '🔍', popular: false, price: '$89/month' },
        { name: 'AI Content Generator', path: '/ai-content-generation', description: 'AI-powered content creation for all platforms', icon: '✍️', popular: false, price: '$79/month' },
        { name: 'AI SEO Optimizer', path: '/ai-marketing', description: 'AI-driven SEO optimization and analysis', icon: '🎯', popular: false, price: '$119/month' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing with smart templates', icon: '🧾', popular: false, price: '$59/month' },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification and scoring', icon: '🎯', popular: false, price: '$129/month' },
        { name: 'AI Sales Forecasting', path: '/ai-sales-forecasting', description: 'Advanced sales predictions and analytics', icon: '📊', popular: false, price: '$199/month' },
        { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'E-commerce optimization and conversion boost', icon: '🛒', popular: false, price: '$179/month' },
        { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design tool and automation', icon: '🎨', popular: false, price: '$89/month' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing and analysis', icon: '📄', popular: false, price: '$109/month' },
        { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring and alerts', icon: '🔒', popular: false, price: '$159/month' },
        { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking and insights', icon: '📈', popular: false, price: '$139/month' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants and automation', icon: '🎤', popular: false, price: '$169/month' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management and automation', icon: '👥', popular: false, price: '$149/month' },
        { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management and optimization', icon: '📦', popular: false, price: '$129/month' },
        { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights and analytics', icon: '👁️', popular: false, price: '$189/month' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Process automation and optimization', icon: '⚙️', popular: false, price: '$199/month' },
        { name: 'AI A/B Testing Platform', path: '/ai-ab-testing', description: 'Advanced A/B testing and optimization', icon: '🧪', popular: false, price: '$119/month' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions and forecasting', icon: '🔮', popular: false, price: '$229/month' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'Machine Learning Solutions', path: '/ai-services', description: 'Custom ML models and algorithms for enterprise', icon: Brain, price: '$1,500/month' },
        { name: 'Natural Language Processing', path: '/ai-services', description: 'Advanced text analysis and understanding', icon: MessageSquare, price: '$1,200/month' },
        { name: 'Computer Vision', path: '/ai-services', description: 'Image and video analysis solutions', icon: Eye, price: '$1,800/month' },
        { name: 'AI Automation', path: '/ai-services', description: 'Intelligent process automation', icon: Zap, price: '$1,400/month' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions and diagnostics', icon: '🏥', price: '$2,500/month' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications and fraud detection', icon: '💳', price: '$2,200/month' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions and threat detection', icon: Shield, price: '$1,900/month' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights and visualization', icon: BarChart3, price: '$1,600/month' },
        { name: 'AI Chatbot Development', path: '/ai-chatbot-builder', description: 'Custom chatbot development and deployment', icon: Bot, price: '$1,300/month' },
        { name: 'AI Content Creation', path: '/ai-content-generation', description: 'AI-powered content creation and marketing', icon: '✍️', price: '$1,100/month' },
        { name: 'AI Voice & Speech', path: '/ai-voice-cloning', description: 'Voice synthesis and speech recognition', icon: '🎤', price: '$1,700/month' },
        { name: 'AI Video Generation', path: '/ai-video-generation', description: 'AI-powered video creation and editing', icon: '🎬', price: '$2,000/month' },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI-generated music and audio content', icon: '🎵', price: '$1,400/month' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation', description: '3D model generation and visualization', icon: '🎮', price: '$2,300/month' },
        { name: 'AI Fashion Design', path: '/ai-fashion-design', description: 'AI-powered fashion design and trends', icon: '👗', price: '$1,800/month' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'AI-assisted mobile app development', icon: Smartphone, price: '$2,100/month' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms and optimization', icon: '🛒', price: '$1,900/month' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes and CRM', icon: '📈', price: '$1,600/month' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation and qualification', icon: '🎯', price: '$1,400/month' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing and OCR', icon: FileText, price: '$1,500/month' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization and automation', icon: Settings, price: '$1,700/month' },
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI-powered writing and content assistance', icon: '✍️', price: '$1,200/month' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'Intelligent scheduling and calendar management', icon: Calendar, price: '$1,000/month' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant', description: 'AI-powered email management and automation', icon: EmailIcon, price: '$1,100/month' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration and optimization', icon: Cloud, price: '$1,299/month' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions and monitoring', icon: Shield, price: '$1,599/month' },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'Streamlined development workflows', icon: Settings, price: '$1,199/month' },
        { name: 'Database Services', path: '/database', description: 'Database design and optimization', icon: Database, price: '$899/month' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise IT infrastructure setup', icon: Cpu, price: '$1,399/month' },
        { name: 'Network Services', path: '/networking', description: 'Network design and management', icon: Globe, price: '$1,099/month' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights and analytics', icon: BarChart, price: '$1,499/month' },
        { name: 'Compliance', path: '/compliance', description: 'Regulatory compliance solutions', icon: CheckSquare, price: '$1,299/month' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning and advisory', icon: Users, price: '$1,000/month' },
        { name: 'System Administration', path: '/system-administration', description: 'System management and maintenance', icon: Settings, price: '$1,199/month' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration and setup services', icon: Cloud, price: '$1,500/month' },
        { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT management and support', icon: Headphones, price: '$1,299/month' },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development and certification', icon: '🎓', price: '$800/month' },
        { name: 'IT Performance Monitoring', path: '/it-performance-monitoring', description: 'Real-time monitoring and optimization', icon: BarChart3, price: '$1,399/month' },
        { name: 'IT Disaster Recovery', path: '/it-disaster-recovery', description: 'Disaster recovery and backup solutions', icon: Shield, price: '$1,599/month' },
        { name: 'IT Automation', path: '/it-automation', description: 'IT process automation and optimization', icon: Zap, price: '$1,299/month' },
        { name: 'Global IT Support', path: '/global-it-support', description: 'Worldwide IT support and management', icon: Globe, price: '$1,799/month' },
        { name: 'IT Security Audit', path: '/it-security-audit', description: 'Comprehensive security audits and assessments', icon: Shield, price: '$1,899/month' },
        { name: 'IT Cost Optimization', path: '/it-cost-optimization', description: 'IT cost reduction and optimization', icon: '💰', price: '$1,199/month' },
        { name: 'IT Governance', path: '/it-governance', description: 'IT governance and compliance management', icon: CheckSquare, price: '$1,499/month' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-generation quantum algorithms and solutions', icon: '⚛️', price: '$5,000/month' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems and robotics', icon: '🤖', price: '$3,500/month' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions and smart contracts', icon: '⛓️', price: '$2,500/month' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices and edge solutions', icon: '🌐', price: '$2,200/month' },
        { name: 'Robotics Solutions', path: '/robotics', description: 'Intelligent robotic solutions and automation', icon: '🦾', price: '$4,000/month' },
        { name: 'Business Apps', path: '/business-apps', description: 'Custom business applications and software', icon: '📱', price: '$1,800/month' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences and virtual reality', icon: '🥽', price: '$3,000/month' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions and IoT', icon: '🏙️', price: '$5,500/month' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization and digitization', icon: '🔄', price: '$2,800/month' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping services', icon: '🧪', price: '$3,200/month' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology and sustainability solutions', icon: '🌱', price: '$2,600/month' },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions and research', icon: '🚀', price: '$4,500/month' }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👥' },
    { name: 'Services', path: '/services', icon: '⚙️' },
    { name: 'Pricing', path: '/pricing', icon: '💰' },
    { name: 'Case Studies', path: '/case-studies', icon: '📊' },
    { name: 'Blog', path: '/blog', icon: '📝' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1 group"
              >
                <span className="text-sm">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1">
                <span className="text-sm">⚙️</span>
                <span className="font-medium">Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-[1200px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-6 neon-text text-center">Our Services</h3>
                  <div className="grid grid-cols-4 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                          <span className="text-sm font-semibold text-white">{category.title}</span>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block p-2 text-xs text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm">{typeof service.icon === 'string' ? service.icon : <service.icon className="w-3 h-3" />}</span>
                                  <span className="font-medium">{service.name}</span>
                                  {service.popular && <span className="text-xs text-cyan-400">★</span>}
                                </div>
                                <span className="text-xs text-cyan-400 font-semibold">{service.price}</span>
                              </div>
                              <div className="text-xs text-gray-500 mt-1 group-hover:text-purple-500">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                          <Link
                            href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                            className="block text-xs text-cyan-400 hover:text-cyan-300 rounded-lg transition-colors font-medium text-center py-2"
                            onClick={closeAllMenus}
                          >
                            View All {category.title} →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 mt-6 pt-4">
                    <Link
                      href="/services"
                      className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a
                href="/contact"
                className="cyber-button px-4 py-2 text-sm font-medium"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={closeAllMenus}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Services</h3>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <category.icon className={`w-4 h-4 ${category.color}`} />
                      <span className="text-sm font-semibold text-white">{category.title}</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {category.services.slice(0, 4).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.path}
                          onClick={closeAllMenus}
                          className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span>{typeof service.icon === 'string' ? service.icon : <service.icon className="w-3 h-3" />}</span>
                              <span>{service.name}</span>
                              {service.popular && <span className="text-xs text-cyan-400">★</span>}
                            </div>
                            <span className="text-xs text-cyan-400 font-semibold">{service.price}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-4 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Contact</h3>
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-pink-400 hover:text-pink-300 transition-colors duration-300 py-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-3 text-green-400 py-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
                <a
                  href="/contact"
                  onClick={closeAllMenus}
                  className="cyber-button px-6 py-3 text-center block w-full"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;