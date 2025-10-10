'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from '../../src/components/SearchModal';
import { 
  ChevronDown, 
  Phone, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Zap,
  Settings,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Search,
  Home,
  Users,
  BarChart,
  FileText
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
      services: [
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial predictions' },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced cognitive enhancement' },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: '3D workspace with holographic UI' },
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', description: 'Intelligent project planning' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'End-to-end business process automation' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'Advanced 24/7 customer support' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced analytics with ML predictions' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Complete content creation suite' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnosis support' },
        { name: 'AI Fintech Platform', path: '/ai-fintech', description: 'Financial AI and fraud detection' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', description: 'Seamless cloud migration' },
        { name: 'Enterprise Cybersecurity', path: '/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', description: 'Scalable infrastructure architecture' },
        { name: '24/7 IT Support', path: '/it-support', description: 'Round-the-clock technical support' },
        { name: 'Custom Development', path: '/custom-development', description: 'Tailored software solutions' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'Streamlined development processes' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      services: [
        { name: 'Quantum Computing', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' }
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
              <span className="text-cyan-400 text-xs font-medium">AI & IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Services
            </Link>
            <Link 
              to="/micro-saas" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Micro SAAS
            </Link>
            <Link 
              to="/ai-services" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              AI Services
            </Link>
            <Link 
              to="/it-services" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              IT Services
            </Link>
            <Link 
              to="/case-studies" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            <Link 
              to="/pricing" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
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
                <span>More Services</span>
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
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
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
              {mainLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2 flex items-center space-x-2"
                  onClick={closeAllMenus}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div>
                <button
                  className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-2 py-2"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <Settings className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <span className="text-cyan-400 font-medium text-sm">{category.title}</span>
                        </div>
                        <div className="ml-6 space-y-1">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-gray-300 hover:text-cyan-400 text-sm py-1"
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
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all text-center mt-4"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
};

export default Navigation;
