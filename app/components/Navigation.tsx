import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = memo(() => {
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

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Fintech', href: '/ai-fintech' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-cyan-400',
      services: [
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'IT Support', href: '/it-support' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Zap,
      color: 'text-yellow-400',
      services: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Blockchain Web3', href: '/blockchain-web3' },
        { name: 'Business Intelligence', href: '/business-intelligence' },
        { name: 'IoT Edge Computing', href: '/iot-edge-computing' },
        { name: 'Robotics', href: '/robotics' },
        { name: 'AR/VR Solutions', href: '/ar-vr-solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Smartphone,
      color: 'text-green-400',
      services: [
        { name: 'Micro SAAS Solutions', href: '/micro-saas' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  servicesOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-3">
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                          <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                to={service.href}
                                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm block py-1"
                                onClick={() => setServicesOpen(false)}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Case Studies
            </Link>
            
            <Link 
              to="/blog" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <span className="text-sm font-medium text-white">{category.title}</span>
                        </div>
                        <ul className="ml-6 space-y-1">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                to={service.href}
                                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm py-1"
                                onClick={() => {
                                  setIsOpen(false);
                                  setServicesOpen(false);
                                }}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/case-studies" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              
              <Link 
                to="/blog" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              
              <Link 
                to="/contact" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 w-full justify-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;