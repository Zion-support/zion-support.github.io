import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
=======
import { ChevronDown, Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-fe44

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bd1c
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';
=======
import { ChevronDown, Menu, X } from 'lucide-react';
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-14d1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-012c
=======
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
=======
import { ChevronDown, Phone, Mail, Menu, X, Brain, Code } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
=======
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-2152

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
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
    setAiServicesOpen(false);
    setItServicesOpen(false);
  };

<<<<<<< HEAD
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
=======
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Services', path: '/ai-services' },
        { name: 'AI Marketing', path: '/ai-marketing' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Analytics', path: '/ai-data-analytics' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'IT Services', path: '/it-services' },
        { name: 'Cloud Services', path: '/ai-cloud-infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'DevOps', path: '/ai-workflow-automation' },
        { name: 'Database Services', path: '/ai-data-analytics' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'Micro SAAS', path: '/micro-saas' },
        { name: 'Developer Tools', path: '/micro-saas' },
        { name: 'Business Apps', path: '/micro-saas' },
        { name: 'Productivity Tools', path: '/micro-saas' },
        { name: 'Marketing Tools', path: '/micro-saas' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' }
      ]
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
    }
  };

  const aiServices = [
    { name: 'AI Consulting', href: '/ai-services', icon: Brain },
    { name: 'Machine Learning', href: '/ai-services', icon: Brain },
    { name: 'Natural Language Processing', href: '/ai-services', icon: Brain },
    { name: 'Computer Vision', href: '/ai-services', icon: Brain },
    { name: 'Predictive Analytics', href: '/ai-services', icon: BarChart },
    { name: 'AI Automation', href: '/ai-services', icon: Zap },
  ];
<<<<<<< HEAD
<<<<<<< HEAD

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart },
    { name: 'Mobile Development', href: '/mobile-development', icon: Code },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'DevOps', href: '/devops', icon: Code },
  ];

  const emergingTech = [
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Shield },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap },
    { name: 'IoT Solutions', href: '/iot-solutions', icon: Cloud },
    { name: 'AR/VR Development', href: '/ar-vr', icon: Code },
    { name: 'Edge Computing', href: '/edge-computing', icon: Cloud },
    { name: '5G Solutions', href: '/5g-solutions', icon: Zap },
  ];
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
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
            Zion Tech Group
=======
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2152
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
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
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Menu */}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
=======
            <span className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Menu */}
>>>>>>> cursor/fix-errors-and-merge-to-main-2152
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
=======
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={closeAllMenus}
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
            >
              Home
            </Link>
            
<<<<<<< HEAD
<<<<<<< HEAD
            {/* AI Services Dropdown */}
            <div className="relative group">
=======
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
              <button
<<<<<<< HEAD
                onClick={() => setServicesOpen(!servicesOpen)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"              >
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-14d1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-012c
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
=======
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2152
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
=======
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
>>>>>>> cursor/fix-errors-and-merge-to-main-bd1c
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
=======
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2152
              </button>
              
<<<<<<< HEAD
              {servicesOpen && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-14d1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-012c
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Core Services</h3>
                      {services.slice(0, 6).map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block py-2 text-sm text-gray-700 hover:text-cyan-600 transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                          {service.name}                        </Link>
=======
                          {service.name}
                        </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
=======
                          {service.name}
                        </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-14d1
=======
                          {service.name}
                        </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-012c
                      ))}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Advanced Services</h3>
                      {services.slice(6).map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block py-2 text-sm text-gray-700 hover:text-cyan-600 transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2152
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-purple-600 rounded-lg transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
<<<<<<< HEAD
=======
              {aiServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  {aiServices.map((service, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-bd1c
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-cyan-600 transition-colors duration-200"
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
=======
                    <Link
                      to="/services"
                      className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2152
                </div>
              )}
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
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
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-cyan-600 transition-colors duration-200"
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Emerging Tech Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Zap className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {emergingTech.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-cyan-600 transition-colors duration-200"
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
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2152
            <Link 
              to="/case-studies" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
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
<<<<<<< HEAD
<<<<<<< HEAD
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
              
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-700 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Cybersecurity
                  </Link>
<<<<<<< HEAD
                </div>              </div>
=======
                </div>
              </div>
              
>>>>>>> cursor/fix-errors-and-merge-to-main-deb0
              <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Team
              </Link>
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                Contact Us
              </Link>
            </div>
          </div>
<<<<<<< HEAD
=======
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
=======
                  </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-14d1
                </div>
              )}
            </div>
            {/* Technologies Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                Technologies
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-4 z-50">
                  <div className="px-4">
                    {technologies.map((tech, index) => (
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd1c
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
<<<<<<< HEAD
<<<<<<< HEAD
                    ))}                  </div>
=======
                    ))}
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
=======
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-012c
=======
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-6">
                    {/* AI Services */}
                    <div>
                      <button
                        onClick={toggleAiServices}
                        className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 font-medium mb-3"
                      >
                        <Brain className="w-4 h-4" />
                        <span>AI Services</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {aiServicesOpen && (
                        <div className="space-y-2 ml-6">
                          <Link to="/ai-services" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            AI Solutions
                          </Link>
                          <Link to="/ai-marketing" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            AI Marketing
                          </Link>
                          <Link to="/ai-automation" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            AI Automation
                          </Link>
                          <Link to="/ai-healthcare" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            AI Healthcare
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* IT Services */}
                    <div>
                      <button
                        onClick={toggleItServices}
                        className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 font-medium mb-3"
                      >
                        <Code className="w-4 h-4" />
                        <span>IT Services</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {itServicesOpen && (
                        <div className="space-y-2 ml-6">
                          <Link to="/it-services" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            IT Solutions
                          </Link>
                          <Link to="/cybersecurity" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            Cybersecurity
                          </Link>
                          <Link to="/cloud-infrastructure" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            Cloud Infrastructure
                          </Link>
                          <Link to="/mobile-development" className="block text-sm text-gray-600 hover:text-blue-600 py-1" onClick={closeAllMenus}>
                            Mobile Development
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              About
            </Link>
<<<<<<< HEAD
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

=======
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>

>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        )}
      </div>
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-14d1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-012c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f

        {/* Mobile Navigation */}
        {isOpen && (
<<<<<<< HEAD
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
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
=======
                    ))}
                  </div>
                )}
>>>>>>> cursor/fix-errors-and-merge-to-main-bd1c
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

              {/* Mobile Emerging Tech */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Emerging Tech</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
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

=======
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                IT Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
              <Link
<<<<<<< HEAD
                to="/contact"
<<<<<<< HEAD
                className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        onClick={() => {
                          setIsOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
=======
=======
              Team
            </Link>

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
=======
              Team
            </Link>

>>>>>>> cursor/fix-errors-and-merge-to-main-2152
            {/* Contact Button */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6 bg-white">
            <div className="space-y-6">
              <Link 
                to="/" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
=======
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              
<<<<<<< HEAD
              <Link 
                to="/about" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
=======
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
>>>>>>> cursor/fix-errors-and-merge-to-main-bd1c
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
=======
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ea96
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-012c
  );
};

<<<<<<< HEAD
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1ed2
export default Navigation;
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2152
  );
};

export default Navigation;
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-14d1
=======
export default Navigation;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd1c
=======
  );
};

export default Navigation;
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f
=======
  );
};

export default Navigation;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-d65f
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2152
