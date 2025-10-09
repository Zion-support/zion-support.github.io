import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Calculator, Calendar, Home, Heart, Stethoscope, GraduationCap, Briefcase, Building, Factory, Truck, Smartphone, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      closeAllMenus();
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Simplified service categories
  const serviceCategories = [
    {
      title: 'AI Solutions',
      icon: Brain,
      services: [
        { name: 'AI Project Manager', href: '/ai-project-manager' },
        { name: 'AI Writing Assistant', href: '/ai-writing-assistant' },
        { name: 'AI CRM Intelligence', href: '/ai-crm' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Marketing Automation', href: '/ai-marketing' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' }
      ]
    },
    {
      title: 'IT Services',
      icon: Settings,
      services: [
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Enterprise Security', href: '/enterprise-security' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'Data Center Solutions', href: '/data-center' },
        { name: 'Network Security', href: '/network-security' },
        { name: 'IT Consulting', href: '/it-consulting' }
      ]
    },
    {
      title: 'Specialized',
      icon: Atom,
      services: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/blockchain' },
        { name: 'IoT & Edge Computing', href: '/iot-edge' },
        { name: 'Business Intelligence', href: '/business-intelligence' },
        { name: 'Robotics Solutions', href: '/robotics' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6">
                  <div className="grid grid-cols-3 gap-8">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
                          <category.icon className="w-5 h-5 mr-2" />
                          {category.title}
                        </h3>
                        <div className="space-y-2">
                          {category.services.map((service) => (
                            <a key={service.name}
                              href={service.href}
                              className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                              onClick={closeAllMenus}
                            >
                              <ArrowRight className="w-3 h-3" />
                              <span>{service.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <div className="flex justify-center">
                      <a
                        href="/services"
                        className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link to="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            
            <div className="flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+1 302 464 0950</span>
              </a>
              <a href="/contact"
                className="cyber-button px-4 py-2 text-sm"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-4 pl-4 space-y-4">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <h4 className="text-cyan-400 font-semibold mb-2 flex items-center">
                          <category.icon className="w-4 h-4 mr-2" />
                          {category.title}
                        </h4>
                        <div className="space-y-2">
                          {category.services.slice(0, 3).map((service) => (
                            <a key={service.name}
                              href={service.href}
                              className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                    <a href="/services"
                      className="block text-cyan-400 hover:text-white transition-colors mt-4"
                      onClick={closeAllMenus}
                    >
                      View All Services →
                    </a>
                  </div>
                )}
              </div>

              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                About
              </Link>
              <Link to="/blog" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/case-studies" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Case Studies
              </Link>
              <Link to="/pricing" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Contact
              </Link>
              
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a href="/contact"
                  className="block cyber-button px-4 py-2 text-center"
                  onClick={closeAllMenus}
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