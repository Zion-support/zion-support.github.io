import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Mail } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
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
    setIsOpen(false);
    setServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setServicesOpen(false);
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Business Intelligence', path: '/ai-services/business-intelligence', description: 'Advanced analytics & insights' },
        { name: 'AI Document Processing', path: '/ai-services/document-processing', description: 'Intelligent document analysis' },
        { name: 'AI Customer Experience', path: '/ai-services/customer-experience', description: 'AI-powered customer interactions' },
        { name: 'AI Marketing Automation', path: '/ai-services/marketing-automation', description: 'Intelligent marketing campaigns' },
        { name: 'AI Predictive Maintenance', path: '/ai-services/predictive-maintenance', description: 'Equipment failure prevention' },
        { name: 'AI Supply Chain', path: '/ai-services/supply-chain', description: 'Supply chain optimization' },
        { name: 'AI Fraud Detection', path: '/ai-services/fraud-detection', description: 'Advanced fraud prevention' },
        { name: 'AI Content Generation', path: '/ai-services/content-generation', description: 'AI content creation' },
        { name: 'AI HR Analytics', path: '/ai-services/hr-analytics', description: 'Human resources optimization' },
        { name: 'AI Process Automation', path: '/ai-services/process-automation', description: 'Intelligent workflow automation' },
        { name: 'AI Quality Assurance', path: '/ai-services/quality-assurance', description: 'AI-powered quality control' },
        { name: 'AI Energy Management', path: '/ai-services/energy-management', description: 'Energy optimization solutions' }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Code,
      color: 'text-green-400',
      services: [
        { name: 'AI Analytics Dashboard', path: '/micro-saas/analytics-dashboard', description: 'Real-time business intelligence' },
        { name: 'Smart Support Bot', path: '/micro-saas/support-bot', description: 'AI customer service automation' },
        { name: 'Social Media Manager', path: '/micro-saas/social-manager', description: 'AI social media automation' },
        { name: 'Email Marketing Suite', path: '/micro-saas/email-marketing', description: 'AI email campaigns' },
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', description: 'Smart inventory optimization' },
        { name: 'Lead Scoring System', path: '/micro-saas/lead-scoring', description: 'Intelligent lead qualification' },
        { name: 'Document Processor', path: '/micro-saas/document-processor', description: 'AI document analysis' },
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', description: 'AI SEO automation' },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', description: 'Smart scheduling system' },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', description: 'Conversation analysis' },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', description: 'AI expense management' },
        { name: 'Content Generator', path: '/micro-saas/content-generator', description: 'AI content creation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'IT Support', path: '/it-support', description: 'Comprehensive IT support' },
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', description: 'Cloud migration & setup' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Database Management', path: '/database-management', description: 'Database management' },
        { name: 'Managed IT', path: '/managed-it', description: '24/7 IT management' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      color: 'text-cyan-400',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain', path: '/blockchain', description: 'Decentralized solutions' },
        { name: 'IoT Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots' }
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
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
<<<<<<< HEAD
            
=======
            <Link to="/services" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Services
            </Link>
            <Link to="/ai-services" className="text-white hover:text-cyan-400 transition-colors font-medium">
              AI Services
            </Link>
            <Link to="/micro-saas" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Micro SAAS
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Blog
            </Link>

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-66f0
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-400/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-3">
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                          <h3 className="text-white font-semibold">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
<<<<<<< HEAD
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-66f0
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
<<<<<<< HEAD
              
=======
              <Link
                to="/services"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Services
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Micro SAAS
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              <Link
                to="/case-studies"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-66f0
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <h4 className="text-cyan-400 font-semibold text-sm">{category.title}</h4>
                        </div>
                        <div className="ml-6 space-y-1">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
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
                to="/pricing"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
<<<<<<< HEAD
              
              <div className="pt-4 border-t border-cyan-400/20">
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
=======

              <a
                href="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all mt-4"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-66f0
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';
<<<<<<< HEAD

export default Navigation;
=======
export default Navigation;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-66f0
