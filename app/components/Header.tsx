import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Brain, Cloud, Shield, Code, Database, Globe, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Code },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Data Analytics', href: '/data-analytics', icon: Database },
        { name: 'Web Development', href: '/web-development', icon: Globe }
      ]
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const microServices = [
    { name: 'AI Code Assistant', href: '/ai-code-assistant', price: '$29/mo' },
    { name: 'Smart Analytics', href: '/ai-analytics', price: '$49/mo' },
    { name: 'Content Generator', href: '/ai-content-generator', price: '$19/mo' },
    { name: 'Security Monitor', href: '/ai-cybersecurity', price: '$79/mo' },
    { name: 'Chatbot Builder', href: '/ai-chatbot-builder', price: '$39/mo' },
    { name: 'Data Visualizer', href: '/ai-data-visualization', price: '$59/mo' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Middletown, DE 19709</span>
            </div>
          </div>
          <div className="text-xs opacity-90">
            🚀 Advanced AI & IT Solutions | 24/7 Support
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl' : 'bg-slate-900/90 backdrop-blur-sm'} border-b border-cyan-500/20 sticky top-0 z-50 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    Zion Tech Group
                  </div>
                  <div className="text-xs text-cyan-400 font-medium">AI & IT Solutions</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-800/50 flex items-center"
                      onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                      onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                    >
                      {item.name}
                      {item.submenu && <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />}
                    </Link>
                    
                    {/* Services Dropdown */}
                    {item.submenu && isServicesOpen && (
                      <div className="absolute left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 py-4 z-50">
                        <div className="px-4 py-2 border-b border-slate-700/50">
                          <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Services</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-2 p-4">
                          {item.submenu.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                              >
                                <Icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                                <span className="text-gray-300 group-hover:text-white text-sm font-medium">{subItem.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="px-4 py-2 border-t border-slate-700/50">
                          <Link
                            to="/services"
                            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center justify-center w-full py-2 rounded-lg hover:bg-slate-700/30 transition-all duration-300"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/demo"
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-slate-800/50"
              >
                Demo
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 backdrop-blur-md rounded-xl mt-2 border border-cyan-500/20">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-slate-700/50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subItem) => {
                          const Icon = subItem.icon;
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-slate-700/30"
                              onClick={() => setIsOpen(false)}
                            >
                              <Icon className="w-4 h-4" />
                              <span>{subItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-2">
                  <Link
                    to="/demo"
                    className="text-gray-300 hover:text-white block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-slate-700/50"
                    onClick={() => setIsOpen(false)}
                  >
                    Demo
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white block px-4 py-3 rounded-lg text-base font-medium text-center transition-all duration-300 hover:from-cyan-600 hover:to-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Micro Services Banner */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-cyan-500/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-cyan-400 text-sm font-medium mb-2 sm:mb-0">
              🔥 New Micro SAAS Services Available
            </div>
            <div className="flex flex-wrap gap-4 text-xs">
              {microServices.slice(0, 4).map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1"
                >
                  <span>{service.name}</span>
                  <span className="text-cyan-500 font-semibold">{service.price}</span>
                </Link>
              ))}
              <Link
                to="/services"
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                View All →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;