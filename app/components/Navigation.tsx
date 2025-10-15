import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
<<<<<<< HEAD
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-3xl font-bold neon-text cyber-font">ZION TECH</h1>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-gray-800/50">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
=======
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial predictions', icon: '⚛️', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced cognitive enhancement', icon: '🧠', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: '3D workspace with holographic UI', icon: '🥽', popular: true },
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
        { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
        { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Personalized financial planning', icon: '💰', popular: false },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Visual workflow builder', icon: '⚡', popular: true },
<<<<<<< HEAD
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
        { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
        { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true },
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial analysis', icon: '⚛️', popular: true },
        { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', description: 'AI-powered 3D model generation', icon: '🎨', popular: true },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-powered mobile app development', icon: '📱', popular: true },
        { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true },
        { name: 'AI Voice Cloning Studio', path: '/ai-voice-cloning-studio', description: 'Professional voice synthesis and cloning', icon: '🎤', popular: true },
        { name: 'AI Code Security Auditor', path: '/ai-code-security-auditor', description: 'Automated code security analysis', icon: '🔒', popular: true },
        { name: 'AI Mental Health Companion', path: '/ai-mental-health-companion', description: 'AI-powered mental health support', icon: '💚', popular: true },
        { name: 'AI Smart Home Controller', path: '/ai-smart-home-controller', description: 'Intelligent home automation', icon: '🏠', popular: true },
        { name: 'AI Investment Optimizer', path: '/ai-investment-optimizer', description: 'Advanced portfolio management', icon: '📈', popular: true }
=======
        { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true }
>>>>>>> origin/main
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
<<<<<<< HEAD
        { name: 'AI Workflow Automation Platform', path: '/ai-workflow-automation', description: 'End-to-end business process automation', icon: '⚡', popular: true },
        { name: 'AI Customer Support Suite', path: '/ai-customer-support', description: 'Advanced 24/7 customer support', icon: '🤖', popular: true },
        { name: 'AI Data Analytics Platform', path: '/ai-data-analytics', description: 'Advanced analytics with ML predictions', icon: '📊', popular: true },
        { name: 'AI Content Generation Studio', path: '/ai-content-generation', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnosis support', icon: '🏥', popular: true },
        { name: 'AI Fintech Platform', path: '/ai-fintech', description: 'Financial AI and fraud detection', icon: '💳', popular: true },
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Advanced pharmaceutical AI', icon: '💊', popular: true },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌱', popular: true },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced AI with persistent memory', icon: '🧠', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: 'Immersive 3D collaboration', icon: '🥽', popular: false },
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true }
=======
        { name: 'AI Quantum Computing Platform', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'AI Autonomous Systems Platform', path: '/ai-autonomous-systems', description: 'Self-managing AI systems', icon: '🤖', popular: true },
        { name: 'AI Blockchain Intelligence', path: '/ai-blockchain-solutions', description: 'AI-powered blockchain technology', icon: '⛓️', popular: true },
        { name: 'AI Space Technology Platform', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true },
        { name: 'AI Climate Intelligence Platform', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌱', popular: true },
        { name: 'AI Drug Discovery Platform', path: '/ai-drug-discovery-pro', description: 'Advanced pharmaceutical AI', icon: '💊', popular: true },
        { name: 'AI Financial Crime Detection', path: '/ai-financial-crime-detection-pro', description: 'Advanced fraud detection', icon: '🛡️', popular: true },
        { name: 'AI Agricultural Intelligence', path: '/ai-agricultural-intelligence-pro', description: 'Smart farming solutions', icon: '🌾', popular: true },
        { name: 'AI Energy Grid Management', path: '/ai-energy-grid-management-pro', description: 'Smart energy optimization', icon: '⚡', popular: true },
        { name: 'AI Legal Research Platform', path: '/ai-legal-research-pro', description: 'Intelligent legal research', icon: '⚖️', popular: true },
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true },
        { name: 'AI Music Composition Studio', path: '/ai-music-composition', description: 'AI-powered music creation', icon: '🎵', popular: true }
>>>>>>> origin/main
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
<<<<<<< HEAD
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', description: 'Seamless cloud migration', icon: '☁️', popular: true },
        { name: 'Enterprise Cybersecurity Suite', path: '/cybersecurity', description: 'Comprehensive security solutions', icon: '🛡️', popular: true },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', description: 'Scalable infrastructure architecture', icon: '🏗️', popular: true },
        { name: '24/7 IT Support & Monitoring', path: '/it-support', description: 'Round-the-clock technical support', icon: '🔄', popular: true },
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
        { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd', description: 'Streamlined development processes', icon: '⚙️', popular: true },
        { name: 'Database Management & Optimization', path: '/database-management', description: 'Performance tuning & security', icon: '🗄️', popular: true },
        { name: 'Network Design & Implementation', path: '/network-design', description: 'Secure network infrastructure', icon: '🌐', popular: true },
        { name: 'AI Infrastructure Monitoring', path: '/ai-infrastructure-monitoring', description: 'Intelligent infrastructure monitoring', icon: '📊', popular: true },
        { name: 'Blockchain Integration Services', path: '/blockchain-integration-services', description: 'Web3 and blockchain solutions', icon: '⛓️', popular: true },
        { name: 'AI API Management', path: '/ai-api-management', description: 'Intelligent API management', icon: '🔗', popular: true },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
        { name: 'Smart Contract Security Audit', path: '/smart-contract-security-audit', description: 'Blockchain security auditing', icon: '🔒', popular: true },
        { name: 'AI IT Operations (AIOps)', path: '/ai-ops', description: 'AI-powered IT operations', icon: '🤖', popular: true },
        { name: 'Healthcare IT Solutions', path: '/healthcare-it', description: 'HIPAA-compliant healthcare IT', icon: '🏥', popular: true },
        { name: 'Financial Services IT', path: '/financial-it', description: 'SOX-compliant financial IT', icon: '💳', popular: true },
=======
        { name: 'AI Infrastructure Monitoring Pro', path: '/ai-infrastructure-monitoring', description: 'Intelligent infrastructure monitoring', icon: '📊', popular: true },
        { name: 'AI Security Operations Center', path: '/ai-security-operations', description: 'AI-powered security monitoring', icon: '🛡️', popular: true },
        { name: 'AI Cloud Cost Optimization', path: '/ai-cloud-optimization', description: 'Smart cloud resource management', icon: '☁️', popular: true },
        { name: 'AI Data Center Management', path: '/ai-data-center', description: 'Intelligent data center operations', icon: '🏢', popular: true },
        { name: 'Blockchain Integration Services Pro', path: '/blockchain-integration-services', description: 'Web3 and blockchain solutions', icon: '⛓️', popular: true },
        { name: 'Smart Contract Security Audit Pro', path: '/smart-contract-security-audit', description: 'Blockchain security auditing', icon: '🔒', popular: true },
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence', description: 'Advanced analytics platform', icon: '📈', popular: true },
        { name: 'Data Lake & Warehouse Solutions', path: '/data-warehouse', description: 'Enterprise data management', icon: '🗄️', popular: true },
        { name: 'Real-time Analytics Platform', path: '/real-time-analytics', description: 'Live data processing', icon: '⚡', popular: true },
        { name: 'IoT Platform Development', path: '/iot-platform', description: 'Comprehensive IoT solutions', icon: '🌐', popular: true },
>>>>>>> origin/main
        { name: 'Edge Computing Solutions', path: '/edge-computing', description: 'Low-latency edge infrastructure', icon: '📡', popular: true },
        { name: 'Smart City Solutions', path: '/smart-cities', description: 'Urban technology solutions', icon: '🏙️', popular: true }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖', popular: true },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️', popular: true },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', icon: '📡', popular: true },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: '🥽', popular: true },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', icon: '🏙️', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
        { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems', description: 'AI-powered autonomous systems', icon: '🤖', popular: true },
        { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions', description: 'AI-powered blockchain technology', icon: '⛓️', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: 'Immersive 3D collaboration', icon: '🥽', popular: false },
        { name: 'AI Energy Management', path: '/ai-energy', description: 'Smart energy optimization', icon: '⚡', popular: true },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI-powered music creation', icon: '🎵', popular: true },
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8860
>>>>>>> origin/main
=======
        { name: 'AI Energy Management', path: '/ai-energy', description: 'Smart energy optimization', icon: '⚡', popular: true },
>>>>>>> origin/main
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization', icon: '🔄', popular: true },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping', icon: '🧪', popular: false }
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
<<<<<<< HEAD
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 cyber-grid-enhanced ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20 neon-glow-cyan' : 'bg-transparent'
    }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl cyber-text">Zion Tech Group</span>
                <span className="text-cyan-400 text-xs font-medium">AI & IT Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
=======
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${

      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20 neon-glow-cyan' : 'bg-transparent'
    }`}>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold group"
            onClick={closeAllMenus}
          >
<div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 neon-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold cyber-text">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-text"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Services
            </Link>
            <Link 
              to="/micro-saas" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Micro SAAS
            </Link>
            <Link 
              to="/ai-services" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              AI Services
            </Link>
            <Link 
              to="/it-services" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              IT Services
            </Link>
            <Link 
              to="/case-studies" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            <Link 
              to="/pricing" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Pricing
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
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
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-cyan-400/20 hover:text-cyan-600 rounded-lg transition-colors"
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
                    <Link
                      to="/services"
                      className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-white hover:text-cyan-400 transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              onClick={closeAllMenus}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-4">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-a453
              <Link
                to="/"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-text"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-400/20 py-6 z-50">
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
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.path}
                                className="block px-3 py-2 text-sm text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded-lg transition-colors"
                                onClick={closeAllMenus}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-cyan-400/20 mt-6 pt-4 px-6">
                      <Link
                        to="/services"
                        className="block w-full text-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-700 hover:to-purple-700 transition-all"
                        onClick={closeAllMenus}
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/micro-saas" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >
                Micro SAAS
              </Link>
              <Link 
                to="/ai-services" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >
                AI Services
              </Link>
              <Link 
                to="/it-services" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >
                IT Services
              </Link>
              <Link 
                to="/case-studies" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link 
                to="/pricing" 
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>

<<<<<<< HEAD
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-cyan-400 transition-colors duration-200"
                aria-label="Search"
=======
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-gray-300 font-medium text-sm mb-2">Services</div>
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <category.icon className={`w-4 h-4 ${category.color}`} />
                      <span className="text-cyan-400 font-medium text-sm">{category.title}</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.path}
                          className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm py-1"
                          onClick={closeAllMenus}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/case-studies"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-a453
              >
                <Search className="w-5 h-5" />
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-700">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-neon-blue uppercase tracking-wider">AI Services</div>
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">AI Development & Consulting</Link>
                  <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">AI Content Generation</Link>
                  
                  <div className="px-4 py-2 text-xs font-semibold text-neon-purple uppercase tracking-wider mt-2">Micro SAAS</div>
                  <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-gray-800/50 transition-all duration-200">Task Management Pro</Link>
                  <Link to="/zion-smart-expense-tracker" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-gray-800/50 transition-all duration-200">Smart Expense Tracker</Link>
                  <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-gray-800/50 transition-all duration-200">Email Marketing Pro</Link>
                  
                  <div className="px-4 py-2 text-xs font-semibold text-neon-pink uppercase tracking-wider mt-2">IT Solutions</div>
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800/50 transition-all duration-200">IT Services</Link>
                  <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800/50 transition-all duration-200">Cloud Infrastructure</Link>
                  <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800/50 transition-all duration-200">Web Development</Link>
                  <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800/50 transition-all duration-200">Mobile Development</Link>
                  <Link to="/cybersecurity" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800/50 transition-all duration-200">Cybersecurity</Link>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-gray-800/50">
                Company
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-700">
                <div className="py-2">
                  <Link to="/team" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">Our Team</Link>
                  <Link to="/careers" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">Careers</Link>
                  <Link to="/partnerships" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">Partnerships</Link>
                  <Link to="/case-studies" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">Case Studies</Link>
                  <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 transition-all duration-200">Pricing</Link>
                </div>
              </div>
            </div>

            <Link to="/blog" className="text-white hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50">
              Blog
            </Link>
            <Link to="/contact" className="neon-button px-6 py-2 text-sm font-bold">
              Contact
            </Link>
          </div>
<<<<<<< HEAD

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-blue focus:outline-none focus:text-neon-blue transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              About
            </Link>
            
            {/* Mobile Services Section */}
            <div>
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-white hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between transition-all duration-300"
              >
                Services
                <svg className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1 bg-gray-800/50 rounded-lg mt-2">
                  <div className="px-3 py-1 text-xs font-semibold text-neon-blue uppercase tracking-wider">AI Services</div>
                  <Link to="/ai-services" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">AI Development</Link>
                  <Link to="/ai-content-generator" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">AI Content Generator</Link>
                  
                  <div className="px-3 py-1 text-xs font-semibold text-neon-purple uppercase tracking-wider">Micro SAAS</div>
                  <Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-purple block px-3 py-2 rounded-md text-sm transition-all duration-200">Task Management Pro</Link>
                  <Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-neon-purple block px-3 py-2 rounded-md text-sm transition-all duration-200">Expense Tracker</Link>
                  
                  <div className="px-3 py-1 text-xs font-semibold text-neon-pink uppercase tracking-wider">IT Solutions</div>
                  <Link to="/it-services" className="text-gray-300 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-all duration-200">IT Services</Link>
                  <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-all duration-200">Cloud Infrastructure</Link>
                  <Link to="/web-development" className="text-gray-300 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-all duration-200">Web Development</Link>
                  <Link to="/mobile-development" className="text-gray-300 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-all duration-200">Mobile Development</Link>
                </div>
              )}
            </div>

            {/* Mobile Company Section */}
            <div>
              <button 
                onClick={() => setCompanyOpen(!companyOpen)}
                className="text-white hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between transition-all duration-300"
              >
                Company
                <svg className={`h-4 w-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {companyOpen && (
                <div className="pl-4 space-y-1 bg-gray-800/50 rounded-lg mt-2">
                  <Link to="/team" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">Our Team</Link>
                  <Link to="/careers" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">Careers</Link>
                  <Link to="/partnerships" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">Partnerships</Link>
                  <Link to="/case-studies" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">Case Studies</Link>
                  <Link to="/pricing" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-all duration-200">Pricing</Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-white hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              Blog
            </Link>
            <Link to="/contact" className="neon-button w-full text-center block mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
=======
      </nav>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
=======
        )}
      </div>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-a453
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f
  );
};

export default Navigation;