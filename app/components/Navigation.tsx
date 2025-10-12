import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const services = [
    {
      title: 'AI Services',
      icon: Brain,
      href: '/ai-services',
      description: 'Artificial Intelligence Solutions',
      items: [
        { name: 'AI Chatbots', href: '/ai-chatbot-builder' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Automation', href: '/ai-automation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Code,
      href: '/it-services',
      description: 'Information Technology Solutions',
      items: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity-solutions' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      href: '/micro-saas',
      description: 'Ready-to-Use Software Solutions',
      items: [
        { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { name: 'Zion Chat AI', href: '/zion-chat-ai' },
        { name: 'Zion Security Shield', href: '/zion-security-shield' },
        { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-purple-400 transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center text-white hover:text-purple-400 transition-colors"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-gray-900 rounded-lg shadow-xl border border-gray-800 py-4">
                  <div className="grid grid-cols-1 gap-4 px-4">
                    {services.map((service, index) => (
                      <div key={index} className="group">
                        <Link
                          to={service.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{service.title}</h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                            <div className="mt-2 space-y-1">
                              {service.items.slice(0, 2).map((item, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={item.href}
                                  className="block text-gray-300 hover:text-purple-400 text-sm transition-colors"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">
              Contact
            </Link>
            <Link to="/pricing" className="text-white hover:text-purple-400 transition-colors">
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2 border border-gray-800">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-white font-semibold mb-2">Services</div>
                <div className="space-y-2 ml-4">
                  {services.map((service, index) => (
                    <div key={index}>
                      <Link
                        to={service.href}
                        className="block text-gray-300 hover:text-purple-400 transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;