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
  ArrowRight,
  Star,
  TrendingUp,
  Settings,
  Globe,
  Target
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82ba
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4848
    setIsOpen(false);
=======
    }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82ba
  };

<<<<<<< HEAD
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      services: [
<<<<<<< HEAD
        { name: 'AI Services', path: '/ai-services' },
        { name: 'AI Marketing', path: '/ai-marketing' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
<<<<<<< HEAD
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Analytics', path: '/ai-data-analytics' }
=======
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Cloud Infrastructure', path: '/ai-cloud-infrastructure' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development' }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4848
=======
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82ba
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
<<<<<<< HEAD
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'IT Services', path: '/it-services' },
<<<<<<< HEAD
        { name: 'Cloud Services', path: '/ai-cloud-infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'DevOps', path: '/ai-workflow-automation' },
        { name: 'Database Services', path: '/ai-data-analytics' }
=======
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Cloud Services', path: '/cloud-services' },
        { name: 'DevOps', path: '/devops' },
        { name: 'Database Services', path: '/database' },
        { name: 'Network Services', path: '/networking' }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4848
=======
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'Cloud Infrastructure', path: '/ai-cloud-infrastructure', description: 'Cloud migration & setup' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'DevOps', path: '/ai-workflow-automation', description: 'DevOps automation' },
        { name: 'Database Services', path: '/ai-data-analytics', description: 'Database management' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82ba
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '50+ ready-to-use apps' },
        { name: 'Developer Tools', path: '/micro-saas', description: 'AI-powered dev tools' },
        { name: 'Business Apps', path: '/micro-saas', description: 'Productivity applications' },
        { name: 'Marketing Tools', path: '/micro-saas', description: 'Marketing automation' },
        { name: 'Analytics Tools', path: '/micro-saas', description: 'Business intelligence' }
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
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' }
      ]
    }
=======
  const aiServices = [
    { name: 'AI Solutions', href: '/ai-services', icon: Brain, description: 'Core AI services' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'AI-powered marketing' },
    { name: 'AI Automation', href: '/ai-automation', icon: Settings, description: 'Business automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Users, description: 'Healthcare AI' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: TrendingUp, description: 'Financial AI' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Data intelligence' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'AI security' },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud AI' },
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
  ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  const itServices = [
<<<<<<< HEAD
    { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart },
    { name: 'Mobile Development', href: '/mobile-development', icon: Code },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'DevOps', href: '/devops', icon: Code },
=======
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Customer Support', href: '/ai-customer-support' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization' },
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
    { name: 'Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'Data Analytics', href: '/ai-data-analytics' },
    { name: 'Mobile Development', href: '/ai-mobile-app-development' },
    { name: 'Workflow Automation', href: '/ai-workflow-automation' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Blockchain & Web3', href: '/blockchain' },
    { name: 'Autonomous Systems', href: '/autonomous-systems' },
    { name: 'Business Intelligence', href: '/business-intelligence' },
    { name: 'Enterprise Solutions', href: '/enterprise' },
    { name: 'AI Advertising', href: '/services-advertising' },
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d197
=======
    { name: 'IT Solutions', href: '/it-services', icon: Code, description: 'Core IT services' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Cloud Services', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud infrastructure' },
    { name: 'Mobile Development', href: '/ai-mobile-app-development', icon: Code, description: 'Mobile apps' },
    { name: 'Web Development', href: '/services', icon: Globe, description: 'Web solutions' },
    { name: 'DevOps', href: '/services', icon: Settings, description: 'DevOps services' },
  ];

  const microSaasServices = [
    { name: 'AI Code Review', href: '/micro-saas', icon: Code, description: 'Automated code analysis' },
    { name: 'AI SEO Optimizer', href: '/micro-saas', icon: Target, description: 'SEO automation' },
    { name: 'AI Analytics Dashboard', href: '/micro-saas', icon: BarChart, description: 'Business intelligence' },
    { name: 'AI Marketing Tools', href: '/micro-saas', icon: TrendingUp, description: 'Marketing automation' },
    { name: 'AI Document Processing', href: '/micro-saas', icon: Code, description: 'Document intelligence' },
    { name: 'AI Customer Support', href: '/micro-saas', icon: Users, description: 'Support automation' },
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
  ];

  const emergingTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap, description: 'Quantum solutions' },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Shield, description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Cloud, description: 'Connected devices' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, description: 'Self-managing systems' },
    { name: 'Robotics', href: '/robotics', icon: Code, description: 'Intelligent robots' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data insights' },
  ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1ed2
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-14d1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-012c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bd1c
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2152
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4848
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726

  return (
<<<<<<< HEAD
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
<<<<<<< HEAD
=======
    <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20 cyber-glow">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d197
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-14d1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-012c
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
            <span className="text-3xl mr-2">⚡</span>
=======
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center cyber-text">
            <span className="text-3xl mr-2 energy-pulse">⚡</span>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d197
            Zion Tech Group
=======
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2152
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4848
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
=======
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  };

  const toggleAiServices = () => {
    setAiServicesOpen(!aiServicesOpen);
    setItServicesOpen(false);
  };

  const toggleItServices = () => {
    setItServicesOpen(!itServicesOpen);
    setAiServicesOpen(false);
  };
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82ba

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
=======
            <span className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4848
          </Link>

<<<<<<< HEAD
          {/* Desktop Menu */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
<<<<<<< HEAD
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">              About
            </Link>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-14d1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-012c
=======
          <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
            <span className="text-3xl">⚡</span>
            <span className="hidden sm:block">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
>>>>>>> cursor/fix-errors-and-merge-to-main-bd1c
=======
            <span className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
=======
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82ba
              Zion Tech Group
            </span>
          </Link>

=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
<<<<<<< HEAD
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
=======
              className="text-white hover:text-cyan-400 font-medium transition-colors"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
<<<<<<< HEAD
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              About
            </Link>

=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
<<<<<<< HEAD
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
=======
                className="flex items-center space-x-1 text-white hover:text-cyan-400 font-medium transition-colors"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
<<<<<<< HEAD
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
=======
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {/* AI Services */}
                    <div>
                      <button
                        onClick={() => setAiServicesOpen(!aiServicesOpen)}
                        className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 font-medium mb-3"
                      >
                        <Brain className="w-4 h-4" />
                        <span>AI Services</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {aiServicesOpen && (
                        <div className="space-y-2 ml-6">
                          {aiServices.slice(0, 4).map((service, index) => (
                            <Link
<<<<<<< HEAD
                              key={serviceIndex}
                              to={service.path}
                              className={`block px-3 py-2 text-sm text-gray-600 ${category.hoverColor} hover:text-purple-600 rounded-lg transition-colors group`}
=======
                              key={index}
                              to={service.href}
                              className="block text-sm text-gray-600 hover:text-blue-600 py-1"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
                              onClick={closeAllMenus}
                            >
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500 group-hover:text-purple-500">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* IT Services */}
                    <div>
                      <button
                        onClick={() => setItServicesOpen(!itServicesOpen)}
                        className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 font-medium mb-3"
                      >
                        <Code className="w-4 h-4" />
                        <span>IT Services</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {itServicesOpen && (
                        <div className="space-y-2 ml-6">
                          {itServices.slice(0, 4).map((service, index) => (
                            <Link
                              key={index}
                              to={service.href}
                              className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
<<<<<<< HEAD
                    <Link
                      to="/services"
                      className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
=======
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/micro-saas"
                        className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Star className="w-5 h-5 text-purple-600" />
                        <div>
                          <div className="font-medium text-gray-900">Micro SAAS</div>
                          <div className="text-sm text-gray-500">AI-powered tools</div>
                        </div>
                      </Link>
                      <Link
                        to="/services"
                        className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Globe className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">All Services</div>
                          <div className="text-sm text-gray-500">Complete portfolio</div>
                        </div>
                      </Link>
                    </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
                  </div>
                </div>
              )}
            </div>

<<<<<<< HEAD
            <Link 
              to="/case-studies" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
=======
            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMicroSaasOpen(!microSaasOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 font-medium transition-colors"
              >
                <Star className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50">
                  <div className="px-4">
                    <div className="text-sm font-semibold text-gray-900 mb-3">Popular AI Tools</div>
                    <div className="space-y-2">
                      {microSaasServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-4 h-4 text-purple-600" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{service.name}</div>
                            <div className="text-xs text-gray-500">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link
                        to="/micro-saas"
                        className="block w-full text-center bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                        onClick={closeAllMenus}
                      >
                        View All Tools
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
<<<<<<< HEAD

            <Link 
              to="/blog" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
=======
            <Link
              to="/blog"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
              onClick={closeAllMenus}
            >
              Blog
            </Link>
<<<<<<< HEAD

            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
<<<<<<< HEAD
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

=======
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
=======
              to="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center space-x-2"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-82ba
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
=======
            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-cyan-300">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
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
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
<<<<<<< HEAD
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Services
                </div>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center space-x-2 px-3 py-2">
                      <category.icon className={`w-4 h-4 ${category.color}`} />
                      <span className="text-sm font-medium text-gray-700">{category.title}</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.path}
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                          onClick={closeAllMenus}
                        >
                          {service.name}
                        </Link>
                      ))}
                      {category.services.length > 3 && (
                        <Link
                          to="/services"
                          className="block px-3 py-1 text-xs text-purple-600 hover:text-purple-700"
                          onClick={closeAllMenus}
                        >
                          View all {category.title.toLowerCase()} →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/case-studies"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>

              <Link
                to="/blog"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              <Link
                to="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all mt-4"
=======
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-cyan-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                About
              </Link>
              <Link to="/blog" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                Blog
              </Link>
              <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-cyan-300 py-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-cyan-300 py-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-cyan-300 py-2">
                  <MapPin className="w-4 h-4" />
                  <span>Middletown, DE</span>
                </div>
              </div>
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 mt-4"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default Navigation;
=======
export default Navigation;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-7726
