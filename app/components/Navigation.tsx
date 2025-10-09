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
  Sparkles,
  Cpu,
  Database,
  Globe,
  Lock,
  Target,
  Rocket,
  TrendingUp,
  Settings,
  Layers,
  Activity
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Core AI solutions', price: '$1,500/mo' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing', price: '$199/mo' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Process automation', price: '$399/mo' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions', price: '$1,999/mo' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI services', price: '$1,499/mo' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation', price: '$199/mo' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced analytics', price: '$799/mo' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions', price: '$1,299/mo' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Cloud infrastructure', price: '$999/mo' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions', price: '$1,199/mo' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration', price: '$799/mo' },
        { name: 'DevOps', path: '/devops', description: 'DevOps automation', price: '$899/mo' },
        { name: 'Database Services', path: '/database', description: 'Database management', price: '$599/mo' },
        { name: 'Network Services', path: '/networking', description: 'Network solutions', price: '$699/mo' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '50+ ready-to-use apps', price: '$79/mo' },
        { name: 'Developer Tools', path: '/developer-tools', description: 'Development utilities', price: '$49/mo' },
        { name: 'Business Apps', path: '/business-apps', description: 'Business applications', price: '$99/mo' },
        { name: 'Productivity Tools', path: '/productivity-tools', description: 'Productivity suite', price: '$59/mo' },
        { name: 'Marketing Tools', path: '/marketing-tools', description: 'Marketing automation', price: '$89/mo' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum solutions', price: 'Custom' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', price: '$2,500/mo' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Blockchain solutions', price: '$1,599/mo' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'IoT solutions', price: '$1,299/mo' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'BI solutions', price: '$1,199/mo' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Case Studies', path: '/case-studies', icon: Target },
    { name: 'Blog', path: '/blog', icon: TrendingUp },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3"
            onClick={closeAllMenus}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center cyber-glow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
              <span className="text-xs text-cyan-400 font-medium">AI & IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-1"
              onClick={closeAllMenus}
            >
              <Sparkles className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Layers className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/20 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 ${category.bgColor} ${category.borderColor} border rounded-xl flex items-center justify-center`}>
                            <category.icon className={`w-5 h-5 ${category.color}`} />
                          </div>
                          <h3 className="font-bold text-white text-lg">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group"
                              onClick={closeAllMenus}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-sm text-gray-400 mt-1">
                                    {service.description}
                                  </div>
                                </div>
                                <div className="text-sm font-bold text-cyan-400">
                                  {service.price}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-700 mt-6 pt-4 px-6">
                    <Link
                      to="/services"
                      className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                      onClick={closeAllMenus}
                    >
                      <Rocket className="w-4 h-4" />
                      <span>View All Services</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Links */}
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-1"
                onClick={closeAllMenus}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="cyber-button flex items-center space-x-2"
              onClick={closeAllMenus}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl rounded-2xl mt-2 p-6 border border-cyan-500/20">
            <div className="space-y-6">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2 flex items-center space-x-2"
                onClick={closeAllMenus}
              >
                <Sparkles className="w-4 h-4" />
                <span>Home</span>
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors font-medium py-2"
                >
                  <div className="flex items-center space-x-2">
                    <Layers className="w-4 h-4" />
                    <span>Services</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-6 space-y-4 mt-4">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <h4 className="font-semibold text-cyan-400">{category.title}</h4>
                        </div>
                        <div className="space-y-1">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-sm text-gray-300 hover:text-cyan-400 py-1"
                              onClick={closeAllMenus}
                            >
                              {service.name} - {service.price}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Quick Links */}
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-white hover:text-cyan-400 transition-colors font-medium py-2 flex items-center space-x-2"
                  onClick={closeAllMenus}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-slate-700">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="block w-full text-center cyber-button mt-4"
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
