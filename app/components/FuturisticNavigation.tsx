import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Zap, Brain, Shield, Cloud, Cpu, Database } from 'lucide-react';

const FuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      description: 'Advanced AI solutions',
      href: '/ai-services',
      color: 'text-cyan-400'
    },
    {
      title: 'IT Services',
      icon: <Cpu className="w-5 h-5" />,
      description: 'Comprehensive IT solutions',
      href: '/it-services',
      color: 'text-blue-400'
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-5 h-5" />,
      description: 'Innovative micro solutions',
      href: '/micro-saas',
      color: 'text-purple-400'
    },
    {
      title: 'Cybersecurity',
      icon: <Shield className="w-5 h-5" />,
      description: 'Enterprise security',
      href: '/cybersecurity',
      color: 'text-green-400'
    },
    {
      title: 'Cloud Services',
      icon: <Cloud className="w-5 h-5" />,
      description: 'Cloud infrastructure',
      href: '/cloud-services',
      color: 'text-orange-400'
    },
    {
      title: 'Data Analytics',
      icon: <Database className="w-5 h-5" />,
      description: 'Business intelligence',
      href: '/data-analytics',
      color: 'text-pink-400'
    }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900 to-cyan-900 text-white py-2 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 shimmer"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center group">
                <Phone className="w-4 h-4 mr-2 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a 
                  href="tel:+13024640950" 
                  className="hover:text-cyan-300 transition-colors font-medium"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center group">
                <Mail className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="hover:text-purple-300 transition-colors font-medium"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-4 h-4 mr-2 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="font-medium">Middletown, DE 19709</span>
              </div>
            </div>
            <div className="text-xs font-bold neon-text">
              🚀 Leading AI & IT Solutions Provider
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`glass-nav sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-2xl' : 'shadow-lg'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold flex items-center group">
              <span className="text-3xl mr-2 group-hover:rotate-12 transition-transform duration-300">⚡</span>
              <span className="holographic text-2xl font-black">Zion Tech Group</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center font-medium group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 glass-card p-6 z-50">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="group p-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="flex items-center mb-2">
                            <span className={`${service.color} mr-3`}>
                              {service.icon}
                            </span>
                            <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/case-studies" 
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
              >
                Case Studies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link 
                to="/enterprise" 
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
              >
                Enterprise
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link 
                to="/team" 
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
              >
                Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              <Link 
                to="/contact" 
                className="neon-button px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-purple-500/30">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                
                {/* Mobile Services Section */}
                <div className="space-y-2">
                  <div className="text-gray-300 font-semibold text-lg py-2">Services</div>
                  <div className="ml-4 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors py-2 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className={`${service.color} mr-3`}>
                          {service.icon}
                        </span>
                        <div>
                          <div className="font-medium group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/case-studies" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Case Studies
                </Link>
                <Link 
                  to="/enterprise" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Enterprise
                </Link>
                <Link 
                  to="/team" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Team
                </Link>
                <Link 
                  to="/contact" 
                  className="neon-button px-6 py-3 rounded-lg font-semibold text-center mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default FuturisticNavigation;