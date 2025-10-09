import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered analytics' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI support' },
        { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis' },
        { name: 'AI Content Generator', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI SEO Optimizer', path: '/ai-marketing', description: 'AI-driven SEO' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Services', path: '/cloud-services', description: 'AWS, Azure, GCP' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'Automated deployment' },
        { name: 'Database Services', path: '/database', description: 'Database optimization' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Infrastructure setup' },
        { name: 'Networking', path: '/networking', description: 'Network solutions' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Sparkles,
      color: 'text-cyan-400',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum solutions' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robotics' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data insights' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' }
      ]
    },
    {
      title: 'Enterprise',
      icon: Building,
      color: 'text-green-400',
      services: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Enterprise Solutions', path: '/enterprise', description: 'Large-scale solutions' },
        { name: 'Compliance', path: '/compliance', description: 'Regulatory compliance' },
        { name: 'Consultation', path: '/consultation', description: 'Expert consultation' }
      ]
    }
  ];

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.navigation-menu')) {
          closeAllMenus();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isOpen 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors">
                Advanced AI & IT Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl transition-all duration-300">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center space-x-2 mb-2">
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                            <span className="text-sm font-semibold text-white">{category.title}</span>
                          </div>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.path}
                                className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors"
                                onClick={closeAllMenus}
                              >
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                            {category.services.length > 6 && (
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
                    <div className="border-t border-gray-700 mt-6 pt-4">
                      <Link
                        href="/services"
                        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        onClick={closeAllMenus}
                      >
                        View All Services
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
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 302 464 0950</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="space-y-4">
              <Link
                href="/about"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="mt-4 ml-4 space-y-2">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <span className="text-sm font-semibold text-white">{category.title}</span>
                        </div>
                        <div className="ml-6 space-y-1">
                          {category.services.map((service, serviceIndex) => (
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
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>

              <Link
                href="/blog"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+1 302 464 0950</span>
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