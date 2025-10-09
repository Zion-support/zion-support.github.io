import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

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
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions', price: 'Starting at $1,500/month' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation', price: 'Starting at $199/month' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation', price: 'Starting at $399/month' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions', price: 'Starting at $1,999/month' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications', price: 'Starting at $2,200/month' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation', price: 'Starting at $1,100/month' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights', price: 'Starting at $1,600/month' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions', price: 'Starting at $1,599/month' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization', price: 'Starting at $1,400/month' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications', price: 'Starting at $2,500/month' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms', price: 'Starting at $1,800/month' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service', price: 'Starting at $800/month' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes', price: 'Starting at $399/month' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization', price: 'Starting at $299/month' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation', price: 'Starting at $349/month' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing', price: 'Starting at $179/month' },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', price: 'Starting at $1,500/month' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', description: 'Advanced computer vision', price: 'Starting at $1,800/month' },
        { name: 'AI Natural Language Processing', path: '/ai-nlp', description: 'Advanced NLP solutions', price: 'Starting at $1,200/month' },
        { name: 'AI Robotics Platform', path: '/ai-robotics', description: 'Intelligent robotics', price: 'Starting at $3,500/month' },
        { name: 'AI Research & Development', path: '/ai-research-development', description: 'Custom AI R&D', price: 'Custom pricing' },
        { name: 'AI Edge Computing', path: '/ai-edge-computing', description: 'AI at the edge', price: 'Starting at $1,499/month' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support', price: 'Starting at $999/month' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure', price: 'Starting at $999/month' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions', price: 'Starting at $1,599/month' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup', price: 'Starting at $1,299/month' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'DevOps automation', price: 'Starting at $1,199/month' },
        { name: 'Database Management', path: '/database-management', description: 'Database management', price: 'Starting at $899/month' },
        { name: 'Network Solutions', path: '/network-solutions', description: 'Network infrastructure', price: 'Starting at $1,099/month' },
        { name: 'System Administration', path: '/system-administration', description: 'System management', price: 'Starting at $799/month' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning', price: 'Starting at $1,499/month' },
        { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT management', price: 'Starting at $799/month' },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development', price: 'Starting at $599/month' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure-design', description: 'Custom infrastructure', price: 'Starting at $1,299/month' },
        { name: 'IT Performance Monitoring', path: '/it-performance-monitoring', description: 'Real-time monitoring', price: 'Starting at $699/month' },
        { name: 'IT Disaster Recovery', path: '/it-disaster-recovery', description: 'Disaster recovery', price: 'Starting at $699/month' },
        { name: 'IT Automation', path: '/it-automation', description: 'IT process automation', price: 'Starting at $1,199/month' },
        { name: 'Global IT Support', path: '/global-it-support', description: 'Worldwide support', price: 'Starting at $1,499/month' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      hoverColor: 'hover:bg-green-500/20',
      borderColor: 'border-green-500/30',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: 'Comprehensive micro SAAS suite', price: 'Starting at $99/month' },
        { name: 'AI Code Review Assistant', path: '/ai-code-review', description: 'Automated code analysis', price: 'Starting at $199/month' },
        { name: 'AI SEO Optimizer Pro', path: '/ai-seo-optimizer', description: 'AI-powered SEO analysis', price: 'Starting at $299/month' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'Real-time business intelligence', price: 'Starting at $399/month' },
        { name: 'AI Marketing Automation', path: '/ai-marketing-automation', description: 'Marketing automation suite', price: 'Starting at $249/month' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing', price: 'Starting at $179/month' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 automated support', price: 'Starting at $149/month' },
        { name: 'AI Content Generator Pro', path: '/ai-content-generator', description: 'AI content creation', price: 'Starting at $199/month' },
        { name: 'AI Data Visualization Studio', path: '/ai-data-visualization', description: 'Advanced data visualization', price: 'Starting at $299/month' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant', description: 'Smart email management', price: 'Starting at $99/month' },
        { name: 'AI Lead Generation Engine', path: '/ai-lead-generation', description: 'Automated lead generation', price: 'Starting at $349/month' },
        { name: 'AI Sales Automation Platform', path: '/ai-sales-automation', description: 'Intelligent sales automation', price: 'Starting at $399/month' },
        { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'E-commerce optimization', price: 'Starting at $499/month' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation', price: 'Starting at $199/month' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns', price: 'Starting at $149/month' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'AI-assisted app development', price: 'Starting at $299/month' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing', price: 'Starting at $99/month' },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification', price: 'Starting at $199/month' },
        { name: 'AI Sales Forecasting', path: '/ai-sales-forecasting', description: 'Advanced sales predictions', price: 'Starting at $299/month' },
        { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design tool', price: 'Starting at $199/month' },
        { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring', price: 'Starting at $399/month' },
        { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking', price: 'Starting at $249/month' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants', price: 'Starting at $299/month' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media', price: 'Starting at $199/month' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management', price: 'Starting at $299/month' },
        { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management', price: 'Starting at $199/month' },
        { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights', price: 'Starting at $349/month' },
        { name: 'AI A/B Testing Platform', path: '/ai-ab-testing', description: 'Advanced A/B testing', price: 'Starting at $199/month' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions', price: 'Starting at $399/month' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      hoverColor: 'hover:bg-orange-500/20',
      borderColor: 'border-orange-500/30',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing', price: 'Custom pricing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', price: 'Custom pricing' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', price: 'Starting at $1,999/month' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', price: 'Starting at $1,499/month' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights', price: 'Starting at $1,799/month' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots', price: 'Custom pricing' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', price: 'Starting at $2,999/month' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', price: 'Custom pricing' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization', price: 'Starting at $2,500/month' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping', price: 'Custom pricing' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions', price: 'Starting at $1,999/month' },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions', price: 'Custom pricing' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Brain className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-cyan-500/30 py-6 z-50 cyber-card">
                  <div className="grid grid-cols-2 gap-8 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 ${category.bgColor} rounded-xl flex items-center justify-center border ${category.borderColor}`}>
                            <category.icon className={`w-5 h-5 ${category.color}`} />
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-lg neon-text">{category.title}</h3>
                            <p className="text-xs text-gray-400">Comprehensive solutions</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-all duration-300 group border border-transparent hover:border-cyan-500/30"
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <div className="font-medium group-hover:text-cyan-400 transition-colors">{service.name}</div>
                                <div className="text-xs text-cyan-400 font-semibold">{service.price}</div>
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                          {category.services.length > 6 && (
                            <Link
                              href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                              className="block px-4 py-3 text-sm text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 font-medium border border-cyan-500/30 hover:border-cyan-500/50"
                              onClick={closeAllMenus}
                            >
                              <div className="flex items-center justify-center">
                                View All {category.title} →
                              </div>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700/50 mt-6 pt-6 px-6">
                    <div className="grid grid-cols-3 gap-4">
                      <Link
                        href="/ai-services"
                        className="text-center bg-gradient-to-r from-purple-600/20 to-purple-800/20 text-purple-300 py-3 px-4 rounded-lg font-medium hover:from-purple-600/30 hover:to-purple-800/30 transition-all border border-purple-500/30"
                        onClick={closeAllMenus}
                      >
                        <Brain className="w-5 h-5 mx-auto mb-2" />
                        AI Services
                      </Link>
                      <Link
                        href="/it-services"
                        className="text-center bg-gradient-to-r from-blue-600/20 to-blue-800/20 text-blue-300 py-3 px-4 rounded-lg font-medium hover:from-blue-600/30 hover:to-blue-800/30 transition-all border border-blue-500/30"
                        onClick={closeAllMenus}
                      >
                        <Cloud className="w-5 h-5 mx-auto mb-2" />
                        IT Services
                      </Link>
                      <Link
                        href="/micro-saas"
                        className="text-center bg-gradient-to-r from-green-600/20 to-green-800/20 text-green-300 py-3 px-4 rounded-lg font-medium hover:from-green-600/30 hover:to-green-800/30 transition-all border border-green-500/30"
                        onClick={closeAllMenus}
                      >
                        <Code className="w-5 h-5 mx-auto mb-2" />
                        Micro SAAS
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/case-studies" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div className="text-sm font-medium text-cyan-400 mb-2">{category.title}</div>
                        <div className="ml-4 space-y-1">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/case-studies"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>

              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              <a
                href="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all mt-4"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
