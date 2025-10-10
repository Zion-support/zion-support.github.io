import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);

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
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
        { name: 'AI Content Generator', path: '/ai-content-generation', description: 'AI-powered content creation', icon: '✍️', popular: false },
        { name: 'AI SEO Optimizer', path: '/ai-marketing', description: 'AI-driven SEO optimization', icon: '🎯', popular: false }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', description: 'Advanced computer vision' },
        { name: 'AI Natural Language Processing', path: '/ai-nlp', description: 'Advanced NLP solutions' },
        { name: 'AI Robotics Platform', path: '/ai-robotics', description: 'Intelligent robotics' },
        { name: 'AI Research & Development', path: '/ai-research-development', description: 'Custom AI R&D' },
        { name: 'AI Edge Computing', path: '/ai-edge-computing', description: 'AI at the edge' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'DevOps automation' },
        { name: 'Database Management', path: '/database-management', description: 'Database management' },
        { name: 'Network Solutions', path: '/network-solutions', description: 'Network infrastructure' },
        { name: 'System Administration', path: '/system-administration', description: 'System management' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT management' },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure-design', description: 'Custom infrastructure' },
        { name: 'IT Performance Monitoring', path: '/it-performance-monitoring', description: 'Real-time monitoring' },
        { name: 'IT Disaster Recovery', path: '/it-disaster-recovery', description: 'Disaster recovery' },
        { name: 'IT Automation', path: '/it-automation', description: 'IT process automation' },
        { name: 'Global IT Support', path: '/global-it-support', description: 'Worldwide support' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
        { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent CRM with AI insights' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'Real-time business intelligence' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'AI-assisted app development' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
        { name: 'AI Sales Forecasting', path: '/ai-sales-forecasting', description: 'Advanced sales predictions' },
        { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'E-commerce optimization' },
        { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design tool' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing' },
        { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring' },
        { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management' },
        { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management' },
        { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Process automation' },
        { name: 'AI A/B Testing Platform', path: '/ai-ab-testing', description: 'Advanced A/B testing' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions' },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions' }
      ]
    }
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
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Brain className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-3">Core Services</h3>
                      {services.slice(0, 8).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-3">Additional Services</h3>
                      {services.slice(8).map((service, index) => (
                        <Link
                          key={index}
                          to={service.url}
                          className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Technologies Dropdown */}
            <div className="relative">
              <button
                onClick={() => setTechnologiesOpen(!technologiesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
                aria-expanded={technologiesOpen}
                aria-haspopup="true"
              >
                Technologies
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {technologiesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-cyan-500/20 py-4 z-50">
                  <div className="px-4">
                    {technologies.map((tech, index) => (
                      <Link
                        key={index}
                        to={tech.url}
                        className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded transition-colors"
                        onClick={() => setTechnologiesOpen(false)}
                      >
                        {tech.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Team
            </Link>
            <Link to="/contact" className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Technologies Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Technologies</div>
                <div className="ml-4 space-y-2">
                  {technologies.map((tech, index) => (
                    <Link
                      key={index}
                      to={tech.url}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {tech.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Company Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Company</div>
                <div className="ml-4 space-y-2">
                  {company.map((item, index) => (
                    <Link
                      key={index}
                      to={item.url}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Resources Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Resources</div>
                <div className="ml-4 space-y-2">
                  {resources.map((resource, index) => (
                    <Link
                      key={index}
                      to={resource.url}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>
              
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
});

export default Navigation;
