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

  const navigation = {
    'Services': [
      { name: 'AI Services', href: '/ai-services', icon: Brain },
      { name: 'IT Services', href: '/it-services', icon: Code },
      { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
      { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
      { name: 'All Services', href: '/services', icon: Settings }
    ],
    'Solutions': [
      { name: 'AI Marketing', href: '/ai-marketing', icon: Target },
      { name: 'AI Automation', href: '/ai-automation', icon: Zap },
      { name: 'AI Healthcare', href: '/ai-healthcare', icon: Users },
      { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart },
      { name: 'Micro SAAS', href: '/micro-saas', icon: Cpu }
    ],
    'Company': [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Our Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Briefcase },
      { name: 'Case Studies', href: '/case-studies', icon: FileText },
      { name: 'Contact', href: '/contact', icon: Phone }
    ]
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

<<<<<<< HEAD
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-400/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-3">
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                          <h3 className="text-white font-semibold">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
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
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {serviceCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center space-x-2 mb-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <h4 className="text-cyan-400 font-semibold text-sm">{category.title}</h4>
                        </div>
                        <div className="ml-6 space-y-1">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
=======
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {Object.entries(navigation).map(([category, items]) => (
              <div
                key={category}
                className="relative group"
                onMouseEnter={() => setServicesOpen(category === 'Services')}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2">
                  <span>{category}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {servicesOpen && category === 'Services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 py-2 z-50">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-sm hover:bg-slate-700/50 transition-colors text-gray-300"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

<<<<<<< HEAD
              <Link
                to="/pricing"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              <div className="pt-4 border-t border-cyan-400/20">
                <Link
                  to="/contact"
                  className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  Get Started
=======
          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@ziontechgroup.com</span>
              </a>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <div className="space-y-4">
              {Object.entries(navigation).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-cyan-400 font-semibold mb-2 px-4">{category}</h3>
                  <div className="space-y-1">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-slate-700/50 transition-colors text-gray-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="border-t border-white/10 pt-4 px-4">
                <div className="space-y-2">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:info@ziontechgroup.com"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@ziontechgroup.com</span>
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="block mt-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
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