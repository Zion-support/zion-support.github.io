import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Zap } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
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
    setIsServicesOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'Real-time business intelligence', icon: '📊', popular: true },
        { name: 'AI E-commerce Assistant', path: '/ai-ecommerce-solutions', description: 'Complete e-commerce automation', icon: '🛒', popular: true },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-development', description: 'No-code mobile app development', icon: '📱', popular: false },
        { name: 'AI Document Processor', path: '/ai-document-processing', description: 'Intelligent document processing', icon: '📄', popular: true },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'Create intelligent chatbots', icon: '🤖', popular: true },
        { name: 'AI Content Creator', path: '/ai-content-generation', description: 'AI-powered content generation', icon: '✍️', popular: false },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project management', icon: '📋', popular: true }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', description: 'Advanced computer vision' },
        { name: 'AI Natural Language Processing', path: '/ai-nlp', description: 'Advanced NLP solutions' },
        { name: 'AI Robotics Platform', path: '/ai-robotics', description: 'Intelligent robotics' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'DevOps automation' },
        { name: 'Database Management', path: '/database-management', description: 'Database management' },
        { name: 'Network Solutions', path: '/network-solutions', description: 'Network infrastructure' },
        { name: 'System Administration', path: '/system-administration', description: 'System management' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'IT Support', path: '/it-support', description: '24/7 IT support' },
        { name: 'IT Training', path: '/it-training', description: 'Professional IT training' },
        { name: 'IT Disaster Recovery', path: '/it-disaster-recovery', description: 'Disaster recovery solutions' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-cyan-400 transition-colors duration-300"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700 p-6"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center mb-4">
                          <category.icon className={`h-6 w-6 ${category.color} mr-2`} />
                          <h3 className={`${category.color} font-semibold text-lg`}>{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link 
                                to={service.path} 
                                className="text-gray-300 hover:text-white text-sm transition-colors duration-200 flex items-center"
                                onClick={closeAllMenus}
                              >
                                <span className="mr-2">{service.icon}</span>
                                <div>
                                  <div className="font-medium">{service.name}</div>
                                  <div className="text-xs text-gray-400">{service.description}</div>
                                </div>
                              </Link>
                            </li>
                          ))}
                          {category.services.length > 6 && (
                            <li>
                              <Link 
                                to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                                onClick={closeAllMenus}
                              >
                                View All {category.title} →
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Contact
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="pt-4 border-t border-slate-700">
                <h3 className="text-cyan-400 font-semibold mb-3">Services</h3>
                <div className="space-y-2">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-center mb-2">
                        <category.icon className={`h-5 w-5 ${category.color} mr-2`} />
                        <span className={`${category.color} font-medium`}>{category.title}</span>
                      </div>
                      <div className="ml-7 space-y-1">
                        {category.services.slice(0, 4).map((service, serviceIndex) => (
                          <Link 
                            key={serviceIndex}
                            to={service.path} 
                            className="block text-gray-300 hover:text-white text-sm" 
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                        {category.services.length > 4 && (
                          <Link 
                            to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                            onClick={closeAllMenus}
                          >
                            View All →
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-white hover:text-cyan-400 mb-3"
                >
                  <Phone className="h-4 w-4" />
                  <span>(302) 464-0950</span>
                </a>
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
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
