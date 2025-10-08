import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Zap, Brain, Cpu, Shield } from 'lucide-react';

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
    { name: 'All Services', link: '/services', icon: '⚡' },
    { name: 'Micro SAAS', link: '/micro-saas', icon: '💻' },
    { name: 'AI Services', link: '/ai-services', icon: '🤖' },
    { name: 'IT Services', link: '/it-services', icon: '⚙️' },
    { name: 'AI Marketing', link: '/ai-marketing', icon: '📢' },
    { name: 'AI Automation', link: '/ai-automation', icon: '🔄' },
    { name: 'AI Healthcare', link: '/ai-healthcare', icon: '🏥' },
    { name: 'AI Fintech', link: '/ai-fintech', icon: '💰' },
    { name: 'Quantum Computing', link: '/quantum-computing', icon: '⚛️' },
    { name: 'Autonomous Systems', link: '/autonomous-systems', icon: '🤖' },
    { name: 'Business Intelligence', link: '/business-intelligence', icon: '📊' },
    { name: 'Blockchain & Web3', link: '/blockchain-web3', icon: '🔗' },
    { name: 'IoT & Edge Computing', link: '/iot-edge-computing', icon: '📱' },
    { name: 'Cybersecurity', link: '/cybersecurity', icon: '🛡️' },
    { name: 'Robotics', link: '/robotics', icon: '🤖' }
  ];

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Enterprise', link: '/enterprise' },
    { name: 'Team', link: '/team' },
    { name: 'Contact', link: '/contact' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-cyan-400 py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+13024640950" className="hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-green-400 animate-pulse">● 24/7 Support Available</span>
            <span className="text-yellow-400">● Free Consultation</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-400/20' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center neon-glow">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold neon-text">Zion Tech Group</h1>
                <p className="text-xs text-cyan-400">Advanced AI & IT Solutions</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.link}
                  className="text-white hover:text-cyan-400 transition-colors font-medium relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-white hover:text-cyan-400 transition-colors font-medium flex items-center group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md rounded-xl border border-cyan-400/20 shadow-2xl py-4 z-50">
                    <div className="grid grid-cols-2 gap-2 px-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.link}
                          className="flex items-center p-3 rounded-lg hover:bg-cyan-400/10 transition-colors group"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                            {service.icon}
                          </span>
                          <span className="text-white group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <a
                href="tel:+13024640950"
                className="neon-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-cyan-400/20">
              <div className="flex flex-col space-y-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.link}
                    className="text-white hover:text-cyan-400 transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Services Section */}
                <div className="space-y-2">
                  <div className="text-cyan-400 font-semibold text-lg py-2">Services</div>
                  <div className="grid grid-cols-2 gap-2 ml-4">
                    {services.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        to={service.link}
                        className="flex items-center p-2 rounded-lg hover:bg-cyan-400/10 transition-colors group"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-xl mr-2 group-hover:scale-110 transition-transform">
                          {service.icon}
                        </span>
                        <span className="text-white group-hover:text-cyan-400 transition-colors text-sm">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <a
                  href="tel:+13024640950"
                  className="neon-button inline-flex items-center justify-center mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: (302) 464-0950
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
};

export default FuturisticNavigation;