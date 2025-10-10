'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const aiServices = [
    { name: 'AI Strategy & Consulting', url: '/ai-services', icon: Brain, description: 'Strategic AI consulting and implementation' },
    { name: 'Machine Learning', url: '/ai-services', icon: Cpu, description: 'Custom ML models and algorithms' },
    { name: 'Natural Language Processing', url: '/ai-services', icon: FileText, description: 'NLP and chatbot solutions' },
    { name: 'Computer Vision', url: '/ai-services', icon: Target, description: 'Image and video analysis' },
    { name: 'AI Automation', url: '/ai-services', icon: Settings, description: 'Process automation with AI' },
    { name: 'AI Data Analytics', url: '/ai-services', icon: BarChart, description: 'Intelligent data insights' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/it-services', icon: Cloud, description: 'AWS, Azure, GCP solutions' },
    { name: 'DevOps & CI/CD', url: '/it-services', icon: Settings, description: 'Automation and deployment' },
    { name: 'Cybersecurity', url: '/it-services', icon: Shield, description: 'Security and compliance' },
    { name: 'Managed IT Services', url: '/it-services', icon: Users, description: '24/7 IT support' },
    { name: 'Database Management', url: '/it-services', icon: Database, description: 'Database optimization' },
    { name: 'Network Solutions', url: '/it-services', icon: Globe, description: 'Network infrastructure' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setActiveDropdown('ai')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'ai' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-4"
                  onMouseEnter={() => setActiveDropdown('ai')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="px-4 py-2 border-b border-slate-700 mb-2">
                    <h3 className="text-sm font-semibold text-cyan-400">AI Solutions</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-700 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white text-sm font-medium">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setActiveDropdown('it')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'it' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-4"
                  onMouseEnter={() => setActiveDropdown('it')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="px-4 py-2 border-b border-slate-700 mb-2">
                    <h3 className="text-sm font-semibold text-cyan-400">IT Solutions</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-700 transition-colors group"
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white text-sm font-medium">{service.name}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Users className="w-4 h-4" />
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'company' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-4"
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-1 gap-1">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.url}
                        className="px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              {/* AI Services */}
              <div>
                <button
                  onClick={() => handleDropdownToggle('ai-mobile')}
                  className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-2"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'ai-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'ai-mobile' && (
                  <div className="ml-6 mt-2 space-y-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="block text-gray-400 hover:text-cyan-400 transition-colors py-1"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* IT Services */}
              <div>
                <button
                  onClick={() => handleDropdownToggle('it-mobile')}
                  className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-2"
                >
                  <span className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'it-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'it-mobile' && (
                  <div className="ml-6 mt-2 space-y-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="block text-gray-400 hover:text-cyan-400 transition-colors py-1"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Links */}
              <div>
                <button
                  onClick={() => handleDropdownToggle('company-mobile')}
                  className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-2"
                >
                  <span className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Company</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'company-mobile' && (
                  <div className="ml-6 mt-2 space-y-2">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.url}
                        className="block text-gray-400 hover:text-cyan-400 transition-colors py-1"
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors py-2" onClick={closeMenu}>
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center justify-center space-x-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-4 py-3 rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
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