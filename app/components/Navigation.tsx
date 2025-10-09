import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

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
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT guidance' },
        { name: 'Cybersecurity', path: '/security', description: 'Comprehensive security solutions' },
        { name: 'Database Management', path: '/database-management', description: 'Optimized data solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-green-400',
      services: [
        { name: 'Analytics Dashboard', path: '/analytics-dashboard', description: 'Real-time business insights' },
        { name: 'Customer Support', path: '/customer-support', description: 'AI-powered support systems' },
        { name: 'Content Management', path: '/content-management', description: 'Automated content solutions' },
        { name: 'Mobile Apps', path: '/mobile-apps', description: 'Native mobile applications' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-cyan-400 transition-colors font-medium">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-lg rounded-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center mb-3">
                          <category.icon className={`w-5 h-5 ${category.color} mr-2`} />
                          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block p-2 rounded-lg hover:bg-white/10 transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="text-white group-hover:text-cyan-400 transition-colors font-medium">
                                {service.name}
                              </div>
                              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4 mr-1" />
              (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="text-white font-medium">Services</div>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="ml-4 space-y-2">
                    <div className="flex items-center">
                      <category.icon className={`w-4 h-4 ${category.color} mr-2`} />
                      <span className="text-gray-300 font-medium">{category.title}</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {category.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.path}
                          className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
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
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              <div className="pt-4 border-t border-white/20">
                <a
                  href="tel:+13024640950"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
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
});

Navigation.displayName = 'Navigation';

export default Navigation;
