import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
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
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const serviceCategories = [
    {
      title: 'AI Solutions',
      icon: Brain,
      isNew: true,
      items: [
        { name: 'AI Automation', href: '/ai-automation', description: 'Automate business processes with AI' },
        { name: 'Machine Learning', href: '/machine-learning', description: 'Custom ML models and algorithms' },
        { name: 'Natural Language Processing', href: '/nlp', description: 'Text analysis and language understanding' },
        { name: 'Computer Vision', href: '/computer-vision', description: 'Image and video analysis' },
        { name: 'Predictive Analytics', href: '/predictive-analytics', description: 'Data-driven predictions' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      isNew: false,
      items: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { name: 'DevOps & CI/CD', href: '/devops', description: 'Development and deployment automation' },
        { name: 'Database Management', href: '/database-management', description: 'Database design and optimization' },
        { name: 'API Development', href: '/api-development', description: 'RESTful and GraphQL APIs' },
        { name: 'Microservices', href: '/microservices', description: 'Scalable microservice architecture' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      isNew: false,
      items: [
        { name: 'Cybersecurity', href: '/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance management' },
        { name: 'Penetration Testing', href: '/penetration-testing', description: 'Security vulnerability assessment' },
        { name: 'Incident Response', href: '/incident-response', description: '24/7 security monitoring' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <category.icon className="w-5 h-5 text-cyan-400" />
                          <h3 className="font-semibold text-white">{category.title}</h3>
                          {category.isNew && (
                            <span className="px-2 py-1 text-xs bg-green-500 text-white rounded-full">New</span>
                          )}
                        </div>
                        <div className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.href}
                              className="block p-2 rounded hover:bg-slate-700 transition-colors"
                            >
                              <div className="font-medium text-white">{item.name}</div>
                              <div className="text-sm text-gray-400">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                onClick={closeAllMenus}
                className="block text-white hover:text-cyan-400 transition-colors"
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-white font-semibold">Services</div>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <category.icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-white">{category.title}</span>
                      {category.isNew && (
                        <span className="px-2 py-1 text-xs bg-green-500 text-white rounded-full">New</span>
                      )}
                    </div>
                    <div className="ml-6 space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.href}
                          onClick={closeAllMenus}
                          className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                onClick={closeAllMenus}
                className="block text-white hover:text-cyan-400 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={closeAllMenus}
                className="block text-white hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/pricing"
                onClick={closeAllMenus}
                className="block text-white hover:text-cyan-400 transition-colors"
              >
                Pricing
              </Link>
              
              <div className="pt-4 border-t border-slate-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <Link
                  to="/contact"
                  onClick={closeAllMenus}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
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