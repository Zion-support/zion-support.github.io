'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, Phone, Mail, ChevronDown, Zap, Cloud, Shield, BarChart3, Users, Settings, Globe, Star, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
                <Brain className="w-7 h-7 text-white relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 p-6 z-50"
                     onMouseEnter={() => setActiveDropdown('services')}
                     onMouseLeave={() => setActiveDropdown(null)}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <ul className="space-y-2">
                        <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">AI Solutions</Link></li>
                        <li><Link to="/ai-automation" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">AI Automation</Link></li>
                        <li><Link to="/ai-analytics" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">AI Analytics</Link></li>
                        <li><Link to="/ai-cybersecurity" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">AI Security</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-purple-400 font-semibold mb-3 flex items-center">
                        <Cloud className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <ul className="space-y-2">
                        <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">IT Solutions</Link></li>
                        <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Cloud Infrastructure</Link></li>
                        <li><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Cybersecurity</Link></li>
                        <li><Link to="/devops" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">DevOps</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-green-400 font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SaaS
                      </h3>
                      <ul className="space-y-2">
                        <li><Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">All Tools</Link></li>
                        <li><Link to="/analytics-tools" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Analytics Tools</Link></li>
                        <li><Link to="/productivity-tools" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Productivity Tools</Link></li>
                        <li><Link to="/automation-tools" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Automation Tools</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-pink-400 font-semibold mb-3 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        Solutions
                      </h3>
                      <ul className="space-y-2">
                        <li><Link to="/enterprise-solutions" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Enterprise</Link></li>
                        <li><Link to="/startup-solutions" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Startup</Link></li>
                        <li><Link to="/custom-development" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Custom Dev</Link></li>
                        <li><Link to="/consultation" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Consultation</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
              Pricing
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
              Blog
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm">Email</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors relative"
            >
              <div className="w-6 h-6 relative">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20 bg-slate-900/95 backdrop-blur-md rounded-b-xl">
            <div className="pt-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-800/50">
                Home
              </Link>
              <div className="px-4">
                <div className="text-cyan-400 font-semibold mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm py-1">AI Services</Link>
                  <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm py-1">IT Services</Link>
                  <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm py-1">Micro SaaS</Link>
                </div>
              </div>
              <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-800/50">
                About
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-800/50">
                Pricing
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-800/50">
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-800/50">
                Contact
              </Link>
              <div className="px-4 pt-4 border-t border-gray-700">
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
