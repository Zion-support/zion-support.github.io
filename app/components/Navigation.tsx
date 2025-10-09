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
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions', price: '$1,500/mo' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation', price: '$199/mo' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation', price: '$399/mo' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions', price: '$1,999/mo' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications', price: '$1,499/mo' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation', price: '$299/mo' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights', price: '$899/mo' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions', price: '$1,800/mo' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization', price: '$599/mo' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications', price: '$399/mo' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms', price: '$249/mo' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service', price: '$149/mo' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes', price: '$199/mo' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization', price: '$699/mo' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation', price: '$89/mo' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing', price: '$199/mo' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Advanced predictive modeling', price: '$899/mo' },
        { name: 'AI Image Recognition', path: '/ai-image-recognition', description: 'Computer vision solutions', price: '$599/mo' },
        { name: 'AI Voice Processing', path: '/ai-voice-processing', description: 'Speech recognition & synthesis', price: '$399/mo' },
        { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', description: 'Personalized recommendations', price: '$299/mo' },
        { name: 'AI Sentiment Analysis', path: '/ai-sentiment-analysis', description: 'Real-time sentiment analysis', price: '$179/mo' },
        { name: 'AI Research Assistant', path: '/ai-research-assistant', description: 'AI-powered research tools', price: '$129/mo' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support', price: '$1,200/mo' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud migration', price: '$2,500/mo' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Enterprise security solutions', price: '$1,800/mo' },
        { name: 'DevOps Automation', path: '/devops-automation', description: 'Complete DevOps pipeline', price: '$1,200/mo' },
        { name: 'Data Analytics', path: '/data-analytics', description: 'Advanced data analytics', price: '$1,600/mo' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure', price: '$2,200/mo' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration & setup', price: '$1,800/mo' },
        { name: 'Database Services', path: '/database', description: 'Database management', price: '$1,400/mo' },
        { name: 'Network Services', path: '/networking', description: 'Network infrastructure', price: '$1,600/mo' },
        { name: 'System Administration', path: '/system-admin', description: 'System management', price: '$1,000/mo' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning', price: '$150/hr' },
        { name: 'Managed IT Services', path: '/managed-it', description: '24/7 IT management', price: '$2,000/mo' },
        { name: 'IT Training', path: '/it-training', description: 'Staff development', price: '$200/hr' },
        { name: 'IT Project Management', path: '/it-project-management', description: 'IT project delivery', price: '$180/hr' },
        { name: 'Performance Optimization', path: '/performance-optimization', description: 'System performance tuning', price: '$1,500/mo' },
        { name: 'Backup & Recovery', path: '/backup-recovery', description: 'Data protection services', price: '$800/mo' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Large-scale IT solutions', price: 'Custom' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure-design', description: 'Custom infrastructure design', price: '$3,000/project' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent customer management', price: '$149/mo' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'Real-time business intelligence', price: '$199/mo' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite', price: '$299/mo' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation', price: '$99/mo' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns', price: '$179/mo' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'Build native mobile apps', price: '$399/mo' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis', price: '$129/mo' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing', price: '$79/mo' },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification', price: '$89/mo' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media', price: '$159/mo' },
        { name: 'AI E-commerce Assistant', path: '/ai-ecommerce-assistant', description: 'Complete e-commerce automation', price: '$249/mo' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing', price: '$199/mo' },
        { name: 'Developer Tools', path: '/developer-tools', description: 'AI-powered dev tools', price: '$199/mo' },
        { name: 'Business Apps', path: '/business-apps', description: 'Productivity applications', price: '$149/mo' },
        { name: 'Marketing Tools', path: '/marketing-tools', description: 'Marketing automation', price: '$179/mo' },
        { name: 'Analytics Tools', path: '/analytics-tools', description: 'Business intelligence', price: '$199/mo' },
        { name: 'Communication Tools', path: '/communication-tools', description: 'Team collaboration', price: '$99/mo' },
        { name: 'Productivity Tools', path: '/productivity', description: 'Time management & efficiency', price: '$79/mo' },
        { name: 'HR & Recruitment', path: '/hr-recruitment-tools', description: 'Human resources solutions', price: '$199/mo' },
        { name: 'Customer Support', path: '/customer-support-tools', description: 'Support & service tools', price: '$149/mo' },
        { name: 'Sales & CRM', path: '/sales-crm-tools', description: 'Sales management tools', price: '$149/mo' },
        { name: 'Project Management', path: '/project-management-tools', description: 'Project planning & tracking', price: '$99/mo' },
        { name: 'Content Creation', path: '/content-creation-tools', description: 'Content & media tools', price: '$199/mo' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing', price: 'Custom' },
        { name: 'Robotics Solutions', path: '/robotics', description: 'Intelligent robots', price: '$5,000/mo' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', price: '$2,200/mo' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', price: '$1,800/mo' },
        { name: 'Predictive Analytics', path: '/predictive-analytics', description: 'AI-powered forecasting', price: '$899/mo' },
        { name: 'Real-time Dashboards', path: '/real-time-dashboards', description: 'Interactive dashboards', price: '$699/mo' },
        { name: 'Customer Analytics', path: '/customer-analytics', description: 'Deep customer insights', price: '$599/mo' },
        { name: 'Financial Analytics', path: '/financial-analytics', description: 'Advanced financial modeling', price: '$1,299/mo' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', price: '$3,500/mo' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', price: '$2,800/mo' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', price: 'Custom' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization', price: '$2,500/mo' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping', price: '$1,500/mo' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions', price: '$1,800/mo' },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions', price: 'Custom' }
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
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-gray-900 rounded-xl shadow-2xl border border-cyan-500 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 5).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="font-medium flex justify-between items-center">
                                <span>{service.name}</span>
                                <span className="text-xs text-cyan-400 font-semibold">{service.price}</span>
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-purple-500">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                          {category.services.length > 5 && (
                            <Link
                              href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                              className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                              onClick={closeAllMenus}
                            >
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 mt-6 pt-4 px-6">
                    <Link
                      href="/services"
                      className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
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
